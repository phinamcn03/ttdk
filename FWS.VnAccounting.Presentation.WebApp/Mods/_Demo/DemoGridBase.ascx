<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="DemoGridBase.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.DemoGridBase" %>
<%@ Register src="../_Core/GridBase.ascx" tagname="GridBase" tagprefix="uc1" %>
<div style="width:100%">
<div style="float:left; width:50%;padding-right: 10px">
<uc1:GridBase ID="GridBase1" runat="server" GridID="2" InstantID="AA" UrlData="../Mods/Items/Service/UnitService.asmx/GetGrid"/></div>
<div style="float:left; width:48%">
<%--<uc1:GridBase ID="GridBase2" runat="server" GridID="2" InstantID="BB" /></div>--%>
<uc1:GridBase ID="GridBase2" runat="server" GridID="1" InstantID="BB"  UrlData="../Mods/Items/Service/StockService.asmx/GetInventoryStockList"/></div>
</div>