if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
Mods.Inventory.AdjustStock = {
    ServiceUrl: '../Mods/Inventory/Service/AdjustmentStockService.asmx',
    ControlIDs: {
        /* 
        txtInwardNo: '#AdjustmentStock-txtInwardNo',
        txtPartnerName: '#AdjustmentStock-txtPartnerName',
        txtFromAccount: '#AdjustmentStock-txtFromAccount',
        */
        txtTemplate: '#AdjustmentStock-txtTemplateTime',
        txtFromDate: '#AdjustmentStock-txtFromDate',
        txtRefType: '#AdjustmentStock-txtRefType',
        txtToDate: '#AdjustmentStock-txtToDate',
        txtAdjustmentType: '#AdjustmentStock-txtAdjustmentType',
        btnSearch: '#AdjustmentStock-btnSearch',
        btnSave: '#AdjustmentStock-btnSave',
        btnDel: '#AdjustmentStock-btnDel',
        btnPost: '#AdjustmentStock-btnPost',
        btnUnPost: '#AdjustmentStock-btnUnPost'
    },
    OptionsController: {
        template: 'Mods/Inventory/AdjustmentStockEntry',
        data: "{a:'--', b:'--'}",
        parentOptions: FWS.Web.CTemplateController.CurrentContentOptions,
        id: "AdjustmentStockEntry-Window",
        width: 1000,
        height: 550,
        isChild: true,
        title: "Create Adjustment Stock",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Inventory.AdjustStockEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#AdjustStock-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#AdjustStock-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete(rowID, 1);
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $("#AdjustStock-btnSearch").click(function () {
            thisObj.Grid.Search({
                FromDate: thisObj.FormatDate($("#AdjustStock-txtFromDate").datebox('getValue')),
                ToDate: thisObj.FormatDate($("#AdjustStock-txtToDate").datebox('getValue'))
            });
        });

        $('#AdjustStock-txtFromDate, #AdjustStock-txtToDate').datebox();

        $(thisObj.Grid.GridId + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete(rowID, 0);
            //
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadContent(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    Load: function () {
        var thisObj = this;
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtFromDate);
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtToDate);

        FWS.System.IO.Combobox(thisObj.ControlIDs.txtTemplate, thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: 'CustomControl="Global/TemplateTime"' },
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
            FWS.System.IO.Combobox(thisObj.ControlIDs.txtAdjustmentType, thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: 'CustomControl="Global/AdjustmentType"' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
//                    thisObj.GetTemplateTime({ type: record.value });
                },
                onLoadSuccess: function () {
//                    $(thisObj.ControlIDs.txtTemplate).combobox("select", 17);
//                    thisObj.GetTemplateTime({ type: 17 });
                }
            }
        );

        //        FWS.System.IO.Combobox(thisObj.ControlIDs.txtRefType, thisObj.ServiceUrl + '/GetRefType',
        //            {
        //                data: { inputValue: 'RefGroup="' + thisObj.ServerOptions.Instant.substring(0, 2) + '" AllOption="1"' },
        //                valueField: 'value',
        //                textField: 'text',
        //                onSelect: function (record) {
        //                },
        //                onLoadSuccess: function () {
        //                    $(thisObj.ControlIDs.txtRefType).combobox("select", 0);
        //                }
        //            }
        //        );
        //        thisObj.CreateAutocomplete();
    },
    Grid: {
        GridId: '#AdjustStock_Grid',
        GridPager: 'AdjustStock_Gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            thisObj = this;
            thisObj.optionClient = {
                gridUrl: Mods.Inventory.AdjustStock.ServiceUrl + "/GetTranferStockEntryList",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: ''
                },
                colNames: colNameTranferStock,
                colModel: colModelTranferStock,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    Mods.Inventory.AdjustStock.LoadEntryEdit({ ID: rowID });
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
    Init: function () {
        this.Load();
        this.Grid.Load();
        this.Event();
    }
};
$(function () {
    Mods.Inventory.AdjustStock.Init();
});