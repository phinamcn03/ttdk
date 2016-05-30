<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Order.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AR.Order" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_AROrder" runat="server" GridID="27" InstantID="AROrder" RefType="1" PersonType="1"/>