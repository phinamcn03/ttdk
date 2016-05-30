<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCUserEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.User.UCUserEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/User/js/Mods.Users.Entry.js") %>"></script>
<div id="UserEntry-Content" region="center" border="false" style="overflow: hidden;">
    <fieldset class="border-layout-form">
        <div>
            <label style="width: 87px;">
                Tên người dùng:</label>
            <input id="UserEntry-txtFullName" type="text" style="width: 250px;" class="easyui-validatebox" required="true" />
        </div>
        <div>
            <label style="width: 87px;">
                Tên đăng nhập:</label>
            <input id="UserEntry-txtUserName" type="text" style="width: 250px;" class="easyui-validatebox" required="true" />
        </div>
       
        <div>
            <label style="width: 87px;">
                Mật khẩu:</label>
            <input type="password" tabindex="3" id="UserEntry-txtPass" style="width: 250px;" class="easyui-validatebox" required=true validType="pwd" />
        </div>
        <div>
            <label style="width: 87px;">
                Nhập lại mật khẩu:</label>
            <input type="password" id="UserEntry-txtPass2" type="text" style="width: 250px;" class="easyui-validatebox" required=true validType="same['UserEntry-txtPass']"/>
        </div>
         <div>
           <label  style="width: 87px;">Quyền user:</label>
           <input id="UserEntry-Role" style="width: 250px;" />
          
        </div>
         <div>
         <input id="UserEntry-txtStatus" style="adding-left: 90px;"  type="checkbox" name="status" /> Kích hoạt
        </div>
          <div>
         <input id="UserEntry-cbChangePass" style="adding-left: 90px;"  type="checkbox" name="status" >Thay đổi mật khẩu</input> 
        </div>
    </fieldset>
</div>
<div region="south" class="border-layout-form-action">
    <a id="UserEntry-btnAdd" class="easyui-linkbutton" iconcls="icon-save"
        href="javascript:void(0)">Lưu</a> 
    <a id="UserEntry-btnDelete" class="easyui-linkbutton"
            iconcls="icon-cancel" href="javascript:void(0)">Hủy</a>
</div>
