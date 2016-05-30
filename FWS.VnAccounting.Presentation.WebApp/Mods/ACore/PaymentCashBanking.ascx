<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PaymentCashBanking.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.PaymentCashBanking" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/PaymentHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-post" id="<%=InstantID + "Payment-btnPost"%>">
            Post</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-unpost" id="<%=InstantID + "Payment-btnUnPost"%>">
            UnPost</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel" id="<%=InstantID + "Cash-btnDel"%>">
            Delete</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-preview" id="<%=InstantID + "Cash-btnPreview"%>">
            Print Preview</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "Cash-btnPrint"%>">
            Print</a>
    </fieldset>
    <fieldset class="border-layout-search relative">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Payment-lblTemplateTime"%>">Template time</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Payment-lblInwardNo"%>">Inward No</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtTemplateTime"%>" style="width: 100px;" />
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtInwardNo"%>" style="width: 100px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Payment-lblFromDate"%>">From date</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Payment-lblRefType"%>">RefType</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" readonly="readonly" id="<%=InstantID + "Payment-txtFromDate"%>" class="easyui-datebox" style="width: 100px;" />
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtRefType"%>" style="width: 100px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Payment-lblToDate"%>">To date</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Payment-lblPartnerName"%>">Partner name</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" readonly="readonly" id="<%=InstantID + "Payment-txtToDate"%>" class="easyui-datebox" style="width: 100px;" />
                            <a id="<%=InstantID + "Payment-btnSearch"%>" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="margin-left: 5px;">
                                Tìm kiếm</a>
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtPartnerName"%>" style="width: 184px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Payment-lblFromAccount"%>">From Amount</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Payment-lblToAccount"%>">To Amount</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtFromAccount"%>" style="width: 184px;" />
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Payment-txtToAccount"%>" style="width: 184px;" />
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
    <fieldset class="border-layout-list"><legend>Danh sách:::Chi tiết</legend>
        <table id="<%=InstantID + "Payment_Grid"%>" class="SkinGrid">
        </table>
        <div id="<%=InstantID + "Payment_GridPage"%>"></div>
    </fieldset>
</div>

