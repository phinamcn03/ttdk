if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ProductGroupEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#ItemGroupEntry-btnAddNew,#ItemGroupEntry-btnCancel").hide();
                $("#ItemGroupEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#ItemGroupEntry-btnAddNew,#ItemGroupEntry-btnCancel").show();
                $("#ItemGroupEntry-btnSearch").hide();
                break;
            default:
                $("#ItemGroupEntry-btnAddNew,#ItemGroupEntry-btnCancel").show();
                $("#ItemGroupEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#ItemGroupEntry-Content').parent().attr('id');
        $("#ItemGroupEntry-btnAddNew").click(function () {
            Mods.Items.ProductGroupEntry.Update();
            $(windowID).window('close');
        });
        $("#ItemGroupEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#ItemGroupEntry-btnSearch").click(function () {
            Mods.Items.ProductGroupEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#ItemGroupEntry-txtCode").val(),
            Name: $("#ItemGroupEntry-txtName").val(),
            Desc: $("#ItemGroupEntry-txtDesc").val(),
            Active: $("#ItemGroupEntry-chkActive:checked").length
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#ItemGroupEntry-chkActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.ProductGroup.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}"/>', , opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/ProductService.asmx/GetInventoryListGroup',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#ItemGroupEntry-txtCode").val(data.Code);
                    $("#ItemGroupEntry-txtName").val(data.Name);
                    $("#ItemGroupEntry-txtDesc").val(data.Description);
                    $("#ItemGroupEntry-cbActive").attr("checked", data.Active == "True" ? true : false);
                }
            });
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.ProductGroupEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: "",
            Description: "",
            Active: ""
        };
        $.extend(true, options, opts);
        var action;
        if (options.ID == 0)
            action = "INSERT";
        else
            action = "UPDATE";

        var inputValue = $.string.Format('<InputValue ID="{0}" Code="{1}" Name="{2}" Description ="{3}" Active="{4}" Action ="{5}"/>',
                                        options.ID, options.Code, options.Name, options.Desc, options.Active, action);
        ID: this.Properties.rowID || "0",
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ProductService.asmx/UpdateInventoryProductGroup',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").text();
                data = eval("(" + data + ")");
                Mods.Items.ProductGroup.RefreshCurrentPage();
            }
        });
    }
};
$(function () {
    /* Event */
    Mods.Items.ProductGroupEntry.Event();
});