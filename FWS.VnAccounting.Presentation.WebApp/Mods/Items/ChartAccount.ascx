<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ChartAccount.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ChartAccount" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ChartAccount.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a id="ChartAccount-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="ChartAccount-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
        <a id="ChartAccount-btnSearchAdvance" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
            Tìm kiếm nâng cao</a>
    </fieldset>
    <fieldset class="border-layout-search"><div class="border-layout-search-content">
        <div class="layout-table-columns">
            <div class="layout-table-column">
                <ul class="layout-table-column-label">
                    <li>
                        <label>Code</label></li>
                </ul>
                <ul>
                    <li>
                        <input type="text" id="ChartAccount-txtCode" class="border-layout-search-code" /></li>
                </ul>
            </div>
            <div class="layout-table-column">
                <ul class="layout-table-column-label">
                    <li>
                        <label>Name</label></li>
                </ul>
                <ul>
                    <li>
                        <input type="text" id="ChartAccount-txtName" class="border-layout-search-name" /></li>
                </ul>
            </div>
            <div class="layout-table-column">
                <ul class="layout-table-column-label">
                    <li>
                        <label>Group Name</label></li>
                </ul>
                <ul>
                    <li>
                        <input type="text" id="ChartAccount-txtGroupName" class="border-layout-search-group" />
                        <a id="ChartAccount-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
                            Search</a></li>
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
    <fieldset class="border-layout-list"><legend>Danh sách::Danh mục tài khoản</legend>
        <table id="chartaccount_grid" class="SkinGrid">
        </table>
        <div id="chartaccount_gridpage"></div>
    </fieldset>
</div>
