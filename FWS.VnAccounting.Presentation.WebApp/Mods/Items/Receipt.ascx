<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Receipt.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.Receipt" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.Receipt.js") %>"></script>
<div class="easyui-layout" fit="true" id="ReceiptEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="Receipt-btnSave">
                    Lưu</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete"
                        id="Receipt-btnDel">Xóa</a> <a href="javascript:void(0);" class="easyui-linkbutton"
                            iconcls="icon-print" id="Receipt-PrintAll">In chung biên lai</a> <a href="javascript:void(0);"
                                class="easyui-linkbutton" iconcls="icon-print" id="Receipt-PrintPath">In riêng biên
                                lai</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="Receipt-Form">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label id="Receipt-lblVourcherCode">
                                        Mã KHTX</label>
                                </li>
                                <li>
                                    <label id="Receipt-lblVourcherName">
                                        Tên KH</label>
                                </li>
                                <li>
                                    <label id="Receipt-lblTax">
                                        Người nộp</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" tabindex="1" style="width: 100px;" id="Receipt-txtVendorCode" />
                                </li>
                                <li>
                                    <input type="text" tabindex="2" style="width: 230px; padding-right: 20px" id="Receipt-txtVendorName" />
                                </li>
                                <li>
                                    <input type="text" style="width: 230px;" id="Receipt-txtPerson" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 80px;">
                                <li>
                                    <label id="Receipt-lblAddress">
                                        Số hóa đơn</label>
                                </li>
                                <li>
                                    <label id="Receipt-lblContact">
                                        Ngày</label>
                                </li>
                                <li class="cVoucher_Account">
                                    <label id="Receipt-lblAccount">
                                        Phương thức TT</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 259px;" id="Receipt-txtReceipt" />
                                </li>
                                <li>
                                    <input style="width: 259px;" id="Receipt-txtDate" />
                                </li>
                                <li >
                                    <input tabindex="3" style="width: 259px;" id="Receipt-txtTypePayment" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label style="width: 65px;" id="Receipt-lblDescription">
                                        Diễn giải</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" tabindex="5" style="width: 584px;" id="Receipt-txtNote" />
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
                <table id="Receipt_Grid" class="SkinGrid">
                </table>
                <div id="Receipt_GridPage">
                </div>
            </fieldset>
        </div>
    </div>
</div>
