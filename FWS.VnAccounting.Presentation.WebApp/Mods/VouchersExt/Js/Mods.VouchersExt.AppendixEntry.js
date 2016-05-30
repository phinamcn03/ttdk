if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.AppendixEntry = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServiceAppendix: '../Mods/VouchersExt/Service/Appendix.asmx',
    RefType: 22,
    DataPayment: [],
    ControlIDs: {
        txtMsgNo: "#AppendixEntry-txtMsgNo",
        btnAddNew: "#AppendixEntry-btnAddNew",
        txtDateMsg: "#AppendixEntry-txtDateMsg",
        txtNo: "#AppendixEntry-txtNo",
        txtNoOld: "#AppendixEntry-txtNoOld",
        BKS: "#AppendixEntry-BKS",
        txtGCD: "#AppendixEntry-txtGCD",
        txtCollType: "#AppendixEntry-txtCollType",
        txtSendTo: "#AppendixEntry-txtSendTo",
        txtObjectAddress: "#AppendixEntry-txtObjectAddress",
        Content: "#AppendixEntry-Content",
        btnDelete: "#AppendixEntry-btnDelete",
        btnAdd_Print: "#AppendixEntry-btnAdd_Print"

    },
    Init: function () {
        var thisObj = this;
        thisObj.CreateControl();
        thisObj.Event();
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $(thisObj.ControlIDs.Content).parent().attr('id');
        $(thisObj.ControlIDs.txtNoOld).change(function () {
            thisObj.GetInfoOldNo();
        });
        $(thisObj.ControlIDs.btnAdd_Print).click(function () {
            thisObj.ExcuteAction("UPDATE", 1);

        });
        $(thisObj.ControlIDs.btnAddNew).off('click');
        $(thisObj.ControlIDs.btnAddNew).on('click', function () {
            thisObj.ExcuteAction("UPDATE", 0);
        });
        $(thisObj.ControlIDs.btnDelete).click(function () {
            // thisObj.ClearInfo();
            $(windowID).window('close');
        });
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").hide();
                $("#AppendixEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").show();
                $("#AppendixEntry-btnSearch").hide();
                // this.Init();

                this.LoadDefault();
                break;
            default:
                $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").show();
                $("#AppendixEntry-btnSearch").hide();
                //  this.Init();
                this.LoadData(opts);
                break;
        }

    },
    CreateControl: function () {
        var thisObj = this;
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtDateMsg);
        thisObj.GetSendTo();
        thisObj.GetAssetType();
    },
    LoadDefault: function () {
        var thisObj = this;
        thisObj.GetRefNo();
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDateMsg).datebox('setValue', sCustom);
        //  $(thisObj.ControlIDs.txtCollType).combobox('setValue', 0);
        ///  $(thisObj.ControlIDs.txtSendTo).combobox('setValue', 292);
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        // this.LoadDefault();
    },
    ShowInfo: function (_data) {
        var thisObj = this;
        var date = new Date(_data[0].RefDate);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDateMsg).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtMsgNo).val(_data[0].RefNo);
        $(thisObj.ControlIDs.txtNo).val(_data[0].RegisTransRefNo);
        $(thisObj.ControlIDs.txtNoOld).val(_data[0].OldRefNo);
        $(thisObj.ControlIDs.txtGCD).val(_data[0].AssetLicenseNumber);
        $(thisObj.ControlIDs.BKS).val(_data[0].AssetNumberPlate);
        $(thisObj.ControlIDs.txtCollType).combobox('setValue', _data[0].AssetType);
        $(thisObj.ControlIDs.txtSendTo).combobox('setValue', _data[0].ObjectID);
        $(thisObj.ControlIDs.txtObjectAddress).combobox('setValue', _data[0].ObjectAddress);

    },
    LoadData: function (opts) {
        var opts = opts;
        var thisObj = this;
        var sInputValue = '';
        if (opts && opts.rowID) {
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='22' RegisTransRefNo ='{2}'/>", 129, FWS.System.Core.UserID(), opts.rowID);
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
                        thisObj.ShowInfo(data[1])
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });
        }
    },
    GetInfoOldNo: function () {
        var thisObj = this;
        var sInputValue = '';
        //var objRequestParam = { Function: options.view.fData };
        var oldNo = $(thisObj.ControlIDs.txtNoOld).val();
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='22' RegisTransRefNo='{2}'/>", 129, FWS.System.Core.UserID(), oldNo);
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
                    thisObj.SetInfoOldNo(data[1]);
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    SetInfoOldNo: function (data) {
        var thisObj = this;
        var _data = data[0];
        if (_data) {
            $(thisObj.ControlIDs.txtCollType).combobox('setValue', _data.AssetType);
            $(thisObj.ControlIDs.txtSendTo).combobox('setValue', _data.ObjectID);
            $(thisObj.ControlIDs.BKS).val(_data.AssetNumberPlate)
            $(thisObj.ControlIDs.txtGCD).val(_data.AssetLicenseNumber)
        }

    },
    GetRefNo: function () {
        FWS.System.IO.Ajax({
            url: Mods.VouchersExt.AppendixEntry.ServiceUrl + '/GetNextRefNo',
            type: 'POST',
            data: { inputValue: $.string.Format(' RefType="{0}"', Mods.VouchersExt.AppendixEntry.RefType) },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(Mods.VouchersExt.AppendixEntry.ControlIDs.txtMsgNo).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    GetAssetType: function () {
        var thisObj = this;
        var eml = thisObj.ControlIDs.txtCollType;
        var url = thisObj.ServiceAppendix + "/GetContextData";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='AssetType' />", 129, FWS.System.Core.UserID());
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
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    GetSendTo: function () {
        var thisObj = this;
        var eml = thisObj.ControlIDs.txtSendTo;
        var url = thisObj.ServiceAppendix + "/GetContextPerson";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetPerson' FilterCode='CQCN'  />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'id',
                textField: 'text',
                defaultData: '',
                onSelect: function (record) {
                 //   $(thisObj.ControlIDs.txtObjectAddress).val(record.value);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onChange: function (record, item) {
                    for (var i = 0; i < thisObj.DataPayment.length; i++) {
                    if (thisObj.DataPayment[i].id ==record)
                        $(thisObj.ControlIDs.txtObjectAddress).val(thisObj.DataPayment[i].value);
                    }
                },
                onLoadSuccess: function (record) {
                    thisObj.DataPayment = record;
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    GetInputSave: function (action) {
        var thisObj = this;
        var sDate = $(thisObj.ControlIDs.txtDateMsg).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var _date = $.format(dDate, 'MM/dd/yyyy');
        var _msgNo = $(thisObj.ControlIDs.txtMsgNo).val();
        var _tNo = $(thisObj.ControlIDs.txtNo).val();
        var _msgNoOld = $(thisObj.ControlIDs.txtNoOld).val();
        var _gCD = $(thisObj.ControlIDs.txtGCD).val();
        var _bKS = $(thisObj.ControlIDs.BKS).val();
        var _type = $(thisObj.ControlIDs.txtCollType).combobox('getValue');
        var _sendto = $(thisObj.ControlIDs.txtSendTo).combobox('getValue');
        var _sendtoName = $(thisObj.ControlIDs.txtSendTo).val();
        var _txtObjectAddress = $(thisObj.ControlIDs.txtObjectAddress).val();
        //<RequestParams ID='{2}' RefNo='{3}' RefDate='{4}' RegisTransRefNo='{5}' Description='{6}' Function="Transaction_Asset" ObjectID='{7}' ObjectName='{8}' RefType='{9}' OldRefNo='{10}' AssetType='{11}' AssetLicenseNumber='{12}' AssetNumberPlate='{13}' Action='{14}'/>
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams ID='{2}' RefNo='{3}' RefDate='{4}' RegisTransRefNo='{5}' Description='{6}' Function='Transaction_Asset' ObjectID='{7}' ObjectName='{8}' RefType='{9}' OldRefNo='{10}' AssetType='{11}' AssetLicenseNumber='{12}' AssetNumberPlate='{13}' ObjectAddress='{14}' Action='{15}'/>",
         129, FWS.System.Core.UserID(), "", _msgNo, _date, _tNo, "", _sendto, _sendto, 22, _msgNoOld, _type, _gCD, _bKS, _txtObjectAddress, _txtObjectAddress, action);
        return xml;
    },
    ExcuteAction: function (action, isPrint) {
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
                        // Mods.Items.[INSTANT].Grid.Reload();
                        thisObj.ClearInfo();
                        thisObj.LoadDefault();
                        if (isPrint == 1)
                            thisObj.Print(objRet.ResultID);
                    }
                    else {
                        $.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    },
    Print: function (_id) {
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;
        var obj = {
            filterXml: $.string.Format('<RequestParams RegisTransRefNo="{0}" ViewID="35" ViewerID="13" Function=""  />',
                _id)
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
    Report: function () {

    }
};
$(function () {
    Mods.VouchersExt.AppendixEntry.Init();
});

(function ($) {
    $.fn.combobox.defaults.filter = function(q,row){
       var opts = $(this).combobox('options');
       return row[opts.textField].toUpperCase().indexOf(q.toUpperCase()) >= 0;
      // return row[opts.textField].toUpperCase().indexOf(q.toUpperCase()) == 0;
};
})(jQuery);