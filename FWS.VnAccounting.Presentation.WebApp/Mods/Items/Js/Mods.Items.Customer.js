if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Customer = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/CustomerEntry',
        data: "{a:'-', b:'--'}",
        id: "CustomerEntry-Window",
        width: 500,
        height: 315,
        title: "Customer Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Items.CustomerEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Customer-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Customer-btnDelete").click(function () {
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
                $.messager.alert('Xóa KH', 'Xin chọn khách hàng cần xóa');
        });
        $("#Customer-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Customer-txtCode").val(),
                Name: $("#Customer-txtName").val()
            });
        });
        $("#Customer-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
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
        $.messager.confirm('Xóa khách hàng', 'Bạn có chắc muốn xóa Khách hàng này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/CustomerService.asmx/Update',
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
        var thisObj = this;
        var rowID = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        return rowID || -1;
    },
    Grid: {
        GridUrl: '../Mods/Items/Service/CustomerService.asmx/GetGrid',
        GridId: '#Customer_Grid',
        GridPager: 'Customer_GridPage',
        optionClient: "",
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNameCustomer,
                colModel: colModelCustomer,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {
                    /* Edit */
                    $(thisObj.GridId).find(".ui-icon-pencil").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-pencil").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Items.Customer.LoadEntryEdit({ ID: rowID });
                        e.stopPropagation();
                    });
                    /* Delete */
                    $(thisObj.GridId).find(".ui-icon-trash").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-trash").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Items.Customer.ExecuteDelete({ ID: rowID });
                        e.stopPropagation();
                    });
                }
            };
            new CGrid().Init(thisObj.GridId, optionServerCustomer, thisObj.optionClient);
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
    Mods.Items.Customer.Init();
});
