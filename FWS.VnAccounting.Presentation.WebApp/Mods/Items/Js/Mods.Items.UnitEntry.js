if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.UnitEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").hide();
                $("#UnitEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").show();
                $("#UnitEntry-btnSearch").hide();
                break;
            default:
                $("#UnitEntry-btnAddNew,#UnitEntry-btnCancel").show();
                $("#UnitEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#UnitEntry-Content').parent().attr('id');
        $("#UnitEntry-btnAddNew").click(function () {
            Mods.Items.UnitEntry.Update();
            $(windowID).window('close');
        });
        $("#UnitEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#UnitEntry-btnSearch").click(function () {
            Mods.Items.UnitEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#UnitEntry-txtCode").val(),
            Name: $("#UnitEntry-txtName").val(),
            Description: $("#UnitEntry-txtDescription").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#UnitEntry-chkActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.Unit.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}"/>', 1, opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/UnitService.asmx/GetUnit',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#UnitEntry-txtCode").val(data.Code);
                    $("#UnitEntry-txtName").val(data.Name);
                    $("#UnitEntry-txtDescription").val(data.Description);
                }
            });
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.UnitEntry.GetInfo();
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
    }
};
$(function () {
    /* Event */
    Mods.Items.UnitEntry.Event();
});