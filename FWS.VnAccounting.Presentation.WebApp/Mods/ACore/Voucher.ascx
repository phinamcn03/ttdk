<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Voucher.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Voucher" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/VoucherHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="easyui-layout" fit="true" id="<%=InstantID + "Entry-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-back" id="<%=InstantID + "Voucher-btnBack"%>">
                    Back</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="<%=InstantID + "Voucher-btnSave"%>">
                    Save</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" id="<%=InstantID + "Voucher-btnNew"%>">
                    New</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete" id="<%=InstantID + "Voucher-btnClear"%>">
                    Clear</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-post" id="<%=InstantID + "Voucher-btnPost"%>">
                    Post</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="<%=InstantID + "Voucher-Form"%>">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label id="<%=InstantID + "-lblVourcherCode"%>">Vendor code</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblVourcherName"%>">Vendor name</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblTax"%>">Tax code</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" tabindex=1 style="width: 100px;" id="<%=InstantID + "Voucher-txtVendorCode"%>" class="easyui-validatebox" required="true" />
                                </li>
                                <li>
                                    <input type="text" tabindex=2 style="width: 230px; padding-right: 20px" id="<%=InstantID + "Voucher-txtVendorName"%>" class="easyui-validatebox" required="true" />
                                </li>
                                <li>
                                    <input type="text" style="width: 100px;" readonly="readonly" id="<%=InstantID + "Voucher-txtTax"%>" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 35px;">
                                <li>
                                    <label id="<%=InstantID + "-lblAddress"%>">Address</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblContact"%>">Contact</label>
                                </li>
                                <li class="cVoucher_Account">
                                    <label id="<%=InstantID + "-lblAccount"%>">ARAcc</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 259px;" readonly="readonly" id="<%=InstantID + "Voucher-txtAddress"%>" />
                                </li>
                                <li>
                                    <input type="text" style="width: 259px;" readonly="readonly" id="<%=InstantID + "Voucher-txtContact"%>" />
                                </li>
                                <li class="cVoucher_Account">
                                    <input tabindex=3 type="text" style="width: 259px;" id="<%=InstantID + "Voucher-txtAccount"%>" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 75px;">
                                <li>
                                    <label id="<%=InstantID + "-lblVourcherNo"%>">Vourcher No</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblVourcherDate"%>">Vourcher date</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblReferenceID"%>">Reference ID</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "Voucher-txtVourcherNo"%>" class="easyui-validatebox" required="true" readonly="readonly" />
                                </li>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "Voucher-txtVourcherDate"%>" />
                                </li>
                                <li>
                                    <input tabindex=4 type="text" style="width: 100px;" id="<%=InstantID + "Voucher-txtReferenceID"%>" value="1" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label style="width: 65px;" id="<%=InstantID + "-lblNote"%>">Note</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text"  tabindex=5 style="width: 729px;" id="<%=InstantID + "Voucher-txtNote"%>" />
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
                <table id="<%=InstantID + "Voucher_Grid"%>" class="SkinGrid">
                </table>
                <div id="<%=InstantID + "Voucher_GridPage"%>"></div>
            </fieldset>
        </div>
    </div>
</div>
