<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EmployeeEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.EmployeeEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.EmployeeEntry.js") %>"></script>
<div id="EmployeeEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label>
                Code:</label>
            <input id="EmployeeEntry-txtCode" type="text" style="width: 150px;" />
        </div>
        <div>
            <label>
                Employee name:</label>
            <input id="EmployeeEntry-txtName" type="text" />
        </div>
        <div>
            <label>
                Payroll Account:</label>
            <select id="EmployeeEntry-cboPayrollAccount">
            </select>
        </div>
        <div>
            <label>
                Department Name:</label>
            <select id="EmployeeEntry-cbxDept" class="easyui-combotree" name="city" />
        </div>
        <div>
            <label>
                Tax ID:</label>
            <input id="EmployeeEntry-txtTaxID" type="text" />
        </div>
        <div>
            <label>
                Phone:</label>
            <input id="EmployeeEntry-txtPhone" type="text" style="width: 150px;" />
            <label style="text-align: right; width: 50px; margin-right: 5px;">
                Fax:</label>
            <input id="EmployeeEntry-txtFax" type="text" style="width: 165px;" />
        </div>
        <div>
            <label>
                Address:</label>
            <input id="EmployeeEntry-txtAddress" type="text" />
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
    <a id="EmployeeEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Save</a> <a id="EmployeeEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
            href="javascript:void(0)">Cancel</a> <a id="EmployeeEntry-btnSearch" href="javascript:void(0);"
                class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
</div>
