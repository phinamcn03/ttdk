<%@ Page Title="" Language="C#" MasterPageFile="~/Master/FwsCoreSub.master" AutoEventWireup="true" CodeBehind="Entry.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Entry.Entry" %>

<asp:Content ID="Content3" ContentPlaceHolderID="TitleCoreSubPlace" runat="server">Entry Demo</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadCoreSubPlace" runat="server">
    <style type="text/css">
        fieldset
        {
            border: 0;
            padding: 0;
            margin: 0;
        }
        fieldset > div
        {
            padding: 5px;
        }
        fieldset label
        {
            width: 115px;
            display: inline-block;
        }
        fieldset input[type=text], fieldset select
        {
            width: 355px;
            display: inline-block;
        }
        fieldset input[type=text], fieldset textarea, fieldset select
        {
            height: 22px;
            -ms-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            border: solid 1px #999;
        }
        fieldset.fieldset2 input[type=text], fieldset.fieldset2 select
        {
            width: 150px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentCoreSubPlace" runat="server">
    <!-- Tài Khoản -->
    <div class="easyui-window" title="Tài Khoản" modal="false" style="width: 500px; height: 270px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã tài khoản:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tài khoản mẹ:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Tên tài khoản:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên tài khoản 2:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Là tài khoản công nợ:</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Là tài khoản sổ cái:</label>
                        <input type="checkbox" />
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
    <!-- Ngoại tệ -->
    <div class="easyui-window" title="Ngoại tệ" modal="false" style="width: 500px; height: 180px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã ngoại tệ:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên ngoại tệ:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tỷ giá:</label>
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
    <!-- Nhóm khách hàng -->
    <div class="easyui-window" title="Nhóm khách hàng" modal="false" style="width: 500px; height: 150px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Nhóm khách hàng:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên nhóm khách hàng:</label>
                        <input type="text" />
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
    <!-- Khách hàng -->
    <div class="easyui-window" title="Khách hàng" modal="false" style="width: 600px; height: 370px;">
        <div class="easyui-layout" fit="true">
            <div region="west" border="false" style="width: 300px;">
                <fieldset class="fieldset2">
                    <div>
                        <label>Mã:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Đối tượng:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Mã số thuế:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Địa chỉ:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Đối tác:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Số điện thoại:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Số di động:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Số Fax:</label>
                        <input type="text" />
                    </div>
                </fieldset>
            </div>
            <div region="center" border="false" style="width: 300px;">
                <fieldset class="fieldset2">
                    <div>
                        <label>Tài khoản ngân hàng:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên đối tượng 2:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tại ngân hàng:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Là nhà cung cấp:</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Là khách hàng:</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Là nhân viên:</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Nhóm khách hàng 1:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Nhóm khách hàng 2:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Nhóm khách hàng 3:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <div region="south" border="false" style="border-top: solid 1px #ccc; text-align: right; padding: 5px 0;">
                <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                    Ok</a>
                <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                    Cancel</a>
            </div>
        </div>
    </div>
    <!-- Vật tư hàng hóa -->
    <div class="easyui-window" title="Vật tư hàng hóa" modal="false" style="width: 600px; height: 330px;">
        <div class="easyui-layout" fit="true">
            <div region="west" border="false" style="width: 300px;">
                <fieldset class="fieldset2">
                    <div>
                        <label>Mã vật tư:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên vật tư:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Mã đơn vị tính:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Cách tính tồn kho:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tài khoản kho:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tài khoản giá vốn:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tài khoản doanh thu:</label>
                        <input type="text" />
                    </div>
                </fieldset>
            </div>
            <div region="center" border="false" style="width: 300px;">
                <fieldset class="fieldset2">
                    <div>
                        <label>Nhóm đầu tư:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên vật tư 2:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Chỉ số kỹ thuật:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tồn kho Max:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Tồn kho Min:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Quản lý tồn kho:</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Loại vật tư:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Nhóm Giá thành:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <div region="south" border="false" style="border-top: solid 1px #ccc; text-align: right; padding: 5px 0;">
                <a class="easyui-linkbutton" iconcls="icon-ok" href="javascript:void(0)">
                    Ok</a>
                <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)">
                    Cancel</a>
            </div>
        </div>
    </div>
    <!-- Hợp đồng -->
    <div class="easyui-window" title="Hợp đồng" modal="false" style="width: 500px; height: 230px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã vụ việc:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Mã vụ việc mẹ:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Tên vụ việc:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên vụ việc 2:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Ghi chú:</label>
                        <input type="text" />
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
    <!-- Khoản mục phí -->
    <div class="easyui-window" title="Khoản mục phí" modal="false" style="width: 500px; height: 200px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã phí:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Mã phí mẹ:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Tên phí:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên phí 2:</label>
                        <input type="text" />
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
    <!-- Kho hàng -->
    <div class="easyui-window" title="Kho hàng" modal="false" style="width: 500px; height: 140px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã kho:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên kho:</label>
                        <input type="text" />
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
    <!-- Nhóm vật tư -->
    <div class="easyui-window" title="Nhóm vật tư" modal="false" style="width: 500px; height: 140px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã nhóm vật tư:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên nhóm vật tư:</label>
                        <input type="text" />
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
    <!-- Đơn vị tính -->
    <div class="easyui-window" title="Đơn vị tính" modal="false" style="width: 500px; height: 140px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã đơn vị tính:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên đơn vị tính:</label>
                        <input type="text" />
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
    <!-- Công trình -->
    <div class="easyui-window" title="Công trình" modal="false" style="width: 500px; height: 140px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã công trình:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên công trình:</label>
                        <input type="text" />
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
    <!-- Bộ phận -->
    <div class="easyui-window" title="Bộ phận" modal="false" style="width: 500px; height: 140px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Mã bộ phận:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tên bộ phận:</label>
                        <input type="text" />
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
    <!-- Số dư đầu kỳ NTXT -->
    <div class="easyui-window" title="Số dư đầu kỳ NTXT" modal="false" style="width: 500px; height: 300px;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false">
                <fieldset>
                    <div>
                        <label>Số phiếu nhập:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Ngày phiếu nhập:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Kho:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Vật tư:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Số lượng:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Dư đầu:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Dư đầu ngoại tệ:</label>
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
    <!-- Vào số dư đầu kỳ công nợ phải thu -->
    <div class="easyui-window" title="Vào số dư đầu kỳ công nợ phải thu" modal="false" style="width: 500px; height: 270px;">
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
                        <label>Đối tượng:</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <label>Tên đối tượng:</label>
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
    <!-- Phiếu thu -->
    <div class="easyui-window" title="Phiếu thu" modal="false" style="width: 600px; height: 330px;">
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
                        </fieldset>
                    </div>
                    <div region="center" border="false" style="width: 300px;">
                        <fieldset class="fieldset2">
                            <div>
                                <label>Người nộp tiền:</label>
                                <input type="text" />
                            </div>
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
                                <input type="checkbox" />
                            </div>
                            <div>
                                <label>Tài khoản nợ:</label>
                                <input type="checkbox" />
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
                                    <th field="f10" width="60">Mã vụ việc </th>
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
    <!-- Phiếu chi -->
    <div class="easyui-window" title="Phiếu chi" modal="false" style="width: 600px; height: 370px;">
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
                                    <th field="f10" width="60">Mã phí</th>
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
    <!-- Giấy báo có -->
    <div class="easyui-window" title="Giấy báo có" modal="false" style="width: 600px; height: 370px;">
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
                        </fieldset>
                    </div>
                    <div region="center" border="false" style="width: 300px;">
                        <fieldset class="fieldset2">
                            <div>
                                <label>Người nộp tiền:</label>
                                <input type="text" />
                            </div>
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
                                <label>Tài khoản nợ:</label>
                                <select>
                                    <option>1122</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>
                    <div region="south" border="false" style="height: 100px;">
                        <table class="easyui-datagrid" style="width: 650px; height: 50px;">
                            <thead>
                                <tr>
                                    <th field="f2" width="60">Tài khoản có</th>
                                    <th field="f3" width="60">Khách hàng </th>
                                    <th field="f1" width="60">Phát sinh </th>
                                    <th field="f4" width="60">Tên khách hàng </th>
                                    <th field="f5" width="60">Diễn giải </th>
                                    <th field="f6" width="60">Bộ phận </th>
                                    <th field="f7" width="60">Mã phí </th>
                                    <th field="f8" width="60">Công trình </th>
                                    <th field="f9" width="60">Sản phẩm </th>
                                    <th field="f10" width="60">Mã phí</th>
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
    <!-- Giấy báo nợ -->
    <div class="easyui-window" title="Giấy báo nợ" modal="false" style="width: 600px; height: 370px;">
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
</asp:Content>
