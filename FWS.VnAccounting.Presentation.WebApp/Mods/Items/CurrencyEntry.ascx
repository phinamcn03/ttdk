<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CurrencyEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.CurrencyEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.CurrencyEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="CurrencyEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input type="text" id="CurrencyEntry-txtCode" style="width: 150px;" />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" id="CurrencyEntry-txtName" />
            </div>           
            <div>
                <label>&nbsp;</label>
                <input type="checkbox" id="CurrencyEntry-chkActive" checked="checked" /><label for="CurrencyEntry-chkActive">Active</label>
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="CurrencyEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="CurrencyEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
        <a id="CurrencyEntry-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="display: none;">
            Tìm kiếm</a>
    </div>
</div>