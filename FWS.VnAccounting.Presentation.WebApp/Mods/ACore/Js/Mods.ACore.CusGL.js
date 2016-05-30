if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};
if (typeof NumRowGL == 'undefined') NumRowGL = 1;
Mods.ACore.CusGL = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.INSTANT = rowID;
        this.Grid.Reload();
        switch (rowID) {
            //            case "-1":                                                                 
            //                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").hide();                                                                 
            //                $("#UnitEntry-btnSearch").show();                                                                 
            //                this.ShowSearch();                                                                 
            //                break;                                                                 
            //            case "0":                                                                 
            //                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").show();                                                                 
            //                $("#UnitEntry-btnSearch").hide();                                                                 
            //                break;                                                                 
            //            default:                                                                 
            //                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").show();                                                                 
            //                $("#UnitEntry-btnSearch").hide();                                                                 
            //                this.ShowInfo({ ID: rowID });                                                                 
            //                break;                                                                 
        }
    },
    Properties: {
        windowID: "",
        INSTANT: "0"
    },
    Init: function () {
        //this.Grid.Load();
        this.Event();
    },
    Event: function () {
        var thisObj = this;
        // var windowID = "#" + $('#CustomizeGL-Content').parent().attr('id');
        $("#CusGL-btnClose").click(function () {
            $(thisObj.Properties.windowID).window('close');
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetDataEditDetail(rowID);
        });
    },
    Grid: {
        GridUrl: ' ',
        GridId: '#GLGrid',
        GridView: '#gview_GLGrid',
        GridPager: 'GLGridpages',
        IdRowEdit: 0,
        iPage: 1,
        iNumRow: 12,
        optionClient: "",
        Load: function () {
            var thisObj = this;

            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colCusGL,
                colModel: colModelCusGL,
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
                    jQuery(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
                    thisObj.SetFormatType();
                }
            };
            new CGrid().Init(thisObj.GridId, optionServerCusGL, thisObj.optionClient);
            this.LoadData();
            this.LoadAutoComplete();

            this.Event();
        },
        SetDataEditDetail: function (rowID) {
            var grid = this;
            grid.IdRowEdit = rowID, _control = null;
            var objRow = $(this.GridId).jqGrid('getRowData', rowID);
            $(grid.GridView + " #gs_Amount").val(objRow.Amount);
            if ($(grid.GridView + " #gs_DebitAccount").length > 0)
                $(grid.GridView + " #gs_DebitAccount").val(objRow.DebitAccount).attr("IDValue", objRow.DebitAccountCode);

            if ($(grid.GridView + " #gs_CreditAccount").length > 0)
                $(grid.GridView + " #gs_CreditAccount").val(objRow.CreditAccount).attr("IDValue", objRow.CreditAccountCode);
            $(grid.GridView + " #gs_Quantity").focus();
        },
        InsertGridLocal: function () {
            var grid = this;
            var _amount = '', _debitacc = '', _debitaccID = '', _creditacc = '', _creditaccID = '';
            var $control = null;
            $control = $(grid.GridView + " #gs_CreditAccount");
            if ($control.length > 0) {
                _creditaccID = $control.attr("IDValue");
                _creditacc = $control.val();
            }
            if (_creditaccID == '') {
                $control.focus();
                return;
            }
            $control = $(grid.GridView + " #gs_DebitAccount");
            if ($control.length > 0) {
                _debitaccID = $control.attr("IDValue");
                _debitacc = $control.val();
            }
            if (_debitaccID == '') {
                $control.focus();
                return;
            }
            $control = $(grid.GridView + " #gs_Amount");
            if ($control.length > 0)
                _amount = $control.val();
            if (_amount == '' || _amount == 0) {
                $control.focus();
                return;
            }
            var dataRow = {
                ID: '',
                DebitAccountCode: _debitaccID,
                DebitAccount: _debitacc,
                CreditAccount: _creditacc,
                CreditAccountCode: _creditaccID,
                Amount: _amount
            };
            if (grid.IdRowEdit == 0) {
                dataRow.ID = NumRow++;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
            }
            else {
                dataRow.ID = this.IdRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(grid.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.IdRowEdit = 0;
            }
            $(grid.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
            $control = $(grid.GridView + " #gs_DebitAccount");
            if ($control.length > 0) {
                $control.focus();
            }
        },
        SetFormatType: function () {
            var thisObj = this;
            //  $(thisObj.GridView + " #gs_Amount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        },
        Event: function () {
            var thisObj = this;
            $(thisObj.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Amount')
                    thisObj.InsertGridLocal();
                else if (_controlid == 'gs_DebitAccount') {
                    if ($.trim($(thisObj.GridView + " #gs_DebitAccount").val()) == "")
                        $(thisObj.GridView + " #gs_DebitAccount").focus();
                }
                else if (_controlid == 'gs_CreditAccount') {
                    if ($.trim($(thisObj.GridView + " #gs_CreditAccount").val()) == "")
                        $(thisObj.GridView + " #gs_CreditAccount").focus();
                }
            });
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        LoadAutoComplete: function () {

            var grid = this, _url = "../Mods/ACore/Service/VoucherService.asmx";
            if ($(grid.GridView + " #gs_CreditAccount").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_CreditAccount", _url + "/GetAccountAutoComplete", {
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
                            if ($(grid.GridView + " #gs_CreditAccount").val() != "")
                                val = $(grid.GridView + " #gs_CreditAccount").val();
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
                        $(grid.GridView + " #gs_CreditAccount").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_CreditAccount").removeAttr('IDValue');
                });
            }

            if ($(grid.GridView + " #gs_DebitAccount").length > 0) {
                FWS.System.IO.Autocomplete(grid.GridView + " #gs_DebitAccount", _url + "/GetAccountAutoComplete", {
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
                            return $.string.Format('Code="{0}" FilterCode="CustomerPaymentDebit" PaymentAccount="{1}"', $(grid.GridView + " #gs_DebitAccount").val(), '');
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
                        $(grid.GridView + " #gs_DebitAccount").attr('IDValue', item[2]);
                    else
                        $(grid.GridView + " #gs_DebitAccount").removeAttr('IDValue');
                });
            }
        },
        CheckLoopGird: function (_data) {
            var length = _data.length;
            for (var i = 0; i < length; i++) {
                var _credit = _data[i].CreditAccountCode;
                var _debit = _data[i].DebitAccountCode;
                for (var j = i + 1; j < length; j++) {
                    var _credit1 = _data[j].CreditAccountCode;
                    var _debit1 = _data[j].DebitAccountCode;
                    if (_credit == _credit1 && _debit == _debit1) {
                        _data[i].Amount = $.parseFloat(_data[i].Amount, 'n', 'vi-VN'); + $.parseFloat(_data[j].Amount, 'n', 'vi-VN');
                        _data.splice(j, 1);
                        length = _data.length;
                    }
                    
                }
            }
            //            $.each(data, function (index, value) {
            //                if (item.DebitAccountCode == value.DebitAccountCode && item.CreditAccountCode == value.CreditAccountCode) {
            //                    console.log("true");
            //                    item.Amount = value.Amount + item.Amount;
            //                    console.log(index);
            //                    console.log(item);
            //                    return index;
            //                }
            //            });
            return _data;
        },
        LoadData: function () {
            var thisObj = this;
            var idINSTANT = eval("Mods.ACore.Voucher" + Mods.ACore.CusGL.Properties.INSTANT);
            var objData = $(idINSTANT.Grid.GridId).jqGrid('getRowData');
            var data = [];
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '') {
                    var rowPrice = {
                        ID: objRow.ID,
                        DebitAccountCode: objRow.DebitAccountCode,
                        DebitAccount: objRow.DebitAccount,
                        CreditAccount: objRow.CreditAccount,
                        CreditAccountCode: objRow.CreditAccountCode,
                        Amount: objRow.Amount
                    }
                    
                    var rowTax = {
                        ID: objRow.ID,
                        DebitAccountCode: objRow.InputTaxAccount,
                        DebitAccount: objRow.InputTaxAccountCode,
                        CreditAccount: objRow.CreditAccount,
                        CreditAccountCode: objRow.CreditAccountCode,
                        Amount: $.parseFloat(objRow.TotalAmount, 'n', 'vi-VN'); - $.parseFloat(objRow.Amount, 'n', 'vi-VN');
                    }
                    data.push(rowPrice);
                    data.push(rowTax);
                }
            });
            data = thisObj.CheckLoopGird(data);
            NumRowGL = data.length;
            for (var i = 0; i < data.length; i++)
                $(this.GridId).jqGrid('addRowData', data[i].ID, data[i], 'last')

        }
    }
};
$(function () {

    Mods.ACore.CusGL.Init();
});