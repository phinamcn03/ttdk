<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Order.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AP.Order" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_APOrder" runat="server" GridID="16" InstantID="APOrder" RefType="4"/>