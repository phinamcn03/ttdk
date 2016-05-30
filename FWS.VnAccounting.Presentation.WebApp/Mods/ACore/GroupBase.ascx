<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="GroupBase.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.GroupBase" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/GroupBaseHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions">
        <legend>Chức năng</legend>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" id="<%=InstantID + "Group-btnNew"%>">
            <label id="<%=InstantID + "Group-lblNew"%>">Thêm</label> 
        </a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete" id="<%=InstantID + "Group-btnDel"%>">
            <label id="<%=InstantID + "Group-lblDelete"%>">Xóa</label> 
        </a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" id="<%=InstantID + "Group-btnAdvanceSearch"%>">
            <label id="<%=InstantID + "Group-lblAdvanceSearch"%>">Tìm kiếm nâng cao</label>        
        </a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id="<%=InstantID + "Group-lblCode"%>">Mã</label>                            
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="<%=InstantID + "Group-txtCode"%>" type="text" class="border-layout-search-code" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id="<%=InstantID + "Group-lblName"%>">Tên</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="<%=InstantID + "Group-txtName"%>" type="text" class="border-layout-search-name" />
                            <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" id="<%=InstantID + "Group-btnSearch"%>">
                                <label id="<%=InstantID + "Group-lblSearch"%>">Tìm kiếm</label>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-layout-search-bar">
            <span class="border-layout-search-bar-icon search-bar-icon-up"></span><span class="border-layout-search-bar-title">
            </span>
        </div>
    </fieldset>
</div>
<div class="border-layout">
    <fieldset class="border-layout-list">
        <legend>Danh sách::Nhóm khách hàng</legend>
            <table id="<%=InstantID + "Group_Grid"%>" class="SkinGrid">
            </table>
            <div id="<%=InstantID + "Group_GridPage"%>"></div>
    </fieldset>
</div>
