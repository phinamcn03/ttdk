if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Simple[INSTANT] = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#[INSTANT]_btnAddNew,#[INSTANT]_btnCancel").hide();
                $("#[INSTANT]_btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#[INSTANT]_btnAddNew,#[INSTANT]_btnCancel").show();
                $("#[INSTANT]_btnSearch").hide();
                break;
            default:
                $("#[INSTANT]_btnAddNew,#[INSTANT]_btnCancel").show();
                $("#[INSTANT]_btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#[INSTANT]-Content').parent().attr('id');
        $("#[INSTANT]-btnSave").click(function () {
            Mods.Items.Simple[INSTANT].Update();
            $(windowID).window('close');
        });
        $("#[INSTANT]-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#[INSTANT]-btnSearch").click(function () {
            Mods.Items.Simple[INSTANT].ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#[INSTANT]-txtCode").val(),
            Name: $("#[INSTANT]-txtName").val(),
            Description: $("#[INSTANT]-txtDesc").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        //$("#Simple[INSTANT]-txtPercent").val("0%");
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        var result = {
            Code: info.Code,
            Name: info.Name,
            Description: info.Description,
            Active: info.Active
        };
        Mods.Items.Simple[INSTANT].ExecuteSearch(result);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue  UserID="{0}" ID="{1}"/>', 1, opts.ID);

            var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' ID='{1}' Type='{2}' />", 129, opts.ID, SimpleEntry_Instant['[INSTANT]'].RefType);
            var inputValue = FWS.System.Core.AttachMeta(xml, {});
            FWS.System.IO.Ajax({
                url: FWS.Web.Core.URL.ContextData,
                type: 'POST',
                data: { ClientKey: FWS.System.Core.ClientKey, InputValue: $.HtmlEncode(inputValue) },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    if (data && typeof data === "string") {
                        var objRet = FWS.Web.Core.ToActionJSON(data);
                        $("#[INSTANT]-txtCode").val(objRet.Code);
                        $("#[INSTANT]-txtName").val(objRet.Name);
                        $("#[INSTANT]-txtDesc").val(objRet.Description);
                    };
                }
            });

        }
    },
    Update: function (opts) {
        var options = opts || Mods.Items.Simple[INSTANT].GetInfo();
        $.extend(true, options, opts);

        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "INSERT" : "UPDATE";

        var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='Resource' ID='{1}' Type='{2}' Action='{3}' Code='{4}' Name='{5}' Description='{6}' />",
        129, options.ID, SimpleEntry_Instant['[INSTANT]'].RefType, action, options.Code, options.Name, options.Description);
        var inputValue = FWS.System.Core.AttachMeta(xml, {});
        FWS.System.IO.Ajax({
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS.System.Core.ClientKey, InputValue: $.HtmlEncode(inputValue) },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").text();
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Code == 'OK')
                        eval('Mods.Items.Simple[INSTANT].Grid.Reload()'.replace('Entry', ''));
                };
            }
        });

    }
};
$(function () {
    /* Event */
    Mods.Items.Simple[INSTANT].Event();
});