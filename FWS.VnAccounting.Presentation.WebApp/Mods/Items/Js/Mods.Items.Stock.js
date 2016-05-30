if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Stock = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/StockEntry',
        data: "{a:'--', b:'--'}",
        id: "StockEntry-Window",
        width: 520,
        height: 220,
        title: "Stock Entry",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Items.StockEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Stock-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Stock-btnDelete").click(function () {
            var arrID = '';
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1") {
                $.each(rowID, function (key, value) {
                    arrID = arrID + value;
                    if (key < rowID.length - 1)
                        arrID = arrID + ",";
                });
                thisObj.ExecuteDelete({ ID: arrID });
            }
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $("#Stock-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Stock-txtCode").val(),
                Name: $("#Stock-txtName").val()
            });
        });
        $("#Stock-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#stock_grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#stock_grid .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteDelete: function (opts) {
        var thisObj = this;
        var isMulti = opts.ID.indexOf(',') > -1 ? true : false;
        var sID = isMulti ? 's' : '';
        var sDel = isMulti ? 'DELETEMULTI' : 'DELETE';
        var inputValue = $.string.Format('<InputValue ID{0}="{1}" Action="{2}"/>', sID, opts.ID, sDel);        
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa kho này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/StockService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        var data = $(data).find("string").text();
                        data = eval("(" + data + ")");
                        thisObj.Grid.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    Grid: {
        GridUrl: '../Mods/Items/Service/StockService.asmx/GetInventoryStockList',
        GridId: '#stock_grid',
        GridPager: 'stock_gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: "",

        Load: function () {
            try {
                var thisObj = this;
                var iPage = 1;
                var iNumPage = 1;
                var iNumRow = 300;
                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    extraParams: {
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: ""
                    },
                    pager: thisObj.GridPager,
                    colNames: colNameStock,
                    colModel: colModelStock,
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                        $(Mods.Items.Stock.Grid.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                new CGrid().Init(thisObj.GridId, option, thisObj.optionClient);
            } catch (e) {
                console.log(e);
            }
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var gridID = this.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format("Code='{0}' Name ='{1}'", opts.Code, opts.Name);
            this.optionClient.extraParams.currPage = this.iPage;
            this.optionClient.extraParams.numberRowOfPage = this.iNumRow;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, this.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || -1;
        }
    }
};
$(function () {
    Mods.Items.Stock.Init();
});
