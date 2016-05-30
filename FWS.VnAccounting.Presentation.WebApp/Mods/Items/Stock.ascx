<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Stock.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.Stock" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.Stock.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a id="Stock-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="Stock-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
        <a id="Stock-btnSearchAdvance" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
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
                            <input id="Stock-txtCode" type="text" class="border-layout-search-code" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>Name</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Stock-txtName" type="text" class="border-layout-search-name" />
                            <a id="Stock-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
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
    <fieldset class="border-layout-list"><legend>Danh sách::Kho</legend>
        <table id="stock_grid" class="SkinGrid">
        </table>
        <div id="stock_gridpage"></div>
    </fieldset>
</div>
