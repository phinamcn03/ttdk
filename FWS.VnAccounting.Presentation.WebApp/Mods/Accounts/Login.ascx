<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Login.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Login" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Accounts/Js/Mods.Accounts.Login.js") %>"></script>
<div class="easyui-layout" fit="true">
    <div region="north" style="text-align: center;padding-top: 5px;" border="false">
        <div style="font-size: 18px; font-weight: bold;">Thông tin đăng nhập</div>
    </div>
    <div region="center" border="false" style="overflow: hidden;">
        <div class="easyui-layout" fit="true">
            <div region="west" style="width: 150px;" border="false">
                <div class="img-login"></div>
            </div>
            <div region="center" border="false" style="overflow: hidden;">
                <fieldset class="border-layout-form form-login">
                    <div>
                        <label>Người dùng:</label>
                        <input type="text" id="LoginEntry-txtLoginName" />
                    </div>
                    <div>
                        <label>Mật khẩu:</label>
                        <input type="password" id="LoginEntry-txtPassword" />
                    </div>
                    
                    <div>
                        <label>Ngôn ngữ</label>
                        <select id="LoginEntry-cboLanguages">
                            <option value="1">Tiếng Việt</option>
                            <option value="2">Tiếng Anh</option>
                        </select>
                    </div>
                    <div>
                        <label>Doanh nghiệp:</label>
                        <select id="LoginEntry-cboClientGroup">
                            <option value="1">FWS</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
    <div region="south" border="false" class="border-layout-form-action">
        <a class="easyui-linkbutton" id="LoginEntry-btnLogin" iconcls="icon-ok" href="javascript:void(0)">Đăng nhập</a>
    </div>
</div>
