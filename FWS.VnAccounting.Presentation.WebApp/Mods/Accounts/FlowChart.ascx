<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FlowChart.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.FlowChart" %>
<div id="FLOWCHART_Accounts" class="FlowChart"></div>
<script type="text/javascript">
data = {
    items: [
        //Danh mục chính ---------------------------------
        {
            code: 'USERINFO',
            caption: 'Thông tin cá nhân',
            appURL: 'Mods/Accounts/Login',
            icon: '../Images/icon/fc/UserInfo.png',
            x: fc_x0,
            y: fc_y0,
        },
        {
            code: 'CONFIG',
            caption: 'Cấu hình',
            appURL: 'Mods/Accounts/Config',
            icon: '../Images/icon/fc/Config.png',
            x: fc_x0,
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
