<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Simple.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.Simple" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Service/SimpleHandler.ashx?instant=" + Instant) %>"></script>
<div class="border-layout">
    <fieldset class="border-layout-functions">
        <legend>Chức năng</legend>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" id="<%=setControl("btnNew")%>">
            <label id="<%=setControl("lblNew")%>">Thêm</label> 
        </a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete" id="<%=setControl("btnDel")%>">
            <label id="<%=setControl("lblDelete")%>">Xóa</label> 
        </a>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" id="<%=setControl("btnAdvanceSearch")%>">
            <label id="<%=setControl("lblAdvanceSearch")%>">Tìm kiếm nâng cao</label>        
        </a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id="<%=setControl("lblCode")%>">Mã</label>                            
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="<%=setControl("txtCode")%>" type="text" class="border-layout-search-code" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label id="<%=setControl("lblName")%>">Tên</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="<%=setControl("txtName")%>" type="text" class="border-layout-search-name" />
                            <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" id="<%=setControl("btnSearch")%>">
                                <label id="<%=setControl("lblSearch")%>">Tìm kiếm</label>
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
            <table id="<%=setControl("Grid")%>" class="SkinGrid">
            </table>
            <div id="<%=setControl("GridPage")%>"></div>
    </fieldset>
</div>