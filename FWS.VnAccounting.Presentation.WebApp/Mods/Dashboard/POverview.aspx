<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="POverview.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Dashboard.POverview" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dashboard Warehouse</title>
    <!-- AmChart -->
    <script src="../../Mods/_core.chart/amchart/amcharts.js" type="text/javascript"></script>
    
    <script src="../../Mods/_core.hst/Js/jquery.core.js" type="text/javascript"></script>
    <script src="../../Js/jq/jquery.extend.js" type="text/javascript"></script>
    
    <script type="text/javascript" src="../../Js/jq.plugin/jquery.splitter.js"></script>
    <script src="../../Mods/_Core/Js/FWS.Web.CCSV.js"></script>
    <!-- Page script -->
    <link href="css/Mods.Db.Overview.css" rel="stylesheet" type="text/css" />
    <%--<script src="js/Mods.Db.Overview.js" type="text/javascript"></script>--%>
    <script src="js/Mods.Db.Chart.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:Literal runat="server" ID="ltrScriptClient" EnableViewState="false"></asp:Literal>
    <ul class="vtnt-db-container">
        <li>
            <div class="vtnt-db-item-title">
                Nhập xuất tồn theo kho</div>
            <div class="vtnt-db-item" id="chart_NhapXuat" />
        </li>
        <li>
            <div class="vtnt-db-item-title">
                Tồn kho sản phẩm #Panadol</div>
            <div class="vtnt-db-item" id="chart_TonKho_SanPham" />
        </li>
        <li>
            <div class="vtnt-db-item-title">
                Biến động giá ~7%</div>
            <div class="vtnt-db-item" id="chart_BienDongGia" />
        </li>
        <li>
            <div class="vtnt-db-item-title">
                Tồn kho tối thiểu</div>
            <div class="vtnt-db-item" id="chart_TonKho" />
        </li>
        <li class="full">
            <div class="vtnt-db-item-title">
                Tồn kho tối thiểu</div>
            <div class="vtnt-db-item" id="hstInvAlert">
                <iframe frameborder="0" width="100%" height="100%" src="../_core.hst/PGrid.aspx?defFunction=InventoryAlertMinAvaiable">
                </iframe>
            </div>
        </li>
        <li class="full">
            <div class="vtnt-db-item-title">
                Hàng chậm luân chuyển</div>
            <div class="vtnt-db-item" id="htsInStock">
                <iframe frameborder="0" width="100%" height="100%" src="../_core.hst/PGrid.aspx?defFunction=InventorySlow">
                </iframe>
            </div>
        </li>
        <li style="display: none">
            <div class="vtnt-db-item-title">
                Thống kê xuất kho</div>
            <div class="vtnt-db-item" id="htsOutStock" />
        </li>
        <li style="display: none">
            <div class="vtnt-db-item-title">
                Doanh thu</div>
            <div class="vtnt-db-item" id="chart_DoanhThu" />
        </li>
        <li style="display: none">
            <div class="vtnt-db-item-title">
                Statistics</div>
            <div class="vtnt-db-item" id="chart_Statistics" />
        </li>
    </ul>
    </form>
</body>
</html>
