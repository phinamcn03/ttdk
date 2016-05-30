if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.VendorGroupEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#VendorGroupEntry-btnAddNew,#VendorGroupEntry-btnCancel").hide();
                $("#VendorGroupEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#VendorGroupEntry-btnAddNew,#VendorGroupEntry-btnCancel").show();
                $("#VendorGroupEntry-btnSearch").hide();
                break;
            default:
                $("#VendorGroupEntry-btnAddNew,#VendorGroupEntry-btnCancel").show();
                $("#VendorGroupEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
        $("#VendorGroupEntry-txtCode").focus();
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#VendorGroupEntry-Content').parent().attr('id');
        $("#VendorGroupEntry-btnAddNew").click(function () {
            Mods.Items.VendorGroupEntry.Update();
            $(windowID).window('close');
        });
        $("#VendorGroupEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#VendorGroupEntry-btnSearch").click(function () {
            Mods.Items.VendorGroupEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#VendorGroupEntry-txtCode").val(),
            Name: $("#VendorGroupEntry-txtName").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.VendorGroupEntry.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('VendorID="{0}"', opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/VendorGroupService.asmx/GetVendorGroup',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#VendorGroupEntry-txtCode").val(data.Code);
                    $("#VendorGroupEntry-txtName").val(data.Name);
                }
            });
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.VendorGroupEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: ""
        };
        $.extend(true, options, opts);
        var _action = "INSERT", _id = "";
        if (options.ID != "" && options.ID != "0") {
            _action = "UPDATE";
            _id = 'ID="' + options.ID + '"';
        }
        var inputValue = $.string.Format('{0} Code="{1}" Name="{2}" Status="{3}" Action="{4}"', _id, options.Code, options.Name, 0, _action);

        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/VendorGroupService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        Mods.Items.VendorGroup.Grid.ReloadGrid();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    }
};
$(function () {
    Mods.Items.VendorGroupEntry.Event();
});