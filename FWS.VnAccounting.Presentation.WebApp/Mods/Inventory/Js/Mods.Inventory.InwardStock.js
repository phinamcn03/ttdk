if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};

Mods.Inventory.InwardStock = {
    ServiceUrl: '../Mods/Inventory/Service/InwardStockService.asmx',
    Init: function () {
        this.CreateControl();
        this.Grid.Load();
        this.Event();

    },
    OptionsController: {
        template: 'Mods/Inventory/InwardStockEntry',
        data: "{a:'--', b:'--'}",
        parentOptions: FWS.Web.CTemplateController.CurrentContentOptions,
        id: "InwardStockEntry-Window",
        width: 1000,
        height: 550,
        isChild: true,
        title: "Create Inward Stock",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Inventory.InwardStockEntry.DefaultInit(opts);
        }
    },
    CreateControl: function () {
        FWS.System.IO.Datebox("#InwardStock-txtFromDate");
        FWS.System.IO.Datebox("#InwardStock-txtToDate");
        var thisObj = this;
        FWS.System.IO.Combobox("#InwardStock-txtTemplateTime", thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: 'CustomControl="Global/TemplateTime"' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    thisObj.GetTemplateTime({ type: record.value });
                },
                onLoadSuccess: function () {
                    $("#InwardStock-txtTemplateTime").combobox("select", 17);
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
            $("#InwardStock-txtFromDate").datebox("setValue", _date);
            _date = $.format(toDate, 'd', 'vi-VN');
            $("#InwardStock-txtToDate").datebox("setValue", _date);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#InwardStock-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#InwardStock-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete(rowID, 1);
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $("#InwardStock-btnSearch").click(function () {
            thisObj.Grid.Search({
                FromDate: thisObj.FormatDate($("#InwardStock-txtFromDate").datebox('getValue')),
                ToDate: thisObj.FormatDate($("#InwardStock-txtToDate").datebox('getValue')),
                InwardNo: $("#TranferStock-txtInwardNo").val(),
                Amount: $("#InwardStock-txtTotalAmount").val()
            });
        });
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
    FormatDate: function (value) {
        var ret = value.split('/');
        return $.string.Format('{0}-{1}-{2}', ret[2], ret[0], ret[1]);
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
                console.log(value);
                inputMaster = inputMaster + $.string.Format(tempMaster, value);
            });
        }
        else
            inputMaster = $.string.Format(tempMaster, opts);
        var input = $.string.Format('<InputValue>{0}</InputValue>', inputMaster);
        $.messager.confirm('Xóa Hóa Đơn!', 'Bạn chắc sẽ xóa đơn vị này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: thisObj.ServiceUrl + '/Update',
                    type: 'POST',
                    data: { InputValue: input },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data.Code == "INV_SUCCESS") {
                                Mods.Inventory.InwardStock.Grid.RefreshCurrentPage();
                            }
                            else {
                                $.messager.alert('EDITABLE', data.Name);
                            }
                        } catch (e) { $.iLog(e); }
                    }
                });
            }
            else { thisObj.UnCheckDeleteRow(opts) }
        });
    },
    Grid: {
        GridId: '#InwardStock_Grid',
        GridPager: 'InwardStock_Gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            thisObj = this;
            thisObj.optionClient = {
                gridUrl: Mods.Inventory.InwardStock.ServiceUrl + "/GetInwardStockGrid",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: 'RefType="7"'
                },
                colNames: colNameInwardStock,
                colModel: colModelInwardStock,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    Mods.Inventory.InwardStock.LoadEntryEdit({ ID: rowID });
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
            new CGrid().Init(thisObj.GridId, InwardStockOption, thisObj.optionClient);
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
    Mods.Inventory.InwardStock.Init();
});
