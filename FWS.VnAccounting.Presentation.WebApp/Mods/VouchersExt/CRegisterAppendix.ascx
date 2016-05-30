<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CRegisterAppendix.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.CRegisterAppendix" %>
<style type="text/css">
    .style1
    {
        color: #996600;
    }
    </style>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Service/ARegister.ashx?instantid=" + InstantID) %>"></script>
<div class="easyui-layout" fit="true" id="<%=InstantID + "RegisterAppendix-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <legend id='fsFunctionTitle'>Chức năng</legend><a id="<%=InstantID + "RegisterAppendix-btnAddNew"%>"
                    href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">Lưu</a>
                <a id="<%=InstantID + "RegisterAppendix-btnClear"%>" href="javascript:void(0);" class="easyui-linkbutton"
                    iconcls="icon-refresh">Làm mới</a> <a id="<%=InstantID + "RegisterAppendix-btnAll"%>"
                        href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print">In TBGT
                        (Gộp)</a> <a id="<%=InstantID + "RegisterAppendix-btnPrivate"%>" href="javascript:void(0);"
                            class="easyui-linkbutton" iconcls="icon-print">In TBGT (Riêng</a> <a id="<%=InstantID + "RegisterAppendix-btnGCN"%>"
                                href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print">In GCN</a>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <legend id='fsListTitle'>Danh sách::Khách hàng</legend>
                <div id="<%=InstantID + "RegisterAppendix-MainTab"%>">
                    <div title="Thông tin đăng ký">
                        <fieldset class="border-layout-form">
                            <div>
                                <label style="width: 85px;">
                                    Số đơn <span class="style1">*</span></label>
                                    
                                <input id="<%=InstantID + "RegisterAppendix-txtRefNo"%>" type="text" tabindex="1"
                                    style="width: 150px;" />
                                 
                                <label style="padding-left: 35px; width: 60px;">
                                    Ngày <span class="style1">*</span></label>
                                <input id="<%=InstantID + "RegisterAppendix-txtRefDate"%>" tabindex="2" type="text"
                                    style="width: 125px;" />
                            </div>
                            <div style="display:none">
                            <label style="width: 85px;">
                                    Số TB</label>
                            <input id="<%=InstantID + "RegisterAppendix-txtSoTB"%>" type="text" tabindex="1"
                                    style="width: 150px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Số cũ</label>
                                <input id="<%=InstantID + "RegisterAppendix-OldRefNo"%>" type="text" tabindex="3"
                                    style="width: 150px;" />
                                <label style="padding-left: 35px; width: 60px;">
                                    Loại đơn <span class="style1">*</span></label>
                                <input id="<%=InstantID + "RegisterAppendix-txtRegisType"%>" tabindex="2" type="text"
                                    style="width: 125px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Mã KHTX</label>
                                <input tabindex="4" id="<%=InstantID + "RegisterAppendix-ObjectID"%>" style="width: 150px;" />&nbsp;
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Tên KHTX</label>
                                <input id="<%=InstantID + "RegisterAppendix-ObjectName"%>" type="text" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Địa chỉ:</label>
                                <input tabindex="5" id="<%=InstantID + "RegisterAppendix-Address"%>" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Gửi TBGT đến:</label>
                                <input tabindex="5" id="<%=InstantID + "RegisterAppendix-txtSend"%>" style="width: 370px;" />
                            </div>
                            <div>
                                <label style="width: 85px;">
                                    Địa chỉ:</label>
                                <input tabindex="5" id="<%=InstantID + "RegisterAppendix-txtAddressSend"%>" style="width: 370px;" />
                            </div>
                        </fieldset>
                    </div>
                    <div title="Bên bảo đảm">
                        <fieldset class="border-layout-list">
                            <legend id='Legend1'>Danh sách::ben dam bao</legend>
                            <table id="<%=InstantID + "RegisterAppendix_GridColateral"%>" class="SkinGrid">
                            </table>
                            <div id="<%=InstantID + "RegisterAppendix_GridColateralPage"%>">
                            </div>
                        </fieldset>
                    </div>
                    <div title="Bên nhận bảo đảm">
                        <fieldset class="border-layout-list">
                            <legend id='Legend2'>Danh sách::ben dam bao</legend>
                            <table id="<%=InstantID + "RegisterAppendix_GridReColateral"%>" class="SkinGrid">
                            </table>
                            <div id="<%=InstantID + "RegisterAppendix_GridReColateralPage"%>">
                            </div>
                        </fieldset>
                    </div>
                    <div title="Tài sản">
                      <fieldset class="border-layout-search relative" id="<%=InstantID + "Receipt-Form"%>">
                            <div class="border-layout-search-content">
                                <fieldset class="border-layout-form">
                                    <div>
                                        <label id="<%=InstantID + "RegisterAppendix-lbType"%>" style="width: 70px;">
                                            Loại Tài sản:</label>
                                        <input type="text" tabindex="1" style="width: 140px;" id="<%=InstantID + "RegisterAppendix-txtType"%>" />
                                    </div>
                                </fieldset>
                            </div>
                        </fieldset>
                    
                          <div class="border-layout">
                            <fieldset class="border-layout-list">
                                <legend id='144'>Danh sách::ben dam bao</legend>
                                <table id="<%=InstantID + "RegisterAppendix_GridProperty"%>" class="SkinGrid">
                                </table>
                                <div id="<%=InstantID + "RegisterAppendix_GridPropertyPage"%>">
                                </div>
                            </fieldset>
                        </div>
                        </div>
                        <div title="Thông tin GCN">
                            <fieldset class="border-layout-form">
                                <div>
                                    <label style="width: 90px;">
                                        Ngày giờ nhận:</label>
                                  
                                    <input tabindex="5" id="<%=InstantID + "RegisterAppendix-txthh"%>" style="width: 25px; float:left" />
                                    <label style="padding-left: 2px; width: 5px;">:</label>
                                     <input tabindex="6" id="<%=InstantID + "RegisterAppendix-txtmm"%>" style="width: 25px; float:left" />
                                     <label style="padding-left: 2px; width: 7px;" > </label>
                                     <input tabindex="7" id="<%=InstantID + "RegisterAppendix-txtdd"%>" style="width: 30px; float:left" />
                                     <label style="padding-left: 2px; width: 5px;" >- </label>
                                     <input tabindex="8" id="<%=InstantID + "RegisterAppendix-txtmonth"%>" style="width: 30px; float:left" />
                                     <label style="padding-left: 2px; width: 5px;" >- </label>
                                     <input tabindex="9" id="<%=InstantID + "RegisterAppendix-txtyyyy"%>" style="width: 35px; float:left"/>
                                </div>
                                <div>
                                    <label style="width: 90px;">
                                        Số trang kèm theo:</label>
                                    <input tabindex="10" id="<%=InstantID + "RegisterAppendix-txtNumPage"%>" style="width: 120px;" value="2" />
                                </div>
                                <div>
                                    <label style="width: 90px;">
                                        Mã cá nhân:</label>
                                    <input tabindex="11" id="<%=InstantID + "RegisterAppendix-txtPersonCode"%>" style="width: 370px;" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
            </fieldset>
        </div>
    </div>
</div>
