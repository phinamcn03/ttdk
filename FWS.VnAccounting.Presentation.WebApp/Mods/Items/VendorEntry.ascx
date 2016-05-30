<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="VendorEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.VendorEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.VendorEntry.js") %>"></script>
<div id="VendorEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label>Code:</label>
            <input id="VendorEntry-txtCode" type="text" style="width: 150px;" />
        </div>
        <div>
            <label>Vendor name:</label>
            <input id="VendorEntry-txtName" type="text" />
        </div>
        <div>
            <label>Contact Name:</label>
            <input id="VendorEntry-txtContactName" type="text" />
        </div>
        <div>
            <label>Group Name:</label>
            <select id="VendorEntry-cboGroupName"></select>
        </div>
        <div>
            <label>Payroll Account:</label>
            <select id="VendorEntry-cboPayrollAccount"></select>
        </div>
                <div>
            <label>
                Department Name:</label>
            <select id="VendorEntry-cbxDept" class="easyui-combotree" name="city" />
        </div>
        <div>
            <label>Tax ID:</label>
            <input id="VendorEntry-txtTaxID" type="text" />
        </div>
        <div>
            <label>Phone:</label>
            <input id="VendorEntry-txtPhone" type="text" style="width: 150px;" />
            <label style="text-align: right; width: 50px; margin-right:5px;">Fax:</label>
            <input id="VendorEntry-txtFax" type="text" style="width: 165px;" />
        </div>
        <div>
            <label>Address:</label>
            <input id="VendorEntry-txtAddress" type="text" />
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
    <a id="VendorEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Save</a>
    <a id="VendorEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
        Cancel</a>
    <a id="VendorEntry-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="display: none;">
        Tìm kiếm</a>
</div>
