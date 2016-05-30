if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Product = {
    Init: function () {
        this.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/ItemEntry',
        data: "{a:'-', b:'--'}",
        id: "ItemEntry-Window",
        width: 710,
        height: 400,
        title: "Item Entry",
        rowID: '',
        colName: '',
        callbackComplete: function (opts) {
            Mods.Items.ProductEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Item-btnTest").click(function () {
            thisObj.LoadEntryTest();
        });
        $("#Item-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Item-btnDelete").click(function () {
            var arrID = '';
            var rowID = thisObj.GetSelectedRow();
            if (rowID != "-1") {
                $.each(rowID, function (key, value) {
                    arrID = arrID + value;
                    if (key < rowID.length - 1)
                        arrID = arrID + ",";
                });
                thisObj.ExecuteDelete({ ID: arrID });
            }
            else
                $.messager.alert('Xóa hàng hóa', 'Xin chọn hàng hóa cần xóa');
        });
        $("#Item-btnSearch").click(function () {
            var info = thisObj.GetInfo();
            thisObj.ExecuteSearch(info);
        });
        $("#Item-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });

        $("#item_grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });

        });
        $("#item_grid .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    GridUrl: '../Mods/Items/Service/ProductService.asmx/GetInventoryProductLists',
    GridId: '#item_grid',
    GridPager: 'item_gridpage',
    optionClient: '',

    GetInfo: function () {
        var options = {
            Code: $("#sItem-txtCode").val(),
            Name: $("#sItem-txtName").val(),
            GroupName: $("#sItem-txtGroupName").val(),
            UnitName: $("#ItemEntry-cboUnit").val(),
            CreditAcct: "",
            TaxName: "",
            CodeMethod: "",
            DebitAcct: "",
            Price: "",
            Type: "",
            Active: ""
        };
        return options;
    },
    LoadEntryTest: function () {
        var optionsTest = {
            template: 'Mods/Items/ItemEntryTest',
            data: "{a:'-', b:'--'}",
            id: "ItemEntry-Window",
            width: 710,
            height: 330,
            title: "Item Entry",
            rowID: '',
            callbackComplete: function (opts) {
                Mods.Items.ProductEntry.DefaultInit(opts);
            }
        };
        FWS.Web.CTemplateController.LoadPopup(optionsTest);
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
        this.OptionsController.colName = opts.colName;
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteSearch: function (opts) {
        var thisObj = this;
        $(this.GridId).clearGridData();
        var Code = $("#sItem-txtCode").val();
        var Name = $("#sItem-txtName").val();
        var GroupName = $("#sItem-txtGroupName").val();
        this.optionClient.extraParams.inputValue = $.string.Format(" Name='{0}' Code='{1}' GroupName='{2}'", Name, Code, GroupName);
        new CGrid().Request(thisObj.GridId, this.optionClient);
    },
    ExecuteDelete: function (opts) {
        var thisObj = this;
        var isMulti = opts.ID.indexOf(',') > -1 ? true : false;
        var sID = isMulti ? 's' : '';
        var sDel = isMulti ? 'DELETEMULTI' : 'DELETE';

        var inputValue = $.string.Format('<InputValue ID{0}="{1}" Action="{2}"/>', sID, opts.ID, sDel);
        inputValue = $.string.Format('<InputValue ID{0}="{1}" Action="{2}"/>', sID, opts.ID, sDel);

        $.messager.confirm('Delete', 'Are you delete this?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    //url: '../Mods/Items/Service/ProductService.asmx/DeleteInventoryProduct',
                    url: '/FWS.VnAccounting.Service.Data/Core/CoreService.asmx/ExecuteAction',
                    type: 'POST',
                    data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue) },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                        }
                        data = eval("(" + data + ")");
                        thisObj.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    ReloadGrid: function () {
        $(this.GridId).clearGridData();

        // $(this.GridId).setGridParam({ url: this.GridUrl });
        //  $(this.GridId).trigger('reloadGrid');
        this.LoadGrid();
    },
    RefreshCurrentPage: function () {
        $(this.GridId).clearGridData();
        new CGrid().Request(this.GridId, this.optionClient);
    },
    LoadGrid: function () {
        thisObj = this;
        var iPage = 1;
        var iNumRow = 100;

        var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' PageIndex='{2}' RowsPerPage='{3}' />", 129, 12, iPage, iNumRow);
        var inputValue = FWS.System.Core.AttachMeta(xml, {});

        thisObj.optionClient = {
            gridUrl: thisObj.GridUrl,
            pager: thisObj.GridPager,
            extraParams: {
                ClientKey: FWS_SERVER_CONFIG.ClientKey,
                currPage: iPage,
                numberRowOfPage: iNumRow,
                inputValue: ''
            },
            colNames: colNameItem,
            colModel: colModelItem,
            afterInsertRow: function (rowid, rowdata, rowelem) {
                var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                $(Mods.Items.Product.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
            },
            onSelectRow: function (rowid, status) {

            },
            ondblClickRow: function (rowid, iRow, iCol, e) {
                var opt = { ID: rowid };                
                var colName = 'colName';
                switch (iCol) {
                    case 9:
                        opt[colName] = '#tab-cunghoatchat'; break;
                    case 10:
                        opt[colName] = '#tab-tonkho'; break;
                }

                Mods.Items.Product.LoadEntryEdit(opt);
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
    Mods.Items.Product.Init();

});
