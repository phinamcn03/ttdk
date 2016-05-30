<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AdjustmentStock.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.AdjustmentStock" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Inventory/Js/Mods.Inventory.AdjustStock.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a id="AdjustStock-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="AdjustStock-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>Template time</label></li>
                        <li>
                            <label>Adjust type</label></li>
                    </ul>
                    <ul>
                        <li>
                            <select style="width: 100px;" id="AdjustmentStock-txtTemplateTime"></select></li>
                        <li>
                            <select style="width: 100px;" id="AdjustmentStock-txtAdjustmentType"></select></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>From date</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input class="easyui-datebox" style="width: 100px;" id="AdjustmentStock-txtFromDate" type="text" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>To date</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input class="easyui-datebox" style="width: 100px;" id="AdjustmentStock-txtToDate" type="text" />
                            <a id="TranferStock-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="margin-left: 40px;">
                                Search</a>
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
    <fieldset class="border-layout-list"><legend>Danh sách::</legend>
        <table id="AdjustStock_Grid" class="SkinGrid">
        </table>
        <div id="AdjustStock_Gridpage"></div>
    </fieldset>
</div>
