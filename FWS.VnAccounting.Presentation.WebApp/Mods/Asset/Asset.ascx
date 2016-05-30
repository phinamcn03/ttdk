<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Asset.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Asset.Asset" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Asset/Js/Mods.Asset.List.js") %>"></script>
<div class="elite-form border-layout" fit="true" id="Asset-Content">
    <fieldset class="border-layout-functions">
        <legend>Chức năng</legend><a id="Asset-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton"
            iconcls="icon-add">Thêm mới</a> <a id="Asset-btnDelete" href="javascript:void(0);"
                class="easyui-linkbutton" iconcls="icon-cancel">Xóa</a> <a id="Asset-btnSearchAdvance"
                    href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">Tìm kiếm
                    nâng cao</a>
    </fieldset>
    <fieldset class="border-layout-search">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>
                                Mã</label></li>
                        <li>
                            <label>
                                Tên</label></li>
                    </ul>
                    <ul>
                        <li>
                            <input type="text" id="Asset-txtCode" class="border-layout-search-code" style="width: 242px;" /></li>
                        <li>
                            <input type="text" id="Asset-txtName" class="border-layout-search-code" style="width: 242px;" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>
                                Bộ phận</label>
                        </li>
                        <li>
                            <label>
                                Nhân viên</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <select id="Asset-txtDept" style="width: 242px;" extype="TreeCombo" datacode="Group"
                                filtercode="Employee" defaultvalue="11" />
                            </li>
                            <li>
                                <select id="Asset-cbxEmployee" style="width: 242px;" extype="TreeCombo" datacode="Person" persontype="3" filtercode=""
                                    defaultvalue="92" /></li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label">
                        <li>
                            <label>
                                Nhóm</label>
                        </li>
                        <li>
                            <label>
                                Tình trạng</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <select id="Asset-selFixedAsset" style="width: 242px;" extype="TreeCombo" datacode="Group"
                                filtercode="FixedAsset" defaultvalue="25" />
                            <a id="Asset-btnSearch" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search">
                                Search</a>
                            <li>
                                <select id="Asset-selStatus" style="width: 242px;" extype="TreeCombo" datacode="IntDefination"
                                    filtercode="FixedAssetStatus" defaultvalue="42" />
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
        <legend id='fsListTitle'>Danh sách::Khách hàng</legend>
        <table id="Asset_Grid" class="SkinGrid">
        </table>
        <div id="Asset_GridPage">
        </div>
    </fieldset>
</div>
