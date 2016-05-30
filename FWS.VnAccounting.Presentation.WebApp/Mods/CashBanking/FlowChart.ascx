<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FlowChart.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.CashBanking.FlowChart" %>
<div id="FLOWCHART_CashBanking" class="FlowChart"></div>
<script type="text/javascript">
data = {
    items: [
        //Danh mục chính ---------------------------------
        {
            code: 'RECEIPT',
            caption: 'Phiếu thu',
            appURL: '',
            icon: '../Images/icon/fc/Receipt.png',
            x: fc_x0,
            y: fc_y0,
        },
        {
            code: 'PAYMENT',
            caption: 'Phiếu chi',
            appURL: '',
            icon: '../Images/icon/fc/Payment.png',
            x: fc_x0,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'LEDGER',
            caption: 'Sổ cái',
            appURL: '',
            icon: '../Images/icon/fc/Ledger.png',
            x: fc_x0 + fc_dx,
            y: fc_y0 + fc_dy,
        },

        //Danh mục dưới -----------------------------------
        {
            code: 'KHO',
            caption: 'Kho',
            appURL: 'Mods/Items/Stock',
            icon: '../Images/icon/fc/Stock.png',
            drag: 0,
            x: fc_x0,
            y: fc_y0 + 3 * fc_dy,
        },
        {
            code: 'NHANVIEN',
            caption: 'Nhân viên',
            appURL: 'Mods/Items/Employee',
            icon: '../Images/icon/fc/Employee.png',
            drag: 0,
            x: fc_x0 + fc_dx,
            y: fc_y0 + 3 * fc_dy,
        },
        {
            code: 'NHACC',
            caption: 'Nhà cung cấp',
            appURL: 'Mods/Items/Vendor',
            icon: '../Images/icon/fc/Vendor.png',
            x: fc_x0 + 2 * fc_dx,
            y: fc_y0 + 3 * fc_dy,
        },
        {
            code: 'BCTH',
            caption: 'Báo cáo tổng hợp',
            appURL: '',
            icon: '../Images/icon/fc/Report1.png',
            x: fc_x0 + 3 * fc_dx,
            y: fc_y0 + 3 * fc_dy,
        },
    ],
    connections: [
        {
            from: 'RECEIPT',
            to: 'LEDGER',
            color: '#aaa',
        },
        {
            from: 'PAYMENT',
            to: 'LEDGER',
            color: '#aaa',
            arrowEnd: 1
        }
    ]
};
</script>
