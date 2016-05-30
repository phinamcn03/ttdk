<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ReportP.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._core.report.ReportP" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_core.report/js/Mods.CoreReport.ReportP.js") %>"></script>
<div class="border-layout" style="width: 100%; height: 100%">
    <div style="width: 100%; height: 100%" id="ui-report-viewer">
        <iframe id="frmReportPopup" class="vReportPopup" style="width:100%;height:100%;" scrolling="no" frameborder="0" src="../Mods/_core.report/PReportViewer.aspx"></iframe>
    </div>
</div>