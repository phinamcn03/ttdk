if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Vendor = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/VendorEntry',
        data: "{a:'-', b:'--'}",
        id: "VendorEntry-Window",
        width: 500,
        height: 315,
        title: "Vendor Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Items.VendorEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Vendor-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Vendor-btnDelete").click(function () {
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
                $.messager.alert('Xóa Nhà cung cấp', 'Xin chọn Nhà cung cấp cần xóa');
        });
        $("#Vendor-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Vendor-txtCode").val(),
                Name: $("#Vendor-txtName").val()
            });
        });
        $("#Vendor-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#Vendor_Grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#Vendor_Grid .ui-icon-pencil").live("click", function () {
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
        $.messager.confirm('Delete', 'Bạn có chắc muốn xóa Nhà cung cấp này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/VendorService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                        }
                        data = eval("(" + data + ")");
                        thisObj.Grid.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    GetSelectedRow: function () {
        thisObj = this;
        var rowID = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        return rowID || -1;
    },
    Grid: {
        GridUrl: '../Mods/Items/Service/VendorService.asmx/GetGrid',
        GridId: '#Vendor_Grid',
        GridPager: 'Vendor_gridpage',
        optionClient: '',
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                addParams: {position: "last"},
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 50,
                    inputValue: ''
                },
                pager: thisObj.GridPager,
                colNames: colNameVendor,
                colModel: colModelVendor,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(Mods.Items.Vendor.Grid.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerVendor, thisObj.optionClient);
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
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, this.optionClient);
        }
    }

};
$(function () {
    Mods.Items.Vendor.Init();
});