<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AdjustmentStockEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.AdjustStockEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Inventory/Js/Mods.Inventory.AdjustStockEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="AdjustStockEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <legend>Chức năng</legend><a id="AdjustStockEntry-btnSave" href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-save">Save</a> <a id="AdjustStockEntry-btnPost"
                        href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-redo">Post</a>
                <a id="AdjustStockEntry-btnCancel" href="javascript:void(0);" class="easyui-linkbutton"
                    iconcls="icon-cancel">Cancel</a> <a id="AdjustStockEntry-btnAddNew" href="javascript:void(0);"
                        class="easyui-linkbutton" iconcls="icon-add">Thêm Chi tiết</a>
            </fieldset>
            <fieldset class="border-layout-search">
                <legend>Chứng từ::</legend>
                <div class="layout-table-columns">
                    <div class="layout-table-column">
                        <ul class="layout-table-column-label" style="width: 70px;">
                            <li>
                                <label id="IVAdjust-lblStockName">
                                    Kho
                                </label>
                            </li>
                            <li>
                                <label id="IVAdjust-lblAdjustType">
                                    Adjust type</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input style="width: 250px;" id="AdjustStockEntry-txtStockList" />
                            </li>
                            <li>
                                <input style="width: 250px;" id="AdjustStockEntry-txtAdjustmentType" />
                            </li>
                        </ul>
                    </div>
                    <div class="layout-table-column">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label">
                                <li>
                                    <label id="IVAdjust-lblAdjustNo">
                                        Adjust No</label></li>
                                <li>
                                    <label id="IVAdjust-lblAdjustDate">
                                        Adjust Date</label></li>
                            </ul>
                            <ul>
                                <li>
                                    <input style="width: 100px;" id="AdjustStockEntry-txtAdjNo" disabled="disabled" /></li>
                                <li>
                                    <input class="easyui-datebox" style="width: 100px;" id="AdjustStockEntry-txtAdjDate" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="layout-table-column new-row">
                        <ul class="layout-table-column-label" style="width: 70px;">
                            <li>
                                <label id="IVAdjust-lblDescription" style="width: 65px;">
                                    Điễn giải</label></li>
                        </ul>
                        <ul>
                            <li>
                                <input style="width: 600px;" id="Text1" />
                            </li>
                        </ul>
                    </div>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <legend>Danh sách::Chi tiết</legend>
                <table id="AdjustStockEntry_Grid" class="SkinGrid">
                </table>
                <div id="AdjustStockEntry_Gridpage">
                </div>
            </fieldset>
        </div>
    </div>
</div>
