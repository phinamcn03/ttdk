<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FlowChart.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.FlowChart" %>
<div id="FLOWCHART_InvHolder" class="FlowChart">
</div>
<script type="text/javascript">
data = {
    items: [
        //Danh mục chính ---------------------------------
        {
            code: 'NK',
            caption: 'Nhập kho',
            appURL: 'Mods/Inventory/InwardStock',
            icon: '../Images/icon/fc/InStock.png',
            x: fc_x0,
            y: fc_y0,
        },
        {
            code: 'XK',
            caption: 'Xuất kho',
            appURL: 'Mods/Inventory/Outward',
            icon: '../Images/icon/fc/OutStock.png',
            x: fc_x0,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'CK',
            caption: 'Chuyển kho',
            appURL: 'Mods/Inventory/TranferStock',
            icon: '../Images/icon/fc/Transfer.png',
            x: fc_x0,
            y: fc_y0 + 2 * fc_dy,
        },
        {
            code: 'TGXK',
            caption: 'Tính giá xuất kho',
            appURL: '',
            icon: '../Images/icon/fc/Adjust.png',
            drag: 1,
            x: fc_x0 + fc_dx,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'BC',
            caption: 'Báo cáo tồn kho',
            appURL: '',
            icon: '../Images/icon/fc/Report.png',
            drag: 1,
            x: fc_x0 + 2 * fc_dx,
            y: fc_y0 + fc_dy,
        },

        //Danh mục trái ---------------------------------
        {
            code: 'THUE',
            caption: 'Thuế',
            appURL: 'Mods/Items/Tax',
            icon: '../Images/icon/fc/Tax.png',
            drag: 0,
            x: fc_x0 + 3 * fc_dx,
            y: fc_y0,
        },
        {
            code: 'NGANHANG',
            caption: 'Ngân hàng',
            appURL: '',
            icon: '../Images/icon/fc/Bank.png',
            drag: 0,
            x: fc_x0 + 3 * fc_dx,
            y: fc_y0 + fc_dy,
        },
        {
            code: 'TIEN',
            caption: 'Tiền tệ',
            appURL: 'Mods/Items/Currency',
            icon: '../Images/icon/fc/Money.png',
            drag: 0,
            x: fc_x0 + 3 * fc_dx,
            y: fc_y0 + 2 * fc_dy,
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
            from: 'CK',
            to: 'TGXK',
            color: '#aaa',
        },
        {
            from: 'NK',
            to: 'TGXK',
            color: '#aaa'
        },
        {
            from: 'XK',
            to: 'TGXK',
            arrowEnd: 1
        },

        {
            from: 'TGXK',
            to: 'BC',
            color: '#f00',
            arrowEnd: 1
        }
    ]
};
</script>
