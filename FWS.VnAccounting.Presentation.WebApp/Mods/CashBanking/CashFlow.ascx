<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CashFlow.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.CashBanking.CashFlow" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/CashBanking/Js/arbor.js") %>"></script>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/CashBanking/Js/jquery.CustomArbor.js") %>"></script>
<script type="text/javascript">
    $(document).ready(function () {
        var _height = $('#viewport').parent().parent().height();
        var _width = $('#viewport').parent().parent().width();
        $('#viewport').height(_height).width(_width);
        $('#viewport').InitCustomArbor({ url: '../Mods/CashBanking/Js/CashFlow.txt' });
    });
</script>

<canvas id="viewport" width="640px" height="360px"></canvas>