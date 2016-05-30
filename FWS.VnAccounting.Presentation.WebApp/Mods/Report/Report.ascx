<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Report.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Report.Report" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Report/ReportHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="border-layout">   
    <fieldset class="border-layout-functions" style="display: none">
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete" id="Report-btnClear">
            Clear</a>
    </fieldset>
    <fieldset style="height: 100%;" class="border-layout-search" id="Report-Form">
        <legend>Report Filter</legend>
        <iframe id="<%="ifrmReport" + InstantID %>" frameborder="0" scrolling="auto" width="100%" height="100%">
        </iframe>
    </fieldset>
</div>
