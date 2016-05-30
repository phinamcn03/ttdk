if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.CustomerEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        this.LoadGroup();
        switch (rowID) {
            case "-1":
                $("#CustomerEntry-btnAddNew,#CustomerEntry-btnCancel").hide();
                $("#CustomerEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#CustomerEntry-btnAddNew,#CustomerEntry-btnCancel").show();
                $("#CustomerEntry-btnSearch").hide();
                break;
            default:
                $("#CustomerEntry-btnAddNew,#CustomerEntry-btnCancel").show();
                $("#CustomerEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }

    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#CustomerEntry-Content').parent().attr('id');
        $("#CustomerEntry-btnAddNew").click(function () {
            Mods.Items.CustomerEntry.Update();
            $(windowID).window('close');
        });
        $("#CustomerEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#CustomerEntry-btnSearch").click(function () {
            Mods.Items.CustomerEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#CustomerEntry-txtCode").val(),
            Name: $("#CustomerEntry-txtName").val(),
            ContactName: $("#CustomerEntry-txtContactName").val(),
            GroupCode: $("#CustomerEntry-cboGroupName").val(),
            PayrollAccount: $("#CustomerEntry-cboPayrollAccount").val(),
            TaxID: $("#CustomerEntry-txtTaxID").val(),
            Phone: $("#CustomerEntry-txtPhone").val(),
            Fax: $("#CustomerEntry-txtFax").val(),
            Address: $("#CustomerEntry-txtAddress").val()

        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#CustomerEntry-chkCustomerActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.Customer.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue CustomerID="{0}"/>', opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/CustomerService.asmx/GetCustomer',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#CustomerEntry-txtCode").val(data.Code);
                    $("#CustomerEntry-txtName").val(data.Name);
                    $("#CustomerEntry-txtContactName").val(data.ContactName);
                    $("#CustomerEntry-cboGroupName").val(data.GroupName);
                    $("#CustomerEntry-cboPayrollAccount").val(data.PayrollAccount);
                    $("#CustomerEntry-txtTaxID").val(data.TaxNo);
                    $("#CustomerEntry-txtPhone").val(data.Phone);
                    $("#CustomerEntry-txtFax").val(data.Fax);
                    $("#CustomerEntry-txtAddress").val(data.Address);
                }
            });
        }
    },
    Update: function (opts) {
        var options = opts || Mods.Items.CustomerEntry.GetInfo();
        $.extend(true, options, opts);
        var rowID = this.Properties.rowID;        
        var action = rowID == "0" ? "Insert" : "Update";
        var inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" Code="{2}" Name="{3}" ContactName="{4}" GroupCode="{5}" PayrollAccount="{6}" TaxNo="{7}" Phone="{8}" Fax="{9}" Address="{10}"/>',
                                   action, options.ID, options.Code, options.Name, options.ContactName, options.GroupCode, options.PayrollAccount,
                                       options.TaxID, options.Phone, options.Fax, options.Address);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/CustomerService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                Mods.Items.Customer.Grid.RefreshCurrentPage();
            }
        });
    },
    LoadGroup: function () {
        var inputValue = $.string.Format('ID="{0}" RowsPerPage="999"', 0);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/CustomerGroupService.asmx/GetCustomerGroupList',
            type: 'POST',
            data: { pInput: inputValue },
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
                $("#CustomerEntry-cboGroupName").html(ret);
            }
        });
        var inputValue = "FilterCode='CustomerPayroll'";
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
                $("#CustomerEntry-cboPayrollAccount").html(ret);
            }
        });
    },
    GetComboTreeValue: function () {
        return $('#CustomerEntry-cbxDept').combotree('getValue');
    },
    SetComboTreeValue: function (value) {
        $('#CustomerEntry-cbxDept').combotree('setValue', value);
    },
    LoadComboTree: function () {
        var overlay = new COverlay();
        var thisObj = this;
        $('#CustomerEntry-cbxDept').combotree({
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
    Mods.Items.CustomerEntry.Event();
    Mods.Items.CustomerEntry.LoadComboTree();
});