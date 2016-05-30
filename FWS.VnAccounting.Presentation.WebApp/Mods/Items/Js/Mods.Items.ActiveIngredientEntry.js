if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ActiveIngredientEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#ActiveIngredientEntry-btnAddNew,#ActiveIngredientEntry-btnCancel").hide();
                $("#ActiveIngredientEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#ActiveIngredientEntry-btnAddNew,#ActiveIngredientEntry-btnCancel").show();
                $("#ActiveIngredientEntry-btnSearch").hide();
                break;
            default:
                $("#ActiveIngredientEntry-btnAddNew,#ActiveIngredientEntry-btnCancel").show();
                $("#ActiveIngredientEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#ActiveIngredientEntry-Content').parent().attr('id');
        $("#ActiveIngredientEntry-btnAddNew").click(function () {
            Mods.Items.ActiveIngredientEntry.ExecuteAction();
            $(windowID).window('close');
        });
        $("#ActiveIngredientEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#ActiveIngredientEntry-btnSearch").click(function () {
            Mods.Items.ActiveIngredientEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#ActiveIngredientEntry-txtCode").val(),
            Name: $("#ActiveIngredientEntry-txtName").val(),
            Description: $("#ActiveIngredientEntry-txtDescription").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#ActiveIngredientEntry-chkActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.ActiveIngredient.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            //var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}"/>', 1, opts.ID);
            var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' ID='{1}' Type='{2}' />", 129, opts.ID, 12);
            //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 11);
            //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 24);
            var inputValue = FWS.System.Core.AttachMeta(xml, {});
            FWS.System.IO.Ajax({
                url: FWS.Web.Core.URL.ContextData,
                type: 'POST',
                data: { ClientKey: '4F5C2508-1ADA-4672-BED1-C7AA3590ACFD', InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    
                    //data = eval("(" + data + ")");
                    if (data && typeof data === "string") {
                        var objRet = FWS.Web.Core.ToActionJSON(data);
                        console.log(objRet);
                        $("#ActiveIngredientEntry-txtCode").val(objRet.Code);
                        $("#ActiveIngredientEntry-txtName").val(objRet.Name);
                        $("#ActiveIngredientEntry-txtDescription").val(objRet.Description);
                    }


                }
            });
        }
    }/*,
    Update: function (opts) {
        opts = opts || Mods.Items.ActiveIngredientEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: "",
            Description: "",
            Active: ""
        };
        $.extend(true, options, opts);
        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "Insert" : "Update";
        var inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" Code="{2}" Name="{3}" Description="{4}" />',
                                        action, options.ID, options.Code, options.Name, options.Description);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/UnitService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                Mods.Items.Unit.Grid.RefreshCurrentPage();
            }
        });
    },*/
    ,ExecuteAction: function (options) {
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
            data: { ClientKey: '4F5C2508-1ADA-4672-BED1-C7AA3590ACFD', inputValue: $.HtmlEncode(inputValue) },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        Mods.Items.ActiveIngredient.Grid.Reload();
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
    /* Event */
    Mods.Items.ActiveIngredientEntry.Event();
});