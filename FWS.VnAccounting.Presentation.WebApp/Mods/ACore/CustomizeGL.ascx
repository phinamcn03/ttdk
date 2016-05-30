<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CustomizeGL.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.CustomizeGL" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Js/Mods.ACore.CusGL.js") %>"></script>
<div class="easyui-layout" fit="true" id="CustomizeGL-Content">
<div region="center" border="false" style="overflow: hidden;">
 <div class="border-layout">
            <fieldset class="border-layout-list"><legend>Danh sách::Chi tiết</legend>
                <table id="GLGrid" class="SkinGrid">
                </table>
                <div id="GLGridpages"></div>
            </fieldset>
        </div>
</div>
 <div region="south" class="border-layout-form-action">
        <a id="CusGL-btnClose" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Đóng</a>

    </div>
</div>