if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.Receipt = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServiceReceipt: '../Mods/VouchersExt/Service/Receipt.asmx',
    RefType: 23,
    ControlIDs: {
        btnSave: "#Receipt-btnSave",
        btnDel: "#Receipt-btnDel",
        btnPrintAll: "#Receipt-PrintAll",
        btnPrintPath: "#Receipt-PrintPath",
        txtCodeHD: "#Receipt-txtCodeHD",
        txtVendorCode: "#Receipt-txtVendorCode",

        txtVendorName: "#Receipt-txtVendorName",
        txtPerson: "#Receipt-txtPerson",
        txtReceipt: "#Receipt-txtReceipt",
        txtDate: "#Receipt-txtDate",
        txtTypePayment: "#Receipt-txtTypePayment",
        txtNote: "#Receipt-txtNote",
        txtTodate: "#Receipt-txtTodate",
        txtFromdate: "#Receipt-txtFromdate",
        formID: "#Receipt-Form"
    },
    Init: function () {
        this.CreateControl();
        this.SetDefault();
        this.Grid.Load();
        this.Event();
        // this.ShowInfo(105);
    },
    GetRefNo: function () {
        FWS.System.IO.Ajax({
            url: Mods.VouchersExt.Receipt.ServiceUrl + '/GetNextRefNo',
            type: 'POST',
            data: { inputValue: $.string.Format(' RefType="{0}"', Mods.VouchersExt.Receipt.RefType) },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(Mods.VouchersExt.Receipt.ControlIDs.txtReceipt).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    GetDataContext: function (_data) {
        var thisObj = this;
        thisObj.AutoCompleteID(1, _data[0].ObjectID);
        var date = new Date(_data[0].RefDate);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtReceipt).val(_data[0].RefNo);
        $(thisObj.ControlIDs.txtTypePayment).combobox('setValue', _data[0].PayMethod);
        $(thisObj.ControlIDs.txtPerson).val(_data[0].ContactName);
        $(thisObj.ControlIDs.txtNote).val(_data[0].Description);

    },
    ShowInfo: function (_id) {
        var thisObj = this;

        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='23' ID='{2}'/>", 129, FWS.System.Core.UserID(), _id);
        var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
        var serviceUrl = FWS.Web.Core.URL.ContextData;
        FWS.System.IO.Ajax({
            url: serviceUrl,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: xml },
            dataType: 'xml',
            success: function (data, textStatus, jqXHR) {
                try {
                    data = $.FindInXml(data);
                    data = data.CSV2JSON2();
                    if (data) {
                        thisObj.GetDataContext(data[1]);
                    }
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    ShowInfoCodeHD: function (_id, _reftype) {
        console.log('begin show info code HD');
        var thisObj = this;

        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='{3}' PayStatus='0' RefNo='{2}'/>", 129, FWS.System.Core.UserID(), _id, _reftype);
        var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
        var serviceUrl = FWS.Web.Core.URL.ContextData;
        FWS.System.IO.Ajax({
            url: serviceUrl,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: xml },
            dataType: 'xml',
            success: function (data, textStatus, jqXHR) {
                try {
                    console.log("data", data);
                    data = $.FindInXml(data);
                    data = data.CSV2JSON2();
                    if (data) {
                        thisObj.GetDataContextHD(data[1]);
                    }
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    GetDataContextHD: function (_data) {
        var thisObj = this;
        // console.log(_data[0]);
        thisObj.AutoCompleteID(1, _data[0].WarranterID);
        var date = new Date(_data[0].RefDate);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtReceipt).val(_data[0].RefNo);
        $(thisObj.ControlIDs.txtTypePayment).combobox('setValue', _data[0].PayMethod);
        $(thisObj.ControlIDs.txtPerson).val(_data[0].ContactName);
        $(thisObj.ControlIDs.txtNote).val(_data[0].Description);
        $(thisObj.GridId).footerData('set', { RefNo: 'Tổng:', Amount: thisObj.TotalAmount() });
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#ReceiptEntry-Content').parent().attr('id');
        $(thisObj.ControlIDs.btnSave).click(function () {
            thisObj.ExcuteAction("UPDATE");
        });
        $(thisObj.ControlIDs.btnDel).click(function () {
            thisObj.ExcuteAction("DELETE");
        });
        $(thisObj.ControlIDs.btnPrintAll).click(function () {
            thisObj.Print();
        });
        $(thisObj.ControlIDs.btnPrintPath).click(function () {
            thisObj.Print();
        });
    },
    CreateControl: function () {
        var thisObj = this;
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtDate);
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtFromdate);
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtTodate);
        thisObj.CreateAutocomplete();
    },
    SetDefault: function () {
        var thisObj = this;
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtFromdate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtTodate).datebox('setValue', sCustom);
        thisObj.GetRefNo();
    },
    CreateAutocomplete: function () {
        var thisObj = this;
        var control1 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtVendorCode;
        var control2 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtVendorName;
        var control3 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtCodeHD;
        Mods.VouchersExt.Receipt.AutoCompleteCode(1, control1, "");
        Mods.VouchersExt.Receipt.AutoCompleteName(1, control2, "");
        Mods.VouchersExt.Receipt.AutoCompleteCodeHD(control3);
        var eml = Mods.VouchersExt.Receipt.ControlIDs.txtTypePayment;
        //  var url = "../Mods/Inventory/Service/CStockService.asmx/GetAutoCompleteVendor";
        var url = thisObj.ServiceReceipt + "/GetContextData";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='PayMethod' />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: '',
                onSelect: function (record) {
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function () {
                    // console.log($(Mods.VouchersExt.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    AutoCompleteCodeHD: function (control) {
        var thisObj = this;
        var serviceUrl = this.ServiceReceipt + "/GetContextDataAutoComplete";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='DonDK' Context='Receipt' Name='{2}' />", 129, FWS.System.Core.UserID(), $(thisObj.ControlIDs.txtCodeHD).val());
        FWS.System.IO.Autocomplete(control, serviceUrl, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.HtmlEncode($.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='DonDK' Context='Receipt' Name='{2}' />", 129, FWS.System.Core.UserID(), $(thisObj.ControlIDs.txtCodeHD).val())) },
                clientKey: FWS_SERVER_CONFIG.ClientKey
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                //  $(thisObj.ControlIDs.txtVendorName).val(data[2]);
                //  thisObj.ShowInfoCodeHD();
                return data[1];
            }
        }).result(function (event, item) {
            //  $(thisObj.ControlIDs.txtVendorName).val(item[2]);
            console.log('begin show info code HD');
            console.debug();

            thisObj.ShowInfoCodeHD(item[1], item[4]);

            $(control).attr('cid', item[0]);
            return item[1];
        });

    },
    AutoCompleteID: function (type, id) {
        var thisObj = this;
        var serviceUrl = this.ServiceUrl + "/GetCustomerAutoComplete";
        FWS.System.IO.Ajax({
            url: serviceUrl,
            type: 'POST',
            data: { inputValue: function () { return $.string.Format("FilterCode='BANK' ID='{0}'", id) },
                typeRef: type
            },
            dataType: 'xml',
            success: function (data, textStatus, jqXHR) {
                try {
                    data = $(data).find("string").text();
                    data = data.split('|');
                    $(thisObj.ControlIDs.txtVendorCode).attr('cid', data[0]);
                    $(thisObj.ControlIDs.txtVendorCode).val(data[1]);
                    $(thisObj.ControlIDs.txtVendorName).val(data[2]);
                    thisObj.Grid.LoadData();
                    // thisObj.ShowGrid(optionGrid);
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    AutoCompleteName: function (type, control, inputname) {
        var thisObj = this;
        var _url = this.ServiceUrl + "/GetCustomerAutoComplete";
        FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", "", $(thisObj.ControlIDs.txtVendorName).val()) },
                typeRef: type
            },
            formatItem: function (data, i, total) {
                return data[1] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                return data[2];
            }
        }).result(function (event, item) {

            $(control).attr('cid', item[0]);
            return item[2];
        });
    },
    AutoCompleteCode: function (type, control, inputname) {
        var thisObj = this;
        var _url = this.ServiceUrl + "/GetCustomerAutoComplete";
        FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.ControlIDs.txtVendorCode).val(), "") },
                typeRef: type
            },
            formatItem: function (data, i, total) {
                return data[1] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                $(thisObj.ControlIDs.txtVendorName).val(data[2]);
                //  thisObj.Grid.LoadData();
                return data[1];
            }
        }).result(function (event, item) {
            $(thisObj.ControlIDs.txtVendorName).val(item[2]);
            thisObj.Grid.LoadData();
            $(control).attr('cid', item[0]);
            return item[1];
        });
    },
    GetInputSave: function (action) {
        var thisObj = this;
        var sDate = $(thisObj.ControlIDs.txtDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var _date = $.format(dDate, 'MM/dd/yyyy');
        var _code = $(thisObj.ControlIDs.txtVendorCode).attr("cid");
        var _name = ''; // $(thisObj.ControlIDs.txtVendorName).val();
        var _person = $(thisObj.ControlIDs.txtPerson).val();
        var _receipt = $(thisObj.ControlIDs.txtReceipt).val();
        var _type = $(thisObj.ControlIDs.txtTypePayment).combobox('getValue');
        var _note = $(thisObj.ControlIDs.txtNote).val();
        var _amt = thisObj.Grid.TotalAmount();

        var _inputdetail = ''

        var elRowIds = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        $.each(elRowIds, function (index, objId) {
            if (objId != '') {
                _id = $(thisObj.Grid.GridId).jqGrid('getCell', objId, 'ID');
                _inputdetail += $.string.Format("<RegisTrans ID='{0}' />", _id);
            }
        });

        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams RefNo='{2}' RefDate='{3}' Description='{4}' Function='Transaction_Asset'  ObjectID='{5}' ObjectName='{6}' ContactName='{7}'  RefType='23' PayMethod='{8}' Amount='{9}' Action='{10}'>{11}</RequestParams>",
         129, FWS.System.Core.UserID(), _receipt, _date, _note, _code, _name, _person, _type, _amt, action, _inputdetail);
        return xml;
    },
    ExcuteAction: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);

        FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(inputValue),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        $.messager.alert('OK', objRet.Description);
                        // Mods.VouchersExt.[INSTANT].Grid.Reload();
                    }
                    else {
                        $.messager.alert('Thông báo', data.Name);
                    }
                }
            }
        });
    },
    Print: function () {
        FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/ReceiptReport',
            data: "{a:1}",
            id: "Filter-Window",
            width: 800,
            height: 600,
            title: "Hóa don",
            callbackComplete: function (opts) {
                //console.log({ filterID: options.filterID });
                //   Mods.VouchersExt.AppendixReport.Init({ filterID: "trangtq", options: opts });
            }
        });
    },
    Grid: {
        GridUrl: '',
        GridId: '#Receipt_Grid',
        GridPager: 'Receipt_GridPage',
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
                colNames: colNameReceipt,
                colModel: colModelReceipt,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    //  var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    // $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                    var rowId = rowid;
                    $(thisObj.GridId).jqGrid('setSelection', rowId);
                },
                onSelectRow: function (rowid, status) {
                    //   console.log(rowid);
                    // console.log(status);

                    $(thisObj.GridId).footerData('set', { RefNo: 'T?ng:', Amount: thisObj.TotalAmount() });

                },
                loadComplete: function (data) {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                    //                    for (var i = 0; i < data.rows.length; i++) {
                    //                        var rowId = data.rows[i].ID;
                    //                        $(thisObj.GridId).jqGrid('setSelection', rowId);
                    //                    }
                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerReceipt, thisObj.optionClient);
            // $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

        },
        TotalAmount: function () {
            var thisObj = this;
            var totalAMT = 0.0;
            var elRowIds = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');

            $.each(elRowIds, function (index, objId) {
                if (objId != '') {

                    _amt = $(thisObj.GridId).jqGrid('getCell', objId, 'Amount');

                    totalAMT += $.parseFloat(_amt, 'n', FWS_SERVER_CONFIG.Culture);
                    //  totalAMT = $.parseFloat(totalAMT, ',', FWS_SERVER_CONFIG.Culture);
                }
            });
            return totalAMT;
        },
        SelectAll: function () {
            //  jQuery('#grid').jqGrid('setSelection', '10259'); 
        },
        LoadData: function () {

            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            var sFDate = $(Mods.VouchersExt.Receipt.ControlIDs.txtFromdate).datebox('getValue');
            var dFDate = $.parseDate(sFDate, 'dd/MM/yyyy'); //
            var _Fdate = $.format(dFDate, 'MM/dd/yyyy');
            var sTDate = $(Mods.VouchersExt.Receipt.ControlIDs.txtTodate).datebox('getValue');
            var dTDate = $.parseDate(sTDate, 'dd/MM/yyyy'); //
            var _Tdate = $.format(dTDate, 'MM/dd/yyyy');
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams WarranterID='{2}' PayStatus='0' Function='GetTransaction_Asset' RefType='21' FromDate='{3}' ToDate='{4}' />", 129, FWS.System.Core.UserID(), $(Mods.VouchersExt.Receipt.ControlIDs.txtVendorCode).attr("cid"), _Fdate, _Tdate);
            var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
            var serviceUrl = FWS.Web.Core.URL.ContextData;
            FWS.System.IO.Ajax({
                url: serviceUrl,
                type: 'POST',
                data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: xml },
                dataType: 'xml',
                success: function (data, textStatus, jqXHR) {
                    try {
                        data = $.FindInXml(data);
                        data = data.CSV2JSON2();
                        if (data) {
                            var optionGrid = {
                                gridID: thisObj.GridId,
                                data: data[1]
                            }
                        };
                        thisObj.ShowGrid(optionGrid);
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });

        },
        ShowGrid: function (opts) {
            var thisObj = this;
            var dataGrid = opts.data;
            for (var i = 0; i < dataGrid.length; i++) {
                $(opts.gridID).jqGrid('addRowData', i + 1, dataGrid[i]);
            }
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
    Mods.VouchersExt.Receipt.Init();
});
