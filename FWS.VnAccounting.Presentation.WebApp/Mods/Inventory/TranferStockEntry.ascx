<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="TranferStockEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.TranferStockEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Inventory/Js/Mods.Inventory.TranferStockEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="TranferStockEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <legend>Chức năng</legend>
                 <a id="TranferStockEntry-btnBack" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-back">
                    Back</a>
                <a id="TranferStockEntry-btnSave" href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-save">Save</a> 
                    <a id="TranferStockEntry-btnPost"
                        href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-redo">Post</a>
                             <a id="TranferStockEntry-btnUnPost"
                        href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-redo">UnPost</a>
                  <a id="TranferStockEntry-btnCancel" href="javascript:void(0);" class="easyui-linkbutton"
                    iconcls="icon-cancel">Cancel</a> <a id="TranferStockEntry-btnAddNew" href="javascript:void(0);"
                        class="easyui-linkbutton" iconcls="icon-add">Thêm Chi tiết</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="TranferStockEntryInventory-Form">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 70px;">
                                <li>
                                    <label>
                                        Object type</label>
                                </li>
                                <li>
                                    <label>
                                        Object name</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 250px;" id="TranferStockEntry-cbType" />
                                </li>
                                <li class="cObjectName">
                                
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 45px;">
                                <li>
                                    <label>
                                        Từ kho</label>
                                </li>
                                <li>
                                    <label>
                                        Đến kho</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 250px;" id="TranferStockEntry-cbFromStock" />
                                </li>
                                <li>
                                    <input style="width: 250px;" id="TranferStockEntry-cbToStock" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <div class="layout-table-column">
                                <ul class="layout-table-column-label">
                                    <li>
                                        <label>
                                            Tranfer No</label></li>
                                    <li>
                                        <label>
                                            Tranfert Date</label></li>
                                </ul>
                                <ul>
                                    <li>
                                        <input style="width: 100px;" id="TranferStockEntry-txtTranferNo" /></li>
                                    <li>
                                        <input class="easyui-datebox" style="width: 100px;" id="TranferStockEntry-txtTranferDate" /></li>
                                </ul>
                            </div>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 70px;">
                                <li>
                                    <label>
                                        Diễn giải</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 560px;" id="TranferStockEntry-txtDescription" />
                                    <label style="margin-left: 10px;">
                                        Reference ID</label>
                                    <input style="width: 100px;" id="TranferStockEntry-txtReferenceID" class="easyui-validatebox" required="true" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-layout-search-bar">
                    <span class="border-layout-search-bar-icon search-bar-icon-up"></span><span class="border-layout-search-bar-title">
                    </span>
                </div>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <legend>Danh sách::Chi tiết</legend>
                <table id="TranferStockEntry_Grid" class="SkinGrid">
                </table>
                <div id="TranferStockEntry_Gridpage">
                </div>
            </fieldset>
        </div>
    </div>
</div>
