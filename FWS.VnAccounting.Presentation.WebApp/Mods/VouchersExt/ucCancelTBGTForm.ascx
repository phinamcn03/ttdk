<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucCancelTBGTForm.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.ucCancelTBGTForm" %>
 <script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.CancelTBGTForm.js") %>"></script>

<div class="border-layout" fit="true" id="CancelTBGTForm-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
        <div  style="font-weight: bold;">
        
        </div>
            <div>
                <label style="width: 90px;">
                   Số Công văn:</label>
                <input tabindex="10" id="CancelTBGTForm-txtRefNo" style="width: 100px;" disabled
                    />
            </div>
            <div>
                <label style="width: 90px;">
                    Ngày:</label>
                
               
                <input tabindex="7" id="CancelTBGTForm-txtdd" style="width: 30px;
                    float: left" />
                <label style="padding-left: 2px; width: 5px;">
                    -
                </label>
                <input tabindex="8" id="CancelTBGTForm-txtmonth" style="width: 30px;
                    float: left" />
                <label style="padding-left: 2px; width: 5px;">
                    -
                </label>
                <input tabindex="9" id="CancelTBGTForm-txtyyyy" style="width: 35px;
                    float: left" />
            </div>
            <div>
                <label style="width: 90px;">
                   Số TBGT:</label>
                <input tabindex="9" id="CancelTBGTForm-txtTBGTRefNo" style="width: 100px; float: left" disabled
                    />

                 <label style="width: 90px; padding-left: 10px; ">
                   Số Đơn:</label>
                <input tabindex="10" id="CancelTBGTForm-txtRegisTransRefNo" style="width: 100px; float: left"  disabled
                    />
            </div>
            <div>
                <label style="width: 90px;">
                  Công An:</label>
                <input tabindex="10" id="CancelTBGTForm-txtObjectName" style="width: 370px;"
                    />
            </div>
            <div>
                <label style="width: 90px;">
                   Khách hàng:</label>
                <input tabindex="10" id="CancelTBGTForm-txtWarranterName" style="width: 370px;"
                    />
            </div>
            <div>
                <label style="width: 90px;">
                   Địa chỉ:</label>
                <input tabindex="10" id="CancelTBGTForm-txtWarranterAddress" style="width: 370px;"
                    />
            </div>
            <div>
                <label style="width: 90px;">
                   Email Khách hàng:</label>
                <input tabindex="10" id="CancelTBGTForm-txtEmail" style="width: 370px;"
                    />
            </div>
            <!--
            <div>
                <label style="width: 90px;">
                    Lý do:</label>
                    <textarea id="CancelTBGTForm-txtReason" rows="4" style="width: 370px; height:100px"></textarea>
               
            </div>
            -->
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
     <a id="CancelTBGTForm-btnPrint" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            In</a> 
        <a id="CancelTBGTForm-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Lưu thông tin và gủi email</a> 
            <a id="CancelTBGTForm-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
                href="javascript:void(0)">Bỏ qua</a>
    </div>
</div>
