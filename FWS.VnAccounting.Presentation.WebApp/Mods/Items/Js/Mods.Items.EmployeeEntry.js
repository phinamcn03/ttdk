if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.EmployeeEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        this.LoadGroup();
        switch (rowID) {
            case "-1":
                $("#EmployeeEntry-btnAddNew,#EmployeeEntry-btnCancel").hide();
                $("#EmployeeEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#EmployeeEntry-btnAddNew,#EmployeeEntry-btnCancel").show();
                $("#EmployeeEntry-btnSearch").hide();
                break;
            default:
                $("#EmployeeEntry-btnAddNew,#EmployeeEntry-btnCancel").show();
                $("#EmployeeEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#EmployeeEntry-Content').parent().attr('id');
        $("#EmployeeEntry-btnAddNew").click(function () {
            thisObj.Update();
            $(windowID).window('close');
        });
        $("#EmployeeEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#EmployeeEntry-btnSearch").click(function () {
            thisObj.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#EmployeeEntry-txtCode").val(),
            Name: $("#EmployeeEntry-txtName").val(),
            PayrollAccount: $("#EmployeeEntry-cboPayrollAccount").val(),
            TaxID: $("#EmployeeEntry-txtTaxID").val(),
            Phone: $("#EmployeeEntry-txtPhone").val(),
            GroupID: this.GetComboTreeValue(),
            Fax: $("#EmployeeEntry-txtFax").val(),
            Address: $("#EmployeeEntry-txtAddress").val()
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
        Mods.Items.Employee.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        var thisObj = this;
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue ID="{0}"/>', opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/EmployeeService.asmx/GetEmployee',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#EmployeeEntry-txtCode").val(data.Code);
                    $("#EmployeeEntry-txtName").val(data.Name);
                    $("#EmployeeEntry-cboPayrollAccount").val(data.PayrollAccount);
                    $("#EmployeeEntry-txtTaxID").val(data.TaxNo);
                    $("#EmployeeEntry-txtPhone").val(data.Phone);
                    $("#EmployeeEntry-txtFax").val(data.Fax);
                    $("#EmployeeEntry-txtAddress").val(data.Address);
                    if (data.GroupCode != null)
                        thisObj.SetComboTreeValue(data.GroupID);
                }
            });
        }
    },
    Update: function (opts) {
        var options = opts || Mods.Items.EmployeeEntry.GetInfo();
        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "Insert" : "Update";
        var inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" Code="{2}" Name="{3}" PayrollAccount="{4}" Phone="{5}" Address="{6}" TaxNo="{7}" Fax="{8}" GroupID="{9}"/>',
                                   action, options.ID, options.Code, options.Name, options.PayrollAccount, options.Phone, options.Address, options.TaxID, options.Fax, options.GroupID);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/EmployeeService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                Mods.Items.Employee.Grid.RefreshCurrentPage();
            }
        });
    },
    LoadGroup: function () {
        var inputValue = "FilterCode='EmployeePayroll'";
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ChartAccountService.asmx/GetChartAccountList',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#EmployeeEntry-cboPayrollAccount").html(ret);
            }
        });
    },
    GetComboTreeValue: function () {
        return $('#EmployeeEntry-cbxDept').combotree('getValue');
    },
    SetComboTreeValue: function (value) {
        $('#EmployeeEntry-cbxDept').combotree('setValue', value);
    },
    LoadComboTree: function () {
        var overlay = new COverlay();
        var thisObj = this;
        $('#EmployeeEntry-cbxDept').combotree({
            url: "../Mods/Core/Service/EmployeeDepartment.ashx?dtype=0",
            animate: true,
            width: 370,
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
    }
};
$(function () {
    /* Event */
    Mods.Items.EmployeeEntry.Event();
    Mods.Items.EmployeeEntry.LoadComboTree();
});