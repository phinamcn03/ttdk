<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Config.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Config" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Accounts/Js/Mods.Accounts.Config.js") %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend>Danh sách:: Cấu hình</legend>
        <table id="Config_Grid" class="SkinGrid">
        </table>
        <div id="Config_GridPage"></div>
    </fieldset>
</div>
