if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ChartAccountEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        this.Event();

        switch (rowID) {
            case "-1":
                this.ShowSearch();
                break;
            case "0":
                this.ClearInfo();
                break;
            default:
                this.ShowInfo(rowID);
                break;
        }
        $("#ChartAccountList-txtCode").focus();
    },
    Properties: {
        windowID: "",
        rowID: ""
    },
    Event: function () {
        var windowID = "#" + $('#ChartAccountEntry-Content').parent().attr('id');
        $("#ChartAccountEntry-btnAddNew").live("click", function () {
            Mods.Items.ChartAccountEntry.Update();
            $(windowID).window('close');
        });
        $("#ChartAccountEntry-btnCancel").live("click", function () {
            $(windowID).window('close');
        });
        $("#ChartAccountEntry-btnSearch").live("click", function () {
            Mods.Items.ChartAccountEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var thisObj = this;
        var options = {
            ID: thisObj.Properties.rowID || "0",
            ParentID: thisObj.GetComboTreeValue(),
            Code: $("#ChartAccountList-txtCode").val(),
            Name: $("#ChartAccountList-txtAccountName").val()
        };
        return options;
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    GetComboTreeValue: function () {
        return $('#ChartAccountList-cbxTreeAccountList').combotree('getValue');
    },
    SetComboTreeValue: function (value) {
        $('#ChartAccountList-cbxTreeAccountList').combotree('setValue', value);
    },
    LoadComboTree: function () {
        var overlay = new COverlay();
        var thisObj = this;
        $('#ChartAccountList-cbxTreeAccountList').combotree({
            url: "../Mods/Items/Service/ChartAccountTree.ashx?dtype=0",
            animate: true,
            onBeforeExpand: function (node) {

            },
            onBeforeSelect: function (node) {

            },
            onSelect: function (node) {

            },
            onBeforeLoad: function (node, param) {
                if (!node)
                    overlay.Init();
            },
            onLoadSuccess: function (node, data) {
                overlay.Remove();
            },
            onLoadError: function () {
                overlay.Remove();
            }
        });
    },
    ShowInfo: function (rowID) {
        if (rowID) {
            var thisObj = this;
            var inputValue = $.string.Format('ID="{0}"', rowID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/ChartAccountService.asmx/GetChartAccount',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        $("#ChartAccountList-txtCode").val(data.Code);
                        $("#ChartAccountList-txtAccountName").val(data.Name);
                        if (data.ParentID != "")
                            thisObj.SetComboTreeValue(data.ParentID);
                        //$("#UnitEntry-chkUnitActive").attr("checked", data.Active == "True" ? true : false);
                    } catch (e) { $.iLog('::Loi ShowInfo ChartAccount'); }
                }
            });
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.ChartAccountEntry.GetInfo();
        var options = {
            ID: "",
            ParentID: "",
            Code: "",
            Name: ""
        };
        $.extend(true, options, opts);
        var id = "",
            action = "INSERT",
            parentid = options.ParentID == "" ? "" : 'ParentID="' + options.ParentID + '"';
        if (options.ID != "" && options.ID != "0") {
            action = 'UPDATE';
            id = 'ID="' + options.ID + '"';
        }
        var inputValue = $.string.Format('{0} {1} Code="{2}" Name="{3}" Status="{4}" Action="{5}"', id, parentid, options.Code, options.Name, 0, action);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ChartAccountService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        //Xu ly data result
                        //data.Result;
                        Mods.Items.ChartAccount.ReloadGrid();
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
    var thisObj = Mods.Items.ChartAccountEntry;
    thisObj.LoadComboTree();
});