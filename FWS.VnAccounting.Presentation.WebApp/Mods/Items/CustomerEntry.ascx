<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CustomerEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.CustomerEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.CustomerEntry.js") %>"></script>
<div id="CustomerEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label>
                Code:</label>
            <input id="CustomerEntry-txtCode" type="text" style="width: 150px;" />
        </div>
        <div>
            <label>
                Customer name:</label>
            <input id="CustomerEntry-txtName" type="text" />
        </div>
        <div>
            <label>
                Contact Name:</label>
            <input id="CustomerEntry-txtContactName" type="text" />
        </div>
        <div>
            <label>
                Group Name:</label>
            <select id="CustomerEntry-cboGroupName">
            </select>
        </div>
        <div>
            <label>
                Payroll Account:</label>
            <select id="CustomerEntry-cboPayrollAccount">
            </select>
        </div>
        <div>
            <label>
                Department Name:</label>
            <select id="CustomerEntry-cbxDept" class="easyui-combotree" name="city"/>
        </div>
        <div>
            <label>
                Tax ID:</label>
            <input id="CustomerEntry-txtTaxID" type="text" />
        </div>
        <div>
            <label>
                Phone:</label>
            <input id="CustomerEntry-txtPhone" type="text" style="width: 150px;" />
            <label style="text-align: right;">
                Fax:</label>
            <input id="CustomerEntry-txtFax" type="text" style="width: 120px;" />
        </div>
        <div>
            <label>
                Address:</label>
            <input id="CustomerEntry-txtAddress" type="text" />
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
    <a id="CustomerEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Save</a> <a id="CustomerEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
            href="javascript:void(0)">Cancel</a> <a id="CustomerEntry-btnSearch" href="javascript:void(0);"
                class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
</div>
