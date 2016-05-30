<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CustomerGroupEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.CustomerGroupEntry" %>
<%@ Register src="../ACore/GroupBaseEntry.ascx" tagname="GroupBaseEntry" tagprefix="ucGroupBaseEntry" %>
<ucGroupBaseEntry:GroupBaseEntry ID="GroupBaseEntry_ItemsCustomerGroupBaseEntry" runat="server" GridID="30" InstantID="Customer" RefType="1"/>
<!--
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.CustomerGroupEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="CustomerGroupEntry-Content">
    <div region="center" border="false" style="border: 1px solid #ccc;">
        <fieldset class="border-layout-form">
            <div>
                <label>
                    <asp:Literal runat="server" ID="ltrCustomerGroup" EnableViewState="false">Nhóm khách hàng</asp:Literal>:</label>
                <input type="text" id="CustomerGroupEntry-txtCustomerGroupCode" />
            </div>
            <div>
                <label>
                    <asp:Literal runat="server" ID="ltrCustomerGroupName" EnableViewState="false">Tên nhóm khách hàng</asp:Literal>:</label>
                <input type="text" id="CustomerGroupEntry-txtCustomerGroupName" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="CustomerGroupEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="CustomerGroupEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
    </div>
</div>
-->