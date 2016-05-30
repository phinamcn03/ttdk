<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Role.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Role" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Accounts/Js/Mods.Accounts.Role.js") %>"></script>
<style type="text/css">
    .treeclick
    {
        /* DLT: Tạm cho ẩn chổ tree */
        display:none;
    }
</style>
<div class="border-layout">
    <fieldset class="border-layout-functions">
        <a id="Update-Role" class="easyui-linkbutton" iconcls="icon-save">
            Update</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete">
            Xóa</a>
    </fieldset>
    <fieldset class="border-layout-search relative">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul>
                        <li>
                            <label>Chọn người sử dụng</label>
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul>
                        <li>
                            <input id="GroupUser-Role" style="width: 150px;" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-layout-search-bar">
            <span class="border-layout-search-bar-icon search-bar-icon-up"></span>
            <span class="border-layout-search-bar-title"></span>
        </div>
    </fieldset>
</div>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend>Danh sách::Phân quyền</legend>
        <table id="RoleTree" class="SkinGrid">
        </table>
    </fieldset>
</div>
