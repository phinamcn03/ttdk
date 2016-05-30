 if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.ResetReceiptNumber = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ControlIDs: {
        btnResetReceiptTM: "#btnResetReceiptTM",
        btnResetReceiptCK: "#btnResetReceiptCK"
    },
    Init: function () {
        this.Event();
    },
    Event: function () {
        var thisObj = this;

        $(thisObj.ControlIDs.btnResetReceiptTM).click(function () {
            thisObj.ExcuteAction(0);
        });
        $(thisObj.ControlIDs.btnResetReceiptCK).click(function () {
            thisObj.ExcuteAction(1);
        });
    },
    ExcuteAction: function (payMethod) {
        var thisObj = this;
        var inputValue = $.string.Format('<RequestParams Function="ResetReceiptNumber" PayMethod="{0}"  />', payMethod);
        console.log(FWS.Web.Core.URL.ExecuteAction);
        FWS.System.IO.Ajax({
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
                        $.messager.alert('Thông báo', objRet.Description);
                    }
                    else {
                        $.messager.alert('Thông báo', objRet.Description);
                    }
                }
            }
        });
    }
}
$(function () {
    Mods.VouchersExt.ResetReceiptNumber.Init();
});