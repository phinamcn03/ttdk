<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCUserList.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.User.UCUserList" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/User/js/Mods.Users.List.js") %>"></script>

<div class="border-layout">
    <fieldset class="border-layout-functions">
        <a id="UserList-AddNewUser" class="easyui-linkbutton" iconcls="icon-save">
            Thêm người dùng</a>
        <a id="UserList-DeleteUser" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete">
            Xóa</a>
    </fieldset>
    
</div>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend>Danh sách::Phân quyền</legend>
        <table id="UserList_GridID" class="SkinGrid">
        </table>
        <div id="UserList_GridPage"></div>
    </fieldset>
</div>
