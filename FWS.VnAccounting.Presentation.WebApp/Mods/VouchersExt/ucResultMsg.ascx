<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucResultMsg.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.ucResultMsg" %>
 <script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.ResultMsg.js") %>"></script>

<div class="border-layout" fit="true" id="ResultMsg-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
        <div  style="font-weight: bold;">
        <input type="checkbox" id="ResultMsg-Reject" name="Reject" value="1" > Từ chối
        </div>
            <div>
                <label style="width: 90px;">
                    Ngày giờ nhận:</label>
                <input tabindex="5" id="ResultMsg-txthh" style="width: 25px;
                    float: left" />
                <label style="padding-left: 2px; width: 5px;">
                    :</label>
                <input tabindex="6" id="ResultMsg-txtmm" style="width: 25px;
                    float: left" />
                <label style="padding-left: 2px; width: 7px;">
                </label>
                <input tabindex="7" id="ResultMsg-txtdd" style="width: 30px;
                    float: left" />
                <label style="padding-left: 2px; width: 5px;">
                    -
                </label>
                <input tabindex="8" id="ResultMsg-txtmonth" style="width: 30px;
                    float: left" />
                <label style="padding-left: 2px; width: 5px;">
                    -
                </label>
                <input tabindex="9" id="ResultMsg-txtyyyy" style="width: 35px;
                    float: left" />
            </div>
            <div>
                <label style="width: 90px;">
                   Email Khách hàng:</label>
                <input tabindex="10" id="ResultMsg-txtEmail" style="width: 370px;"
                    />
            </div>
            <div>
                <label style="width: 90px;">
                    Lý do:</label>
                    <textarea id="ResultMsg-txtReason" rows="4" style="width: 370px; height:100px"></textarea>
               
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
     <a id="ResultMsg-btnPrint" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            In</a> 
        <a id="ResultMsg-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Lưu thông tin và gủi email</a> 
            <a id="ResultMsg-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
                href="javascript:void(0)">Bỏ qua</a>
    </div>
</div>
