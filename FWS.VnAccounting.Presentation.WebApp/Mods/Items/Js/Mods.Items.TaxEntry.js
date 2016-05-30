if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.TaxEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#TaxEntry-btnAddNew,#TaxEntry-btnCancel").hide();
                $("#TaxEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#TaxEntry-btnAddNew,#TaxEntry-btnCancel").show();
                $("#TaxEntry-btnSearch").hide();
                break;
            default:
                $("#TaxEntry-btnAddNew,#TaxEntry-btnCancel").show();
                $("#TaxEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#TaxEntry-Content').parent().attr('id');
        $("#TaxEntry-btnAddNew").click(function () {
            Mods.Items.TaxEntry.Update();
            $(windowID).window('close');
        });
        $("#TaxEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#TaxEntry-btnSearch").click(function () {
            Mods.Items.TaxEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#TaxEntry-txtCode").val(),
            Name: $("#TaxEntry-txtName").val(),
            Description: $("#TaxEntry-txtDescription").val(),
            Percent: ($("#TaxEntry-txtPercent").val() || "").replace("%", "")
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#TaxEntry-txtPercent").val("0%");
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
        Mods.Items.Tax.ExecuteSearch(result);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue  UserID="{0}" ID="{1}"/>', 1, opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/TaxService.asmx/GetInventoryTax',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#TaxEntry-txtCode").val(data.Code);
                    $("#TaxEntry-txtName").val(data.Name);
                    $("#TaxEntry-txtDescription").val(data.Description);
                    $('#TaxEntry-txtPercent').numberspinner("setValue", data.Percent);
                    $("#TaxEntry-chkActive").attr("checked", data.Active == "True" ? true : false);
                }
            });

        }
    },
    Update: function (opts) {
        var options = opts || Mods.Items.TaxEntry.GetInfo();
        $.extend(true, options, opts);
        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "Insert" : "Update";
        var inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" Code="{2}" Name="{3}" Description="{4}" Percent="{5}" />',
                                   action, options.ID, options.Code, options.Name, options.Description, options.Percent);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/TaxService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                Mods.Items.Tax.Grid.RefreshCurrentPage();
            }
        });
    }
};
$(function () {
    /* Event */
    Mods.Items.TaxEntry.Event();
});