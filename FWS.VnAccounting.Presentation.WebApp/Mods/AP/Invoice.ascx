<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Invoice.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AP.Invoice" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_APInvoice" runat="server" GridID="17" InstantID="APInvoice" RefType="5"/>