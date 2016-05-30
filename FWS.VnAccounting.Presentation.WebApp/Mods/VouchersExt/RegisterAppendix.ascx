<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="RegisterAppendix.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.RegisterAppendix" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.RegisterAppendix.js") %>"></script>
<div class="easyui-layout" fit="true" id="RegisterAppendix-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <legend id='fsFunctionTitle'>Chức năng</legend><a id="RegisterAppendix-btnAddNew"
                    href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">Đăng ký</a>
                <a id="RegisterAppendix-btnDelete" href="javascript:void(0);" class="easyui-linkbutton"
                    iconcls="icon-cancel">Hủy</a>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <legend id='fsListTitle'>Danh sách::Khách hàng</legend>
                <div id="RegisterAppendix-MainTab">
                    <div title="Thông tin đăng ký">
                        <fieldset class="border-layout-form">
                            <div>
                                <label style="width: 85px;">
                                    Số đơn</label>
                                <input id="RegisterAppendix-txtRefNo" type="text" tabindex="1" style="width: 150px;" />
                                <label style="padding-left: 40px; width: 60px;">
                                    Ngày</label>
                                <input id="RegisterAppendix-txtRefDate" tabindex="2" type="text" style="width: 120px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Số cũ</label>
                                <input id="RegisterAppendix-OldRefNo" type="text" tabindex="3" style="width: 150px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Mã KHTX</label>
                                <input tabindex="4" id="RegisterAppendix-ObjectID" style="width: 150px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Tên KHTX</label>
                                <input id="RegisterAppendix-ObjectName" type="text" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Địa chỉ:</label>
                                <input tabindex="5" id="RegisterAppendix-Address" style="width: 370px;" />
                            </div>
                        </fieldset>
                    </div>
                    <div title="Bên bảo đảm">
                        <fieldset class="border-layout-list">
                            <legend id='Legend1'>Danh sách::ben dam bao</legend>
                            <table id="RegisterAppendix_GridColateral" class="SkinGrid">
                            </table>
                            <div id="RegisterAppendix_GridColateralPage">
                            </div>
                        </fieldset>
                    </div>
                    <div title="Bên nhận bảo đảm">
                        <fieldset class="border-layout-list">
                            <legend id='Legend2'>Danh sách::ben dam bao</legend>
                            <table id="RegisterAppendix_GridReColateral" class="SkinGrid">
                            </table>
                            <div id="RegisterAppendix_GridReColateralPage">
                            </div>
                        </fieldset>
                    </div>
                    <div title="Tài sản">
                        <fieldset class="border-layout-list">
                            <legend id='144'>Danh sách::ben dam bao</legend>
                            <table id="RegisterAppendix_GridProperty" class="SkinGrid">
                            </table>
                            <div id="RegisterAppendix_GridPropertyPage">
                            </div>
                        </fieldset>
                    </div>
                    <div title="Phụ lục">
                        <fieldset class="border-layout-form">
                            <div>
                                <label style="width: 85px;">
                                    Số thông báo</label>
                                <input id="AppendixEntry-txtMsgNo" type="text" style="width: 150px;" readonly="readonly" />
                                <label style="padding-left: 40px; width: 60px;">
                                    Ngày</label>
                                <input id="AppendixEntry-txtDateMsg" type="text" style="width: 120px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Số đơn DK</label>
                                <input id="AppendixEntry-txtNo" type="text" style="width: 150px;" />
                                <label style="padding-left: 40px; width: 60px;">
                                    Số cũ</label>
                                <input id="AppendixEntry-txtNoOld" type="text" style="width: 120px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Loại tài sản</label>
                                <input tabindex="3" id="AppendixEntry-txtCollType" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Số Khung/ GCN</label>
                                <input id="AppendixEntry-txtGCD" type="text" style="width: 150px;" />
                                <label style="padding-left: 40px; width: 60px;">
                                    BKS/ Số DK</label>
                                <input id="AppendixEntry-BKS" type="text" style="width: 120px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Gửi đến:</label>
                                <input tabindex="3" id="AppendixEntry-txtSendTo" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Địa chỉ:</label>
                                <input tabindex="3" id="AppendixEntry-txtObjectAddress" style="width: 370px;" readonly="readonly" />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>
