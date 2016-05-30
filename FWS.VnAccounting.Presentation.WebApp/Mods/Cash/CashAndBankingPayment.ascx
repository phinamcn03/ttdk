<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CashAndBankingPayment.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Cash.CashAndBankingPayment" %>
<%@ Register src="../ACore/PaymentCashBanking.ascx" tagname="Payment" tagprefix="ucPayment" %>
<ucPayment:Payment ID="Payment_APPayment" runat="server" GridID="38" InstantID="CSCash" RefType="2"/>
