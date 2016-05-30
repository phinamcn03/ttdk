<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ReceiptEntry.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.GeneralLedger.ReceiptEntry" %>
<!-- Phiếu thu -->
<div class="easyui-window" title="Phiếu thu" modal="false" style="width: 800px; height: 330px;">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false">
            <div class="easyui-layout" fit="true">
                <div region="west" border="false" style="width: 300px;">
                    <fieldset class="fieldset2">
                        <div>
                            <label>
                                Ngày chứng từ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Số chứng từ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Đối tường:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Tên đối tượng:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Địa chỉ:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </div>
                <div region="center" border="false" style="width: 300px;">
                    <fieldset class="fieldset2">
                        <div>
                            <label>
                                Người nộp tiền:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Mã nghiệp vụ:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Diễn giải:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Mã ngoại tệ:</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>
                                Tài khoản nợ:</label>
                            <input type="checkbox" />
                        </div>
                    </fieldset>
                </div>
                <div region="south" border="false" style="height: 100px;">
                    <table class="easyui-datagrid" style="width: 650px; height: 50px;">
                        <thead>
                            <tr>
                                <th field="f1" width="60">
                                    Phát sinh
                                </th>
                                <th field="f2" width="60">
                                    Tài khoản có
                                </th>
                                <th field="f3" width="60">
                                    Khách hàng
                                </th>
                                <th field="f4" width="60">
                                    Tên khách hàng
                                </th>
                                <th field="f5" width="60">
                                    Diễn giải
                                </th>
                                <th field="f6" width="60">
                                    Bộ phận
                                </th>
                                <th field="f7" width="60">
                                    Mã phí
                                </th>
                                <th field="f8" width="60">
                                    Công trình
                                </th>
                                <th field="f9" width="60">
                                    Sản phẩm
                                </th>
                                <th field="f10" width="60">
                                    Mã vụ việc
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <div region="south" border="false" style="border-top: solid 1px #ccc; text-align: right;
            padding: 5px 0;">
            <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">Ok</a>
            <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">Cancel</a>
        </div>
    </div>
</div>
