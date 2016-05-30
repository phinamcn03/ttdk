<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Receipt.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AP.Receipt" %>
<%@ Register src="../ACore/Voucher.ascx" tagname="Voucher" tagprefix="ucVoucher" %>
<ucVoucher:Voucher ID="Voucher_APReceipt" runat="server" GridID="16" InstantID="APReceipt" RefType="9"/>