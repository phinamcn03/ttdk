<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Filter.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._core.filter.Filter" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_core.filter/Js/Mods.CoreFilter.Filter.js") %>"></script>
<div id="vFrmContainer" style="width:100%;height:100%"></div>
<%--<iframe id="vFrmFilter" style="width:100%;height:100%;" frameborder="0" src="../Mods/_core.filter/PFilter.aspx"></iframe>--%>
