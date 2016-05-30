if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};

Mods.ACore.Payment[INSTANT] = {
    ServiceUrl: "../Mods/ACore/Service/PaymentService.asmx",
    ServerOptions: Payment_Instant['[INSTANT]'],

    Init: function () {
        this.Load();
        this.Grid.Load();
        this.Event();
    },
    ObjMesseage: {
        SaveTitle: 'Lưu đơn đặt hàng',
        SaveConfirm: 'Bạn muốn lưa đơn đặt hàng này?',
        TransTitle: 'Result order Purchase',
        TransConfirm: 'Succesful!',
        PostTransTitle: 'Post Payment',
        PostTransConfirm: 'Ban co muon post don hang nay!',
        UnPostTransTitle: 'Unpost payment',
        UnPostTransConfirm: 'Ban co muon unpost don hang nay!',
        TransFail: 'Create fail!!!',
        DeleteTitle: 'Xóa chung tu',
        DeleteConfirm: 'Bạn có chắc muốn xóa chung tu này?'
    },
    ControlIDs: {
        txtTemplate: '#[INSTANT]Payment-txtTemplateTime',
        txtInwardNo: '#[INSTANT]Payment-txtInwardNo',
        txtFromDate: '#[INSTANT]Payment-txtFromDate',
        txtRefType: '#[INSTANT]Payment-txtRefType',
        txtToDate: '#[INSTANT]Payment-txtToDate',
        txtPartnerName: '#[INSTANT]Payment-txtPartnerName',
        txtFromAccount: '#[INSTANT]Payment-txtFromAccount',

        btnSearch: '#[INSTANT]Payment-btnSearch',
        btnSave: '#[INSTANT]Payment-btnSave',
        btnDel: '#[INSTANT]Payment-btnDel',
        btnPost: '#[INSTANT]Payment-btnPost',
        btnUnPost: '#[INSTANT]Payment-btnUnPost'
    },
    TemplateEdit: {
        '1': 'AR/Order',
        '2': 'AR/Invoice',
        '3': 'AR/Receipt',
        '99': 'AP/Return',
        '4': 'AP/Order',
        '5': 'AP/Invoice',
        '6': 'AP/Return',
        '9': 'AP/Receipt',
        '11': 'Cash/CashReceiveEntry',
        '12': 'Cash/CashPaymentEntry',
        '13': 'Cash/CashDebitEntry',
        '14': 'Cash/CashCreditEntry',
        '15': 'AR/CustomerPayment',
        '16': 'AP/VendorPayment',
        '18': 'Cash/JournalVoucher'
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
        FWS.System.IO.Combobox(thisObj.ControlIDs.txtRefType, thisObj.ServiceUrl + '/GetRefType',
            {
                data: { inputValue: 'RefGroup="' + thisObj.ServerOptions.Instant.substring(0, 2) + '" AllOption="1"' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                },
                onLoadSuccess: function () {
                    $(thisObj.ControlIDs.txtRefType).combobox("select", 0);
                }
            }
        );
        thisObj.CreateAutocomplete();
    },
    LoadContent: function (rowID) {

        var thisObj = this,
            _template = "";
        var obj = $(thisObj.Grid.GridId).jqGrid('getRowData', rowID);
        if (typeof obj.RefType != 'undefined')
            _template = thisObj.TemplateEdit[obj.RefType] || '';
        var optionsController = {
            template: 'Mods/' + _template,
            data: "{a:'--', b:'--'}",
            parentOptions: FWS.Web.CTemplateController.CurrentContentOptions,
            id: _template.replace('/', '') + "Entry-Window",
            width: 1000,
            height: 550,
            isChild: true,
            title: "XXXX",
            rowID: rowID,
            callbackComplete: function (opts) {
                switch (obj.RefType) {
                    case '15':
                    case '16':
                        eval('Mods.ACore.PaymentPartner' + _template.replace('/', '') + '.DefaultInit(optionsController, obj);');
                        break;
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                        eval('Mods.Cash.BaseList' + _template.replace('Cash/', '') + '.DefaultInit(optionsController, obj);');
                        break;
                    case '18':
                        eval('Mods.ACore.VoucherCSJournal.DefaultInit(optionsController, obj);');
                        break;
                    default:
                        eval('Mods.ACore.Voucher' + _template.replace('/', '') + '.DefaultInit(optionsController, obj);');
                        break;

                }

            }
        };
        FWS.Web.CTemplateController.LoadContent(optionsController);
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnSearch).click(function () {
            var _frmDate = '', _toDate = '';
            var _date = $.parseDate($(thisObj.ControlIDs.txtFromDate).datebox("getValue"), 'd', FWS_SERVER_CONFIG.Culture),
                _frmDate = $.format(_date, 'yyyy-MM-dd'),
                _date = $.parseDate($(thisObj.ControlIDs.txtToDate).datebox("getValue"), 'd', FWS_SERVER_CONFIG.Culture),
                _toDate = $.format(_date, 'yyyy-MM-dd'),
                _amount = $(thisObj.ControlIDs.txtFromAccount).val();
            var options = {
                TemplateTime: $(thisObj.ControlIDs.txtTemplate).combobox('getValue'),
                RefNo: $(thisObj.ControlIDs.txtInwardNo).val(),
                FromDate: _frmDate,
                RefType: $(thisObj.ControlIDs.txtRefType).combobox('getValue'),
                ToDate: _toDate,
                PartnerID: $(thisObj.ControlIDs.txtPartnerName).attr("pId"),
                RefGroup: thisObj.ServerOptions.Instant.substring(0, 2)
            };
            if ($.trim(_amount) != "")
                options.Amount = _amount;
            var input = FWS.System.Core.BuildInputValue(options);
            thisObj.Grid.Search(input);
        });
        $(thisObj.Grid.GridId + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            var rowIDs = new Array();
            rowIDs.push(rowID);
            thisObj.ExecuteAction({
                title: thisObj.ObjMesseage.DeleteTitle,
                confirm: thisObj.ObjMesseage.DeleteConfirm,
                action: 'DELETE',
                rowids: rowIDs
            });
        });
        $(thisObj.Grid.GridId + "_frozen .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadContent(rowID);
        });
        $(thisObj.ControlIDs.btnDel).click(function () {
            var rowIDs = thisObj.Grid.GetSelectedRow();
            if (rowIDs.length > 0) {
                thisObj.ExecuteAction({
                    title: thisObj.ObjMesseage.DeleteTitle,
                    confirm: thisObj.ObjMesseage.DeleteConfirm,
                    action: 'DELETE',
                    rowids: rowIDs
                });
            }
        });
        $(thisObj.ControlIDs.btnPost).click(function () {
            var rowIDs = thisObj.Grid.GetSelectedRow();
            if (rowIDs.length > 0) {
                thisObj.ExecuteAction({
                    title: thisObj.ObjMesseage.PostTransTitle,
                    confirm: thisObj.ObjMesseage.PostTransConfirm,
                    action: 'POST',
                    rowids: rowIDs
                });
            }
        });
        $(thisObj.ControlIDs.btnUnPost).click(function () {
            var rowIDs = thisObj.Grid.GetSelectedRow();
            if (rowIDs.length > 0) {
                thisObj.ExecuteAction({
                    title: thisObj.ObjMesseage.UnPostTransTitle,
                    confirm: thisObj.ObjMesseage.UnPostTransConfirm,
                    action: 'UNPOST',
                    rowids: rowIDs
                });
            }
        });
    },
    CreateAutocomplete: function () {
        var _url = "../Mods/ACore/Service/VoucherService.asmx";
        var thisObj = this;
        FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtPartnerName, _url + '/GetPersonAutoComplete', {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: true,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format(" RefType='{0}' PersonType='{1}'", thisObj.ServerOptions.RefType, '1');
                },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[1];
            },
            formatResult: function (data) {
                return data[0];
            }
        }).result(function (event, item) {
            $(thisObj.ControlIDs.txtPartnerName).attr("pId", item[5]);
        });
    },
    ExecuteAction: function (options) {
        var thisObj = this;
        $.messager.confirm(options.title, options.confirm, function (r) {
            if (r) {
                var _template = 'Action="{0}" TransactionID="{1}" RefType="{2}"';
                var _count = 0;
                $.each(options.rowids, function (index, item) {
                    var obj = $(thisObj.Grid.GridId).jqGrid('getRowData', item);
                    var _inputValue = $.string.Format(_template, options.action, obj.ID, obj.RefType);

                    FWS.System.IO.Ajax({
                        url: thisObj.ServiceUrl + '/UpdateTransaction',
                        type: 'POST',
                        data: { inputValue: _inputValue },
                        success: function (data, textStatus, jqXHR) {
                            if ($(data).find("string").length) {
                                data = $(data).find("string:eq(0)").text();
                                data = eval("(" + data + ")");
                                if (data) {
                                    if (_count == options.rowids.length - 1) {
                                        thisObj.Grid.RefreshCurrentPage();
                                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                                    }
                                    _count++;
                                }
                            }
                        }
                    });
                });
            }
        });
    },
    Grid: {
        GridUrl: '../Mods/ACore/Service/PaymentService.asmx/GetGrid',
        GridId: '#[INSTANT]Payment_Grid',
        GridView: '#gview_[INSTANT]Payment_Grid',
        GridPager: '[INSTANT]Payment_GridPage',

        optionClient: {},
        Load: function () {
            var thisObj = this, payObj = Mods.ACore.Payment[INSTANT];
            var refGroup = "RefGroup='" + payObj.ServerOptions.Instant.substring(0, 2) + "'";
            //RefGroup="AR/AP", FromDate="", ToDate="", RefNo="VoucherNo", PartNerID=""
            var _inputValue = refGroup;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: _inputValue,
                    gridID: payObj.ServerOptions.GridID
                },
                pager: thisObj.GridPager,
                colNames: colNamePayment_[INSTANT],
                colModel: colModelPayment_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    payObj.LoadContent(rowid);
                }
            };
            new CGrid().Init(thisObj.GridId, optionPayment_[INSTANT], thisObj.optionClient);
        },
        Search: function (inputValue) {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            thisObj.optionClient.extraParams.currPage = 1;
            thisObj.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(thisObj.GridId, thisObj.optionClient);
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        GetSelectedRow: function () {
            var thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || [];
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
            var _date = $.format(frmDate, 'd', FWS_SERVER_CONFIG.Culture);
            $(thisObj.ControlIDs.txtFromDate).datebox("setValue", _date);
            _date = $.format(toDate, 'd', FWS_SERVER_CONFIG.Culture);
            $(thisObj.ControlIDs.txtToDate).datebox("setValue", _date);
        }
    }
};
$(function () {
    Mods.ACore.Payment[INSTANT].Init();
});
