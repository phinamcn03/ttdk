if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};

if (typeof Precision == 'undefined') Precision = 0;
if (typeof Groupseparator == 'undefined') Groupseparator = ',';
if (typeof NumRow == 'undefined') NumRow = 1;

Mods.ACore.Voucher[INSTANT] = {
    ServiceUrl: '../Mods/AP/Service/PurchaseOrderService.asmx',
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
        vendorCode: '#[INSTANT]Voucher-txtVendorCode',
        vendorName: "#[INSTANT]Voucher-txtVendorName",
        taxNo: "#[INSTANT]Voucher-txtTax",
        address: "#[INSTANT]Voucher-txtAddress",
        contact: "#[INSTANT]Voucher-txtContact",
        note: "#[INSTANT]Voucher-txtNote",
        account: "#[INSTANT]Voucher-txtAccount",
        refID: "#[INSTANT]Voucher-txtReferenceID",
        vourcherDate: "#[INSTANT]Voucher-txtVourcherDate",
        vourcherNo: "#[INSTANT]Voucher-txtVourcherNo",
        objectType: "#[INSTANT]Voucher-txtObject",
        objectCode: '#[INSTANT]Voucher-txtCode',
        objectCode: '#[INSTANT]Voucher-txtName',
        objectCode: '#[INSTANT]Voucher-txtContent',

        btnSave: "#[INSTANT]Voucher-btnSave",
        btnNew: "#[INSTANT]Voucher-btnNew",
        btnClear: "#[INSTANT]Voucher-btnClear",
        btnSave: "#[INSTANT]Voucher-btnSave",
        btnBack: "#[INSTANT]Voucher-btnBack",
        btnPost: "#[INSTANT]Voucher-btnPost",
        btnUnPost: "#[INSTANT]Voucher-btnUnPost",
        btnDelete: "#[INSTANT]Voucher-btnDelete",
        btnPrint: "#[INSTANT]Voucher-btnPrint",

        formID: "#[INSTANT]Voucher-Form"
    },
    ServerOptions: Voucher_Instant['[INSTANT]'],
    /*Control*/
    Init: function () {
        this.Load();
        this.Event();
        this.Grid.Load("");
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

                        $(thisObj.ControlIDs.vourcherNo).val(data.RefNo);
                        $(thisObj.ControlIDs.note).val(data.Note);
                        var _date = jQuery.format(new Date(data.RefDate.substring(0, data.RefDate.lastIndexOf("/") + 5)), "d", FWS_SERVER_CONFIG.Culture);
                      //  var _date = $.format(new Date(data.RefDate), 'd', FWS_SERVER_CONFIG.Culture);
                       // console.log(_date);
                        $(thisObj.ControlIDs.vourcherDate).datebox("setValue", _date);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
        var _funcPara = $.string.Format("TransactionID='{0}' RefType='{1}'", options.ID, options.RefType);
        thisObj.Grid.optionClient.extraParams.inputValue = _funcPara;
        thisObj.Grid.RefreshCurrentPage();
        //  thisObj.Grid.Load(_funcPara);
        thisObj.LoadControl({ back: '' });
    },
    LoadPerson: function (options) {
        var thisObj = this;
        var _inputValuePers = $.string.Format("<InputValue ID='{0}' />", options.PartnerID);
        FWS.System.IO.Ajax({
            url: thisObj.VoucherServiceUrl + '/GetPerson',
            type: 'POST',
            data: { inputValue: _inputValuePers },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(thisObj.ControlIDs.vendorName).val(data.Name);
                        $(thisObj.ControlIDs.address).val(data.Address);
                        $(thisObj.ControlIDs.taxNo).val(data.TaxNo);
                        $(thisObj.ControlIDs.contact).val(data.ContactName);
                        $(thisObj.ControlIDs.vendorCode).val(data.Code).attr("IDValue", data.ID);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    DateBox: null,
    Load: function () {
        var thisObj = this;
        thisObj.DateBox = FWS.System.IO.Datebox(thisObj.ControlIDs.vourcherDate);
        //AutoComplete
        thisObj.CreateAutocomplete();
        thisObj.LoadControl({ back: 'none' });
        thisObj.CreateCombobox();
        thisObj.SetDafaultValue();
    },
    LoadControl: function (options) {
        var thisObj = this;
        //Remove some control not exist
        $(thisObj.ControlIDs.btnBack).css('display', options.back);
        if (thisObj.ServerOptions.Instant.indexOf('Order') > -1)
            $(".cVoucher_Account").css('display', 'none');
        else
            $(".cVoucher_Account").css('display', '');
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnSave).click(function () {
            var validate = $(thisObj.ControlIDs.formID).form('validate');
            if (validate)
                thisObj.SaveOrder();
        });
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.IsUpdate = false;
            thisObj.ClearForm();
            thisObj.SetDafaultValue();
        });
        $(thisObj.ControlIDs.btnClear).click(function () {
            thisObj.ClearForm();
            thisObj.SetDafaultValue();
        });
        $(thisObj.ControlIDs.btnBack).click(function () {
            thisObj.Back();
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetDataEditDetail(rowID);
        });
        $(document).bind('keydown', 'Ctrl+s', function (evt) {
            thisObj.SaveOrder();
            return false;
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
        FWS.System.IO.Autocomplete(thisObj.ControlIDs.vendorCode, thisObj.VoucherServiceUrl + '/GetPersonAutoComplete', {
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
                    return $.string.Format("<InputValue RefType='{0}' PersonType='{1}' Code='{2}' />", thisObj.ServerOptions.RefType, '2', $(thisObj.ControlIDs.vendorCode).val())
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
        FWS.System.IO.Autocomplete(thisObj.ControlIDs.vendorName, thisObj.VoucherServiceUrl + '/GetPersonAutoComplete', {
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
                    return $.string.Format("<InputValue RefType='{0}' PersonType='{1}' Name='{2}' />", thisObj.ServerOptions.RefType, '2', $(thisObj.ControlIDs.vendorName).val())
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
            $(thisObj.ControlIDs.vendorCode).val(item[0]);
            thisObj.SetFormValue(_data);
        });
    },
    CreateCombobox: function () {
        var thisObj = this;
        if ($(".cVoucher_Account").css('display') != 'none') {
            FWS.System.IO.Combobox(thisObj.ControlIDs.account, thisObj.VoucherServiceUrl + '/GetAccountList', {
                data: { inputValue: 'FilterCode="CustomerPayment"' },
                valueField: 'value',
                textField: 'text'
            });
        }
    },
    ClearForm: function () {
        $(this.ControlIDs.formID + ' input').val('').removeAttr('IDValue');
        this.UpdateID = null;
        this.Grid.Clear();
    },
    SetFormValue: function (options) {
        var thisObj = this;
        if (options) {
            $(thisObj.ControlIDs.vendorName).val(options.name);
            $(thisObj.ControlIDs.taxNo).val(options.tax);
            $(thisObj.ControlIDs.address).val(options.address);
            $(thisObj.ControlIDs.contact).val(options.contact);
            $(thisObj.ControlIDs.vendorCode).attr("IDValue", options.code);
        }
        else {
            $(thisObj.ControlIDs.vendorName).val('');
            $(thisObj.ControlIDs.taxNo).val('');
            $(thisObj.ControlIDs.address).val('');
            $(thisObj.ControlIDs.contact).val('');
            $(thisObj.ControlIDs.vendorCode).removeAttr("IDValue");
        }
    },
    SetDafaultValue: function () {
        this.GetRefNo();
        if (FWS_SERVER_CONFIG && FWS_SERVER_CONFIG.Date) {
            var date = new Date(FWS_SERVER_CONFIG.Date);
            var sCustom = $.format(date, 'd', FWS_SERVER_CONFIG.Culture);
            this.DateBox.datebox('setValue', sCustom);
        }
    },
    GetRefNo: function () {
        var thisObj = this; ;
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/GetRefNo',
            type: 'POST',
            data: { inputValue: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(thisObj.ControlIDs.vourcherNo).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    FormatUS: function (val) {
        return $.parseFloat(val, 'n', FWS_SERVER_CONFIG.Culture);
    },
    GetCustomizeGL: function () {
        var outTemplate = ''
        var templateAccountDetail = '<AccountDetail DebitAccount="{0}" CreditAccount="{1}" Amount="{2}"/>';
        if (typeof Mods.ACore.CusGL == 'undefined')
            return ''
        else if (typeof Mods.ACore.CusGL.Grid == 'undefined')
            return ''
        else {
            var objData = $(Mods.ACore.CusGL.Grid.GridId).jqGrid('getRowData');
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '')
                    outTemplate += $.string.Format(templateAccountDetail, objRow.DebitAccountCode, objRow.CreditAccountCode, objRow.Amount);
            });
        }
        return outTemplate;
    },
    SaveOrder: function () {
        var CParaToXML = {
            ToXML: function (name, value) {
                if (value && value != "") {
                    if (typeof (value) == "object") {
                        return
                    }
                    return $.string.Format(" {0}='{1}'", name, value);
                }
                return "";
            }
        };
        var thisObj = this,
            amount = 0,
            pInputValue = "";
        var templateMaster = '',
            templateDetail = '',
            inputDetail = "";

        var objData = $(thisObj.Grid.GridId).jqGrid('getRowData');

        $.each(objData, function (index, objRow) {
            if (objRow.ID != '' && objRow.Status != "DELETE") {
                var rowAmount = thisObj.FormatUS(objRow.Amount), _accountid = '', _totalAmount = '', _taxID = '', _stockID = '', _inVentoryAcc = '', _inTaxAcc = '', _outTaxAcc = '';
                amount += rowAmount;
                //item detail
                if (objRow.ItemID)
                    templateDetail += CParaToXML.ToXML("ItemID", objRow.ItemID);
                if (objRow.Quantity)
                    templateDetail += CParaToXML.ToXML("Quantity", thisObj.FormatUS(objRow.Quantity));
                if (objRow.Price)
                    templateDetail += CParaToXML.ToXML("Price", thisObj.FormatUS(objRow.Price));
                if (objRow.DebitAccount)
                    templateDetail += CParaToXML.ToXML("DebitAccount", objRow.DebitAccount);
                if (objRow.CreditAccount)
                    templateDetail += CParaToXML.ToXML("CreditAccount", objRow.CreditAccount);
                if (rowAmount)
                    templateDetail += CParaToXML.ToXML("Amount", rowAmount);
                if (objRow.TotalAmount)
                    templateDetail += CParaToXML.ToXML("TotalAmount", thisObj.FormatUS(objRow.TotalAmount));
                if (objRow.TaxID)
                    templateDetail += CParaToXML.ToXML("TaxID", objRow.TaxID);
                if (objRow.StockID)
                    templateDetail += CParaToXML.ToXML("StockID", objRow.StockID);
                if (objRow.InventoryAccount)
                    templateDetail += CParaToXML.ToXML("InventoryAccount", objRow.InventoryAccount);
                if (objRow.InputTaxAccount)
                    templateDetail += CParaToXML.ToXML("InputTaxAccount", objRow.InputTaxAccount);
                if (objRow.OutputTaxAccount)
                    templateDetail += CParaToXML.ToXML("OutputTaxAccount", objRow.OutputTaxAccount);
                inputDetail += $.string.Format("<ItemDetail {0} />", templateDetail);
            }
        });
        if (amount > 0) {
            var sVourcherDate = $(thisObj.ControlIDs.vourcherDate).datebox('getValue'),
            dVourcherDate = $.parseDate(sVourcherDate, 'd', FWS_SERVER_CONFIG.Culture),
            vourcherDate = $.format(dVourcherDate, 'yyyy-MM-dd');
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
            templateMaster += CParaToXML.ToXML("UserID", "1");
            templateMaster += CParaToXML.ToXML("PartnerID", $(thisObj.ControlIDs.vendorCode).attr('IDValue'));
            templateMaster += CParaToXML.ToXML("ReferenceID", $(thisObj.ControlIDs.refID).val());
            if (thisObj.ServerOptions.RefType)
                templateMaster += CParaToXML.ToXML("RefType", thisObj.ServerOptions.RefType);
            if (vourcherDate) {
                templateMaster += CParaToXML.ToXML("RefDate", vourcherDate);
            }
            else {
                templateMaster += CParaToXML.ToXML("RefDate", $.format(new Date(), "yyyy-mm-dd"));
            }
            if (amount) {
                templateMaster += CParaToXML.ToXML("Amount", amount);
                templateMaster += CParaToXML.ToXML("TotalAmount", amount);
            }
            if ($(thisObj.ControlIDs.vourcherNo).length > 0)
                templateMaster += CParaToXML.ToXML("RefNo", $(thisObj.ControlIDs.vourcherNo).val());
            if ($(thisObj.ControlIDs.note).length > 0)
                templateMaster += CParaToXML.ToXML("Note", $(thisObj.ControlIDs.note).val());
            if (_id)
                templateMaster += CParaToXML.ToXML("ID", _id);
            if (_action)
                templateMaster += CParaToXML.ToXML("Action", _action);
            pInputValue += $.string.Format("<InputValue {0} />", templateMaster);
            pInputValue += inputDetail + thisObj.GetCustomizeGL();
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
    OptionsControllerGL: {
        template: 'Mods/ACore/CustomizeGL',
        data: "{a:'--', b:'--'}",
        id: "CustomizeGL-Window",
        width: 400,
        height: 350,
        title: "Customize GL",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.ACore.CusGL.DefaultInit(opts);
        }
    },
    LoadEntryGL: function () {
        this.OptionsControllerGL.rowID = this.ServerOptions.Instant;
        FWS.Web.CTemplateController.LoadPopup(this.OptionsControllerGL);
    },

    Grid: {
        GridId: '#[INSTANT]Voucher_Grid',
        GridView: '#gview_[INSTANT]Voucher_Grid',
        GridPager: '[INSTANT]Voucher_GridPage',
        optionClient: "",
        IDRowEdit: 0,

        Clear: function () {
            var thisObj = this;
            $(thisObj.GridId).jqGrid("clearGridData");
            $(thisObj.GridView + " #gs_Quantity").numberbox('setValue', 1);
        },
        DeleteRow: function (rowID) {
            var thisObj = this;
            $(thisObj.GridId + " tr[id='" + rowID + "']").addClass("DeleteClass");
            $(thisObj.GridId).setCell(rowID, 'Status', 'DELETE', '');
            $(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[1], TotalAmount: thisObj.TotalAmount().split("|")[0] });
        },
        UnDeleteRow: function (rowID) {
            var thisObj = this;
            $(thisObj.GridId + " tr[id='" + rowID + "']").removeClass("DeleteClass");
            $(thisObj.GridId).setCell(rowID, 'Status', '0', '');
            $(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[1], TotalAmount: thisObj.TotalAmount().split("|")[0] });
        },
        Load: function (funcPara) {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: "../Mods/ACore/Service/VoucherService.asmx/GetGrid",
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: funcPara,
                    gridID: Mods.ACore.Voucher[INSTANT].ServerOptions.GridID
                },
                pager: thisObj.GridPager,
                colNames: colNameVoucher_[INSTANT],
                colModel: colModelVoucher_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    Mods.ACore.Voucher[INSTANT].Grid.SetDataEditDetail(rowid);
                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
                },
                gridComplete: function () {
                    $(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[0], TotalAmount: thisObj.TotalAmount().split("|")[1] });
                }
            };
            new CGrid().Init(thisObj.GridId, optionVoucher_[INSTANT], thisObj.optionClient);
            jQuery(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            if (Mods.ACore.Voucher[INSTANT].ServerOptions.Instant.indexOf('Order') < 0) {
                jQuery(thisObj.GridId).navButtonAdd('#' + thisObj.GridPager, {
                    caption: "Customize GL",
                    buttonicon: "ui-icon-del",
                    onClickButton: function () {
                        Mods.ACore.Voucher[INSTANT].LoadEntryGL()
                        //  console.log(Mods.ACore.Voucher[INSTANT]);
                    },
                    position: "right"
                });
            }
            thisObj.CreateAutoCompleteGrid();
            thisObj.SetFormatType();
            thisObj.Events();
            var $control = $(thisObj.GridView + " #gs_Quantity");
            if ($control.length > 0)
                $control.val(1);
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
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        SetDataEditDetail: function (rowID) {
            var thisObj = Mods.ACore.Voucher[INSTANT], grid = this;
            this.IDRowEdit = rowID, _control = null;
            var objRow = $(this.GridId).jqGrid('getRowData', rowID);
            $(grid.GridView + " #gs_ItemCode").val(objRow.ItemCode).attr("IDValue", objRow.ItemID);
            $(grid.GridView + " #gs_Price").numberbox('setValue', thisObj.FormatUS(objRow.Price));
            $(grid.GridView + " #gs_Amount").numberbox('setValue', thisObj.FormatUS(objRow.Amount));
            $(grid.GridView + " #gs_Quantity").numberbox('setValue', thisObj.FormatUS(objRow.Quantity));
            $(grid.GridView + " #gs_ItemName").val(objRow.ItemName);
            $(grid.GridView + " #gs_Note").val(objRow.Note);
            $(grid.GridView + " #gs_Unit").val(objRow.Unit);

            if ($(grid.GridView + " #gs_StockName").length > 0)
                $(grid.GridView + " #gs_StockName").val(objRow.StockName).attr("IDValue", objRow.StockID);

            if ($(grid.GridView + " #gs_DebitAccountCode").length > 0)
                $(grid.GridView + " #gs_DebitAccountCode").val(objRow.DebitAccountCode).attr("IDValue", objRow.DebitAccount);

            if ($(grid.GridView + " #gs_CreditAccountCode").length > 0)
                $(grid.GridView + " #gs_CreditAccountCode").val(objRow.CreditAccountCode).attr("IDValue", objRow.CreditAccount);

            if ($(grid.GridView + " #gs_InventoryAccountCode").length > 0)
                $(grid.GridView + " #gs_InventoryAccountCode").val(objRow.InventoryAccountCode).attr("IDValue", objRow.InventoryAccount);
            if ($(grid.GridView + " #gs_InputTaxAccountCode").length > 0)
                $(grid.GridView + " #gs_InputTaxAccountCode").val(objRow.InputTaxAccountCode).attr("IDValue", objRow.InputTaxAccount);
            if ($(grid.GridView + " #gs_OutputTaxAccountCode").length > 0)
                $(grid.GridView + " #gs_OutputTaxAccountCode").val(objRow.OutputTaxAccountCode).attr("IDValue", objRow.OutputTaxAccount);

            if ($(grid.GridView + " #gs_TotalAmount").length > 0)
                $(grid.GridView + " #gs_TotalAmount").numberbox('setValue', thisObj.FormatUS(objRow.TotalAmount));
            $(grid.GridView + " #gs_Quantity").focus();

            _control = $(grid.GridView + " #gs_Tax")
            if (_control.length > 0) {
                var _taxData = _control.combobox("getData");
                $.each(_taxData, function (index, item) {
                    if (item.id == objRow.TaxID) {
                        _control.combobox("setValue", item.id_value);
                        return;
                    }
                });
            }
        },
        InsertGridLocal: function () {
            var thisObj = Mods.ACore.Voucher[INSTANT], grid = this;
            var _tax = '', _taxID = '', creditAcc = '', creditAccName = '', debitAcc = '',
                debitAccName = '', total = '', stock = '', stockName = '',
                unit = '', note = '', InTaxAcc = '', InTaxAccName = '', OutTaxAcc = '', OutTaxAccName = '', InventoryAcc = '', InventoryAccName = '',
                _quantity = '', _price = '', _amount = 0, _itemCode, _itemID = '', _itemName = '';
            var $control = null;

            $control = $(grid.GridView + " #gs_Quantity");
            if ($control.length > 0)
                _quantity = $control.numberbox('getValue');
            if (_quantity == '')
                _quantity = $control.val();

            $control = $(grid.GridView + " #gs_Price");
            if ($control.length > 0)
                _price = $control.numberbox('getValue');
            if (_price == '')
                _price = $control.val();

            $control = $(grid.GridView + " #gs_Amount");
            if ($control.length > 0)
                _amount = $control.numberbox('getValue');
            $control = $(grid.GridView + " #gs_CreditAccountCode");
            if ($control.length > 0) {
                creditAcc = $control.attr("IDValue");
                creditAccName = $control.val();
            }
            $control = $(grid.GridView + " #gs_DebitAccountCode");
            if ($control.length > 0) {
                debitAcc = $control.attr("IDValue");
                debitAccName = $control.val();
            }
            $control = $(grid.GridView + " #gs_InputTaxAccountCode");
            if ($control.length > 0) {
                InTaxAcc = $control.attr("IDValue");
                InTaxAccName = $control.val();
            }
            $control = $(grid.GridView + " #gs_OutputTaxAccountCode");
            if ($control.length > 0) {
                OutTaxAcc = $control.attr("IDValue");
                OutTaxAccName = $control.val();
            }
            $control = $(grid.GridView + " #gs_InventoryAccountCode");
            if ($control.length > 0) {
                InventoryAcc = $control.attr("IDValue");
                InventoryAccName = $control.val();
            }
            $control = $(grid.GridView + " #gs_TotalAmount");
            if ($control.length > 0) {
                total = $control.numberbox('getValue');
            }
            $control = $(grid.GridView + " #gs_StockName");
            if ($control.length > 0) {
                stockName = $control.val();
                stock = $control.attr("IDValue");
            }
            $control = $(grid.GridView + " #gs_Unit");
            if ($control.length > 0) {
                unit = $control.val();
            }
            $control = $(grid.GridView + " #gs_Note");
            if ($control.length > 0) {
                note = $control.val();
            }
            $control = $(grid.GridView + " #gs_Tax");
            if ($control.length > 0) {
                var _arrTax = $control.combobox('getValue').split('|');
                _taxID = _arrTax[0];
                _tax = (_arrTax[1] * 1.0) / 100;
            }
            $control = $(grid.GridView + " #gs_ItemCode");
            if ($control.length > 0) {
                _itemCode = $control.val();
                _itemID = $control.attr("IDValue");
            }
            if (_itemCode == '') {
                $control.focus();
                return;
            }
            $control = $(grid.GridView + " #gs_ItemName");
            if ($control.length > 0) {
                _itemName = $control.val();
            }
            if (_amount == '' || _amount == 0) {
                $(grid.GridView + " #gs_Price").focus();
                return;
            }
            var dataRow = {
                ItemName: _itemName,
                ItemCode: _itemCode,
                Unit: unit,
                Note: note,
                ItemID: _itemID,
                Price: _price,
                Quantity: _quantity,
                Amount: _amount,
                CreditAccountCode: creditAccName,
                DebitAccountCode: debitAccName,
                CreditAccount: creditAcc,
                DebitAccount: debitAcc,
                InputTaxAccountCode: InTaxAccName,
                InputTaxAccount: InTaxAcc,
                StockID: stock,
                StockName: stockName,
                TotalAmount: total,
                Tax: _tax,
                TaxID: _taxID,
                //AR
                OutputTaxAccountCode: OutTaxAccName,
                OutputTaxAccount: OutTaxAcc,
                InventoryAccountCode: InventoryAccName,
                InventoryAccount: InventoryAcc
            };
            if (this.IDRowEdit == 0) {
                dataRow.ID = NumRow++;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
            }
            else {
                dataRow.ID = this.IDRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.IDRowEdit = 0;
            }
            $(grid.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');

            $control = $(grid.GridView + " #gs_Price");
            if ($control.length > 0) {
                $control.numberbox('setValue', '');
            }
            $control = $(grid.GridView + " #gs_Amount");
            if ($control.length > 0) {
                $control.numberbox('setValue', '');
            }
            $control = $(grid.GridView + " #gs_Quantity");
            if ($control.length > 0) {
                $control.numberbox('setValue', 1);
            }
            $control = $(grid.GridView + " #gs_ItemCode");
            if ($control.length > 0) {
                $control.focus();
            }
            $(grid.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: grid.TotalAmount(), Amount: grid.TotalAmount().split("|")[0], TotalAmount: grid.TotalAmount().split("|")[1] });
        },
        SetFormatType: function () {
            var thisObj = this;
            $(thisObj.GridView + " #gs_Quantity").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $(thisObj.GridView + " #gs_Price").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $(thisObj.GridView + " #gs_Amount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $(thisObj.GridView + " #gs_TotalAmount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        },
        Events: function () {
            var thisObj = this;
            if (thisObj.GridView == "gview_CSJournalVoucher_Grid") {
                $(thisObj.GridView + " #gs_Amount," + thisObj.GridView + " #gs_Unit").attr('readonly', 'readonly');
            }
            $(thisObj.GridView + " input[type=text]").focus(function () { $(this).select(); });

            $(thisObj.GridView + " #gs_Quantity").keyup(function (e) {
                var _quantity = $(thisObj.GridView + " #gs_Quantity").val(),
                    _price = $(thisObj.GridView + " #gs_Price").numberbox('getValue');

                //    if (_quantity == "") {
                //       $(thisObj.GridView + " #gs_Quantity").focus();
                //        return;
                //   }
                if (!isNaN(_price)) {
                    $(thisObj.GridView + " #gs_Amount").numberbox('setValue', (_quantity * _price));
                    if ($(thisObj.GridView + " #gs_Tax").length > 0) {
                        var _tax = $(thisObj.GridView + " #gs_Tax").combobox('getValue').split('|')[1];

                        var _totalAmount = _quantity * _price * (1 + (_tax * 1 / 100));
                        $(thisObj.GridView + " #gs_TotalAmount").numberbox('setValue', _totalAmount);
                    }
                }
            });
            $(thisObj.GridView + " #gs_Price").keyup(function (e) {
                var _quantity = $(thisObj.GridView + " #gs_Quantity").numberbox('getValue'),
                    _price = $(thisObj.GridView + " #gs_Price").val();
                //  if (_price == "") {
                //       $(thisObj.GridView + " #gs_Price").focus();
                //      return;
                //  }
                if (!isNaN(_price)) {
                    $(thisObj.GridView + " #gs_Amount").numberbox('setValue', (_quantity * _price));
                    if ($(thisObj.GridView + " #gs_Tax").length > 0) {
                        var _tax = $(thisObj.GridView + " #gs_Tax").combobox('getValue').split('|')[1];
                        var _totalAmount = _quantity * _price * (1 + (_tax * 1 / 100));
                        $(thisObj.GridView + " #gs_TotalAmount").numberbox('setValue', _totalAmount);
                    }
                }
            });
            $(thisObj.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Price' || _controlid == 'gs_Note' || _controlid == 'gs_Amount' || _controlid == 'gs_TotalAmount')
                    thisObj.InsertGridLocal();
                else if (_controlid == 'gs_ItemCode') {
                    if ($.trim($(thisObj.GridView + " #gs_ItemCode").val()) == "")
                        $(thisObj.GridView + " #gs_ItemCode").focus();
                }
                else if (_controlid == 'gs_StockName') {
                    if ($.trim($(thisObj.GridView + " #gs_StockName").val()) == "")
                        $(thisObj.GridView + " #gs_StockName").focus();
                }
                else if (_controlid == 'gs_DebitAccountCode') {
                    if ($.trim($(thisObj.GridView + " #gs_DebitAccountCode").val()) == "")
                        $(thisObj.GridView + " #gs_DebitAccountCode").focus();
                }
                else if (_controlid == 'gs_CreditAccountCode') {
                    if ($.trim($(thisObj.GridView + " #gs_CreditAccountCode").val()) == "")
                        $(thisObj.GridView + " #gs_CreditAccountCode").focus();
                }
            });
            $(thisObj.GridView + " #gs_Price").bind('blur', function (evt) {
                $(thisObj.GridView + " #gs_Note").focus();
            });
            $(thisObj.GridView + " #gs_Note" || thisObj.GridView + " #gs_ItemCode" || thisObj.GridView + " #gs_Quantity").keydown(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9') {
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
            var grid = this, _url = "../Mods/ACore/Service/VoucherService.asmx";
            FWS.System.IO.Autocomplete(grid.GridView + " #gs_ItemCode", _url + "/GetProductAutoComplete", {
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
                        return $.string.Format("Code='{0}' Name ='{1}'", $(grid.GridView + " #gs_ItemCode").val(), '')
                    },
                    currPage: 1,
                    numberRowOfPage: 50
                },
                formatItem: function (data, i, total) {
                    if (data.length > 0)
                        return data[0] + " - " + data[1];
                    return '';
                },
                formatResult: function (data) {
                    if (data.length > 0)
                        return data[0];
                    return "";
                }
            }).result(function (event, item) {
                if (item.length > 0) {
                    $(grid.GridView + " #gs_ItemName").val(item[1]);
                    $(grid.GridView + " #gs_ItemCode").attr('IDValue', item[2]);
                    $(grid.GridView + " #gs_Unit").val(item[3]);
                    if (Mods.ACore.Voucher[INSTANT].ServerOptions.Instant.substring(0, 2) == 'AR') {
                        $(grid.GridView + " #gs_Price").numberbox('setValue', item[6]);
                        $(grid.GridView + " #gs_Amount").numberbox('setValue', item[6] * 1);
                    }
                }
                else {
                    $(grid.GridView + " #gs_ItemName").val('');
                    $(grid.GridView + " #gs_ItemCode").removeAttr('IDValue');
                    $(grid.GridView + " #gs_Unit").val('');
                    $(grid.GridView + " #gs_Price").numberbox('setValue', '0');
                }
            });

            if ($(grid.GridView + " #gs_StockName").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_StockName", _url + "/GetStockAutoComplete", {
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
                            return $.string.Format("Code='{0}' Name ='{1}'", $(grid.GridView + " #gs_StockName").val(), '')
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[0];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_StockName").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_StockName").removeAttr('IDValue');
                });
            }

            if ($(grid.GridView + " #gs_CreditAccountCode").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_CreditAccountCode", _url + "/GetAccountAutoComplete", {
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
                            var val = " ";
                            if ($(grid.GridView + " #gs_CreditAccountCode").val() != "")
                                val = $(grid.GridView + " #gs_CreditAccountCode").val();
                            return $.string.Format('Code="{0}" FilterCode="CustomerPaymentCredit"', val)
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_CreditAccountCode").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_CreditAccountCode").removeAttr('IDValue');
                });
            }

            if ($(grid.GridView + " #gs_DebitAccountCode").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_DebitAccountCode", _url + "/GetAccountAutoComplete", {
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
                            var val = " ";
                            if ($(grid.GridView + " #gs_DebitAccountCode").val() != "")
                                val = $(grid.GridView + " #gs_DebitAccountCode").val();
                            return $.string.Format('Code="{0}" FilterCode="CustomerPaymentDebit"', val);
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_DebitAccountCode").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_DebitAccountCode").removeAttr('IDValue');
                });
            }
            if ($(grid.GridView + " #gs_InventoryAccountCode").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_InventoryAccountCode", _url + "/GetAccountAutoComplete", {
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
                            return $.string.Format('Code="{0}" FilterCode="{1}"', $(grid.GridView + " #gs_InventoryAccountCode").val(), "Inventory");
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_InventoryAccountCode").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_InventoryAccountCode").removeAttr('IDValue');
                });
            }
            if ($(grid.GridView + " #gs_InputTaxAccountCode").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_InputTaxAccountCode", _url + "/GetAccountAutoComplete", {
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
                            return $.string.Format('Code="{0}" FilterCode="{1}"', $(grid.GridView + " #gs_InputTaxAccountCode").val(), "ItemInputTax");
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_InputTaxAccountCode").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_InputTaxAccountCode").removeAttr('IDValue');
                });
            }
            if ($(grid.GridView + " #gs_OutputTaxAccountCode").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_OutputTaxAccountCode", _url + "/GetAccountAutoComplete", {
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
                            return $.string.Format('Code="{0}" FilterCode="{1}"', $(grid.GridView + " #gs_OutputTaxAccountCode").val(), "ItemOutputTax");
                        },
                        currPage: 1,
                        numberRowOfPage: 50
                    },
                    formatItem: function (data, i, total) {
                        if (data.length > 0)
                            return data[0] + " - " + data[1];
                        return '';
                    },
                    formatResult: function (data) {
                        if (data.length > 0)
                            return data[1];
                        return "";
                    }
                }).result(function (event, item) {
                    if (item.length > 0)
                        $(grid.GridView + " #gs_OutputTaxAccountCode").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_OutputTaxAccountCode").removeAttr('IDValue');
                });
            }
            if ($(grid.GridView + " #gs_Tax").length > 0) {
                FWS.System.IO.Combobox(grid.GridView + " #gs_Tax", _url + '/GetTaxList', {
                    data: { inputValue: '' },
                    valueField: 'id_value',
                    textField: 'text',
                    onSelect: function (record) {
                        var _quantity = $(grid.GridView + " #gs_Quantity").numberbox('getValue'),
                            _price = $(grid.GridView + " #gs_Price").numberbox('getValue');
                        if (_price == "") {
                            $(grid.GridView + " #gs_Price").focus();
                            return;
                        }
                        if (_quantity == "") {
                            $(grid.GridView + " #gs_Quantity").focus();
                            return;
                        }
                        if (!isNaN(_price)) {
                            $(grid.GridView + " #gs_Amount").numberbox('setValue', (_quantity * _price));
                            if ($(grid.GridView + " #gs_Tax").length > 0) {
                                var _taxvalue = record.id_value.split('|')[1] * 1;
                                var _totalAmount = _quantity * _price * (1 + (_taxvalue / 100));
                                $(grid.GridView + " #gs_TotalAmount").numberbox('setValue', _totalAmount);
                            }
                        }
                    },
                    onLoadSuccess: function () {
                        $(grid.GridView).find('input[class^="combo-text"]').attr('style', 'width:77px !important;');
                    }
                });
            }
        }
    }
};
$(function () {
    Mods.ACore.Voucher[INSTANT].Init();
});
