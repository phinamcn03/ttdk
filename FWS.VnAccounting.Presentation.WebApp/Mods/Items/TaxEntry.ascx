<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="TaxEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.TaxEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.TaxEntry.js") %>"></script>
<div id="TaxEntry-Content" class="easyui-layout" fit="true">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input id="TaxEntry-txtCode" type="text" style="width: 150px;" />
            </div>
            <div>
                <label>Tax name:</label>
                <input id="TaxEntry-txtName" type="text" />
            </div>
            <div>
                <label>Description:</label>
                <input id="TaxEntry-txtDescription" type="text" />
            </div>
            <div>
                <label>Tax Percent:</label>
                <input id="TaxEntry-txtPercent" class="easyui-numberspinner" min="0" max="100" precision="0" suffix="%" value="0" style="width: 60px;" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="TaxEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="TaxEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
        <a id="TaxEntry-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="display: none;">
            Tìm kiếm</a>
    </div>
</div>
