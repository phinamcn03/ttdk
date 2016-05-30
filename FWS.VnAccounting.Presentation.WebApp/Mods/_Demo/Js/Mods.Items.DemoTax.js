if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Tax = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/TaxEntry',
        data: "{a:'-', b:'--'}",
        id: "TaxEntry-Window",
        width: 500,
        height: 200,
        title: "Tax Entry",
        rowID: '',
        callbackComplete: function () {
            Mods.Items.TaxEntry.DefaultInit();
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Tax-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Tax-btnDelete").click(function () {

        });
        $("#Tax-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Tax-txtCode").val(),
                Name: $("#Tax-txtName").val()
            });
        });
        $("#Tax-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });

        $("#Tax_Grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#Tax_Grid .ui-icon-pencil").live("click", function () {
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
        this.OptionsController.rowID = opts.ID || "3";
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteDelete: function (opts) {
        var thisObj = this;
        $.messager.confirm('Xóa thuế', 'Bạn có chắc muốn xóa thuế này?', function (r) {
            if (r) {
                var inputValue = $.string.Format('<InputValue  UserID="{0}" ID="{1}" Action="delete"/>', 1, opts.ID);
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/TaxService.asmx/Update',
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
        GridUrl: '../Items/Service/TaxService.asmx/GetGrid',
        GridId: '#Tax_Grid',
        GridPager: 'Tax_GridPage',
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: ''
                },
                colNames: colNameTax,
                colModel: colModelTax,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div>  <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                }
            };

            VnAccounting.Grid.Init(thisObj.GridId, optionServerTax, thisObj.optionClient);
        },
        ReloadGrid: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            VnAccounting.Grid.Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format("Code='{0}' Name ='{1}'", opts.Code, opts.Name);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            VnAccounting.Grid.Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        }
    }
};
$(function () {
    Mods.Items.Tax.Init();
});
