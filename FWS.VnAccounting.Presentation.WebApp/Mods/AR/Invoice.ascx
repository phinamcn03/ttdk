<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Invoice.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AR.Invoice" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_ARInvoice" runat="server" GridID="25" InstantID="ARInvoice" RefType="2" PersonType="2"/>
