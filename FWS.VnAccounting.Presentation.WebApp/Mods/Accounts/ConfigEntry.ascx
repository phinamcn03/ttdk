<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ConfigEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.ConfigEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Accounts/Js/Mods.Accounts.ConfigEntry.js") %>"></script>
<div id="CustomerEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label>Tham số:</label>
            <input id="ConfigEntry-txtName" type="text" readonly="readonly" style="" />
            <input id="ConfigEntry-txtCode" type="hidden" />
        </div>
        <div>
            <label>Giá trị:</label>
            <input id="ConfigEntry-txtValue" type="text" />
        </div>
        <div>
            <label>Giá trị mở rộng [1]</label>
            <input id="ConfigEntry-txtValueEx1" type="text" />
        </div>
        <div>
            <label>Giá trị mở rộng [2]</label>
            <input id="ConfigEntry-txtValueEx2" type="text" />
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
    <a id="CustomerEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Save</a>
    <a id="CustomerEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
        Cancel</a>
</div>
