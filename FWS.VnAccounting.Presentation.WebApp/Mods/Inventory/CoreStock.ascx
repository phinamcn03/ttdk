<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CoreStock.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.CoreStock" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Inventory/Service/CoreStock.ashx?instantid=" + InstantID) %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a id="<%=InstantID + "-btnAddNew"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Thêm mới</a>
        <a id="<%=InstantID +"-btnDelete"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Xóa</a>
        <a id="<%=InstantID +"-btnSearchAdvance"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
            Tìm kiếm nâng cao</a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>Template time</label></li>
                        <li>
                            <label>Inward no</label></li>
                    </ul>
                    <ul>
                        <li>
                            <select style="width: 100px;" id="<%=InstantID+"-txtTemplateTime"%>"></select></li>
                        <li>
                            <input type="text" style="width: 100px;" id="<%=InstantID+"-txtStockNo"%>" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>From date</label></li>
                        <li>
                            <label>Total amount</label></li>
                    </ul>
                    <ul>
                        <li>
                        <input type="text" readonly="readonly" id="<%=InstantID + "-txtFromDate"%>" class="easyui-datebox" style="width: 100px;" />
                         </li>
                        <li>
                            <input type="text" style="width: 100px;" id="<%=InstantID+"-txtTotalAmount"%>" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 70px;">
                        <li>
                            <label>To date</label></li>
                        <li>
                            <label>Partner name</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input class="easyui-datebox" style="width: 100px;" id="<%=InstantID+"-txtToDate"%>" type="text" />
                            <a id="<%=InstantID+"-btnSearch"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="margin-left: 40px;">
                                Search</a>
                        </li>
                        <li>
                            <input type="text" style="width: 210px;" class="easyui-searchbox" id="<%=InstantID+"-txtPartnerName"%>" />
                        </li>
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
    <fieldset class="border-layout-list"><legend>Danh sách::Danh mục tài khoản</legend>
        <table id="<%=InstantID+"_Grid"%>" class="SkinGrid">
        </table>
        <div id="<%=InstantID+"_Gridpage"%>"></div>
    </fieldset>
</div>
