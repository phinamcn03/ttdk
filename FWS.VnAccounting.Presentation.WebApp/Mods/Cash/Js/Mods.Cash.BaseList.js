if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Cash == 'undefined')
    Mods.Cash = {};
if (typeof NumRowBT == 'undefined') NumRowBT = 1; //kh051 NumRowVoucher
if (typeof NumRowVoucher == 'undefined') NumRowVoucher = 1;

Mods.Cash.BaseList[INSTANT] = {
    ServiceUrl: "../Mods/Cash/Service/CashService.asmx",
    CoreServiceUrl: "../Mods/_Core/Service/DropDownData.asmx",
    ServerOptions: Cash_Instant['[INSTANT]'],
    TransID: 0,
    Properties: {},
    IsUpdate: true,
    Init: function () {
        var thisObj = this;
        thisObj.Load();
        thisObj.GridButtoan.Load();
        thisObj.GridInvoice.Load();
        thisObj.Event();
        this.SetTitleForm();

    },
    SetTitleForm: function () {
        var thisObj = this;
        var options = {}
        var RefType = parseInt(thisObj.ServerOptions.RefType);
        switch (RefType) {
            case 11:
                options.title = 'Phiếu thu tiền';
                break;
            case 12:
                options.title = 'Phiếu chi tiền';
                break;
            case 13:
                options.title = 'Giấy báo có';
                break;
            case 11:
                options.title = 'Giấy báo nợ';
                break;
        }
        FWS.Web.CTemplateController.SetTitle(options.title);
    },
    DefaultInit: function (optionsController, options) {
        var thisObj = this;
        thisObj.ServerOptions.RefType = options.RefType;
        thisObj.TransID = options.ID;
        thisObj.LoadContent(options);
        thisObj.GridButtoan.RefreshCurrentPage(options);
        thisObj.GridInvoice.RefreshCurrentPage(options);
        thisObj.SetTitleForm();
        this.Properties.parentOptions = optionsController.parentOptions;
    },
    ClearForm: function () {
        var thisObj = this;
        thisObj.TransID = -1;
        $(thisObj.ControlIDs.txtExchangeRate).val(1);
        $(thisObj.ControlIDs.txtPartnerName).val('');
        $(thisObj.ControlIDs.txtPartnerCode).val('').attr('IDValue', '');
        $(thisObj.ControlIDs.txtDebitAmount).val('').attr('IDValue', '');
        thisObj.GetRefNo();
        $(thisObj.ControlIDs.txtDetail).val('');
        $(thisObj.ControlIDs.txtPayers).val('');
        $(thisObj.ControlIDs.txtCurrencyType).combobox('setValue', 4);
        $(thisObj.ControlIDs.txtObjectType).combobox('setValue', 1);
        var _date = $.format(new Date(FWS_SERVER_CONFIG.Date), 'd', FWS_SERVER_CONFIG.Culture);
        $(thisObj.ControlIDs.txtVoucherDate).datebox("setValue", _date);
        thisObj.GridButtoan.ClearGrid();
        thisObj.GridInvoice.ClearGrid();
    },
    LoadContent: function (options) {
        var thisObj = this;
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/GetTransaction', //
            type: 'POST',
            data: { inputValue: $.string.Format('RefType="{0}" ID="{1}"', options.RefType, options.ID) },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(thisObj.ControlIDs.txtExchangeRate).val(data.ExchangeRate);
                        $(thisObj.ControlIDs.txtPartnerName).val(data.PartnerName);
                        $(thisObj.ControlIDs.txtPartnerCode).val(data.PartnerCode).attr('IDValue', data.PartnerID);
                        $(thisObj.ControlIDs.txtRefNo).val(data.RefNo);
                        $(thisObj.ControlIDs.txtDetail).val(data.Note);
                        $(thisObj.ControlIDs.txtPayers).val(data.ContactName);
                        $(thisObj.ControlIDs.txtCurrencyType).combobox('setValue', data.CurrencyID);
                        $(thisObj.ControlIDs.txtObjectType).combobox('setValue', data.ObjectType);
                        var _date = $.format(new Date(data.RefDate), 'd', FWS_SERVER_CONFIG.Culture);
                        $(thisObj.ControlIDs.txtVoucherDate).datebox("setValue", _date);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    ObjMesseage: {
        SaveTitle: 'Lưu Phiếu',
        SaveTransConfirm: 'Bạn có muốn lưu phiếu thu này?',
        PostTitle: 'Post Phiếu',
        TransConfirm: 'Succesful!',
        PostTransTitle: 'Post',
        PostTransConfirm: 'Ban co muon post phiếu nay!',
        UnPostTransTitle: 'Unpost ',
        UnPostTransConfirm: 'Ban co muon unpost phieu nay!',
        TransFail: 'Create fail!!!',
        DeleteTitle: 'Xóa chung tu',
        DeleteConfirm: 'Bạn có chăc muốn xóa chung tu này?'
    },
    ControlIDs: {
        txtObjectType: '#[INSTANT]Cash-txtObjectType',
        txtRefNo: '#[INSTANT]Cash-txtRefNo',
        txtVoucherDate: '#[INSTANT]Cash-txtVoucherDate',
        txtDebitAmount: '#[INSTANT]Cash-txtDebitAmount',
        txtPartnerCode: '#[INSTANT]Cash-txtPartnerCode',
        txtPartnerName: '#[INSTANT]Cash-txtPartnerName',
        txtCurrencyType: '#[INSTANT]Cash-txtCurrencyType',
        txtExchangeRate: '#[INSTANT]Cash-txtExchangeRate',
        txtPayers: '#[INSTANT]Cash-txtPayers',
        txtDetail: '#[INSTANT]Cash-txtDetail',
        btnAddNew: '#[INSTANT]Cash-btnAddNew',
        btnSearch: '#[INSTANT]Cash-btnSearch',
        btnSave: '#[INSTANT]Cash-btnSave',
        btnDel: '#[INSTANT]Cash-btnDel',
        btnPost: '#[INSTANT]Cash-btnPost',
        btnUnPost: '#[INSTANT]Cash-btnUnPost',
        btnClear: '#[INSTANT]Cash-btnClear', //
        btnBack: '#[INSTANT]Cash-btnBack'


    },
    DateBox: null,
    GetRefNo: function () {
        var thisObj = this;
        FWS.System.IO.Ajax({
            url: thisObj.CoreServiceUrl + '/GetRefNo',
            type: 'POST',
            data: { inputValue: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(thisObj.ControlIDs.txtRefNo).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Load: function () {
        var thisObj = this;
        thisObj.GetRefNo();
        FWS.System.IO.Combobox(thisObj.ControlIDs.txtObjectType, thisObj.CoreServiceUrl + '/GetObjectType',
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    $(thisObj.ControlIDs.txtPartnerName).val(data.PartnerName);
                    $(thisObj.ControlIDs.txtPartnerCode).val(data.PartnerCode).attr('IDValue', data.PartnerID);
                }
            }
        );
        FWS.System.IO.Combobox(thisObj.ControlIDs.txtCurrencyType, thisObj.CoreServiceUrl + '/CurrencyType',
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                defaultData: 4,
                onSelect: function (record) {
                    $(thisObj.ControlIDs.txtExchangeRate).val(record.ExchangeRate);
                },
                onLoadSuccess: function () {
                    $(thisObj.ControlIDs.txtExchangeRate).val(1);

                }
            }
        );

        var _ac12 = FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtDebitAmount, thisObj.CoreServiceUrl + "/GetAccountList", {
            width: 523,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue FilterCode="Cash" UserID="{0}" Code="{1}"/>', "1", $(thisObj.ControlIDs.txtDebitAmount).val())
                }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                $(thisObj.ControlIDs.txtDebitAmount).attr('IDValue', data[0]);
                return data[2];
            }
        }).result(function (event, item) {
            //            $("#gs_DebitAmount").val(item[2]);
            //            $("#gs_DebitAmount").attr('IDValue', item[0]);
        });
        var _ac3 = FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtPartnerCode, thisObj.CoreServiceUrl + "/GetPersonList", {
            width: 523,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue UserID="{0}" Session="{1}" PersonType="{2}" Code ="{3}" Name="{4}" />', "1", "", $(thisObj.ControlIDs.txtObjectType).combobox('getValue'), $(thisObj.ControlIDs.txtPartnerCode).val(), '');
                }
            },
            formatItem: function (data, i, total) {
                return data[0] + '|' + data[1];
            },
            formatResult: function (data) {
                //                $(thisObj.ControlIDs.txtPayers).focus();
                return data[0];
            }
        }).result(function (event, item) {
            $(thisObj.ControlIDs.txtPartnerName).val(item[1]);
            $(thisObj.ControlIDs.txtPartnerCode).attr('IDValue', item[2]);

        });
        var _ac4 = FWS.System.IO.Autocomplete(thisObj.ControlIDs.txtPartnerName, thisObj.CoreServiceUrl + "/GetPersonList", {
            width: 523,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue UserID="{0}" Session="{1}" PersonType="{2}" Code ="{3}" Name="{4}" />', "1", "", $(thisObj.ControlIDs.txtObjectType).combobox('getValue'), '', $(thisObj.ControlIDs.txtPartnerName).val());
                }
            },
            formatItem: function (data, i, total) {
                return data[1] + '|' + data[0];
            },
            formatResult: function (data) {
                return data[1];
            }
        }).result(function (event, item) {
            $(thisObj.ControlIDs.txtPartnerCode).val(item[0]);
            $(thisObj.ControlIDs.txtPartnerCode).attr('IDValue', item[2]);
        });


        thisObj.DateBox = FWS.System.IO.Datebox(thisObj.ControlIDs.txtVoucherDate);
        var _date = $.format(new Date(FWS_SERVER_CONFIG.Date), 'd', FWS_SERVER_CONFIG.Culture);
        thisObj.DateBox.datebox("setValue", _date);

        //        FWS.System.IO.Datebox(thisObj.ControlIDs.txtVoucherDate);
        //        var date = new Date(FWS_SERVER_CONFIG.Date);
        //        var sCustom = $.format(date, 'dd/MM/yyyy');
        //        $(thisObj.ControlIDs.txtVoucherDate).datebox('setValue', sCustom);


    },

    UpdateTransaction: function (Method) {
        var thisObj = this;
        var SessionID = 1;
        var Action = '';
        var RefType = thisObj.ServerOptions.RefType;
        var RefNo = $(thisObj.ControlIDs.txtRefNo).val();
        var UserID = $.cookie("FWS:ACCOUNTING:USER.ID");
        var _inputValue = '';
        var options = {};
        switch (Method) {
            case 'Save':
                var TransactionDetail = thisObj.GridInvoice.GetData();
                var ItemDetail = thisObj.GridButtoan.GetData();
                var template = '<InputValue UserID="{0}" Session="{1}" Action="{2}" RefType="{3}" RefNo="{4}" RefDate="{5}" PersonRole="{6}" PartnerID="{7}" PaymentName="{8}" Note="{9}" CurrencyID="{10}" ExchangeRate="{11}" Amount="{12}" ObjectType="{13}" ID="{14}"/>';
                Action = "INSERT";
                if (thisObj.TransID > 0)
                    Action = "UPDATE";

                //  console.log('22222,', $(thisObj.ControlIDs.txtVoucherDate).datebox("getValue"));
                // var RefDate = $.parseDate($(thisObj.ControlIDs.txtVoucherDate).val(), 'd', FWS_SERVER_CONFIG.Culture);

                var RefDate = FWS_SERVER_CONFIG.Date; // $.parseDate(FWS_SERVER_CONFIG.Date, 'd', FWS_SERVER_CONFIG.Culture);
                var PersonRole = $(thisObj.ControlIDs.txtObjectType).combobox('getValue');
                var PartnerID = $(thisObj.ControlIDs.txtPartnerCode).attr('IDValue');
                var PaymentName = $(thisObj.ControlIDs.txtPayers).val();

                var Note = $(thisObj.ControlIDs.txtDetail).val();
                var CurrencyID = $(thisObj.ControlIDs.txtCurrencyType).combobox('getValue');
                var ExchangeRate = $(thisObj.ControlIDs.txtExchangeRate).val();
                var Amount = $.parseFloat(thisObj.GridButtoan.TotalAmount, 'n', FWS_SERVER_CONFIG.Culture);
                var ObjectType = $(thisObj.ControlIDs.txtObjectType).combobox('getValue');
                _inputValue = $.string.Format(template, UserID, SessionID, Action, RefType, RefNo, RefDate, PersonRole, PartnerID, PaymentName, Note, CurrencyID, ExchangeRate, Amount, ObjectType, thisObj.TransID);
                options = { title: thisObj.ObjMesseage.SaveTitle, confirm: thisObj.ObjMesseage.DeleteConfirm, inputValue: _inputValue + TransactionDetail + ItemDetail };
                break;
            case 'Post':
                _inputValue = $.string.Format('<InputValue UserID="{0}" Session="1" TransactionID="{1}" RefType="{2}" Action="POST" />', UserID, thisObj.TransID, RefType);
                options = { title: thisObj.ObjMesseage.PostTransTitle, confirm: thisObj.ObjMesseage.PostTransConfirm, inputValue: _inputValue };
                break;
            case 'UnPost':
                _inputValue = $.string.Format('<InputValue UserID="{0}" Session="1" TransactionID="{1}" RefType="{2}" Action="UNPOST" />', UserID, thisObj.TransID, RefType);
                options = { title: thisObj.ObjMesseage.UnPostTransTitle, confirm: thisObj.ObjMesseage.UnPostTransConfirm, inputValue: _inputValue };
                break;
            case 'Delete':
                _inputValue = $.string.Format('<InputValue UserID="{0}" Session="1" TransactionID="{1}" RefType="{2}" Action="DELETE" />', UserID, thisObj.TransID, RefType);
                options = { title: thisObj.ObjMesseage.DeleteTitle, confirm: thisObj.ObjMesseage.UnPostTransConfirm, inputValue: _inputValue };
                break;
        }
        thisObj.ExecuteAction(options);
    },
    Back: function () {
        var parentOptions = this.Properties.parentOptions;
        if (parentOptions && this.IsUpdate)
            FWS.Web.CTemplateController.LoadContent(parentOptions);
    },
    Event: function () {
        var thisObj = this;
        //       Event

        $(thisObj.ControlIDs.btnBack).click(function () {
            thisObj.Back();
        });
        $(thisObj.ControlIDs.btnSave).click(function () {
            thisObj.UpdateTransaction('Save');
        });
        $(thisObj.ControlIDs.btnClear).click(function () {
            thisObj.ClearForm();
        });
        $(thisObj.ControlIDs.btnPost).click(function () { thisObj.UpdateTransaction('Post'); });
        $(thisObj.ControlIDs.btnUnPost).click(function () { thisObj.UpdateTransaction('UnPost'); });
        $(thisObj.ControlIDs.btnDel).click(function () { thisObj.UpdateTransaction('Delete'); });

    },

    ExecuteAction: function (options) {
        var thisObj = this;
        $.messager.confirm(options.title, options.confirm, function (r) {
            if (r) {

                FWS.System.IO.Ajax({
                    url: thisObj.ServiceUrl + '/UpdateTransaction',
                    type: 'POST',
                    data: { inputValue: $.trim(options.inputValue) },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                            data = eval("(" + data + ")");
                            if (data)
                                $.messager.alert(data.Name, data.Description);
                        }
                    }

                });
            }
        });
    },

    /***************************************************************************GridButtoan******************************************************/

    GridButtoan: {
        GridUrl: '../Mods/Cash/Service/CashService.asmx/GetGridTransaction',
        GridId: '#[INSTANT]Buttoan_Grid',
        GridView: '#gview_[INSTANT]Buttoan_Grid',
        //      GridPager: '[INSTANT]Buttoan_GridPage',
        IDRowEdit: 0,
        IdRowSelected: 0,
        optionClient: {},
        TotalAmount: 0,
        Load: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridButtoan;
            var height = $(window).height() - 308 - 166 - parseInt(optionInvoice_[INSTANT].height);
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: $.string.Format('RefType="{0}" TransactionID="{1}" ', -1, -1),
                    gridID: Mods.Cash.BaseList[INSTANT].ServerOptions.ButtoanGridID
                },
                footerrow: true,
                userDataOnFooter: true,
                // pager: thisObj.GridPager,
                aHeight: height,
                colNames: colNameButtoan_[INSTANT],
                colModel: colModelButtoan_[INSTANT],
                onSelectRow: function (rowid, e) {
                    thisObj.IdRowSelected = rowid;
                },
                complete: function (data) {
                    if (data != undefined) {
                        if (data.length > 0) {
                            //                            console.log(data[0], txtDebitAmount);
                            //                            console.log( $(Mods.Cash.BaseList[INSTANT].ControlIDs.txtDebitAmount));
                            $(Mods.Cash.BaseList[INSTANT].ControlIDs.txtDebitAmount).val(data[0].CreditAccountName).attr('IDValue', data[0].CreditAccount);
                        }
                    }
                },
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridButtoan.DelRow({0})"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridButtoan.EditRow({0})"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                    thisObj.SetRowFooter();
                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    thisObj.IdRowSelected = rowid;
                }
            };
            new CGrid().Init(thisObj.GridId, optionButtoan_[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.CreateAutocompleteGrid();
            thisObj.Event();
        },
        DelRow: function (rowID) {
            var thisObj = this;
            if (!$(thisObj.GridId + " tr[id='" + rowID + "']").hasClass('DeleteClass')) {
                $(thisObj.GridId + " tr[id='" + rowID + "']").addClass("DeleteClass");
                $(thisObj.GridId).setCell(rowID, 'Status', 'DELETE', '');
            }
            else {
                $(thisObj.GridId + " tr[id='" + rowID + "']").removeClass("DeleteClass");
                $(thisObj.GridId).setCell(rowID, 'Status', 'Insert', '');
            }
            thisObj.SetRowFooter();
        },
        EditRow: function (rowID) {
            var thisObj = this;
            thisObj.IDRowEdit = rowID;
            var data = $(thisObj.GridId).jqGrid('getRowData', rowID);
            $(thisObj.GridView + " #gs_CreditAccountName").val(data.CreditAccountName).attr('IDValue', data.CreditAccount);
            $(thisObj.GridView + " #gs_Amount").val(data.Amount)
            $(thisObj.GridView + " #gs_Description").val(data.Description)

            // console.log(data);
        },
        CreateAutocompleteGrid: function () {
            var thisObj = this;
            var _ac3 = FWS.System.IO.Autocomplete(thisObj.GridView + " #gs_CreditAccountName", Mods.Cash.BaseList[INSTANT].CoreServiceUrl + "/GetAccountList", {
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
                        return $.string.Format('<InputValue FilterCode="CashCorrespond" UserID="{0}" Code="{1}"/>', "1", $("#gs_CreditAccountName").val())
                    }
                },
                formatItem: function (data, i, total) {
                    return data[2];
                },
                formatResult: function (data) {
                    return data[2];
                }
            }).result(function (event, item) {
                $("#gs_CreditAccountName").val(item[2]);
                $("#gs_CreditAccountName").attr('IDValue', item[0]);
            });
        },
        Event: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridButtoan;
            $(thisObj.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Amount' || _controlid == 'gs_Description')
                    thisObj.UpdateGridLocal();
                else if (_controlid == 'gs_CreditAccount') {
                    if ($.trim($(thisObj.GridView + " #gs_CreditAccount").val()) == "")
                        $(thisObj.GridView + " #gs_CreditAccount").focus();
                }
            });
        },
        RefreshCurrentPage: function (options) {

            var _funcPara = $.string.Format('TransactionID="{0}" RefType="{1}" FilterCode="TransactionAttachment" ', options.ID, options.RefType);
            this.optionClient.extraParams.inputValue = _funcPara;

            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        GetSelectedRow: function () {
            var thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || [];
        },
        UpdateGridLocal: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridButtoan;
            var grid = Mods.Cash.BaseList[INSTANT].GridButtoan.GridView;
            var $control = null;
            var creditID = '', creditName = '', amount = '', Note = '',
            $control = $(thisObj.GridView + " #gs_CreditAccountName");
            if ($control.length > 0) {
                creditName = $control.val();
                creditID = $control.attr('IDValue') || '';
                if (creditName == '') {
                    $control.focus();
                    return;
                }
            }
            $control = $(thisObj.GridView + " #gs_Amount");
            if ($control.length > 0) {
                //amount = $control.numberbox('getValue') || $control.val();
                amount = $control.val();
                if (amount == '') {
                    $control.focus();
                    return;
                }
            }
            $control = $(thisObj.GridView + " #gs_Description");
            if ($control.length > 0)
                Note = $control.val();
            var dataRow = {
                ID: '',
                CreditAccountName: creditName,
                CreditAccount: creditID,
                Amount: amount,
                Description: Note
            };

            if (thisObj.IDRowEdit == 0) {
                dataRow.ID = NumRowBT++;
                $(thisObj.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first');
            }
            else {
                dataRow.ID = thisObj.IDRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridButtoan.DelRow({0})"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridButtoan.EditRow({0})"></span>', dataRow.ID);
                $(thisObj.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                $(thisObj.GridId + " tr[id='" + dataRow.ID + "']").removeClass("DeleteClass");
            }
            $(thisObj.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
            $(thisObj.GridView + " #gs_CreditAccountName").focus();
            thisObj.IDRowEdit = 0;
            thisObj.SetRowFooter();
        },
        ClearGrid: function () {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            $(thisObj.GridId).jqGrid("footerData", 'set', { CreditAccountName: '', Amount: '' });
            $(thisObj.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
        },
        GetData: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridButtoan;
            var grid = Mods.Cash.BaseList[INSTANT].GridButtoan.GridView;
            //   console.log($(thisObj.GridView + " #gs_TotalAmount"));
            //            $(thisObj.GridView + " #gs_TotalAmount").focus();
            //            // var e = jQuery.Event("keydown", { keyCode: 65 });
            //            var e = jQuery.Event("keydown");
            //            e.which = 65; // # Some key code valuev
            //            $('#CashReceiptsCash-txtPayers').val('B');
            //            $('#CashReceiptsCash-txtPayers').trigger(e);

            //$(thisObj.GridView + " #gs_TotalAmount").trigger(e);
            //<ItemDetail CreditAccount="[CreditAccountID]" DebitAccount="[DebitAccountID]" Amount="[Amount]" Note="[Note]" />
            var totalAmount = 0;
            var pattern = '<ItemDetail CreditAccount="{0}" DebitAccount="{1}" Amount="{2}" Note="{3}"/>';
            var DebitAccount = $(Mods.Cash.BaseList[INSTANT].ControlIDs.txtDebitAmount).attr('IDValue');
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            var Result = '';
            for (var i in objData) {
                if (objData[i].Status != 'DELETE') {
                    var Amount = $.parseFloat(objData[i].Amount, 'n', FWS_SERVER_CONFIG.Culture);
                    Result += $.string.Format(pattern, objData[i].CreditAccount, DebitAccount, Amount, objData[i].Description);
                    totalAmount += Amount;
                }
            }
            Mods.Cash.BaseList[INSTANT].GridButtoan.TotalAmount = totalAmount;
            return Result;
        },
        SetRowFooter: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridButtoan;
            var totalAmount = 0;
            var data = $(thisObj.GridId).getRowData();
            $.each(data, function (index, Row) {
                if (Row.Status != 'DELETE') {
                    // totalAmount += parseFloat(Row.Amount);
                    totalAmount += $.parseFloat(Row.Amount, 'n', 'vi-VN');
                    //  totalAmount += $.parseFloat(objRow.Amount, 'n',  $.cookie("FWS:ACCOUNTING:USER.ID"););

                }
            });

            $(thisObj.GridId).jqGrid("footerData", 'set', { CreditAccountName: 'Tổng tiền', Amount: totalAmount });

        }
    },

    /***************************************************GridInvoice*********************************************************************/
    GridInvoice: {
        GridUrl: '../Mods/Cash/Service/CashService.asmx/GetGridInvoice',
        GridId: '#[INSTANT]Invoice_Grid',
        GridView: '#gview_[INSTANT]Invoice_Grid', //gview_CashReceiptsInvoice_Grid
        GridPager: '[INSTANT]Invoice_GridPage',
        IDRowEdit: 0,
        optionClient: {},
        DelRow: function (rowID) {
            var thisObj = this;
            if (!$(thisObj.GridId + " tr[id='" + rowID + "']").hasClass('DeleteClass')) {
                $(thisObj.GridId + " tr[id='" + rowID + "']").addClass("DeleteClass");
                $(thisObj.GridId).setCell(rowID, 'Status', 'DELETE', '');
            }
            else {
                $(thisObj.GridId + " tr[id='" + rowID + "']").removeClass("DeleteClass");
                $(thisObj.GridId).setCell(rowID, 'Status', 'Insert', '');
            }
        },
        EditRow: function (rowID) {
            var thisObj = this;
            thisObj.IDRowEdit = rowID;
            var data = $(thisObj.GridId).jqGrid('getRowData', rowID);
            $(thisObj.GridView + " #gs_VoucherNo").val(data.VoucherNo).attr('IDValue', data.ID);
            $(thisObj.GridView + " #gs_TotalAmount").val(data.TotalAmount);
            $(thisObj.GridView + " #gs_TaxNo").val('');
            $(thisObj.GridView + " #gs_PartnerName").val(data.PartnerName);
            $(thisObj.GridView + " #gs_VoucherDate").val(data.VoucherDate); ;
            $(thisObj.GridView + " #gs_VoucherType").val(data.VoucherType);
            // console.log(data);
        },
        Load: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridInvoice;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: $.string.Format('TransactionID="{0}" RefType="{1}" FilterCode="TransactionAttachment" ', -1, -1)
                },
                // pager: thisObj.GridPager,
                aHeight: optionInvoice_[INSTANT].height,
                colNames: colNameInvoice_[INSTANT],
                colModel: colModelInvoice_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridInvoice.DelRow({0})"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridInvoice.EditRow({0})"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid, iRow, iCol, e) {
                    //  payObj.LoadContent(rowid);
                },
                //readonly

                gridComplete: function () {
                    $(thisObj.GridView + " #gs_TotalAmount").attr('readonly', 'readonly');
                    $(thisObj.GridView + " #gs_TaxNo").attr('readonly', 'readonly');
                    $(thisObj.GridView + " #gs_PartnerName").attr('readonly', 'readonly');
                    $(thisObj.GridView + " #gs_VoucherDate").attr('readonly', 'readonly');
                    $(thisObj.GridView + " #gs_VoucherType").attr('readonly', 'readonly');
                }

            };

            //thisObj.optionClient.extraParams.
            new CGrid().Init(thisObj.GridId, optionInvoice_[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.CreateAutocompleteGrid();
            thisObj.Event();
        },
        CreateAutocompleteGrid: function () {
            var thisObj = this;
            var _ac3 = FWS.System.IO.Autocomplete(thisObj.GridView + " #gs_VoucherNo", Mods.Cash.BaseList[INSTANT].CoreServiceUrl + "/GetTransaction", {
                width: 933,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () {

                        return $.string.Format('<InputValue UserID="{0}" Session="{1}" FilterCode="Payment"  PartnerID="{2}" Code="{3}" />', "1", 0, $(Mods.Cash.BaseList[INSTANT].ControlIDs.txtPartnerCode).attr('IDValue'), $("#gs_VoucherNo").val());
                    }
                },
                formatItem: function (data, i, total) {
                    //  return data[2];
                    return $.string.Format("<div><div class='divVoucherNo'>{0}</div><div class='divRefTypeName'>{1}</div><div class='divRefDate'>{2}</div><div class='divPartnerName'>{3}</div><div class='divTax'>{4}</div><div class='divAmount'>{5}</div><div>", data[1], data[2], data[3], data[4], "", data[5]);
                },
                formatResult: function (data) {
                    return data[1];
                }
            }).result(function (event, item) {
                $(thisObj.GridView + " #gs_TotalAmount").val(item[5]);
                $(thisObj.GridView + " #gs_TaxNo").val('');
                $(thisObj.GridView + " #gs_PartnerName").val(item[4]);
                $(thisObj.GridView + " #gs_VoucherDate").val(item[3]); ;
                $(thisObj.GridView + " #gs_VoucherType").val(item[2]);
                $(thisObj.GridView + " #gs_VoucherNo").attr('IDValue', item[0]);
            });
        },
        Event: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridInvoice;
            $(thisObj.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid != 'gs_VoucherNo')
                    thisObj.UpdateGridLocal();
            });
        },
        UpdateGridLocal: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridInvoice; ;
            var grid = Mods.Cash.BaseList[INSTANT].GridInvoice.GridView;
            var $control = null;
            var itemID = '', voucherNo = '', voucherDate = '', partnerName = '', taxNo = '', totalAmount = '', voucherType = '';
            $control = $(thisObj.GridView + " #gs_VoucherNo");
            if ($control.length > 0) {
                voucherNo = $control.val();
                itemID = $control.attr('IDValue') || '';
                if (voucherNo == '') {
                    $control.focus();
                    return;
                }
            }
            $control = $(thisObj.GridView + " #gs_VoucherDate");
            if ($control.length > 0) {
                //amount = $control.numberbox('getValue') || $control.val();
                voucherDate = $control.val();
                if (voucherDate == '') {
                    $control.focus();
                    return;
                }
            }
            $control = $(thisObj.GridView + " #gs_PartnerName");
            if ($control.length > 0)
                partnerName = $control.val();
            $control = $(thisObj.GridView + " #gs_TaxNo");
            if ($control.length > 0)
                taxNo = $control.val();
            $control = $(thisObj.GridView + " #gs_TotalAmount");
            if ($control.length > 0)
                totalAmount = $control.val();
            $control = $(thisObj.GridView + " #gs_VoucherType");
            if ($control.length > 0)
                voucherType = $control.val();

            var dataRow = {
                ID: '',
                TransID: itemID,
                VoucherNo: voucherNo,
                VoucherDate: voucherDate,
                PartnerName: partnerName,
                TaxNo: taxNo,
                TotalAmount: totalAmount,
                VoucherType: voucherType,
                Action: ''
            };

            if (thisObj.IDRowEdit == 0) {
                dataRow.ID = NumRowVoucher++;
                $(thisObj.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first');
            }
            else {
                dataRow.ID = thisObj.IDRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridInvoice.DelRow({0})"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" onclick="Mods.Cash.BaseList[INSTANT].GridInvoice.EditRow({0})"></span>', dataRow.ID);
                $(thisObj.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                $(thisObj.GridId + " tr[id='" + dataRow.ID + "']").removeClass("DeleteClass");
            }
            thisObj.IDRowEdit = 0;
            $(thisObj.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
            $(thisObj.GridView + " #gs_VoucherNo").focus();
        },
        GetData: function () {
            var thisObj = Mods.Cash.BaseList[INSTANT].GridInvoice; ;
            var grid = Mods.Cash.BaseList[INSTANT].GridInvoice.GridView;
            var pattern = '<TransactionDetail TransactionID="{0}" />';
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            var Result = '';
            for (var i in objData) {
                if (objData[i].Status != 'DELETE')
                    Result += $.string.Format(pattern, objData[i].TransID);
            }
            return Result;
        },
        ClearGrid: function () {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            $(thisObj.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
        },
        RefreshCurrentPage: function (options) {
            var _funcPara = $.string.Format('TransactionID="{0}" RefType="{1}" FilterCode="TransactionAttachment" ', options.ID, options.RefType);
            this.optionClient.extraParams.inputValue = _funcPara;
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        GetSelectedRow: function () {
            var thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || [];
        }
    }

};
$(function () {
    Mods.Cash.BaseList[INSTANT].Init();
});
