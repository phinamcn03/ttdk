if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.VendorEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        this.LoadGroup();
        switch (rowID) {
            case "-1":
                $("#VendorEntry-btnAddNew,#VendorEntry-btnCancel").hide();
                $("#VendorEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#VendorEntry-btnAddNew,#VendorEntry-btnCancel").show();
                $("#VendorEntry-btnSearch").hide();
                break;
            default:
                $("#VendorEntry-btnAddNew,#VendorEntry-btnCancel").show();
                $("#VendorEntry-btnSearch").hide();
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
        var windowID = "#" + $('#VendorEntry-Content').parent().attr('id');
        $("#VendorEntry-btnAddNew").click(function () {
            thisObj.Update();
            $(windowID).window('close');
        });
        $("#VendorEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#VendorEntry-btnSearch").click(function () {
            thisObj.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#VendorEntry-txtCode").val(),
            Name: $("#VendorEntry-txtName").val(),
            ContactName: $("#VendorEntry-txtContactName").val(),
            GroupCode: $("#VendorEntry-cboGroupName").val(),
            PayrollAccount: $("#VendorEntry-cboPayrollAccount").val(),
            TaxID: $("#VendorEntry-txtTaxID").val(),
            Phone: $("#VendorEntry-txtPhone").val(),
            Fax: $("#VendorEntry-txtFax").val(),
            Address: $("#VendorEntry-txtAddress").val()

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
        Mods.Items.Vendor.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue VendorID="{0}"/>', opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/VendorService.asmx/GetVendor',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#VendorEntry-txtCode").val(data.Code);
                    $("#VendorEntry-txtName").val(data.Name);
                    $("#VendorEntry-txtContactName").val(data.ContactName);
                    $("#VendorEntry-cboGroupName").val(data.GroupName);
                    $("#VendorEntry-cboPayrollAccount").val(data.PayrollAccount);
                    $("#VendorEntry-txtTaxID").val(data.TaxNo);
                    $("#VendorEntry-txtPhone").val(data.Phone);
                    $("#VendorEntry-txtFax").val(data.Fax);
                    $("#VendorEntry-txtAddress").val(data.Address);
                }
            });
        }
    },
    Update: function (opts) {
        var options = opts || Mods.Items.VendorEntry.GetInfo();
        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "Insert" : "Update";
        var inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" Code="{2}" Name="{3}" ContactName="{4}" GroupCode="{5}" PayrollAccount="{6}" TaxNo="{7}" Phone="{8}" Fax="{9}" Address="{10}"/>',
                                   action, options.ID, options.Code, options.Name, options.ContactName, options.GroupCode==null?'':options.GroupCode,options.PayrollAccount,
                                       options.TaxID, options.Phone, options.Fax, options.Address);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/VendorService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                Mods.Items.Vendor.Grid.RefreshCurrentPage();
            }
        });
    },
    LoadGroup: function () {
        var inputValue = "ID='0' RowsPerPage='999'";
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/VendorGroupService.asmx/GetVendorGroupList',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                var ret = "";
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                if (data) {
                    data = eval("(" + data + ")");

                    for (i in data) {
                        var item = data[i];
                        ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                    }
                }
                $("#VendorEntry-cboGroupName").html(ret);
            }
        });
        var inputValue = "FilterCode='VendorPayroll'";
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
                $("#VendorEntry-cboPayrollAccount").html(ret);
            }
        });
    },
    GetComboTreeValue: function () {
        return $('#VendorEntry-cbxDept').combotree('getValue');
    },
    SetComboTreeValue: function (value) {
        $('#VendorEntry-cbxDept').combotree('setValue', value);
    },
    LoadComboTree: function () {
        var overlay = new COverlay();
        var thisObj = this;
        $('#VendorEntry-cbxDept').combotree({
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
    Mods.Items.VendorEntry.Event();
    Mods.Items.VendorEntry.LoadComboTree();
});