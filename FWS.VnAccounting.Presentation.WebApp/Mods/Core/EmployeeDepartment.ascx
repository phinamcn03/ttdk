<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EmployeeDepartment.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Core.EmployeeDepartment" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Core/Js/Mods.Core.EmployeeDepartment.js") %>"></script>
<div class="easyui-layout" fit="true" id="EmployeeDepartment-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="EmployeeDepartment-btnNew">
                    New</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete" id="EmployeeDepartment-btnDelete">
                    Delete</a>
            </fieldset>
            <fieldset class="border-layout-search" id="EmployeeDepartment-Form">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label">
                                <li>
                                    <label id="lblEmployeeDepartmentCode">Code</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" id="txtEmployeeDepartmentCode" class="easyui-validatebox border-layout-search-code" required="true" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label">
                                <li>
                                    <label id="ltrEmployeeDepartmentName">Name</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" id="txtEmployeeDepartmentName" class="easyui-validatebox border-layout-search-name" required="true" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-layout-search-bar">
                    <span class="border-layout-search-bar-icon search-bar-icon-up"></span>
                    <span class="border-layout-search-bar-title"></span>
                </div>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <table id="EmployeeDepartment_Grid" class="SkinGrid">
                </table>
                <div id="EmployeeDepartment_GridPage"></div>
            </fieldset>
        </div>
    </div>
</div>
