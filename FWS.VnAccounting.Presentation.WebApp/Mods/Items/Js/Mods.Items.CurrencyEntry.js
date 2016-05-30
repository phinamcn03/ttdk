if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.CurrencyEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#CurrencyEntry-btnAddNew,#CurrencyEntry-btnCancel").hide();
                $("#CurrencyEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#CurrencyEntry-btnAddNew,#CurrencyEntry-btnCancel").show();
                $("#CurrencyEntry-btnSearch").hide();
                break;
            default:
                $("#CurrencyEntry-btnAddNew,#CurrencyEntry-btnCancel").show();
                $("#CurrencyEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#CurrencyEntry-Content').parent().attr('id');
        $("#CurrencyEntry-btnAddNew").click(function () {
            Mods.Items.CurrencyEntry.Update();
            $(windowID).window('close');
        });
        $("#CurrencyEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#CurrencyEntry-btnSearch").click(function () {
            Mods.Items.CurrencyEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#CurrencyEntry-txtCode").val(),
            Name: $("#CurrencyEntry-txtName").val(),
            Description: $("#CurrencyEntry-txtDescription").val(),
            Active: $("#CurrencyEntry-chkActive:checked").length
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#CurrencyEntry-chkActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.Currency.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue D="{0}"/>',opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/CurrencyService.asmx/GetCurrency',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#CurrencyEntry-txtCode").val(data.Code);
                    $("#CurrencyEntry-txtName").val(data.Name);
                    $("#CurrencyEntry-txtDescription").val(data.Description);
                    $("#CurrencyEntry-chkActive").attr("checked", data.Active == "True" ? true : false);
                }
            });
        }
    },
    ClearEntry: function () {
        $("#CurrencyEntry-txtCode").val('');
        $("#CurrencyEntry-txtName").val('');
        $("#CurrencyEntry-txtDescription").val('');
    },
    Update: function (opts) {
        opts = opts || Mods.Items.CurrencyEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: "",
            // Description: "",
            Active: ""
        };
        $.extend(true, options, opts);
        var inputValue = $.string.Format('<InputValue ID="{0}" Code="{1}" Name="{2}" Description="{3}" Status="{4}" />',
                                        options.ID, options.Code, options.Name, options.Description, options.Active);

        var Act = 'Edit';
        if (options.ID == 0)
            Act = 'Add';
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/CurrencyService.asmx/UpdateCurrency',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").text();
                try {
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull) {
                        $.messager.alert(data.Code, data.Name);
                        Mods.Items.CurrencyEntry.ClearEntry();
                        Mods.Items.Currency.UpdateGrid(data.Result, Act);
                    }

                } catch (ex) {
                    if (typeof console != 'undefined')
                        console.log(ex);
                }
            }
        });
    }
};
$(function () {
    /* Event */
    Mods.Items.CurrencyEntry.Event();
});