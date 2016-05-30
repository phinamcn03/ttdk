if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.CancelTBGTForm = {
    ServiceUrl: '../Mods/VouchersExt/Service/CancelTBGT.asmx',
    Properties: {
        windowID: "",
        ID: "0"
    },
    Data:{},
    ControlIDs: {
        btnSave: "#CancelTBGTForm-btnAddNew",
        btnCancel: "#CancelTBGTForm-btnCancel",
        btnPrint: "#CancelTBGTForm-btnPrint",
        cbReject: "#CancelTBGTForm-Reject",
        txtdd: "#CancelTBGTForm-txtdd",
        txtmonth: "#CancelTBGTForm-txtmonth",
        txtyyyy: "#CancelTBGTForm-txtyyyy",
        txtEmail: "#CancelTBGTForm-txtEmail",
        //txtReason: "#CancelTBGTForm-txtReason",
        txtRefNo: "#CancelTBGTForm-txtRefNo",
        txtTBGTRefNo: "#CancelTBGTForm-txtTBGTRefNo",
        txtWarranterName: "#CancelTBGTForm-txtWarranterName",
        txtWarranterAddress: "#CancelTBGTForm-txtWarranterAddress",
        txtRegisTransRefNo: "#CancelTBGTForm-txtRegisTransRefNo",
        txtObjectName:"#CancelTBGTForm-txtObjectName",
        formID: "#Receipt-Form"
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.ID = opts.ID;

        //Clear data
        this.ClearInfo();
        if (this.Properties.ID != "0") {
            this.ShowInfo(opts.rowData);
            this.GetInfo(opts.rowData);
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
        //$(thisObj.ControlIDs.txtReason).val(obj.ResponseNote);
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
        var _date = $.string.Format("{0}/{1}/{2}", $(thisObj.ControlIDs.txtmonth).val(), $(thisObj.ControlIDs.txtdd).val(), $(thisObj.ControlIDs.txtyyyy).val());
        return _date;
    },
    SetReceiveDate: function (_date) {
        var thisObj = this;
        var sCustom = _date;
        if (_date == "") return;
        $(thisObj.ControlIDs.txtdd).val(sCustom.substring(0, 2));
        $(thisObj.ControlIDs.txtmonth).val(sCustom.substring(3, 5));
        $(thisObj.ControlIDs.txtyyyy).val(sCustom.substring(6, 10));
        //$(thisObj.ControlIDs.txthh).val(sCustom.split(" ")[1].substring(0, 2));
        //$(thisObj.ControlIDs.txtmm).val(sCustom.split(":")[1].substring(0, 2));

    },
    GetInputSave: function (action) {
        var thisObj = this;
        var _check = $(thisObj.ControlIDs.cbReject).is(':checked') & 1;
        var _dateRec = thisObj.GetReceiveDate();
        var _email = $(thisObj.ControlIDs.txtEmail).val();
        //var _repose = $(thisObj.ControlIDs.txtReason).val();
        var _refDate = this.GetReceiveDate();
        var _objectName = $(thisObj.ControlIDs.txtObjectName).val();
        var _warranterName = $(thisObj.ControlIDs.txtWarranterName).val();
        var _warranterAddress = $(thisObj.ControlIDs.txtWarranterAddress).val();
        var _warranterEmail = $(thisObj.ControlIDs.txtEmail).val();
       // var _note = $(thisObj.ControlIDs.txtReason).val();
        var _inputdetail = ''
        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();
        //  "<InputValue UserID="" Session="" />	"
        //'<RequestParams ID="[ID cua don DK]" ResponseStatus ="" ReceiveResponseDateTime="" WarranterEmail="" ResponseNote="" Function="Transaction_Asset" Action="UPDATE_RESPONSE" />'
        //'<RequestParams ViewerID="19|20" TransactionID="[ID cua don DK]" Context="SENDRESPONSE"/>'	
        //var xml1 = $.string.Format("<RequestParams ViewerID='19' TransactionID='{0}' Context='SENDRESPONSE'/>", thisObj.Properties.ID);
        //var xml = $.string.Format("<RequestParams ID='{0}' ResponseStatus='{1}' ReceiveResponseDateTime='{2}' WarranterEmail='{3}' ResponseNote='{4}' Function='Transaction_Asset' Action='{5}'/>",
        var xml = $.string.Format("<RequestParams RefType=\"29\" ID=\"{0}\" TBGTID=\"{1}\" RefNo=\"{2}\" RefDate=\"{3}\" RegistransRefNo=\"{4}\" ObjectID=\"{5}\" ObjectName=\"{6}\" WarranterID=\"{7}\" WarranterName=\"{8}\" WarranterAddress=\"{9}\" WarranterEmail=\"{10}\" Function=\"Transaction_Asset\" Action='{12}'/>"
        , thisObj.Data.ID, thisObj.Data.TBGTID, thisObj.Data.RefNo, _refDate, thisObj.Data.RegisTransRefNo, 0,
        $.HtmlEncode(_objectName), 0, $.HtmlEncode( _warranterName), $.HtmlEncode(_warranterAddress), $.HtmlEncode(_warranterEmail), action);
        var inputxml = $.string.Format("{0}{1}", nodeInputValue, xml);
        return inputxml;
    },
    ExcuteAction: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);

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
                    console.log("ExcuteAction", data);
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Code == "OK") {
                        //$(thisObj.Properties.windowID).window('close');
                        //$.messager.alert('OK', objRet.Description);
                        thisObj.SendReport();

                    }
                    else {
                        $.messager.alert('Thông báo', objRet.Description);
                    }
                }
            }
        });
    },
    ExcuteActionPrint: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);

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
    SendReport:function()
    {
        var thisObj = this;
        var inputValue = thisObj.GetInputSendReport();
        // console.log(inputValue);
        FWS.System.IO.Ajax({
            url: FWS.Web.Core.URL.AssetService +"/SendReport",
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: inputValue
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    console.log("SendReport",data);
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Result == "1") {
                        $(thisObj.Properties.windowID).window('close');
                        $.messager.alert('OK', objRet.Description);
                        //thisObj.ShowPrint();
                    }
                    else {
                        $(thisObj.Properties.windowID).window('close');
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
        //var _repose = $(thisObj.ControlIDs.txtReason).val();

        var _inputdetail = ''
        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();
        //  "<InputValue UserID="" Session="" />	"
        //'<RequestParams ID="[ID cua don DK]" ResponseStatus ="" ReceiveResponseDateTime="" WarranterEmail="" ResponseNote="" Function="Transaction_Asset" Action="UPDATE_RESPONSE" />'
        //'<RequestParams ViewerID="19|20" TransactionID="[ID cua don DK]" Context="SENDRESPONSE"/>'	
        var xml = $.string.Format("<RequestParams ID='{0}' RequestOrder='1' ResponseStatus='{1}' ReceiveResponseDateTime='{2}' WarranterEmail='{3}' Function='Transaction_Asset' Action='{5}'/>",
         thisObj.Properties.ID, _check, _dateRec, $.HtmlEncode(_email), action);
        var inputxml = $.string.Format("{0}{1}", nodeInputValue, xml);
        return inputxml;
    },
    GetInputSendReport:function()
    {
        var thisObj = this;
        var _email = $(thisObj.ControlIDs.txtEmail).val();

        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();

        var xml = $.string.Format("<RequestParams ViewerID=\"26\" TBGTID=\"{0}\" Email=\"{1}\" IncludeSign=\"1\" Context=\"KHACHANG_HUYTBGT\"/>", this.Data.TBGTID, $.HtmlEncode(_email));
         
        var inputxml = $.string.Format("{0}{1}", nodeInputValue, xml);
        return inputxml;
    },
    ShowPrint: function () {
        var _this = this;
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;

        var obj = {
            filterXml: $.string.Format('<RequestParams ViewerID="26" TBGTID="{0}" />', _this.Data.TBGTID)
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
    },
    GetInfo: function (rowData)
    {
        var thisObj = this;
        var inputValue = $.string.Format("<InputValue /><RequestParams Function='GetTransaction_Asset' RefType=\"29\" TBGTID=\"{0}\" />", rowData.ID);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + "/GetInfo",
            type: 'POST',
            data: {
                ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: inputValue
            },
            success: function (data, textStatus, jqXHR) {
                result = $.FindInXml(data);
                //console.log(result);
                result = result.CSV2JSON2();
                //console.log(result);
                thisObj.Data = result[1][0];
                thisObj.SetInfo(thisObj.Data);
                
            }
        });
    },
    SetInfo:function(data)
    {
        console.log(data);
        $(this.ControlIDs.txtRefNo).val(data.RefNo);
        $(this.ControlIDs.txtTBGTRefNo).val(data.TBGTRefNo);
        $(this.ControlIDs.txtWarranterName).val(data.WarranterName);
        $(this.ControlIDs.txtWarranterAddress).val(data.WarranterAddress);
        $(this.ControlIDs.txtEmail).val(data.WarranterEmail);
        $(this.ControlIDs.txtObjectName).val(data.ObjectName);
        $(this.ControlIDs.txtRegisTransRefNo).val(data.RegisTransRefNo);
        //$(this.ControlIDs.txtReason).val(data.Note);
        var _redate = data.RefDate;
        if (_redate != "") {
            var date = new Date(_redate);
            var sCustom = $.format(date, 'dd/MM/yyyy hh:mm');
            this.SetReceiveDate(sCustom);
        }
        else {
            var date = new Date(FWS_SERVER_CONFIG.DateTime);
            var sCustom = $.format(date, 'dd/MM/yyyy hh:mm');
            this.SetReceiveDate(sCustom);
        }
    },
    ClearInfo: function () {
        
        $(this.ControlIDs.txtRefNo).val('');
        $(this.ControlIDs.txtTBGTRefNo).val('');
        $(this.ControlIDs.txtWarranterName).val('');
        $(this.ControlIDs.txtWarranterAddress).val('');
        $(this.ControlIDs.txtEmail).val('');
        $(this.ControlIDs.txtObjectName).val('');
        $(this.ControlIDs.txtRegisTransRefNo).val('');
        //$(this.ControlIDs.txtReason).val(data.Note);
       
    }

};
$(function () {
    Mods.VouchersExt.CancelTBGTForm.Init();
});
