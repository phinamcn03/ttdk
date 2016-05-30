<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="_Grid.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._core.hst._Grid" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_core.hst/Js/Mods.Core.Hst.Grid.Config.js") %>"></script>
<div id="GridConfig-Content" region="center" border="false" style="overflow: hidden;">
    <div id='GridConfigContainer'>
    </div>
</div>
<div region="south" class="border-layout-form-action">
    <a class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)" onclick="fnGridConfigAction()">Save</a>
    <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)" onclick="fnGridConfigClose()">Cancel</a>
</div>
