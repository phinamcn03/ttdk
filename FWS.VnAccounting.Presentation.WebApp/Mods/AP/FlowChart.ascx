<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FlowChart.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AP.FlowChart" %>
<div id="FLOWCHART_AP" class="FlowChart">
</div>
<script type="text/javascript">
data = {
    items: [
        //Danh mục chính ---------------------------------
        {
            code: 'ORDER',
            caption: 'Đơn mua hàng',
            appURL: 'Mods/AP/Order',
            icon: '../Images/icon/fc/Orders.png',
            x: fc_x0,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'BILL',
            caption: 'Hóa đơn mua hàng',
            appURL: 'Mods/AP/Invoice',
            icon: '../Images/icon/fc/Bill.png',
            x: fc_x0 + fc_dx,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'OUTWARD',
            caption: 'Phiếu nhập kho',
            appURL: 'Mods/Inventory/InwardStock',
            icon: '../Images/icon/fc/InWard.png',
            x: fc_x0 + 2 * fc_dx,
            y: fc_x0,
        },
        {
            code: 'PAYMENT',
            caption: 'Trả tiền nhà cung cấp',
            appURL: '',
            icon: '../Images/icon/fc/Payment.png',
            x: fc_x0 + 2 * fc_dx,
            y: fc_y0 + 2 * fc_dy,
        },
        {
            code: 'LEDGER',
            caption: 'Sổ cái',
            appURL: '',
            icon: '../Images/icon/fc/Ledger.png',
            x: fc_x0 + 3 * fc_dx,
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

        {
            code: 'CHECK',
            caption: 'Xác nhận/Phê duyện',
            appURL: '',
            icon: '../Images/icon/fc/DocApprove.png',
            drag: 1,
            x: fc_x0 + fc_dx/2,
            y: fc_y0 ,
        },
        {
            code: 'T1',
            caption: '',
            appURL: '',
            w: 1,
            y: 1,
            x: fc_x0 + fc_dx/2 + fc_w/2,
            y: fc_y0 + 3*fc_dy/2 - 7,
        },
    ],
    connections: [
        {
            from: 'CHECK',
            to: 'T1',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'ORDER',
            to: 'BILL',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'BILL',
            to: 'OUTWARD',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'BILL',
            to: 'PAYMENT',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'BILL',
            to: 'LEDGER',
            color: '#aaa',
            arrowEnd: 1
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
