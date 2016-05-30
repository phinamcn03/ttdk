<%@ Page Title="" Language="C#" MasterPageFile="~/Master/FwsCoreMain.master" AutoEventWireup="true" CodeBehind="Phanquyendulieu.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.Phanquyendulieu" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleCoreMainPlace" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCoreMainPlace" runat="server">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/default/easyui.css">
    <script type="text/javascript">
        $(document).ready(function () {
            $('#test').treegrid({
                url: '../Mods/_Demo/Js/treegrid_dulieu.aspx',
                width: 525,
                height: 320,
                title: "Phân quyền dữ liệu",
                treeField: 'name',
                rownumbers: true,
                idField: "name",
                treeField: "name",
                columns: [[
                            { title: '*Bảng dữ liệu', field: 'name', width: 340 },
                            { field: 'allowRead', title: '*Xem', width: 40, align: 'center' },
                            { field: 'allowAdd', title: '*Thêm', width: 40, align: 'center' },
                            { field: 'allowMod', title: '*Xóa', width: 40, align: 'center' },
                            { field: 'allowDel', title: '*Sửa', width: 40, align: 'center' }
                        ]]
            });

            $('#Table1').treegrid({
                url: '../Mods/_Demo/Js/treegrid_truongdulieu.aspx',
                width: 525,
                height: 320,
                title: "Phân quyền trường dữ liệu",
                treeField: 'name',
                rownumbers: true,
                idField: "name",
                treeField: "name",
                columns: [[
                            { title: '*Trường', field: 'name', width: 340 },
                            { field: 'allowRead', title: '*Xem', width: 40, align: 'center' },
                            { field: 'allowMod', title: '*Sửa', width: 40, align: 'center' }
                        ]]
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentCoreMainPlace" runat="server">
    <div style="padding: 15px">
        <div style="float:left;padding: 20px">
            <table id="test" class="easyui-treegrid">
            </table>
        </div>
        <div style="padding: 20px">
            <table id="Table1" class="easyui-treegrid">
            </table>
        </div>
    </div>
</asp:Content>
