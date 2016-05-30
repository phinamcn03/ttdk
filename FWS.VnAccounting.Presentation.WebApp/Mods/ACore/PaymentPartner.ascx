<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PaymentPartner.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.PaymentPartner" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/PaymentPartnerHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="easyui-layout" fit="true" id="<%=InstantID + "Entry-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions"><legend>Chức năng</legend>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-back" id="<%=InstantID + "PaymentPartner-btnBack"%>">
                    Back</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="<%=InstantID + "PaymentPartner-btnSave"%>">
                    Save</a>                
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-post" id="<%=InstantID + "PaymentPartner-btnPost"%>">
                    Post</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-unpost" id="<%=InstantID + "PaymentPartner-btnUnPost"%>">
                    UnPost</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel" id="<%=InstantID + "PaymentPartner-btnCancel"%>">
                    Cancel</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-preview" id="<%=InstantID + "PaymentPartner-btnPreview"%>">
                    Print Preview</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "PaymentPartner-btnPrint"%>">
                    Print</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="<%=InstantID + "PaymentPartner-Form"%>">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label id="<%=InstantID + "-lblPaymentPartnerCode"%>">Code</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblPaymentPartnerName"%>">Name</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblTax"%>">Tax code</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "PaymentPartner-txtCode"%>" class="easyui-validatebox" required="true" />
                                </li>
                                <li>
                                    <input type="text" style="width: 230px; padding-right: 20px" id="<%=InstantID + "PaymentPartner-txtName"%>" class="easyui-validatebox" required="true" />
                                </li>
                                <li>
                                    <input type="text" style="width: 100px;" readonly="readonly" id="<%=InstantID + "PaymentPartner-txtTax"%>" />
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
                                    <label id="<%=InstantID + "-lblAccount"%>">TK</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 259px;" readonly="readonly" id="<%=InstantID + "PaymentPartner-txtAddress"%>" />
                                </li>
                                <li>
                                    <input type="text" style="width: 259px;" readonly="readonly" id="<%=InstantID + "PaymentPartner-txtContact"%>" />
                                </li>
                                <li class="cVoucher_Account">
                                    <input type="text" style="width: 259px;" id="<%=InstantID + "PaymentPartner-txtAccount"%>" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 64px;">
                                <li>
                                    <label id="<%=InstantID + "-lblNo"%>">No</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblDate"%>">Date</label>
                                </li>
                                <li>
                                    <label id="<%=InstantID + "-lblReferenceID"%>">Reference</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "PaymentPartner-txtNo"%>" class="easyui-validatebox" required="true" />
                                </li>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "PaymentPartner-txtDate"%>" />
                                </li>
                                <li>
                                    <input type="text" style="width: 100px;" id="<%=InstantID + "PaymentPartner-txtReferenceID"%>" value="1" />
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
                                    <input type="text" style="width: 718px;" id="<%=InstantID + "PaymentPartner-txtNote"%>" />
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
        <fieldset class="border-layout-list"><legend>Hóa đơn chứng từ kèm theo</legend>
            <table id="<%=InstantID + "PaymentPartner_Grid"%>" class="SkinGrid">
            </table>
            <div id="<%=InstantID + "PaymentPartner_GridPage"%>"></div>
        </fieldset>
    </div>
</div>
</div> 