<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Receipt.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AR.Receipt" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_ARReceipt" runat="server" GridID="16" InstantID="ARReceipt" RefType="3" PersonType="3"/>