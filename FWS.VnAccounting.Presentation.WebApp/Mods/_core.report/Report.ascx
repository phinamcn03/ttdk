<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Report.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.CoreReport.Report" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../../Mods/_core.report/js/Mods.CoreReport.Report.js") %>"></script>
<div class="border-layout" style="width: 100%; height: 100%">
    <div style="width: 100%; height: 100%" id="ui-report-viewer">
        <iframe class="vFrmHst" style="width:100%;height:100%;" scrolling="no" frameborder="0" src="../../Mods/_core.report/PReportViewer.aspx"></iframe>
    </div>
</div>