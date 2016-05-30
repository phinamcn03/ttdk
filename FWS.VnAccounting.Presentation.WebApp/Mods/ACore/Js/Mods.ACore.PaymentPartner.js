if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};

if (typeof Precision == 'undefined') Precision = 0;
if (typeof Groupseparator == 'undefined') Groupseparator = ',';
if (typeof NumRow == 'undefined') NumRow = 1;

Mods.ACore.PaymentPartner[INSTANT] = {
    VoucherServiceUrl: "../Mods/ACore/Service/VoucherService.asmx",
    IsUpdate: false,
    UpdateID: null,
    Properties: {},

    ObjMesseage: {
        SaveTitle: 'Lưu đơn đặt hàng',
        SaveConfirm: 'Bạn muốn lưa đơn đặt hàng này?',
        TransTitle: 'Result order Purchase',
        TransConfirm: 'Succesful!',
        TransFail: 'Create fail!!!',
        DeleteTitle: 'Xóa khách hàng',
        DeleteConfirm: 'Bạn có chắc muốn xóa Khách hàng này?',
        PostTransTitle: 'Post Payment',
        PostTransConfirm: 'Ban co muon post don hang nay!',
        UnPostTransTitle: 'Unpost payment',
        UnPostTransConfirm: 'Ban co muon unpost don hang nay!'
    },
    ControlIDs: {
        txtCode: '#[INSTANT]PaymentPartner-txtCode',
        txtName: "#[INSTANT]PaymentPartner-txtName",
        txtTaxNo: "#[INSTANT]PaymentPartner-txtTax",
        txtAddress: "#[INSTANT]PaymentPartner-txtAddress",
        txtContact: "#[INSTANT]PaymentPartner-txtContact",
        txtNote: "#[INSTANT]PaymentPartner-txtNote",
        txtAccount: "#[INSTANT]PaymentPartner-txtAccount",
        txtRefID: "#[INSTANT]PaymentPartner-txtReferenceID",
        txtDate: "#[INSTANT]PaymentPartner-txtDate",
        txtNo: "#[INSTANT]PaymentPartner-txtNo",
        txtTotal: "#[INSTANT]PaymentPartner-txtTotal",

        btnSave: "#[INSTANT]PaymentPartner-btnSave",
        btnUnPost: "#[INSTANT]PaymentPartner-btnUnPost",
        btnClear: "#[INSTANT]PaymentPartner-btnCancel",
        btnPrint: "#[INSTANT]PaymentPartner-btnPrint",
        btnPreview: "#[INSTANT]PaymentPartner-btnPreview",
        btnPost: "#[INSTANT]PaymentPartner-btnPost",
        btnBack: "#[INSTANT]PaymentPartner-btnBack",

        formID: "#[INSTANT]PaymentPartner-Form"
    },
    ServerOptions: PaymentPartner_Instant['[INSTANT]'],
    /*Control*/
    Init: function () {
        this.Load();
        this.Event();
        this.Grid.Load('');
    },
    DefaultInit: function (options, data) {
        this.IsUpdate = true;
        this.UpdateID = data.ID;
        this.LoadContent(data);
        this.Properties.parentOptions = options.parentOptions;
    },
    LoadContent: function (options) {
        var thisObj = this;
        var _inputValueTrans = $.string.Format("ID='{0}'", options.ID);
        FWS.System.IO.Ajax({
            url: thisObj.VoucherServiceUrl + '/GetTransaction',
            type: 'POST',
            data: { inputValue: _inputValueTrans },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        thisObj.LoadPerson(data);
                        $(thisObj.ControlIDs.txtNo).val(data.RefNo);
                        $(thisObj.ControlIDs.txtNote).val(data.Note);

                        var sCustom = $.format(new Date(data.RefDate), 'd', FWS_SERVER_CONFIG.Culture);
                        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
        var _funcPara = $.string.Format('TransactionID="{0}" RefType="{1}"', options.ID, options.RefType);
        thisObj.Grid.Reload(_funcPara);
        thisObj.LoadControl({ back: '' });
    },
    LoadPerson: function (options) {
        var thisObj = this;
        var _inputValuePers = $.string.Format("ID='{0}'", options.PartnerID);
        FWS.System.IO.Ajax({
            url: thisObj.VoucherServiceUrl + '/GetPerson',
            type: 'POST',
            data: { inputValue: _inputValuePers },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                data = eval('(' + data + ')');
                if (data) {
                    $(thisObj.ControlIDs.txtName).val(data.Name);
                    $(thisObj.ControlIDs.txtAddress).val(data.Address);
                    $(thisObj.ControlIDs.txtTaxNo).val(data.TaxNo);
                    $(thisObj.ControlIDs.txtContact).val(data.ContactName);
                    $(thisObj.ControlIDs.txtCode).val(data.Code).attr("IDValue", data.ID);
                }
            }
        });
    },
    Load: function () {
        var thisObj = this;
        thisObj.LoadControl({ back: 'none' });
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtDate);
        thisObj.CreateAutocomplete();
        thisObj.CreateCombobox();
        thisObj.SetDafaultValue();
    },
    LoadControl: function (options) {
        var thisObj = this;
        $(thisObj.ControlIDs.btnBack).css('display', options.back);
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnSave).click(function () {
            var validate = $(thisObj.ControlIDs.formID).form('validate');
            if (validate)
                thisObj.SaveOrder();
        });
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.ClearForm();
            thisObj.SetDafaultValue();
        });
        $(thisObj.ControlIDs.btnClear).click(function () {
            thisObj.ClearForm();
            thisObj.SetDafaultValue();
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetDataEditDetail(rowID);
        });
        $(document).bind('keydown', 'Ctrl+s', function (evt) {
            thisObj.SaveOrder();
            return false;
        });
        $(thisObj.ControlIDs.btnBack).click(function () {
            thisObj.Back();
        });
        $(thisObj.ControlIDs.btnPost).click(function () {
            thisObj.ExecuteAction({
                title: thisObj.ObjMesseage.PostTransTitle,
                confirm: thisObj.ObjMesseage.PostTransConfirm,
                action: 'POST'
            });
        });
        $(thisObj.ControlIDs.btnUnPost).click(function () {
            thisObj.ExecuteAction({
                title: thisObj.ObjMesseage.UnPostTransTitle,
                confirm: thisObj.ObjMesseage.UnPostTransConfirm,
                action: 'UNPOST'
            });
        });
        $(thisObj.ControlIDs.btnPreview).click(function () {
            console.log('::PREVIEW');
        });
        $(thisObj.ControlIDs.btnPrint).click(function () {
            console.log('::PRINT');
        });
    },
    ExecuteAction: function (options) {
        var thisObj = this;
        if (typeof thisObj.UpdateID == 'undefined' || thisObj.UpdateID == null)
            return;
        var _id = thisObj.UpdateID;
        var _inputValue = $.string.Format('Action="{0}" TransactionID="{1}" RefType="{2}"', options.action, _id, thisObj.ServerOptions.RefType);
        $.messager.confirm(options.title, options.confirm, function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: thisObj.VoucherServiceUrl + '/UpdateTransaction',
                    type: 'POST',
                    data: { inputValue: _inputValue },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                            data = eval("(" + data + ")");
                            if (data) {
                                thisObj.Grid.RefreshCurrentPage();
                                $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                            }
                        }
                    }
                });
            }
        });
    },
    Back: function () {
        var parentOptions = this.Properties.parentOptions;
        if (parentOptions && this.IsUpdate)
            FWS.Web.CTemplateController.LoadContent(parentOptions);
    },
    CreateAutocomplete: function () {
        var thisObj = this;
        FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtCode, thisObj.VoucherServiceUrl + '/GetPersonAutoComplete', {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format(" RefType='{0}' PersonType='{1}' Code='{2}'", thisObj.ServerOptions.RefType, '2', $(thisObj.ControlIDs.txtCode).val())
                },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0] + " - " + data[1];
                return '';
            },
            formatResult: function (data) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0];
                return '';
            }
        }).result(function (event, item) {
            var _data = null
            if (typeof item != 'undefined' && item.length > 4) {
                _data = { name: item[1], tax: item[2], address: item[3], contact: item[4], code: item[5] };
            }
            thisObj.SetFormValue(_data);
        });
        FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtName, thisObj.VoucherServiceUrl + '/GetPersonAutoComplete', {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format(" RefType='{0}' PersonType='{1}' Name='{2}'", thisObj.ServerOptions.RefType, '2', $(thisObj.ControlIDs.txtName).val())
                },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0] + " - " + data[1];
                return '';
            },
            formatResult: function (data) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[1];
                return '';
            }
        }).result(function (event, item) {
            var _data = null
            if (typeof item != 'undefined' && item.length > 4) {
                _data = { name: item[1], tax: item[2], address: item[3], contact: item[4], code: item[5] };
            }
            $(thisObj.ControlIDs.txtCode).val(item[0]);
            thisObj.SetFormValue(_data);
        });
    },
    CreateCombobox: function () {
        var thisObj = this;
        FWS.System.IO.Combobox(thisObj.ControlIDs.txtAccount, thisObj.VoucherServiceUrl + '/GetAccountList', {
            data: { inputValue: 'FilterCode="Cash"' },
            valueField: 'value',
            textField: 'text'
        });
    },
    ClearForm: function () {
        $(this.ControlIDs.formID + ' input').val('').removeAttr('IDValue');
        this.UpdateID = null;
        this.Grid.Clear();
    },
    SetFormValue: function (options) {
        var thisObj = this;
        if (options) {
            $(thisObj.ControlIDs.txtName).val(options.name);
            $(thisObj.ControlIDs.txtTaxNo).val(options.tax);
            $(thisObj.ControlIDs.txtAddress).val(options.address);
            $(thisObj.ControlIDs.txtContact).val(options.contact);
            $(thisObj.ControlIDs.txtCode).attr("IDValue", options.code);
        }
        else {
            $(thisObj.ControlIDs.txtName).val('');
            $(thisObj.ControlIDs.txtTaxNo).val('');
            $(thisObj.ControlIDs.txtAddress).val('');
            $(thisObj.ControlIDs.txtContact).val('');
            $(thisObj.ControlIDs.txtCode).removeAttr("IDValue");
        }
    },
    SetDafaultValue: function () {
        if (FWS_SERVER_CONFIG && FWS_SERVER_CONFIG.Date) {
            var date = new Date(FWS_SERVER_CONFIG.Date);
            var sCustom = $.format(date, 'd', FWS_SERVER_CONFIG.Culture);
            $(this.ControlIDs.txtDate).datebox('setValue', sCustom);
        }
        this.GetRefNo();
    },
    GetRefNo: function () {
        var thisObj = this; ;
        FWS.System.IO.Ajax({
            url: '../Mods/AP/Service/PurchaseOrderService.asmx/GetRefNo',
            type: 'POST',
            data: { inputValue: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(thisObj.ControlIDs.txtNo).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    FormatUS: function (val) {
        return $.parseFloat(val, 'n', FWS_SERVER_CONFIG.Culture);
    },
    SaveOrder: function () {
        var thisObj = this,
            amount = 0,
            pInputValue = "";
        var templateMaster = '<InputValue UserID = "1" PartnerID="{0}" ReferenceID="{1}" RefType="{2}" RefDate="{3}" Amount="{4}" RefNo="{5}" Note="{6}" {7} {8} TotalAmount="{9}"/>',
            templateDetail = '<ItemDetail ItemID="{0}" Amount="{1}" PayAmount="{2}"/>',
            inputDetail = "", _taxID = "";
        if ($(thisObj.ControlIDs.txtTaxNo).val() != "")
            _taxID = 'TaxID="' + $(thisObj.ControlIDs.txtTaxNo).val() + '"';

        var objData = $(thisObj.Grid.GridId).jqGrid('getRowData');
        $.each(objData, function (index, objRow) {
            if (objRow.ID != '' && objRow.Status != "DELETE") {
                var rowPayAmount = thisObj.FormatUS(objRow.PayAmount);
                var rowAmount = thisObj.FormatUS(objRow.Amount);
                amount += rowAmount;
                inputDetail += $.string.Format(templateDetail, objRow.ID.split('-')[1] || '', rowAmount, rowPayAmount);
            }
        });
        if (amount > 0) {
            var stxtDate = $(thisObj.ControlIDs.txtDate).datebox('getValue'),
            dtxtDate = $.parseDate(stxtDate, 'd', FWS_SERVER_CONFIG.Culture),
            txtDate = $.format(dtxtDate, 'yyyy-MM-dd');
            var _url = thisObj.VoucherServiceUrl, _id = "", _action = "";
            if (!thisObj.IsUpdate) {
                _url += '/CreateTransaction';
            }
            else {
                _url += '/UpdateTransaction';
                if (thisObj.UpdateID != null) {
                    _id = 'ID="' + thisObj.UpdateID + '"';
                    _action = 'Action="UPDATE"';
                }
            }
            pInputValue = $.string.Format(templateMaster, $(thisObj.ControlIDs.txtCode).attr('IDValue'), $(thisObj.ControlIDs.txtRefID).val(), thisObj.ServerOptions.RefType, txtDate, amount, $(thisObj.ControlIDs.txtNo).val(), $(thisObj.ControlIDs.txtNote).val(), _id, _action, amount);
            pInputValue += inputDetail;
            $.messager.confirm(thisObj.ObjMesseage.SaveTitle, thisObj.ObjMesseage.SaveConfirm, function (r) {
                if (r) {
                    FWS.System.IO.Ajax({
                        url: _url,
                        type: 'POST',
                        data: { InputValue: pInputValue },
                        success: function (data, textStatus, jqXHR) {
                            var data = $(data).find("string").text();
                            data = eval("(" + data + ")");
                            if (data && data.IsSuccessfull == 'True') {
                                $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                                thisObj.ClearForm();
                                thisObj.SetDafaultValue();
                            }
                            else
                                $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        }
                    });
                }
            });
        }
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
    Grid: {
        GridId: '#[INSTANT]PaymentPartner_Grid',
        GridView: '#gview_[INSTANT]PaymentPartner_Grid',
        GridPager: '[INSTANT]PaymentPartner_GridPage',
        optionClient: "",
        IDRowEdit: 0,

        Clear: function () {
            var thisObj = this;
            $(thisObj.GridId).jqGrid("clearGridData");
        },
        DeleteRow: function (rowID) {
            var thisObj = this;
            $(thisObj.GridId + " tr[id='" + rowID + "']").addClass("DeleteClass");
            $(thisObj.GridId).setCell(rowID, 'Status', 'DELETE', '');
            //$(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[1], TotalAmount: thisObj.TotalAmount().split("|")[0] });
        },
        UnDeleteRow: function (rowID) {
            var thisObj = this;
            $(thisObj.GridId + " tr[id='" + rowID + "']").removeClass("DeleteClass");
            $(thisObj.GridId).setCell(rowID, 'Status', '0', '');
            //$(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[1], TotalAmount: thisObj.TotalAmount().split("|")[0] });
        },
        Load: function (funcPara) {
            var thisObj = this,
                obj = Mods.ACore.PaymentPartner[INSTANT];
            thisObj.optionClient = {
                gridUrl: "../Mods/ACore/Service/VoucherService.asmx/GetGrid",
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: funcPara,
                    gridID: obj.ServerOptions.GridID
                },
                pager: thisObj.GridPager,
                colNames: colNamePaymentPartner_[INSTANT],
                colModel: colModelPaymentPartner_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    obj.Grid.SetDataEditDetail(rowid);
                },
                loadComplete: function () {

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionPaymentPartner_[INSTANT], thisObj.optionClient);
            //jQuery(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.CreateAutoCompleteGrid();
            thisObj.SetFormatType();
            thisObj.Events();
        },
        TotalAmount: function () {
            var totalAMT = 0.0;
            var AMT = 0.0;
            var thisObj = this;
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '') {
                    if (objRow.Status != "DELETE")
                        totalAMT += $.parseFloat(objRow.TotalAmount, 'n', 'vi-VN');
                    AMT += $.parseFloat(objRow.Amount, 'n', 'vi-VN');
                }
            });
            return AMT + "|" + totalAMT;
        },
        Reload: function (options) {
            if (options) {
                this.optionClient.extraParams.inputValue = options;
                $(this.GridId).clearGridData();
                this.RefreshCurrentPage();
            }
            else {
                $(this.GridId).clearGridData();
                this.Load();
            }
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        SetDataEditDetail: function (rowID) {
            var thisObj = Mods.ACore.PaymentPartner[INSTANT], grid = this, $control = null;
            this.IDRowEdit = rowID;
            var objRow = $(this.GridId).jqGrid('getRowData', rowID);
            $(grid.GridView + " #gs_RefNo").val(objRow.RefNo).attr("IDValue", objRow.ID);
            $(grid.GridView + " #gs_PartnerName").val(objRow.PartnerName).attr("IDValue", objRow.PartnerID);
            $(grid.GridView + " #gs_RefDate").val(objRow.RefDate);
            $(grid.GridView + " #gs_MST").val(objRow.MST);
            $(grid.GridView + " #gs_Amount").numberbox('setValue', thisObj.FormatUS(objRow.Amount));
            $(grid.GridView + " #gs_UnPayAmount").numberbox('setValue', thisObj.FormatUS(objRow.UnpayAmount));
            $(grid.GridView + " #gs_PayedAmount").numberbox('setValue', thisObj.FormatUS(objRow.PayedAmount));
            $(grid.GridView + " #gs_PayAmount").numberbox('setValue', thisObj.FormatUS(objRow.PayAmount));
        },
        InsertGridLocal: function () {
            var thisObj = Mods.ACore.PaymentPartner[INSTANT], grid = this;
            var $control = null;
            var refID = '', refNo = '', refDate = '', partnerName = '', partnerID = '',
                amount = '', unpayAmount = '', payedAmount = '', payAmount = '', mst = '',
            $control = $(grid.GridView + " #gs_PartnerName");
            if ($control.length > 0) {
                partnerName = $control.val();
                partnerID = $control.attr('IDValue') || '';
            }
            $control = $(grid.GridView + " #gs_RefDate");
            if ($control.length > 0)
                refDate = $control.val();
            $control = $(grid.GridView + " #gs_RefNo");
            if ($control.length > 0) {
                refNo = $control.val();
                refID = $control.attr('IDValue');
            }
            $control = $(grid.GridView + " #gs_Amount");
            if ($control.length > 0)
                amount = $control.numberbox('getValue') || $control.val();
            $control = $(grid.GridView + " #gs_PayedAmount");
            if ($control.length > 0)
                payedAmount = $control.numberbox('getValue') || $control.val();
            $control = $(grid.GridView + " #gs_UnPayAmount");
            if ($control.length > 0)
                unpayAmount = $control.numberbox('getValue') || $control.val();
            $control = $(grid.GridView + " #gs_MST");
            if ($control.length > 0)
                mst = $control.val();

            $control = $(grid.GridView + " #gs_PayAmount");
            if ($control.length > 0)
                payAmount = $control.val();
            if (payAmount == '' || payAmount == 0)
                payAmount = $control.numberbox('getValue');

            var dataRow = {
                ID: refID,
                RefNo: refNo,
                RefDate: refDate,
                PartnerID: partnerID,
                PartnerName: partnerName,
                MST: mst,
                Amount: amount,
                UnPayAmount: unpayAmount,
                PayedAmount: payedAmount,
                PayAmount: payAmount
            };
            console.log("::DATAROW,", dataRow);
            if (this.IDRowEdit == 0) {
                dataRow.ID = NumRow++ + '-' + dataRow.ID;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first');
            }
            else {
                dataRow.ID = this.IDRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.IDRowEdit = 0;
            }
            $(grid.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
        },
        SetFormatType: function () {
            var thisObj = this;
            var $control = null;
            $control = $(thisObj.GridView + " #gs_Amount");
            if ($control.length > 0)
                $control.attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $control = $(thisObj.GridView + " #gs_PayedAmount");
            if ($control.length > 0)
                $control.attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $control = $(thisObj.GridView + " #gs_UnPayAmount");
            if ($control.length > 0)
                $control.attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $control = $(thisObj.GridView + " #gs_PayAmount");
            if ($control.length > 0)
                $control.attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        },
        Events: function () {
            var thisObj = this;
            $(thisObj.GridView + " #gs_Amount, " + thisObj.GridView + " #gs_PayedAmount, " + thisObj.GridView + " #gs_UnPayAmount").attr('readonly', 'readonly');
            $(thisObj.GridView + " #gs_RefDate, " + thisObj.GridView + " #gs_PartnerName, " + thisObj.GridView + " #gs_MST").attr('readonly', 'readonly');

            $(thisObj.GridView + " input[type=text]").focus(function () { $(this).select(); });
            $(thisObj.GridView + " #gs_RefNo").bind('blur', function (evt) {
                $(thisObj.GridView + " #gs_PayAmount").focus();
            });
            $(thisObj.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_PayAmount' || _controlid == 'gs_UnPayAmount' || _controlid == 'gs_PayedAmount' || _controlid == 'gs_Amount') {
                    if (typeof $(thisObj.GridView + " #gs_RefNo").attr('idvalue') != 'undefined')
                        thisObj.InsertGridLocal();
                }
            });

            $(thisObj.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                if ($(thisObj.GridId + " tr[id='" + rowID + "']").hasClass("DeleteClass"))
                    thisObj.UnDeleteRow(rowID);
                else
                    thisObj.DeleteRow(rowID);
            });
        },
        CreateAutoCompleteGrid: function () {
            var grid = this, _url = "../Mods/ACore/Service/VoucherService.asmx",
                thisObj = Mods.ACore.PaymentPartner[INSTANT];
            var $control = $(grid.GridView + " #gs_RefNo");
            if ($control.length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_RefNo", _url + "/GetTransactionListAutoComplete", {
                    width: 378,
                    cacheLength: 12,
                    minChars: 1,
                    max: 10,
                    delay: 500,
                    autoFill: false,
                    mustMatch: false,
                    scrollHeight: 220,
                    extraParams: {
                        inputValue: function () {
                            return $.string.Format("FilterCode='CustomerPayment' PartnerID='{0}' Code='{1}'", $(thisObj.ControlIDs.txtCode).attr("IDValue") || '', $control.val())
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[1] + " - " + data[2];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    var $controltext = null;
                    if (item.length > 0) {
                        $controltext = $(grid.GridView + " #gs_PartnerName");
                        if ($controltext.length > 0)
                            $controltext.val(item[2]).attr('IDValue', item[3]);
                        $controltext = $(grid.GridView + " #gs_RefDate");
                        if ($controltext.length > 0) {
                            var _date = $.format(new Date(item[4]), 'd', FWS_SERVER_CONFIG.Culture);
                            $controltext.val(_date);
                        }
                        $controltext = $(grid.GridView + " #gs_RefNo");
                        if ($controltext.length > 0)
                            $controltext.attr('IDValue', item[0]);
                        $controltext = $(grid.GridView + " #gs_Amount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', item[7]);
                        $controltext = $(grid.GridView + " #gs_PayAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', item[6]);

                        $controltext = $(grid.GridView + " #gs_PayedAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', item[12]);
                        $controltext = $(grid.GridView + " #gs_UnPayAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', item[11]);
                    }
                    else {
                        $controltext = $(grid.GridView + " #gs_PartnerName");
                        if ($controltext.length > 0)
                            $controltext.val('');
                        $controltext = $(grid.GridView + " #gs_RefDate");
                        if ($controltext.length > 0)
                            $controltext.val('');
                        $controltext = $(grid.GridView + " #gs_RefNo");
                        if ($controltext.length > 0)
                            $controltext.removeAttr('IDValue');
                        $controltext = $(grid.GridView + " #gs_Amount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', 0);
                        $controltext = $(grid.GridView + " #gs_PayAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', 0);
                        $controltext = $(grid.GridView + " #gs_PayedAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', 0);
                        $controltext = $(grid.GridView + " #gs_UnPayAmount");
                        if ($controltext.length > 0)
                            $controltext.numberbox('setValue', 0);
                    }
                });
            }
        }
    }
};
$(function () {
    Mods.ACore.PaymentPartner[INSTANT].Init();
});
