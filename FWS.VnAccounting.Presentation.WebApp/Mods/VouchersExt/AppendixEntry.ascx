<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AppendixEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.AppendixEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.AppendixEntry.js") %>"></script>
<div id="AppendixEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label style="width: 85px;">
                Số thông báo</label>
            <input id="AppendixEntry-txtMsgNo" type="text" style="width: 150px;" readonly="readonly" />

            <label style="padding-left: 40px; width: 60px;">
                Ngày</label>
            <input id="AppendixEntry-txtDateMsg" type="text" style="width: 120px;" />
        </div>
        <div>
            <label style="width: 85px;">
                Số đơn DK</label>
            <input id="AppendixEntry-txtNo" type="text" style="width: 150px;" />
            <label style="padding-left: 40px; width: 60px;">
                Số cũ</label>
            <input id="AppendixEntry-txtNoOld" type="text" style="width: 120px;" />
        </div>
        <div>
            <label style="width: 85px;">
                Loại tài sản</label>
            <input tabindex="3" id="AppendixEntry-txtCollType" style="width: 370px;" />
        </div>
        <div>
            <label style="width: 85px;">
                Số Khung/ GCN</label>
            <input id="AppendixEntry-txtGCD" type="text" style="width: 150px;" />
            <label style="padding-left: 40px; width: 60px;">
                BKS/ Số DK</label>
            <input id="AppendixEntry-BKS" type="text" style="width: 120px;" />
        </div>
        <div>
            <label style="width: 85px;">
                Gửi đến:</label>
            <input tabindex="3" id="AppendixEntry-txtSendTo" style="width: 370px;" />
        </div>
        <div>
            <label style="width: 85px;">
                Địa chỉ:</label>
            <input tabindex="3" id="AppendixEntry-txtObjectAddress" style="width: 370px;"  readonly="readonly" />
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
 <a id="AppendixEntry-btnAdd_Print" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Lưu và In</a>
    <a id="AppendixEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
        Lưu</a>
         <a id="AppendixEntry-btnDelete" class="easyui-linkbutton" iconcls="icon-cancel"
            href="javascript:void(0)">Hủy</a> 
            <a id="AppendixEntry-btnSearch" href="javascript:void(0);"
                class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
</div>
