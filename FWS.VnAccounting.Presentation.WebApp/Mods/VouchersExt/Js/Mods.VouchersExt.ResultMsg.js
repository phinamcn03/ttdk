if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.ResultMsg = {
    ServiceUrl: '../Mods/VouchersExt/Service/ResultMsg.asmx',
    Properties: {
        windowID: "",
        ID: "0"
    },
    ControlIDs: {
        btnSave: "#ResultMsg-btnAddNew",
        btnCancel: "#ResultMsg-btnCancel",
        btnPrint: "#ResultMsg-btnPrint",
        cbReject: "#ResultMsg-Reject",
        txthh: "#ResultMsg-txthh",
        txtmm: "#ResultMsg-txtmm",
        txtdd: "#ResultMsg-txtdd",
        txtmonth: "#ResultMsg-txtmonth",
        txtyyyy: "#ResultMsg-txtyyyy",
        txtEmail: "#ResultMsg-txtEmail",
        txtReason: "#ResultMsg-txtReason",
        formID: "#Receipt-Form"
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.ID = opts.ID;
        if (this.Properties.ID != "0") {
            this.ShowInfo(opts.rowData);
        }

    },
    Init: function () {
        //   this.SetDefault();
        this.Event();
        // this.ShowInfo(105);
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
    ShowInfo: function (obj) {
        var thisObj = this;
        thisObj.Properties.ID = obj.ID;
        var _check = obj.ResponseStatus;
        //  $(thisObj.ControlIDs.cbReject).attr("checked", _check);
        $(thisObj.ControlIDs.cbReject).prop("checked", _check * 1); // obj.ResponseStatus
        var _redate = obj.ReceiveResponseDateTime;
        if (_redate != "") {
            var date = new Date(_redate);
            var sCustom = $.format(date, 'dd/MM/yyyy hh:mm');
            thisObj.SetReceiveDate(sCustom);
        }
        else {
            var date = new Date(FWS_SERVER_CONFIG.DateTime);
            var sCustom = $.format(date, 'dd/MM/yyyy hh:mm');
            thisObj.SetReceiveDate(sCustom);
        }
        $(thisObj.ControlIDs.txtEmail).val(obj.WarranterEmail);
        $(thisObj.ControlIDs.txtReason).val(obj.ResponseNote);
    },

    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnPrint).click(function () {
            thisObj.ExcuteActionPrint("UPDATE_RESPONSE");

        });
        $(thisObj.ControlIDs.btnSave).click(function () {
            thisObj.ExcuteAction("UPDATE_RESPONSE");
        });
        $(thisObj.ControlIDs.btnCancel).click(function () {
            $(thisObj.Properties.windowID).window('close');
        });
    },
    GetReceiveDate: function () {
        var thisObj = this;
        var date = new Date(FWS_SERVER_CONFIG.DateTime);
        var _date = $.string.Format("{0}/{1}/{2} {3}:{4}", $(thisObj.ControlIDs.txtmonth).val(), $(thisObj.ControlIDs.txtdd).val(), $(thisObj.ControlIDs.txtyyyy).val(), $(thisObj.ControlIDs.txthh).val(), $(thisObj.ControlIDs.txtmm).val());
        return _date;
    },
    SetReceiveDate: function (_date) {
        var thisObj = this;
        var sCustom = _date;
        if (_date == "") return;
        $(thisObj.ControlIDs.txtdd).val(sCustom.substring(0, 2));
        $(thisObj.ControlIDs.txtmonth).val(sCustom.substring(3, 5));
        $(thisObj.ControlIDs.txtyyyy).val(sCustom.substring(6, 10));
        $(thisObj.ControlIDs.txthh).val(sCustom.split(" ")[1].substring(0, 2));
        $(thisObj.ControlIDs.txtmm).val(sCustom.split(":")[1].substring(0, 2));

    },
    GetInputSave: function (action) {
        var thisObj = this;
        var _check = $(thisObj.ControlIDs.cbReject).is(':checked') & 1;
        var _dateRec = thisObj.GetReceiveDate();
        var _email = $(thisObj.ControlIDs.txtEmail).val();
        var _repose = $(thisObj.ControlIDs.txtReason).val();
        var _inputdetail = ''
        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();
        //  "<InputValue UserID="" Session="" />	"
        //'<RequestParams ID="[ID cua don DK]" ResponseStatus ="" ReceiveResponseDateTime="" WarranterEmail="" ResponseNote="" Function="Transaction_Asset" Action="UPDATE_RESPONSE" />'
        //'<RequestParams ViewerID="19|20" TransactionID="[ID cua don DK]" Context="SENDRESPONSE"/>'	
        var xml1 = $.string.Format("<RequestParams ViewerID='19' TransactionID='{0}' Context='SENDRESPONSE'/>", thisObj.Properties.ID);
        var xml = $.string.Format("<RequestParams ID='{0}' ResponseStatus='{1}' ReceiveResponseDateTime='{2}' WarranterEmail='{3}' ResponseNote='{4}' Function='Transaction_Asset' Action='{5}'/>",
         thisObj.Properties.ID, _check, _dateRec, _email, _repose, action);
        var inputxml = $.string.Format("{0}{1}{2}", nodeInputValue, xml, xml1);
        return inputxml;
    },
    ExcuteAction: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);
        // console.log(inputValue);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + "/ActionResult",
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: inputValue
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    console.log(data);
                    var objRet = eval("(" + data + ")");
                    if (objRet.IsSuccessfull == "True") {
                        $(thisObj.Properties.windowID).window('close');
                        $.messager.alert('OK', objRet.Description);
                    }
                    else {
                        $.messager.alert('Thong Bao', objRet.Description);
                    }
                }
            }
        });
    },
    ExcuteActionPrint: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputPrint(action);

        FWS.System.IO.Ajax({
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(inputValue),
                instant: 'ResultMsg'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Code == "OK") {
                        $(thisObj.Properties.windowID).window('close');
                        //$.messager.alert('OK', objRet.Description);
                        thisObj.ShowPrint();
                    }
                    else {
                        $.messager.alert('Thông báo', objRet.Description);
                    }
                }
            }
        });
    },
    GetInputPrint: function (action) {
        var thisObj = this;
        var _check = $(thisObj.ControlIDs.cbReject).is(':checked') & 1;
        var _dateRec = thisObj.GetReceiveDate();
        var _email = $(thisObj.ControlIDs.txtEmail).val();
        var _repose = $(thisObj.ControlIDs.txtReason).val();

        var _inputdetail = ''
        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();
        //  "<InputValue UserID="" Session="" />	"
        //'<RequestParams ID="[ID cua don DK]" ResponseStatus ="" ReceiveResponseDateTime="" WarranterEmail="" ResponseNote="" Function="Transaction_Asset" Action="UPDATE_RESPONSE" />'
        //'<RequestParams ViewerID="19|20" TransactionID="[ID cua don DK]" Context="SENDRESPONSE"/>'	
        var xml = $.string.Format("<RequestParams ID='{0}' RequestOrder='1' ResponseStatus='{1}' ReceiveResponseDateTime='{2}' WarranterEmail='{3}' ResponseNote='{4}' Function='Transaction_Asset' Action='{5}'/>",
         thisObj.Properties.ID, _check, _dateRec, _email, _repose, action);
        var inputxml = $.string.Format("{0}{1}", nodeInputValue, xml);
        return inputxml;
    },
    ShowPrint: function () {
        var _this = this;
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;

        var obj = {
            filterXml: $.string.Format('<RequestParams ViewerID="19" TransactionIDs="{0}" Context="SENDRESPONSE" />', _this.Properties.ID)
        };
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.report/ReportP',
            data: "{a:1}",
            id: "Report-Window",
            width: _width,
            height: _height,
            title: "Xem báo cáo",
            rowID: '',
            callbackComplete: function (opts) {
                _parent.Mods.CoreReport.ReportP.init(obj);
            }
        });
    }



};
$(function () {
    Mods.VouchersExt.ResultMsg.Init();
});
