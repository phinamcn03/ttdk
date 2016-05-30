<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CoreStockEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.CoreStockEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Inventory/Service/CoreStockEntry.ashx?instantid=" + InstantID) %>"></script>
<!-- Create Inward Stock --> 
<div class="easyui-layout" fit="true" id="<%=InstantID + "-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions"><legend>Chức năng</legend>
                <a id="<%=InstantID+"-btnBack" %>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-back">
                    Back</a>
                <a id="<%=InstantID+"-btnSave" %>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save">
                    Save</a>
                <a id="<%=InstantID+"-btnPost"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-redo">
                    Post</a>
                <a id="<%=InstantID+"-btnUnPost"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-undo" style="display:none">
                    UnPost</a>
                <a id="<%=InstantID+"-btnCancel"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
                    Cancel</a>
                <a id="<%=InstantID+"-btnAddNew"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
                    Thêm Chi tiết</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="<%=InstantID + "Inventory-Form"%>">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 70px;">
                                <li>
                                    <label>Object type</label>
                                </li>
                                <li>
                                    <label>Object name</label>
                                </li>
                                <li>
                                    <label>Description</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 160px;" id="<%=InstantID+"-cbType"%>" />
                                </li>
                                <li class="cObjectName">                                    
                                </li>
                                <li>
                                    <input style="width: 250px;" id="<%=InstantID+"-txtDescription"%>"   />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <div class="layout-table-column">
                                <ul class="layout-table-column-label">
                                    <li>
                                        <label>Inward no</label></li>
                                    <li>
                                        <label>Inward date</label></li>
                                    <li>
                                        <label>Reference ID</label>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <input style="width: 100px;" id="<%=InstantID+"-txtInwardNo"%>" /></li>
                                    <li>
                                        <input class="easyui-datebox" style="width: 100px;" id="<%=InstantID+"-txtInwardDate"%>" /></li>
                                    <li>
                                        <input style="width: 100px;" id="<%=InstantID+"-txtReferenceID"%>" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                          <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 60px;">
                                <li>
                                    <label>
                                        Kho Hàng</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 250px;" id="<%=InstantID+"-cbStock"%>" />
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
            <fieldset class="border-layout-list"><legend>Danh sách::Chi tiết</legend>
                <table id="<%=InstantID+"_Grid"%>" class="SkinGrid">
                </table>
                <div id="<%=InstantID+"_Gridpage"%>"></div>
            </fieldset>
        </div>
    </div>
</div>