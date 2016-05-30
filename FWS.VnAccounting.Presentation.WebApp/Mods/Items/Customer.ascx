<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Customer.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.Customer" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.Customer.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend id='fsFunctionTitle'>Chức năng</legend>
        <a id="Customer-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="Customer-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
        <a id="Customer-btnSearchAdvance" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
            Tìm kiếm nâng cao</a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id='Seach-lblCode'>Code</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Customer-txtCode" class="border-layout-search-code" type="text" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id='Seach-lblName'>Name</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Customer-txtName" class="border-layout-search-name" type="text" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id='Seach-lblGroupName'>Group Name</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Customer-txtGroupName" class="border-layout-search-group" type="text" />
                            <a id="Customer-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
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
    <fieldset class="border-layout-list"><legend id='fsListTitle'>Danh sách::Khách hàng</legend>
        <table id="Customer_Grid" class="SkinGrid">
        </table>
        <div id="Customer_GridPage"></div>
    </fieldset>
</div>
