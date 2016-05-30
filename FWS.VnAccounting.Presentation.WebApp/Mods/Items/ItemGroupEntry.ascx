<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ItemGroupEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ItemGroupEntry" %>
<%@ Register src="../ACore/GroupBaseEntry.ascx" tagname="GroupBaseEntry" tagprefix="ucGroupBaseEntry" %>
<ucGroupBaseEntry:GroupBaseEntry ID="GroupBaseEntry_ItemsProductGroupBaseEntry" runat="server" GridID="30" InstantID="Product" RefType="2"/>
<%--<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ProductGroupEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="ItemGroupEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input type="text" id="ItemGroupEntry-txtCode" style="width: 150px;" />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" id="ItemGroupEntry-txtName" />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" id="ItemGroupEntry-txtDesc" />
            </div>
            <div>
                <label>&nbsp;</label>
                <input type="checkbox" id="ItemGroupEntry-cbActive" /><span>Active</span>
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="ItemGroupEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="ItemGroupEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
        <a id="ItemGroupEntry-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="display: none;">
            Tìm kiếm</a>
    </div>
</div>
--%>