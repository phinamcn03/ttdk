<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="report.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Dashboard.report" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Dashboard/Js/Mods.Db.Report.js") %>"></script>
<div class="border-layout">
    <div style="width: 100%; height: 100%" id="ui-report-viewer">
        <iframe class="vFrmHst" style="width:100%;height:100%;" scrolling="no" frameborder="0" src="../Mods/Dashboard/ReportViewer.aspx"></iframe>
    </div>
</div>