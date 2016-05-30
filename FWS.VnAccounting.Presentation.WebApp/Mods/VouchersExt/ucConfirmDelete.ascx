<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucConfirmDelete.ascx.cs" 
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.ucConfirmDelete" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.ConfirmDelete.js") %>"></script>
<div  class="border-layout" fit="true" id="ConfirmDelete-Content">
     <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label style="width: 100%;">Lý do xóa đơn/thông báo/công văn:</label>
            </div>
            
            <div>
                 <textarea id="ConfirmDelete-txtReason" rows="4" style="width: 100%; height:100px"></textarea>
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
     <a id="ConfirmDelete-btnDelete" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Xóa</a> 
        <a id="ConfirmDelete-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Không xóa</a> 
    </div>
</div>
