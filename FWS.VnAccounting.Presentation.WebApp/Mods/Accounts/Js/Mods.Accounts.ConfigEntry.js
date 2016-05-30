if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Accounts == 'undefined')
    Mods.Accounts = {};

Mods.Accounts.ConfigEntry = {
    Init: function () {
        this.Event();
    },
    Properties: {
        windowID: "",
        rowID: ""
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        this.Properties.windowID = windowID;
        this.ShowInfo(opts.rowData);
    },
    Event: function () {
        var thisObj = this;

        $("#CustomerEntry-btnAddNew").click(function () {
            thisObj.Update();
        });
    },
    GetInfo: function () {
        var options = {
            Code: $("#ConfigEntry-txtCode").val(),
            Name: $("#ConfigEntry-txtName").val(),
            Value: $("#ConfigEntry-txtValue").val(),
            ValueEx1: $("#ConfigEntry-txtValueEx1").val(),
            ValueEx2: $("#ConfigEntry-txtValueEx2").val()
        };
        return options;
    },
    ShowInfo: function (data) {
        $("#ConfigEntry-txtCode").val(data.Code);
        $("#ConfigEntry-txtName").val(data.Name);
        $("#ConfigEntry-txtValue").val(data.Value);
        $("#ConfigEntry-txtValueEx1").val(data.ValueEx1);
        $("#ConfigEntry-txtValueEx2").val(data.ValueEx2);
    },
    Update: function (opts) {
        var windowID = this.Properties.windowID;
        var options = opts || this.GetInfo();
        $.extend(true, options, opts);
        var code = options.Code;
        var value = options.Value;
        var valueEx1 = options.ValueEx1;
        var valueEx2 = options.ValueEx2;
        var inputValue = $.string.Format('<InputValue/><Detail Code="{0}" Value="{1}" ValueEx1="{2}" ValueEx2="{3}"/>',
                               code, value, valueEx1, valueEx2);
        FWS.System.IO.Ajax({
            url: '../Mods/Accounts/Service/ConfigService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                $(windowID).window('close');
                Mods.Accounts.Config.Grid.RefreshCurrentPage();
            }
        });
    }
};
$(function () {
    Mods.Accounts.ConfigEntry.Init();
});