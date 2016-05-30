<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AReceipt.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.AReceipt" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Service/AReceipt.ashx?instantid=" + InstantID) %>"></script>
<div class="easyui-layout" fit="true" id="<%=InstantID + "Entry-Content"%>">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="<%=InstantID + "Receipt-btnSave"%>" >Lưu</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" id="<%=InstantID + "Receipt-btnNew"%>" >
                    Tạo mới</a>
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "Receipt-PrintAll"%>">In biên lai</a>
                <!--
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-print" id="<%=InstantID + "Receipt-PrintPath"%>">
                    In riêng biên lai</a> 
                -->
                   <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete"
                        id="<%=InstantID + "Receipt-btnCancel"%>">Hủy</a> 
                 <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete"
                        id="<%=InstantID + "Receipt-btnDel"%>">Xóa</a> 
            </fieldset>
            <fieldset class="border-layout-search relative" id="<%=InstantID + "Receipt-Form"%>">
                <div class="border-layout-search-content">
                    <fieldset class="border-layout-form">
                        <div>
                            <label id="<%=InstantID + "Receipt-lbCodeHD"%>" style="width: 70px;">Số Ðơn</label>
                            <input type="text" tabindex="1" style="width: 140px;" id="<%=InstantID + "Receipt-txtCodeHD"%>" />
                            <label id="<%=InstantID + "Receipt-lbDate"%>" style="padding-left: 40px; width: 50px;">
                                Ngày</label>
                            <input style="width: 120px;" id="<%=InstantID + "Receipt-txtDate"%>" />
                            <label id="<%=InstantID + "Receipt-lbReceipt"%>" style="padding-left: 40px;
                                width: 85px;">
                                Số biên lai</label>
                            <input type="text" style="width: 120px;" id="<%=InstantID + "Receipt-txtReceipt"%>"
                                 />
                        </div>
                        <div>
                            <label id="<%=InstantID + "Receipt-lblVourcherCode"%>" style="width: 70px;">
                                Mã KHTX</label>
                            <input type="text" tabindex="2" style="width: 140px;" id="<%=InstantID + "Receipt-txtVendorCode"%>" />
                            <label id="<%=InstantID + "Receipt-lblVourcherName"%>" style="padding-left: 40px;
                                width: 50px;">
                                Tên NH</label>
                            <input type="text"style="width: 503px; padding-right: 20px" id="<%=InstantID + "Receipt-txtVendorName"%>" />
                        </div>
                         <div>
                            <label id="<%=InstantID + "Receipt-lbAddress"%>" style="width: 70px;">
                                Địa chỉ</label>
                            <input type="text" tabindex="3" style="width: 733px;" id="<%=InstantID + "Receipt-txtAddress"%>" />
                        </div>
                        <div>
                            <label id="<%=InstantID + "Receipt-lbName"%>" style="width: 70px;">
                                Người nộp</label>
                            <input type="text" tabindex="3" style="width: 488px;" id="<%=InstantID + "Receipt-txtPerson"%>" />
                            <label id="<%=InstantID + "Receipt-lblAccount"%>" style="padding-left: 40px; width: 85px;">
                                Phương thức TT</label>
                            <input   style="width: 120px;" id="<%=InstantID + "Receipt-txtTypePayment"%>" />
                        </div>
                        <div>
                            <label id="<%=InstantID + "Receipt-lblDescription"%>" style="width: 70px;">
                                Lý do nộp</label>
                            <input type="text" tabindex="4" style="width: 733px;" id="<%=InstantID + "Receipt-txtNote"%>" />
                           </div>
                        <div>HD: Nhập theo định dạng: Số tiền#Lý do.. để nhập hóa đơn không có đơn</div>
                        <div>
                            <label id="<%=InstantID + "Receipt-lblFromdate"%>" style="width: 70px;">
                                Từ ngày</label>
                            <input type="text" style="width: 140px;" id="<%=InstantID + "Receipt-txtFromdate"%>" />
                            <label id="<%=InstantID + "Receipt-lblTodate"%>" style="padding-left: 40px; width: 50px;">
                                Ðến ngày</label>
                            <input  style="width: 120px;" id="<%=InstantID + "Receipt-txtTodate"%>" />
                        </div>
                    </fieldset>
                </div>
                <div class="border-layout-search-bar">
                    <span class="border-layout-search-bar-icon search-bar-icon-up"></span><span class="border-layout-search-bar-title">
                    </span>
                </div>
            </fieldset>
        </div>
        <div class="border-layout">
            <fieldset class="border-layout-list">
                <legend>Danh sách::Chi tiết</legend>
                <table id="<%=InstantID + "Receipt_Grid"%>" class="SkinGrid">
                </table>
                <div id="<%=InstantID + "Receipt_GridPage"%>">
                </div>
            </fieldset>
        </div>
    </div>
</div>
