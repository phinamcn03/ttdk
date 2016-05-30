<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AssetEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Asset.AssetEntry" %>
<asp:Literal runat="server" ID="ltrScriptClientEntry"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Asset/Js/Mods.Asset.Entry.js") %>"></script>
<div class="elite-formEntry easyui-layout" fit="true" id="ItemEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div style="padding: 0;">
                <div class="easyui-layout" style="height: 280px;">
                    <div region="west" border="false" style="width: 350px;">
                        <fieldset class="border-layout-subform">
                            <div>
                                <label style="width: 90px;">
                                    Code</label>
                                <input type="text" id="AssetEntry-txtCode" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Name</label>
                                <input type="text" id="AssetEntry-txtName" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Product year</label>
                                <input type="text" id="AssetEntry-txtProductYear" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Made in</label>
                                <input type="text" id="AssetEntry-txtInTaxAcct" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Serial number</label>
                                <input type="text" id="AssetEntry-txtSerial" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Purchase date</label>
                                <input type="text" extype="datebox" id="AssetEntry-txtPurchaseDate" style="width: 242px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Used date</label>
                                <input type="text" extype="datebox" id="AssetEntry-txtUsedDate" style="width: 242px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Guarantee Duration</label>
                                <input type="text" id="AssetEntry-txtGuaranteeDur" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Original Cost</label>
                                <input type="text" id="AssetEntry-txtOrigCost" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Currency</label>
                                <select id="AssetEntry-txtCurrency" style="width: 242px;" extype="TreeCombo" datacode="Currency"
                                    filtercode="" defaultvalue="4" />
                            </div>
                        </fieldset>
                    </div>
                    <div region="center" border="false" style="width: 250px;">
                        <fieldset class="border-layout-subform">
                            <div>
                                <input type="checkbox" name="option1" value="Milk" />
                                Second hand<br>
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Department:</label>
                                <select id="AssetEntry-cbxDepartment" style="width: 242px;" extype="TreeCombo" datacode="Group"
                                    filtercode="Employee" defaultvalue="11" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Employee:</label>
                                <select id="AssetEntry-cbxEmployee" style="width: 242px;" extype="TreeCombo" datacode="Person"
                                    persontype="3" filtercode="" defaultvalue="92" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    AssetAccount:</label>
                                <input id="AssetEntry-cbxAssetAcct" style="width: 242px;" extype="autocomplete" datacode="Account"
                                    filtercode="FixedAsset" defaultvalue="8" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Expense Account:</label>
                                <input type="text" id="AssetEntry-cbxExpenseAcct" extype="autocomplete" style="width: 240px;"
                                    datacode="Account" filtercode="ExpenseFixedAsset" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Dep Account</label>
                                <input type="text" id="AssetEntry-cbxDepAcct" extype="autocomplete" style="width: 240px;"
                                    datacode="Account" filtercode="DeprecationFixedAsset" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Dep Method</label>
                                <select id="AssetEntry-cbxDepMethod" style="width: 242px;" extype="TreeCombo" datacode="IntDefination"
                                    filtercode="FixedAssetDepreciationMethod" defaultvalue="39" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Org Life Time</label>
                                <input type="text" id="AssetEntry-txtLifeTime" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Deprecated Amount</label>
                                <input type="text" id="AssetEntry-cbxDeprecatedAcct" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Current Cost</label>
                                <input type="text" id="AssetEntry-txtCurrentCose" style="width: 240px;" />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="border-layout">
            <div id="ItemEntry-tabPhutung" style="height: 250px;">
                <div title="Phụ tùng đi kèm">
                    <fieldset class="border-layout-list" style="clear: both; float: left">
                        <legend id='Legend1'>Danh sách::Khách hàng</legend>
                        <table id="AssetEntry_Grid" class="SkinGrid">
                        </table>
                        <div id="AssetEntry_GridPage">
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="ItemEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a> <a id="ItemEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
                href="javascript:void(0)">Cancel</a> <a id="ItemEntry-btnSearch" href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
    </div>
</div>
