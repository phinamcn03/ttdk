<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FlowChart.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.FlowChart" %>
<div id="FLOWCHART_ItemsHolder" class="FlowChart"></div>
<script type="text/javascript">
data = {
    items: [
        //Center ----------------------------------------
        {
            code: 'FWS',            
            caption: 'FWS::Kế Toán Việt Nam',
            appURL: '',
            icon: '../Images/icon/fc/FWS1.png',
            drag: 0,
            x: fc_x0+2*fc_dx-fc_dx/2,
            y: fc_y0+2*fc_dy-fc_dy/2,
        },

        //Line 1 ----------------------------------------
        {
            code: 'ASSETS',            
            caption: 'Hàng hóa',
            appURL: 'Mods/Items/Item',
            icon: '../Images/icon/fc/Product.png',
            drag: 0,
            x: fc_x0,
            y: fc_y0,
        },
        {
            code: 'SALES',            
            caption: 'Bán hàng',
            appURL: 'Mods/AR/Order',
            icon: '../Images/icon/fc/Sales.png',
            drag: 0,
            x: fc_x0 + fc_dx,
            y: fc_y0,
        },        
        {
            code: 'CUSTOMER',
            caption: 'Khách hàng',
            appURL: 'Mods/Items/Customer',
            icon: '../Images/icon/fc/Customer.png',
            drag: 0,
            x: fc_x0+2*fc_dx,
            y: fc_y0,
        },
        {
            code: 'TAX',
            caption: 'Thuế',
            appURL: 'Mods/Items/Tax',
            icon: '../Images/icon/fc/Tax.png',
            drag: 0,
            x: fc_x0+3*fc_dx,
            y: fc_y0,
        },

        //Trái ----------------------------------------
        {
            code: 'EMPLOYEE',
            caption: 'Nhân viên',
            appURL: 'Mods/Items/Employee',
            icon: '../Images/icon/fc/Employee.png',
            drag: 0,
            x: fc_x0,
            y: fc_y0+fc_dy,
        },

        {
            code: 'PRICE',
            caption: 'Giá thành',
            appURL: '',
            icon: '../Images/icon/fc/Price.png',
            drag: 0,
            x: fc_x0,
            y: fc_y0+2*fc_dy,
        },

        //Phải ---------------------------------
        {
            code: 'BANK',
            caption: 'Ngân hàng',
            appURL: '',
            icon: '../Images/icon/fc/Bank.png',
            drag: 0,
            x: fc_x0+3*fc_dx,
            y: fc_y0+fc_dy,
        },
        {
            code: 'CASH',
            caption: 'Tiền tệ',
            appURL: 'Mods/Items/Currency',
            icon: '../Images/icon/fc/Money.png',
            drag: 0,
            x: fc_x0+3*fc_dx,
            y: fc_y0+2*fc_dy,
        },

        //Line 4 -----------------------------------
        {
            code: 'STOCK',
            caption: 'Kho',
            appURL: 'Mods/Items/Stock',
            icon: '../Images/icon/fc/Stock.png',
            drag: 0,
            x: fc_x0,
            y: fc_y0+3*fc_dy,
        },
        {
            code: 'PURCHASE',
            caption: 'Mua hàng',
            appURL: 'Mods/AP/Order',
            icon: '../Images/icon/fc/Purchase.png',
            drag: 0,
            x: fc_x0+fc_dx,
            y: fc_y0+3*fc_dy,
        },
        {
            code: 'VENDOR',
            caption: 'Nhà cung cấp',
            appURL: 'Mods/Items/Vendor',
            icon: '../Images/icon/fc/Vendor.png',
            x: fc_x0+2*fc_dx,
            y: fc_y0+3*fc_dy,
        },
        {
            code: 'REPORT',
            caption: 'Báo cáo tổng hợp',
            appURL: '',
            icon: '../Images/icon/fc/Report1.png',
            x: fc_x0+3*fc_dx,
            y: fc_y0+3*fc_dy,
        },
    ],
    connections: [
        {
            from: 'FWS',
            to: 'EMPLOYEE',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'FWS',
            to: 'PRICE',
            color: '#aaa',
            arrowEnd: 1
        },

        {
            from: 'FWS',
            to: 'BANK',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'FWS',
            to: 'CASH',
            color: '#aaa',
            arrowEnd: 1
        },

        {
            from: 'FWS',
            to: 'SALES',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'FWS',
            to: 'CUSTOMER',
            color: '#aaa',
            arrowEnd: 1
        },

        {
            from: 'FWS',
            to: 'VENDOR',
            color: '#aaa',
            arrowEnd: 1
        },
        {
            from: 'FWS',
            to: 'PURCHASE',
            color: '#aaa',
            arrowEnd: 1
        }
    ]
};
</script>