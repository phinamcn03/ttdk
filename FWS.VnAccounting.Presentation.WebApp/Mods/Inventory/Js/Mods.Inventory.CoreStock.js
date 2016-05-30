if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};

Mods.Inventory.CoreStock[INSTANT] = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServerOptions: CoreStock_Instant['[INSTANT]'],
    Init: function () {
        this.CreateControl();
        this.Grid.Load();
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
    ControlIDs: {
        txtTemplate: '#[INSTANT]-txtTemplateTime',
        txtInwardNo: '#[INSTANT]-txtStockNo',
        txtFromDate: '#[INSTANT]-txtFromDate',
        txtToDate: '#[INSTANT]-txtToDate',
        txtPartnerName: '#[INSTANT]-txtPartnerName',
        txtTotalAmount: '#[INSTANT]-txtTotalAmount',

        btnNew: '#[INSTANT]-btnAddNew',
        btnDel: '#[INSTANT]-btnDelete',
        btnSearch: '#[INSTANT]-btnSearch',
        btnAdvSerch: '#[INSTANT]-btnSearchAdvance'
    },
    TemplateEdit: {
        '1': 'Inventory/InwardStock',
        '2': 'Inventory/Outward'
    },
    OptionsController: {
        template: 'Mods/Inventory/[INSTANT]Entry',
        data: "{a:'--', b:'--'}",
        parentOptions: FWS.Web.CTemplateController.CurrentContentOptions,
        id: "[INSTANT]-Window",
        width: 1000,
        height: 550,
        isChild: true,
        title: "Create Stock",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            var objEntry = eval("Mods.Inventory.CoreStock[INSTANT]Entry");
            objEntry.DefaultInit(opts);
        }
    },
    CreateControl: function () {
        var thisObj = this;
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtFromDate);
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtToDate);

        FWS.System.IO.Combobox(thisObj.ControlIDs.txtTemplate, thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: '<InputValue CustomControl="Global/TemplateTime" />' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    thisObj.GetTemplateTime({ type: record.value });
                },
                onLoadSuccess: function () {
                    $(thisObj.ControlIDs.txtTemplate).combobox("select", 17);
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
            $(thisObj.ControlIDs.txtFromDate).datebox("setValue", _date);
            _date = $.format(toDate, 'd', 'vi-VN');
            $(thisObj.ControlIDs.txtToDate).datebox("setValue", _date);
        }
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.LoadEntryNew();
        });
        $(thisObj.ControlIDs.btnDelete).click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete(rowID, 1);
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $(thisObj.ControlIDs.btnSearch).click(function () {
            thisObj.Grid.Search({
                FromDate: thisObj.FormatDate($(thisObj.ControlIDs.txtFromDate).datebox('getValue')),
                ToDate: thisObj.FormatDate($(thisObj.ControlIDs.txtToDate).datebox('getValue')),
                InwardNo: $(thisObj.ControlIDs.txtInwardNo).val() || "",
                Amount: $(thisObj.ControlIDs.txtTotalAmount).val() || ""
            });
        });


    },
    FormatDate: function (value) {
        var ret = value.split('/');
        return $.string.Format('{0}-{1}-{2}', ret[2], ret[1], ret[0]);
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
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    CheckDeleteRow: function (opts) {
        var thisObj = this;
        $("#" + opts.ID).addClass("DeleteClass");
    },
    UnCheckDeleteRow: function (opts) {
        var thisObj = this;
        $("#" + opts).removeClass("DeleteClass");
    },
    ExecuteDelete: function (opts, isArr) {
        var thisObj = this;
        var tempMaster = '<Master UserID="1" Action="DELETE" ID="{0}" />';
        var inputMaster = '';
        if (isArr == 1) {
            $.each(opts, function (key, value) {
                inputMaster = inputMaster + $.string.Format(tempMaster, value);
            });
        }
        else
            inputMaster = $.string.Format(tempMaster, opts);
        var input = $.string.Format('<InputValue>{0}</InputValue>', inputMaster);
        $.messager.confirm('Xóa Hóa Đơn!', 'Bạn chắc sẽ xóa đơn vị này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: thisObj.ServiceUrl + '/UpdateCoreStock',
                    type: 'POST',
                    data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data.IsSuccessfull == "True") {
                                Mods.Inventory.CoreStock[INSTANT].Grid.RefreshCurrentPage();
                            }
                            else {
                                $.messager.alert('EDITABLE', data.Description);
                            }
                        } catch (e) { $.iLog(e); }
                    }
                });
            }
            else { thisObj.UnCheckDeleteRow(opts) }
        });
    },
    Post: function (opts) {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = $.string.Format('<InputValue TransID="{0}"/>', opts.ID);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/PostCoreStock',
            type: 'POST',
            data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        Mods.Inventory.CoreStock[INSTANT].Grid.RefreshCurrentPage();
                        //  thisObj.Back();
                        //  var parentOptions = thisObj.Properties.parentOptions;
                        //  if (parentOptions) {
                        //       var parentIns = parentOptions.template.split("/")[2];
                        //       var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
                        //        jsParent.Grid.RefreshCurrentPage();
                        //   }
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
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = $.string.Format('<InputValue TransID="{0}"/>', opts.ID);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/UnPostCoreStock',
            type: 'POST',
            data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        Mods.Inventory.CoreStock[INSTANT].Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Grid: {
        GridUrl: '../Mods/Inventory/Service/CStockService.asmx',
        GridId: '#[INSTANT]_Grid',
        GridView: '#gview_[INSTANT]_Grid',
        GridPager: '[INSTANT]_GridPage',
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            var thisObj = this;

            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl + "/GetCoreStockGrid",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: '',
                    typeRef: Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType
                },
                colNames: colName_[INSTANT],
                colModel: colModel_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    post_icon = '';
                    if (rowdata.Posted) {
                        post_icon = $.string.Format('<span class="ui-icon ui-icon-arrowreturnthick-1-w" rowid="{0}" style="display:inline-block;" title="UnPosted"></span>', rowid);
                    }
                    if (!rowdata.Posted) {
                        post_icon = $.string.Format('<span class="ui-icon ui-icon-arrowreturnthick-1-e" rowid="{0}" style="display:inline-block"; title="Posted"></span>', rowid);
                    }
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span></div> / {1}', rowid, post_icon);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    Mods.Inventory.CoreStock[INSTANT].LoadEntryEdit({ ID: rowID });
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
                    $(thisObj.GridId).find(".ui-icon-trash").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-pencil").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-arrowreturnthick-1-e").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-arrowreturnthick-1-w").unbind("click");

                    $(thisObj.GridId + " .ui-icon-trash").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Inventory.CoreStock[INSTANT].ExecuteDelete(rowID, 0);
                        //
                    });

                    $(thisObj.GridId + " .ui-icon-pencil").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Inventory.CoreStock[INSTANT].LoadEntryEdit({ ID: rowID });
                    });

                    $(thisObj.GridId + " .ui-icon-arrowreturnthick-1-e").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Inventory.CoreStock[INSTANT].Post({ ID: rowID });
                    });
                    $(thisObj.GridId + " .ui-icon-arrowreturnthick-1-w").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Inventory.CoreStock[INSTANT].UnPost({ ID: rowID });
                    });
                }
            };
            new CGrid().Init(thisObj.GridId, option_[INSTANT], thisObj.optionClient);
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
            var inputValue = $.string.Format('FromDate="{0}" ToDate ="{1}" InwardNo ="{2}" Amount ="{3}"', opts.FromDate, opts.ToDate, opts.InwardNo, opts.Amount);
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
    Mods.Inventory.CoreStock[INSTANT].Init();

});
