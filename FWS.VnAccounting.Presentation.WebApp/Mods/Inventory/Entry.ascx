<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Entry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Entry" %>
<!-- Vật tư hàng hóa -->
<div class="easyui-window" title="Vật tư hàng hóa" modal="false" style="width: 800px;
    height: 330px;">
    <div class="easyui-layout" fit="true">
        <div region="west" border="false" style="width: 300px;">
            <fieldset class="fieldset2">
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrVendorCode" EnableViewState="false">Mã vật tư</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrVendorName" EnableViewState="false">Tên vật tư</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrUnitCode" EnableViewState="false">Mã đơn vị tính</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrSupplieCalculation" EnableViewState="false">Cách tính tồn kho</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrInventoryAccount" EnableViewState="false">Tài khoản kho</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrCostAccount" EnableViewState="false">Tài khoản giá vốn</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrRevenueAccount" EnableViewState="false">Tài khoản doanh thu</asp:Literal>:</label>
                    <input type="text" />
                </div>
            </fieldset>
        </div>
        <div region="center" border="false" style="width: 300px;">
            <fieldset class="fieldset2">
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrInvestmentGroup" EnableViewState="false">Nhóm đầu tư</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrSupplieName2" EnableViewState="false">Tên vật tư 2</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrTechnicalIndex" EnableViewState="false">Chỉ số kỹ thuật</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrMaxInventory" EnableViewState="false">Tồn kho Max</asp:Literal>:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrMinInventory" EnableViewState="false">Tồn kho Min</asp:Literal>:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrInventoryManagement" EnableViewState="false">Quản lý tồn kho</asp:Literal>:</label>
                    <input type="checkbox" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrSupplieType" EnableViewState="false">Loại vật tư</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="Literal13" EnableViewState="false">Nhóm Giá thành</asp:Literal>:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
            </fieldset>
        </div>
        <div region="south" border="false" style="border-top: solid 1px #ccc; text-align: right;
            padding: 5px 0;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                <asp:Literal runat="server" ID="ltrOk" EnableViewState="false">Ok</asp:Literal>
            </a><a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                <asp:Literal runat="server" ID="ltrCancel" EnableViewState="false">Cancel</asp:Literal>
            </a>
        </div>
    </div>
</div>
