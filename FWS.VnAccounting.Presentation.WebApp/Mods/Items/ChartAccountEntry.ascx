<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ChartAccountEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ChartAccountEntry" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ChartAccountEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="ChartAccountEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form">
            <div>
                <label>
                    Parent Name:</label>
                <select id="ChartAccountList-cbxTreeAccountList" class="easyui-combotree" name="city" style="width:375px;"/>                                              
            </div>
            <div>
                <label>
                    Code:</label>
                <input type="text" style="width: 150px;" id="ChartAccountList-txtCode" />
            </div>
            <div>
                <label>
                   Account Name:</label>
                <input type="text" id="ChartAccountList-txtAccountName"/>
            </div>
            <div>
                <label>
                    Là TK công nợ</label>
                <input type="checkbox" id="ChartAccountList-chkIsLedger"/>
            </div>
            <div>
                <label>
                    Là TK sổ cái</label>
                <input type="checkbox" id="ChartAccountList-chkIsLiabilities"/>
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="ChartAccountEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save"
            href="javascript:void(0)">Save</a> <a id="ChartAccountEntry-btnCancel" class="easyui-linkbutton"
                iconcls="icon-cancel" href="javascript:void(0)">Cancel</a>
    </div>
</div>
