if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};

Mods.ACore.GroupEntry[INSTANT] = {
    IsUpdate: false,
    UpdateID: null,
    Properties: {},

    ObjMesseage: {
        SaveTitle: 'Them moi',
        SaveConfirm: 'Ban co muon unpost don hang nay!'
    },
    ControlIDs: {
        txtCode: '#[INSTANT]-txtGroupEntryCode',
        txtName: '#[INSTANT]-txtGroupEntryName',
        txtDesc: '#[INSTANT]-txtGroupEntryDesc',

        btnSave: "#[INSTANT]BaseEntry-btnSave",
        btnClear: "#[INSTANT]BaseEntry-btnCancel",

        formID: "#[INSTANT]GroupEntry-Content"
    },
    ServerOptions: GroupBaseEntry_Instant['[INSTANT]'],
    Properties: {
        windowID: "",
        rowID: ""
    },
    /*Control*/
    Init: function () {
        this.Event();
    },
    DefaultInit: function (options) {
        var windowID = "#" + options.id || '#GroupBaseEntry';
        var rowID = options.rowID;
        var thisObj = this;
        thisObj.Properties.windowID = windowID;
        thisObj.Properties.rowID = rowID;
        thisObj.ClearInfo();
        thisObj.LoadControl();
        switch (rowID) {
            case "-1":
                break;
            case "0":
                this.ClearInfo();
                break;
            default:
                this.ShowInfo(rowID);
                break;
        }
        $(thisObj.ControlIDs.txtCode).focus();
    },
    LoadControl: function () {
        var thisObj = this;
        if (thisObj.ServerOptions.Instant == 'Product') {
            $(thisObj.ControlIDs.formID + ' .cproductgroup').css({ "display": "" });
        }
        else {
            $(thisObj.ControlIDs.formID + ' .cproductgroup').css({ "display": "none" });
        }
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    GetInfo: function () {        
        return {
            ID: this.Properties.rowID || "0",
            Code: $(this.ControlIDs.txtCode).val(),
            Name: $(this.ControlIDs.txtName).val()
        };
    },
    ShowInfo: function (rowID) {
        if (rowID) {
            var thisObj = this;
            var inputValue = $.string.Format('<InputValue ID="{0}"/>', rowID);
            FWS.System.IO.Ajax({
                url: '../Mods/ACore/Service/GroupBaseService.asmx/GetItem',
                type: 'POST',
                data: { inputValue: inputValue, instant: thisObj.ServerOptions.Instant },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    if (data) {
                        $(thisObj.ControlIDs.txtCode).val(data.Code);
                        $(thisObj.ControlIDs.txtName).val(data.Name);
                        $(thisObj.ControlIDs.txtDesc).val(data.Description);
                    }
                    else {
                        console.log('::LOI ROI NE!!!');
                    }
                }
            });
        }
    },
    ExecuteAction: function (options) {
        var thisObj = this;
        options = options || thisObj.GetInfo();
        var _default = { ID: "", Code: "", Name: "" };
        $.extend(true, _default, options);
        
        var _action = "INSERT", _id = "";
        if (_default.ID != "" && _default.ID != "0") {
            _action = "UPDATE";
            _id = $.string.Format('ID="{0}"', _default.ID);
        }
        var _description = '';
        if (thisObj.ServerOptions.Instant == 'Product')
            _description = $.string.Format('Description="{0}"', $(this.ControlIDs.txtDesc).val());
        var inputValue = $.string.Format('<InputValue LanguageID="{0}"/>', 129);
        inputValue += $.string.Format('<RequestParams Function="Resource" {0} Code="{1}" Name="{2}" Status="{3}" Type="{4}" Action="{5}"  {6}/>', _id, _default.Code, _default.Name, 0, 12, _action, _description);
        FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: '4F5C2508-1ADA-4672-BED1-C7AA3590ACFD', inputValue: $.HtmlEncode(inputValue), instant: '[INSTANT]' },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        Mods.Items.[INSTANT].Grid.Reload();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                }
            }
        });
    },
    Event: function () {
        var thisObj = this;
        var windowID = thisObj.Properties.windowID || ("#" + $(thisObj.ControlIDs.formID).parent().attr('id'));        
        $(thisObj.ControlIDs.btnSave).live("click", function () {
            thisObj.ExecuteAction();
            $(windowID).window('close');
        });
        $(thisObj.ControlIDs.btnClear).live("click", function () {
            $(windowID).window('close');
        });
    }
};
$(function () {
    Mods.ACore.GroupEntry[INSTANT].Init();
});
