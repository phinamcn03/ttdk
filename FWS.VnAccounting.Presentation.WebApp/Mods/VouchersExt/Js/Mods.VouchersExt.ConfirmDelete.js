if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.ConfirmDelete = {
    ServiceUrl: '../Mods/VouchersExt/Service/ResultMsg.asmx',
    Properties: {
        windowID: "",
        ID: "0"
    },
    ControlIDs: {
        btnDelete: "#ConfirmDelete-btnDelete",
        btnCancel: "#ConfirmDelete-btnCancel",
        
        txtReason: "#ConfirmDelete-txtReason",
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

    ShowInfo: function (obj) {
        var thisObj = this;
        thisObj.Properties.ID = obj.ID;
       
        $(thisObj.ControlIDs.txtReason).val(obj.DeleteNote);
    },

    Event: function () {
        var thisObj = this;
        
        $(thisObj.ControlIDs.btnDelete).click(function () {
            thisObj.ExcuteAction("DELETE");
        });
        $(thisObj.ControlIDs.btnCancel).click(function () {
            $(thisObj.Properties.windowID).window('close');
        });
    },
   
    
    GetInputSave: function (action) {
        var thisObj = this;
        
        var _repose = $.HtmlEncode($(thisObj.ControlIDs.txtReason).val());
        var _inputdetail = ''
        var reqInput = {};
        reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
        reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');
        var nodeInputValue = new CXml('InputValue', reqInput).getXml();
        var xml1 = $.string.Format("<RequestParams ViewerID='19' TransactionID='{0}' Context='SENDRESPONSE'/>", thisObj.Properties.ID);
        var xml = $.string.Format("<RequestParams ID='{0}'  DeleteNote='{1}' RefType='21' Function='Transaction_Asset' Action='DELETE'/>",
         thisObj.Properties.ID,  _repose);
        var inputxml = $.string.Format("{0}{1}", nodeInputValue, xml);
        return inputxml;
    },
    ExcuteAction: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);
        var _parent = parent;
        // console.log(inputValue);
        FWS.System.IO.Ajax({
            url: _parent.FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: inputValue
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    console.log("data",data);
                    //var objRet = eval("(" + data + ")");
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    console.log("result", objRet);
                    if (objRet.Code == "OK") {
                        $(thisObj.Properties.windowID).window('close');
                        $.messager.alert('OK', objRet.Description);
                    }
                    else {
                        $.messager.alert('Thong Bao', objRet.Description);
                    }
                }
            }
        });
    }
    



};
$(function () {
    Mods.VouchersExt.ConfirmDelete.Init();
});
