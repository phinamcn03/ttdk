<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ActiveIngredient.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ActiveIngredient" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ActiveIngredient.js") %>"></script>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ActiveIngredientEntry.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a id="ActiveIngredient-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="ActiveIngredient-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
        <a id="ActiveIngredient-btnSearchAdvance" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
            Tìm kiếm nâng cao</a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>Code</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="ActiveIngredient-txtCode" type="text" class="border-layout-search-code" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>Name</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="ActiveIngredient-txtName" type="text" class="border-layout-search-code" />
                            <a id="ActiveIngredient-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
                                Search</a></li>
                    </ul>
                </div>
            </div>
        </div>
<div class="border-layout-search-bar">
    <span class="border-layout-search-bar-icon search-bar-icon-up"></span>
    <span class="border-layout-search-bar-title"></span>
</div>
</fieldset> </div>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend>Danh sách::Danh mục hoạt tính</legend>
        <table id="ActiveIngredient_Grid" class="SkinGrid">
        </table>
        <div id="ActiveIngredient_Gridpage"></div>
    </fieldset>
</div>
