/*
Phi Nam Edited
*/

if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Core == 'undefined')
    Mods.Core = {};

Mods.Core.EmployeeDepartmentList = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        this.Event();

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
        $("#EmployeeDepartmentEntry-txtCode").focus();
    },
    Properties: {
        windowID: "",
        rowID: ""
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#EmployeeDepartmentEntry-Content').parent().attr('id');
        $("#EmployeeDepartmentEntry-btnSave").live("click", function () {
            $(windowID).window('close');
            thisObj.Update();
        });
        $("#EmployeeDepartmentEntry-btnCancel").live("click", function () {
            $(windowID).window('close');
        });
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    GetComboTreeValue: function () {
        return $('#EmployeeDepartmentEntry-cbxTreeList').combotree('getValue');
    },
    SetComboTreeValue: function (value) {
        $('#EmployeeDepartmentEntry-cbxTreeList').combotree('setValue', value);
    },
    LoadComboTree: function () {
        var overlay = new COverlay();
        var thisObj = this;
        $('#EmployeeDepartmentEntry-cbxTreeList').combotree({
            url: "../Mods/Core/Service/EmployeeDepartment.ashx?dtype=0",
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
    GetInfo: function () {
        var thisObj = this;
        var options = {
            ID: thisObj.Properties.rowID || "0",
            ParentID: thisObj.GetComboTreeValue(),
            Code: $("#EmployeeDepartmentEntry-txtCode").val(),
            Name: $("#EmployeeDepartmentEntry-txtName").val()
        };
        return options;
    },
    ShowInfo: function (rowID) {
        if (rowID) {
            var thisObj = this;
            var inputValue = $.string.Format('<InputValue ID="{0}"/>', rowID);
            FWS.System.IO.Ajax({
                url: '../Mods/Core/Service/EmployeeDepartmentService.asmx/GetPersonRole',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        if (data) {
                            thisObj.Properties.rowID = data.ID;
                            $("#EmployeeDepartmentEntry-txtCode").val(data.Code);
                            $("#EmployeeDepartmentEntry-txtName").val(data.Name);                            
                            if (data.ParentID != "") {
                                thisObj.SetComboTreeValue(data.ParentID);
                            }
                        }
                    } catch (e) {
                        $.iLog('::Loi ShowInfo PersonRole');
                    }
                }
            });
        }
    },
    Update: function (opts) {
        var thisObj = Mods.Core.EmployeeDepartmentList;
        opts = opts || thisObj.GetInfo();
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
        var inputValue = $.string.Format('<InputValue {0} {1} FilterCode="Employee" Code="{2}" Name="{3}" Status="{4}" Action="{5}"/>', id, parentid, options.Code, options.Name, 0, action);
        FWS.System.IO.Ajax({
            url: '../Mods/Core/Service/EmployeeDepartmentService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "OK") {
                        Mods.Core.EmployeeDepartment.Grid.Reload();
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
    Mods.Core.EmployeeDepartmentList.LoadComboTree();
});