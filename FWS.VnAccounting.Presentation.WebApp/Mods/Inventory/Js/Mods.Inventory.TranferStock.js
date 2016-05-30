if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
Mods.Inventory.TranferStock = {
    ServiceUrl: '../Mods/Inventory/Service/TranferStockService.asmx',
    ServiceCoreUrl: '../Mods/Inventory/Service/CStockService.asmx',
    Init: function () {
        this.CreateControl();
        this.Grid.Load({ ID: 0 });
        this.Event();
    },
    ObjMesseage: {
        SaveTitle: 'Lưu đơn đặt hàng',
        SaveConfirm: 'Bạn muốn lưa đơn đặt hàng này?',
        TransTitle: 'Result order Purchase',
        TransConfirm: 'Succesful!',
        TransFail: 'Create fail!!!',
        DeleteTitle: 'Xóa khách hàng',
        DeleteConfirm: 'Bạn có chắc muốn xóa Khách hàng này?',
        Posted: 'Chung tu da duoc Post! Thuc hien khong thanh cong',
        PostTransTitle: 'Post Payment',
        PostTransConfirm: 'Ban co muon post don hang nay!',
        UnPostTransTitle: 'Unpost payment',
        UnPostTransConfirm: 'Ban co muon unpost don hang nay!'
    },
    OptionsController: {
        template: 'Mods/Inventory/TranferStockEntry',
        data: "{a:'--', b:'--'}",
        parentOptions: FWS.Web.CTemplateController.CurrentContentOptions,
        id: "TranferStockEntry-Window",
        width: 1000,
        height: 550,
        isChild: true,
        title: "Create Tranfer Stock",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Inventory.TranferStockEntry.DefaultInit(opts);
        }
    },
    CreateControl: function () {
        FWS.System.IO.Datebox("#TranferStock-txtFromDate");
        FWS.System.IO.Datebox("#TranferStock-txtToDate");
        var thisObj = this;
        FWS.System.IO.Combobox("#TranferStock-txtTemplateTime", thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: '<InputValue CustomControl="Global/TemplateTime" />' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    thisObj.GetTemplateTime({ type: record.value });
                },
                onLoadSuccess: function () {
                    $("#TranferStock-txtTemplateTime").combobox("select", 17);
                    thisObj.GetTemplateTime({ type: 17 });
                }
            }
        );
    },
    GetTemplateTime: function (options) {
        if (options) {
            var _now = new Date();
            var frmDate = '', toDate = _now;
            switch (options.type) {
                case '17': //1date
                    frmDate = _now;
                    break;
                case '18': //1week
                    frmDate = new Date(_now.getFullYear(), _now.getMonth(), _now.getDate() - 7);
                    break;
                case '19': //1month
                    frmDate = new Date(_now.getFullYear(), _now.getMonth() - 1, _now.getDate());
                    break;
                case '20': //1year
                    frmDate = new Date(_now.getFullYear() - 1, _now.getMonth(), _now.getDate());
                    break;
                default:
                    frmDate = _now;
                    break;
            }
            var thisObj = this;
            var _date = $.format(frmDate, 'd', 'vi-VN');
            $("#TranferStock-txtFromDate").datebox("setValue", _date);
            _date = $.format(toDate, 'd', 'vi-VN');
            $("#TranferStock-txtToDate").datebox("setValue", _date);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#TranferStock-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#TranferStock-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete(rowID, 1);
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $("#TranferStock-btnSearch").click(function () {
            thisObj.Grid.Search({
                FromDate: thisObj.FormatDate($("#TranferStock-txtFromDate").datebox('getValue')),
                ToDate: thisObj.FormatDate($("#TranferStock-txtToDate").datebox('getValue'))
            });
        });

    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadContent(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    Post: function (opts) {
        var thisObj = this;
        var input = $.string.Format('<InputValue ID="{0}" RefType="{1}" Action="POST"/>', opts.ID, 9);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        thisObj.Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    UnPost: function (opts) {
        var thisObj = this;
        var input = $.string.Format('<InputValue ID="{0}" RefType="{1}" Action="UnPost"/>', opts.ID, 9);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        thisObj.Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Grid: {
        GridId: '#TranferStock_Grid',
        GridPager: 'TranferStock_Gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            thisObj = this, tranfObj = Mods.Inventory.TranferStock;

            thisObj.optionClient = {
                gridUrl: Mods.Inventory.TranferStock.ServiceCoreUrl + "/GetCoreStockGrid",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: '',
                    typeRef: 9
                },
                colNames: colNameTranferStock,
                colModel: colModelTranferStock,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    post_icon = '';
                    if (rowdata.Posted) {
                        post_icon = $.string.Format('<span class="ui-icon ui-icon-arrowreturnthick-1-w" rowid="{0}" style="display:inline-block;" title="UnPosted"></span>', rowid);
                    }
                    if (!rowdata.Posted) {
                        post_icon = $.string.Format('<span class="ui-icon ui-icon-arrowreturnthick-1-e" rowid="{0}" style="display:inline-block"; title="Posted"></span>', rowid);
                    }
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span></div> / {1}', rowid, post_icon);
                    $(tranfObj.Grid.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    Mods.Inventory.TranferStock.LoadEntryEdit({ ID: rowID });
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                onSelectRow: function (rowId) {
                    //                    var cbIsChecked = ($("#jqg_InwardStock_Grid_" + rowId).is(':checked'));
                    //                    if (cbIsChecked == false) {
                    //                        $("#" + rowId).removeClass("DeleteClass");
                    //                    }
                    //                    else {
                    //                        Mods.Inventory.InwardStock.CheckDeleteRow({ ID: rowId });
                    //                    }
                },
                gridComplete: function () {
                    $(tranfObj.Grid.GridId).find(".ui-icon-trash").unbind("click");
                    $(tranfObj.Grid.GridId).find(".ui-icon-pencil").unbind("click");
                    $(tranfObj.Grid.GridId).find(".ui-icon-arrowreturnthick-1-e").unbind("click");
                    $(tranfObj.Grid.GridId).find(".ui-icon-arrowreturnthick-1-w").unbind("click");

                    $(tranfObj.Grid.GridId + " .ui-icon-trash").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        tranfObj.ExecuteDelete(rowID, 0);
                        //
                    });
                    $(tranfObj.Grid.GridId + " .ui-icon-pencil").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        tranfObj.LoadEntryEdit({ ID: rowID });
                    });
                    $(tranfObj.Grid.GridId + " .ui-icon-arrowreturnthick-1-e").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        tranfObj.Post({ ID: rowID });
                    });
                    $(tranfObj.Grid.GridId + " .ui-icon-arrowreturnthick-1-w").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        tranfObj.UnPost({ ID: rowID });
                    });
                }

            };
            new CGrid().Init(thisObj.GridId, TranferStockOption, thisObj.optionClient);
        },

        ReloadGrid: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format('FromDate="{0}" ToDate ="{1}"', opts.FromDate, opts.ToDate);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || -1;
        }

    }
};
$(function () {
    Mods.Inventory.TranferStock.Init();
});