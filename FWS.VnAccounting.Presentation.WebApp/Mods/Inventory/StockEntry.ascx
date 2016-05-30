<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="StockEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.StockEntry" %>
<!-- Kho hàng -->
<div class="easyui-window" title="Kho hàng" modal="false" style="width: 800px; height: 140px;">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false">
            <fieldset>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrInventoryCode" EnableViewState="false">Mã kho</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrInventoryName" EnableViewState="false">Tên kho</asp:Literal>:</label>
                    <input type="text" />
                </div>
            </fieldset>
        </div>
        <div region="south" border="false" style="text-align: right; padding: 5px 0; border-top: 1px solid #ccc;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">Ok</a>
            <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">Cancel</a>
        </div>
    </div>
</div>
