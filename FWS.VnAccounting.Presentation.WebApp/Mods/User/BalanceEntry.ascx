<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="BalanceEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.User.BalanceEntry" %>
<!-- Số dư tài khoản -->
<div class="easyui-window" title="Số dư tài khoản" modal="false" style="width: 500px; height: 300px;">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false">
            <fieldset>
                <div>
                    <label>Tài khoản:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Tên tài khoản:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Dư nợ:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Dư có:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Mã ngoại tệ:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Dư nợ ngoại tệ:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Dư có ngoại tệ:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
            </fieldset>
        </div>
        <div region="south" border="false" style="text-align: right; padding: 5px 0; border-top: 1px solid #ccc;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                Ok</a>
            <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                Cancel</a>
        </div>
    </div>
</div>