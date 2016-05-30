<%@ Page Title="" Language="C#" MasterPageFile="~/Master/ChildFrame.Master" AutoEventWireup="true" CodeBehind="SellOdd.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AR.SellOdd1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="CoreTitle" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="CoreHead" runat="server">
    <script src="../../Mods/AR/Js/Mods.AP.SellOdd.js"></script>
    <link href="../../Mods/AR/Css/Mods.AP.SellOdd.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="CoreContent" runat="server">
    <fieldset class="fsForm" id="SellOdd-Form">
        <div class="newrow">
            <label id="SellOdd-lblVourcherCode">Mã vạch</label>
            <div>
                <input type="text" tabindex="1" id="SellOdd-txtBarCode" class="easyui-validatebox" style="width: 290px; height: 50px; font-size: 29px; text-transform: uppercase; text-align: center;" />
            </div>
        </div>
        <div>
            <label id="SellOdd-lblBarCodeSearch">Tìm theo tên</label>
            <div>
                <input type="text" tabindex="1" id="SellOdd-txtBarCodeSearch" class="easyui-validatebox" style="width: 290px; height: 50px; font-size: 29px; text-transform: uppercase; text-align: center;" />
            </div>
        </div>
        <div style="margin-left: 15px;">
            <div>
                <label id="SellOdd-lblPartner">Nhân viên bán hàng</label>
                <select id="SellOdd-Partner" class="easyui-combobox" style="width: 200px;"></select>
            </div>
            <div style="margin-top: 5px;">
                <label id="SellOdd-lblWarehouse">Kho hàng</label>
                <select id="SellOdd-Warehouse" class="easyui-combobox" style="width: 200px;"></select>
            </div>
        </div>
        <div class="newrow fullrow">
            <table id="SellOdd-Grid">

            </table>
        </div>
       
        <div class="newrow fullrow">
            <div style="padding: 5px; border: 1px solid #ddd; clear: both;">
                <a href="javascript:void(0);" id="SellOdd-btnClear" class="easyui-linkbutton"><strong>F2</strong> Xóa trắng</a>
                <a href="javascript:void(0);" id="SellOdd-btnFind" class="easyui-linkbutton"><strong>F3</strong> Tìm thuốc</a>
                <a href="javascript:void(0);" id="SellOdd-btnCreate" class="easyui-linkbutton"><strong>F4</strong> Tạo phiếu</a>
                <a href="javascript:void(0);" id="SellOdd-btnPrint" class="easyui-linkbutton"><strong>F5</strong> In phiếu</a>
                <a href="javascript:void(0);" id="SellOdd-btnViewPrev" class="easyui-linkbutton"><strong>F6</strong> Đơn hàng trước</a>
                <a href="javascript:void(0);" id="SellOdd-btnViewNext" class="easyui-linkbutton"><strong>F7</strong> Đơn hàng sau</a>
                <a href="javascript:void(0);" id="SellOdd-btnInfo" class="easyui-linkbutton"><strong>F8</strong> Thông tin toa</a>
            </div>
        </div>
    </fieldset>
    <div id="SellOdd-MedicReceiptInfo-Dialog" class="easyui-dialog" title="Toa thuốc" data-options="top:100,modal:true,closed:true,iconCls:'icon-save'" style="width: 400px; padding: 10px;">
        <fieldset class="fsForm">
            <legend>Thông tin cơ sở KCB</legend>
            <div class="newrow">
                <label>Mã toa</label>
            </div>
            <div>
                <input type="text" />
            </div>
            <div class="newrow">
                <label>Ngày</label>
            </div>
            <div>
                <input class="easyui-datebox" style="width: 153px">
            </div>
            <div class="newrow">
                <label>Tên CSKCB</label>
            </div>
            <div>
                <input type="text" />
            </div>
            <div class="newrow">
                <label>Địa chỉ/Số ĐT</label>
            </div>
            <div>
                <input type="text" />
            </div>
            <div class="newrow">
                <label>Họ tên BS</label>
            </div>
            <div>
                <input type="text" />
            </div>
        </fieldset>
        <fieldset class="fsForm">
            <legend>Thông tin bệnh nhân</legend>
            <div class="newrow">
                <label id="Label2">Họ tên</label>
            </div>
            <div>
                <input type="text" />
            </div>
            <div class="newrow">
                <label>Năm sinh</label>
            </div>
            <div>
                <input class="easyui-datebox" style="width: 153px">
            </div>
            <div class="newrow">
                <label>Địa chỉ/Số ĐT</label>
            </div>
            <div>
                <input type="text" />
            </div>
        </fieldset>
        <fieldset class="fsForm fsAction">
            <div style="float: right;">
                <a href="#" class="easyui-linkbutton">OK</a>
                <a href="#" class="easyui-linkbutton">In toa thuốc</a>
            </div>
        </fieldset>
    </div>
</asp:Content>
