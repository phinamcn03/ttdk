<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="GridBase.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Core.GridBase" %>
Day la grid InstantID <%=InstantID%> GridID <%=GridID%> 
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_Core/Service/GridBaseHandler.ashx?instantid=" + InstantID) %>"></script>
<table id="<%=InstantID + "BaseGrid"%>" class="SkinGrid">
</table>
<div id="<%=InstantID + "BaseGridPage"%>">
</div>