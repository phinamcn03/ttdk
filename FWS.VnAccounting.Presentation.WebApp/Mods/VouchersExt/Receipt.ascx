<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Receipt.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.Receipt" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/VouchersExt/Js/Mods.VouchersExt.Receipt.js") %>"></script>
<div class="easyui-layout" fit="true" id="ReceiptEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <div class="border-layout">
            <fieldset class="border-layout-functions">
                <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-save" id="Receipt-btnSave">
                    Lưu</a> <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-delete"
                        id="Receipt-btnDel">Xóa</a> <a href="javascript:void(0);" class="easyui-linkbutton"
                            iconcls="icon-print" id="Receipt-PrintAll">In chung biên lai</a> <a href="javascript:void(0);"
                                class="easyui-linkbutton" iconcls="icon-print" id="Receipt-PrintPath">In riêng biên
                                lai</a>
            </fieldset>
            <fieldset class="border-layout-search relative" id="Receipt-Form">
                <div class="border-layout-search-content">
                    <fieldset class="border-layout-form">
                        <div>
                            <label id="Receipt-lbCodeHD" style="width: 70px;">
                                Mã Ðơn</label>
                            <input type="text" tabindex="1" style="width: 140px;" id="Receipt-txtCodeHD" />
                            <label id="Receipt-lbDate" style="padding-left: 40px; width: 50px;">
                                Ngày</label>
                            <input style="width: 120px;" tabindex="5" id="Receipt-txtDate" />
                            <label id="Receipt-lbReceipt" style="padding-left: 40px; width: 85px;">
                                Sô Hóa đơn</label>
                            <input type="text" tabindex="4" style="width: 120px;" id="Receipt-txtReceipt" readonly="readonly" />
                        </div>
                        <div>
                            <label id="Receipt-lblVourcherCode" style="width: 70px;">
                                Mã KHTX</label>
                          
                                <input type="text" tabindex="1" style="width: 140px;" id="Receipt-txtVendorCode" />
                           
                            <label id="Receipt-lblVourcherName" style="padding-left: 40px; width: 50px;">
                                Tên KH</label>
                        
                                <input type="text" tabindex="2" style="width:365px; padding-right: 20px" id="Receipt-txtVendorName" />
                           
                        </div>
                         <div>
                            <label id="Receipt-lbName" style="width: 70px;">
                                Người nộp</label>
                              <input type="text"  tabindex="3" style="width: 350px;" id="Receipt-txtPerson" />
                            <label id="Receipt-lblAccount" style="padding-left: 40px; width: 85px;">
                                Phương thức TT</label>
                          <input tabindex="3" style="width: 120px;"  tabindex="6" id="Receipt-txtTypePayment" />

                        </div>
                         <div>
                            <label id="Receipt-lblDescription" style="width: 70px;">
                                Diễn giải</label>
                               <input type="text" tabindex="7" style="width: 595px;" id="Receipt-txtNote" />
                              
                        </div>
                             <div>
                            <label id="Receipt-lblFromdate" style="width: 70px;">
                               Từ ngày</label>
                              <input type="text"  tabindex="3" style="width: 140px;" id="Receipt-txtFromdate" />
                            <label id="Receipt-lblTodate" style="padding-left: 40px; width: 50px;">
                                Đến ngày</label>
                          <input tabindex="3" style="width: 120px;"  tabindex="6" id="Receipt-txtTodate" />

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
                <table id="Receipt_Grid" class="SkinGrid">
                </table>
                <div id="Receipt_GridPage">
                </div>
            </fieldset>
        </div>
    </div>
</div>
