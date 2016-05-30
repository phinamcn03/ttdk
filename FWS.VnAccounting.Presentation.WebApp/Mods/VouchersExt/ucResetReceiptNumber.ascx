<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucResetReceiptNumber.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.ucResetReceiptNumber" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VoucherExt.ResetReceiptNumber.js") %>"></script>
<div>
<div style="margin:20px"><input type="button" tabindex="2" style="width: 250px;" id="btnResetReceiptTM" value="Chốt số biên lai thu tiền mặt" ></input></div>
<div style="margin:20px"><input type="button" tabindex="2" style="width: 250px;" id="btnResetReceiptCK" value="Chốt số biên lai thu chuyển khoản" ></input></div>
</div>