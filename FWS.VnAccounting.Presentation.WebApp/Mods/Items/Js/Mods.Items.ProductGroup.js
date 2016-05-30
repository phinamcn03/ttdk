if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ProductGroup = {
    GridUrl: '../Mods/Items/Service/ProductService.asmx/GetInventoryProductGroupLists',
    GridId: '#itemGroup_grid',
    GridPager: 'itemGroup_gridpage',
    optionClient:'',
    Init: function () {
        this.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/ItemGroupEntry',
        data: "{a:'-', b:'--'}",
        id: "ItemGroup-Window",
        width: 500,
        height: 330,
        title: "Item Group Entry",
        callbackComplete: function (opts) {
            Mods.Items.ProductGroupEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#ItemGroup-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#ItemGroup-btnDelete").click(function () {
            var arrID = '';
            var rowID = thisObj.GetSelectedRow();
            if (rowID != "-1") {
                $.each(rowID, function (key, value) {
                    arrID = arrID + value;
                    if (key < rowID.length - 1)
                        arrID = arrID + "^";
                });
                thisObj.ExecuteDelete({ ID: arrID });
            } else
                $.messager.alert('Xóa đơn vị', 'Xin chọn Đơn vị cần xóa');
        });
        $("#ItemGroup-btnSearch").click(function () {
            var info = thisObj.GetInfo();
            thisObj.ExecuteSearch(info);
        });
        $("#ItemGroup-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });

        $("#itemGroup_grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid')
            Mods.Items.ProductGroup.ExecuteDelete({ ID: rowID });
        });
        $("#itemGroup_grid .ui-icon-pencil").live("click", function () {

            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    GetInfo: function () {
        var options = {
            Code: $("#sGItem-txtCode").val(),
            Name: $("#sGItem-txtName").val(),
            Desc: '',
            Active: ''
        };
        return options;
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
    ExecuteSearch: function (opts) {
        var thisObj = this;
        thisObj.optionClient.extraParams.inputValue = $.string.Format("Code='{0}' Name ='{1}'  Description ='{2}' Active ='{3}'", opts.Code, opts.Name, opts.Desc, opts.Active);
        new CGrid().Request(thisObj.GridId, thisObj.optionClient);
    },
    ExecuteDelete: function (opts) {
        var inputValue = opts.ID; // $.string.Format('<InputValue UserID="{0}" ID="{1}" Action="DELETE"/>', 1, opts.ID);
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa đơn vị này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/ProductService.asmx/DeleteInventoryProductGroup',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        var data = $(data).find("string").text();
                        data = eval("(" + data + ")");
                        thisObj.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    ReloadGrid: function () {
        $(this.GridId).clearGridData();
        this.LoadGrid();
    },
    RefreshCurrentPage: function () {
        $(this.GridId).clearGridData();
        new CGrid().Request(this.GridId, this.optionClient);
    },
    LoadGrid: function () {
        thisObj = this;
        var iPage = 1;
        var iNumPage = 1;
        var iNumRow = 300;
        thisObj.optionClient = {
            gridUrl: thisObj.GridUrl,
            pager: thisObj.GridPager,
            extraParams: {
                currPage: 1,
                numberRowOfPage: 100,
                inputValue: ''
            },
            pager: thisObj.GridPager,
            colNames: colNameStock,
            colModel: colModelStock,

            afterInsertRow: function (rowid, rowdata, rowelem) {
                var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                $(Mods.Items.ProductGroup.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
            },
            onSelectRow: function (rowid, status) {

            },
            loadComplete: function () {
                $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
            },
            gridComplete: function () {

            }
        };
        new CGrid().Init(thisObj.GridId, option, thisObj.optionClient);
    },
    GetSelectedRow: function () {
        thisObj = this;
        var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
        return rowID || -1;
    }
};
$(function () {
    Mods.Items.ProductGroup.Init();
});
