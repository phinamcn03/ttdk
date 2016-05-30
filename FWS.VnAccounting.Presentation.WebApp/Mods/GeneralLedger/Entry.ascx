<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Entry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.GeneralLedger.Entry" %>
<!-- Tài Khoản -->
<div class="easyui-window" title="Tài Khoản" modal="false" style="width: 800px; height: 270px;">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false" style="border: 1px solid #ccc;">
            <fieldset>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrAccountNumber" EnableViewState="false">Mã tài khoản</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrParentAccountNumber" EnableViewState="false">Tài khoản mẹ</asp:Literal>:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrAccountName" EnableViewState="false">Tên tài khoản</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrAccountName2" EnableViewState="false">Tên tài khoản 2</asp:Literal>:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrLiabilitiesAccount" EnableViewState="false">Là tài khoản công nợ</asp:Literal>:</label>
                    <input type="checkbox" />
                </div>
                <div>
                    <label>
                        <asp:Literal runat="server" ID="ltrLedgerAccount" EnableViewState="false">Là tài khoản sổ cái</asp:Literal>:</label>
                    <input type="checkbox" />
                </div>
            </fieldset>
        </div>
        <div region="south" border="false" style="text-align: right; padding: 5px 0;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                <asp:Literal runat="server" ID="ltrOk" EnableViewState="false">Ok</asp:Literal>
            </a>
            <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                <asp:Literal runat="server" ID="ltrCancel" EnableViewState="false">Cancel</asp:Literal>
            </a>
        </div>
    </div>
</div>
