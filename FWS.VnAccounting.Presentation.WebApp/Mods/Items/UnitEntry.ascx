<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UnitEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.UnitEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.UnitEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="UnitEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input type="text" id="UnitEntry-txtCode" style="width: 150px;" />
            </div>
            <div>
                <label>Unit name:</label>
                <input type="text" id="UnitEntry-txtName" />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" id="UnitEntry-txtDescription" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="UnitEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="UnitEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
        <a id="UnitEntry-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="display: none;">
            Tìm kiếm</a>
    </div>
</div>
