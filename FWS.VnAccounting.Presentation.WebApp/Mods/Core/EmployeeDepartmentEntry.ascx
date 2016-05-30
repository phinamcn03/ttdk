<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EmployeeDepartmentEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Core.EmployeeDepartmentEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Core/Js/Mods.Core.EmployeeDepartmentEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="EmployeeDepartmentEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input type="text" style="width: 150px;" id="EmployeeDepartmentEntry-txtCode" />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" style="width: 150px;" id="EmployeeDepartmentEntry-txtName" />
            </div>
            <div>
                <label>
                   Account Name:</label>
                <select id="EmployeeDepartmentEntry-cbxTreeList" class="easyui-combotree" name="city" style="width:375px;"/>
            </div>            
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="EmployeeDepartmentEntry-btnSave" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">Save</a> 
        <a id="EmployeeDepartmentEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">Cancel</a>
    </div>
</div>