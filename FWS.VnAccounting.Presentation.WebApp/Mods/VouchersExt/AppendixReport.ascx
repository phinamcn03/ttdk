<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AppendixReport.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.AppendixReport" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VoucherExt.AppendixReport.js") %>"></script>
<iframe class="vReport" id="rptTBP" style="width: 100%; height: 100%;" scrolling="no" frameborder="0" src="../Mods/_core.report/PReportViewer.aspx"></iframe>