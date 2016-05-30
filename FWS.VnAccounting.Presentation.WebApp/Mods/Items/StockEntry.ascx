<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="StockEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.StockEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.StockEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="StockEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>Code:</label>
                <input type="text" id="StockEntry-txtCode" style="width: 150px;" />
            </div>
            <div>
                <label>Stock name:</label>
                <input type="text" id="StockEntry-txtName" />
            </div>
            <div>
                <label>Parent Name:</label>                
                <select style="width: 240px;" id="StockEntry-cbParent">
                                </select>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" id="StockEntry-txtDescription" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="StockEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a>
        <a id="StockEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
            Cancel</a>
    </div>
</div>
