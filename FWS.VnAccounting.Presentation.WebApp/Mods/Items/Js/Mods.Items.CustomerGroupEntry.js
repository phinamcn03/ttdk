if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.CustomerGroupEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        
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
        $("#CustomerGroupEntry-txtCustomerGroupCode").focus();
    },
    Properties: {
        windowID: "",
        rowID: ""
    },
    Event: function () {
        var windowID = "#" + $('#CustomerGroupEntry-Content').parent().attr('id');
        $("#CustomerGroupEntry-btnAddNew").live("click", function () {            
            Mods.Items.CustomerGroupEntry.Update();
            $(windowID).window('close');
        });
        $("#CustomerGroupEntry-btnCancel").live("click", function () {
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#CustomerGroupEntry-txtCustomerGroupCode").val(),
            Name: $("#CustomerGroupEntry-txtCustomerGroupName").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    ShowInfo: function (rowID) {
        if (rowID) {
            var inputValue = $.string.Format('ID="{0}"', rowID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/CustomerGroupService.asmx/GetCustomerGroup',
                type: 'POST',
                data: { pInput: inputValue },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").text();
                        data = eval("(" + data + ")");
                        $("#CustomerGroupEntry-txtCustomerGroupCode").val(data.Code);
                        $("#CustomerGroupEntry-txtCustomerGroupName").val(data.Name);
                    }
                    catch (e) { }
                }
            });
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.CustomerGroupEntry.GetInfo();
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
            url: '../Mods/Items/Service/CustomerGroupService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "OK") {
                        Mods.Items.CustomerGroup.Grid.ReloadGrid();
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
    Mods.Items.CustomerGroupEntry.Event();
});