<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Appendix.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.Appendix" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.Appendix.js") %>"></script>
<div class="easyui-layout" fit="true" id="Appendix-Content">
    <div region="center" border="false" style="overflow: hidden;">
<div class="border-layout">
   <fieldset class="border-layout-functions"><legend id='fsFunctionTitle'>Chức năng</legend>
        <a id="Appendix-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
           Đăng ký</a>
        <a id="Appendix-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Hủy</a>
    </fieldset>
 
</div>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend id='fsListTitle'>Danh sách::Khách hàng</legend>
        <table id="Appendix_Grid" class="SkinGrid">
        </table>
        <div id="Appendix_GridPage"></div>
    </fieldset>
</div>
</div>
</div>