<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="JournalVoucher.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Cash.JournalVoucher" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/VoucherHandler.ashx?instantid=" + InstantID) %>"></script>
<style type="text/css">
    /** Simple modifications needed for DropDownCheckList to take advantage of ThemeRoller settings */
    .ui-dropdownchecklist .ui-widget-content, .ui-dropdownchecklist .ui-widget-header
    {
        border: none;
    }
    .ui-dropdownchecklist-indent
    {
        padding-left: 7px;
    }
    /* Font size of 0 on the -selector and an explicit medium on -text required to eliminate 
        descender problems within the containers and still have a valid size for the text */
    .ui-dropdownchecklist-selector-wrapper, .ui-widget.ui-dropdownchecklist-selector-wrapper
    {
        vertical-align: middle;
        font-size: 0px;
    }
    .ui-dropdownchecklist-selector
    {
        padding: 1px 2px 2px 2px;
        font-size: 0px;
    }
    .ui-dropdownchecklist-text
    {
        font-size: 13px;
        height: 20px;
        padding: 2px 0 0 2px;
    }
    .ui-dropdownchecklist-item, .ui-dropdownchecklist-item input
    {
        vertical-align: middle;
    }
    .ui-dropdownchecklist-group
    {
        padding: 1px 2px 2px 2px;
    }
    .combo
    {
        width: 250px !important;
    }
    .combo-text
    {
        width: 232px !important;
    }
</style>
<div class="elite-form easyui-layout" fit="true" id="<%=InstantID + "Entry-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" id="<%=InstantID + "Voucher-btnNew"%>">
                    New</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save"
                        id="<%=InstantID + "Voucher-btnSave"%>">Save</a> <a href="javascript:void(0);" class="easyui-linkbutton"
                            iconcls="icon-post" id="<%=InstantID + "Voucher-btnPost"%>">Post</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="<%=InstantID + "Voucher-btnUnPost"%>">
                    Un Post</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete"
                        id="<%=InstantID + "Voucher-btnDelete"%>">Delete</a> <a href="javascript:void(0);"
                            class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "Voucher-btnPrint"%>">
                            Print</a>
            </fieldset>
            <fieldset class="border-layout-search relative">
                <div class="border-layout-search-content">
                    <div class="layout-table-columns">
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 60px;">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblObject"%>">
                                        Đối tượng</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <%--<input type="text" id="<%=InstantID + "Voucher-txtObject"%>" style="width: 100px;" />--%>
                                    <select id="cbxObject" style="width: 242px;" extype="TreeCombo" datacode="Group"
                                        filtercode="Object" afterselect="onSelectObject" defaultvalue="3" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblCode"%>">
                                        Mã</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <%--<input type="text" id="<%=InstantID + "Voucher-txtCode"%>" style="width: 60px;" />--%>
                                    <input type="text" id="txtCode" extype="autocomplete" style="width: 240px;" datacode="Person"
                                        filtercode="employee" search="Code" afterselect="OnSelect" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblVoucherNo"%>">
                                        Số chứng từ</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" id="<%=InstantID + "Voucher-txtVourcherNo"%>" style="width: 184px;" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 60px;">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblName"%>">
                                        Tên</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <%--<input type="text" id="<%=InstantID + "Voucher-txtName"%>" style="width: 189px;" />--%>
                                    <input type="text" id="txtName" extype="autocomplete" style="width: 189px;" datacode="Person"
                                        filtercode="employee" search="Name" afterselect="OnSelect" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column">
                            <ul class="layout-table-column-label" style="width: 77px;">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblVoucherDate"%>">
                                        Ngày chứng từ</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" id="<%=InstantID + "Voucher-txtVourcherDate"%>" class="easyui-datebox"
                                        style="width: 184px;" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 60px;">
                                <li>
                                    <label id="<%=InstantID + "Voucher-lblContent"%>">
                                        Nội dung</label>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <input type="text" id="<%=InstantID + "Voucher-txtContent"%>" style="width: 465px;" />
                                </li>
                            </ul>
                        </div>
                        <div class="layout-table-column new-row">
                            <ul class="layout-table-column-label" style="width: 60px;">
                                <li>
                                    <label id="Label1">
                                        Test Control</label>
                                </li>
                            </ul>
                            <ul>
                                <li class="ControlTest1"></li>
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
                <legend>Danh sách:::Chi tiết</legend>
                <div class="legendDiv" style="width: 100px;">
                    <label id="Label4">
                        Bút toán</label>
                </div>
                <table id="<%=InstantID + "Voucher_Grid"%>" class="SkinGrid">
                </table>
                <div id="<%=InstantID + "Voucher_GridPage"%>">
                </div>
            </fieldset>
        </div>
    </div>
</div>
<script type="text/javascript">
    var __control = null;
    function onSelectObject(obj) {
        if ($("#txtCode").attr("FilterCode") != obj.attributes.code) {
            $("#txtCode").attr("FilterCode", obj.attributes.code);
            __control.ReInitAutoComplete("#txtCode");
        }
        if ($("#txtName").attr("FilterCode") != obj.attributes.code) {
            $("#txtName").attr("FilterCode", obj.attributes.code);
            __control.ReInitAutoComplete("#txtName");
        }
    };
    function OnSelect(event, ui) {
        alert('CLIENT::');
        console.log("::CLIENT", event, ui);
    }
    $(function () {
        __control = CControl;
        __control.InitForm({ container: '.elite-form' });

        var _options = {
            container: '.ControlTest1',
            extype: "autocomplete",
            width: 100,
            id: 'txtTestControl',
            datacode: 'Person',
            filtercode: 'employee',
            search: 'Name',
            value: '',
            afterselect: ''
        };
        console.log('::OPTIONS', _options)
        __control.InitControl(_options);
    });
    
</script>
