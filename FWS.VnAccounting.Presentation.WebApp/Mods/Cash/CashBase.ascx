<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CashBase.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Cash.CashBase" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Cash/Service/CashHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions">
        <legend>Chức năng</legend>
        <a href="javascript:void(0);" class="easyui-linkbutton"
            iconcls="icon-back" id="<%=InstantID + "Cash-btnBack"%>">Back</a> <a href="javascript:void(0);"
                class="easyui-linkbutton" iconcls="icon-save" id="<%=InstantID + "Cash-btnSave"%>">
                Save</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-post"
                    id="<%=InstantID + "Cash-btnPost"%>">Post</a> <a href="javascript:void(0);" class="easyui-linkbutton"
                        iconcls="icon-unpost" id="<%=InstantID + "Cash-btnUnPost"%>">UnPost</a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel" id="<%=InstantID + "Cash-btnDel"%>">
            Delete</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-preview"
                id="<%=InstantID + "Cash-btnPreview"%>">Print Preview</a> <a href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "Cash-btnPrint"%>">
                    Print</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel"
                        id="<%=InstantID + "Cash-btnClear"%>">Clear</a>
    </fieldset>
    <fieldset class="border-layout-search relative">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Cash-lblObjectType"%>">
                                Đối tượng</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Cash-lbltPartnerName"%>">
                                Tên</label>
                        </li>
                        <li>
                            <label id="Label1">
                                Nguời nộp</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtObjectType"%>" style="width: 100px;" />
                            <input type="text" id="<%=InstantID + "Cash-txtPartnerCode"%>" style="width: 77px;
                                float: right; margin-left: 10px" />
                            <label id="<%=InstantID + "Cash-lblPayers"%>" style="float: right">
                                Mã</label>
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtPartnerName"%>" style="width: 232px;" />
                        </li>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtPayers"%>" style="width: 232px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column" style="margin-left: 131px">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="<%=InstantID + "Cash-lblRefRefNo"%>">
                                Số Chứng Từ</label>
                        </li>
                        <li>
                            <label id="<%=InstantID + "Cash-lblVoucherDate"%>">
                                Ngày Chứng Từ</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtRefNo"%>" style="width: 100px;" />
                        </li>
                        <li>
                            <input type="text" readonly="readonly" id="<%=InstantID + "Cash-txtVoucherDate"%>"
                                class="easyui-datebox" style="width: 100px;" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="Label2">
                                Nội dung</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtDetail"%>" style="width: 545px;" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 77px;">
                        <li>
                            <label id="Label3">
                                Tk Nợ (1)</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtDebitAmount"%>" style="width: 232px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 53px; margin-left: 20px;">
                        <li>
                            <label id="<%=InstantID + "Cash-lblCurrencyType"%>">
                                Loại tiền</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtCurrencyType"%>" style="width: 55px;" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column" style="margin-left: 40px">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id="Label6">
                                Tỉ giá</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="<%=InstantID + "Cash-txtExchangeRate"%>" style="width: 100px;" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-layout-search-bar">
            <span class="border-layout-search-bar-icon
        search-bar-icon-up"></span><span class="border-layout-search-bar-title"></span>
        </div>
    </fieldset>
</div>
<div class="border-layout">
    <fieldset class="border-layout-list" style="clear: both; float: left">
        <legend>Danh sách:::Chi tiết</legend>
        <div class="legendDiv" style="width: 100px;">
            <label id="Label4">
                Bút toán</label>
        </div>
        <table id="<%=InstantID + "Buttoan_Grid"%>" class="SkinGrid">
        </table>
        <div id="<%=InstantID + "Buttoan_GridPage"%>">
        </div>
    </fieldset>
    <fieldset class="border-layout-list" style="clear: both; float: left">
        <legend>Danh sách:::Chi tiết</legend>
        <div class="legendDiv" style="width: 160px;">
            <label id="Label5">
                Hóa đơn chứng từ kèm theo</label>
        </div>
        <table id="<%=InstantID + "Invoice_Grid"%>" class="SkinGrid">
        </table>
        <div id="<%=InstantID + "Invoice_GridPage"%>">
        </div>
    </fieldset>
</div>
<style type="text/css">
    .ui-jqgrid tr.ui-search-toolbar th div span.datebox input
    {
        width: 75px !important;
    }
    .legendDiv
    {
        border: 1px solid #AAA;
        height: 23px;
        line-height: 23px;
        color: #0070BA;
        color: #0070BA;
        font-weight: bold;
        padding-left: 23px;
        border-bottom-width: 0px;
        font-family: Verdana, Arial, sans-serif;
        font-size: 11px;
        font-weight: bold;
    }
    
    
    .divVoucherNo
    {
        float: left;
        width: 100px;
        overflow: hidden;
        height: 20px;
    }
    .divRefDate
    {
        float: left;
        width: 104px;
        overflow: hidden;
        height: 20px;
    }
    .divRefTypeName
    {
        float: left;
        width: 155px;
        overflow: hidden;
        height: 20px;
    }
    .divPartnerName
    {
        float: left;
        width: 255px;
        overflow: hidden;
        height: 20px;
    }
    .divTax
    {
        float: left;
        width: 108px;
        overflow: hidden;
        height: 20px;
    }
    .divAmount
    {
        float: left;
        width: 100px;
        overflow: hidden;
        height: 20px;
    }
</style>
