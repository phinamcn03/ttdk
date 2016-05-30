<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="DebitEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.GeneralLedger.DebitEntry" %>
<!-- Giấy báo nợ -->
<div class="easyui-window" title="Giấy báo nợ" modal="false" style="width: 800px; height: 370px;">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false">
            <div class="easyui-layout" fit="true">
                <div region="west" border="false" style="width: 300px;">
                    <fieldset class="fieldset2">
                        <div>
                            <label>Ngày chứng từ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Số chứng từ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Đối tường:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Tên đối tượng:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Địa chỉ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Người nhận tiền:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </div>
                <div region="center" border="false" style="width: 300px;">
                    <fieldset class="fieldset2">
                        <div>
                            <label>Mã nghiệp vụ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Diễn giải:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Mã ngoại tệ:</label>
                            <select>
                                <option>VND</option>
                            </select>
                        </div>
                        <div>
                            <label>Tài khoản có:</label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div>
                            <label>Tài khoản thuế:</label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                    </fieldset>
                </div>
                <div region="south" border="false" style="height: 100px;">
                    <table class="easyui-datagrid" style="width: 650px; height: 50px;">
                        <thead>
                            <tr>
                                <th field="f1" width="60">Phát sinh </th>
                                <th field="f2" width="60">Tài khoản có</th>
                                <th field="f3" width="60">Khách hàng </th>
                                <th field="f4" width="60">Tên khách hàng </th>
                                <th field="f5" width="60">Diễn giải </th>
                                <th field="f6" width="60">Bộ phận </th>
                                <th field="f7" width="60">Mã phí </th>
                                <th field="f8" width="60">Công trình </th>
                                <th field="f9" width="60">Sản phẩm </th>
                                <th field="f10" width="60">Mã phí </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <div region="south" border="false" style="border-top: solid 1px #ccc; text-align: right; padding: 5px 0;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                Ok</a>
            <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                Cancel</a>
        </div>
    </div>
</div>