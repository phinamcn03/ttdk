<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ItemEntryTest.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ItemEntryTest" %>
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
</style>
<script type="text/javascript">
    function CallBack(options) {
        alert('123312');
        console.log(options);
    };
</script>
<div class="elite-form easyui-layout" fit="true" id="ItemEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div style="padding: 0;">
                <div class="easyui-layout" style="height: 165px;">
                    <div region="west" border="false" style="width: 350px;">
                        <fieldset class="border-layout-subform">
                            <div>
                                <label style="width: 90px;">
                                    Object Type:</label>
                                <select id="cbxObjectType" style="width: 242px;" extype="TreeCombo" datacode="Group"
                                    filtercode="Object" defaultvalue="3" afterselect="CallBack" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Customer:</label>
                                <select id="Select1" style="width: 242px;" extype="TreeCombo" datacode="Group" filtercode="Customer"
                                    defaultvalue="8" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Employee:</label>
                                <select id="Select2" style="width: 242px;" extype="TreeCombo" datacode="Group" filtercode="Employee"
                                    defaultvalue="11" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Input tax account:</label>
                                <input type="text" id="ItemEntry-txtInTaxAcct" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Tax name:</label>
                                <select id="ItemEntry-cboTax" style="width: 240px;">
                                </select>
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Code method:</label>
                                <select id="ItemEntry-cbCodeMethod" style="width: 240px;">
                                </select>
                            </div>
                        </fieldset>
                    </div>
                    <div region="center" border="false" style="width: 250px;">
                        <fieldset class="border-layout-subform">
                            <div>
                                <label style="width: 90px;">
                                    Item name:</label>
                                <input type="text" id="ItemEntry-txtName" style="width: 240px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Unit name:</label>
                                <input type="text" extype="datebox" id="txtDateBox" style="width: 242px;" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Debit account:</label>
                                <select id="frmCbxCheckList" multiple="true" extype="CheckList" style="width: 240px;"
                                    datacode="Account" filtercode="Cash" defaultvalue="8" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Out tax account:</label>
                                <input type="text" id="txtAutoComplete" extype="autocomplete" style="width: 240px;"
                                    datacode="Account" filtercode="Cash" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Price:</label>
                                <input type="text" id="frmCbxCombobox" extype="Combobox" style="width: 242px;" datacode="Account"
                                    filtercode="Cash" defaultvalue="7" afterselect="CallBack" />
                            </div>
                            <div>
                                <label style="width: 90px;">
                                    Item type:</label>
                                <select id="frmTreeCombo" style="width: 242px;" extype="TreeCombo" datacode="Account"
                                    filtercode="Cash" defaultvalue="11" />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div>
                <label style="width: 90px;">
                    Description:</label>
                <input type="text" id="ItemEntry-txtDesc" style="width: 590px;" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="ItemEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a> <a id="ItemEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
                href="javascript:void(0)">Cancel</a> <a id="ItemEntry-btnSearch" href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
    </div>
</div>
<script type="text/javascript">
    $(function () {
        var options = {};
        var control = CControl;
        control.InitForm({ container: '.elite-form' });
    });
</script>
