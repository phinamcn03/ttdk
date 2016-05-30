<%@ Page Title="" Language="C#" MasterPageFile="~/Master/FwsCoreMain.master" AutoEventWireup="true"
    CodeBehind="PhanQuyenSuDung.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.PhanQuyenSuDung" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleCoreMainPlace" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCoreMainPlace" runat="server">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/default/easyui.css">
    <script type="text/javascript">
        $(document).ready(function () {
            $('#test').treegrid({
                url: '../Mods/_Demo/Js/treegrid_data.aspx',
                width: 525,
                height: 320,
                title: "Phân quyền sử dụng",
                treeField: 'name',
                rownumbers: true,
                idField: "id",
                treeField: "name",
                columns: [[
                            { title: 'Chức năng', field: 'name', width: 380 },
                            { field: 'allow', title: 'Được sử dụng', width: 90, align: 'center' }
                        ]]
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentCoreMainPlace" runat="server">
    <div style="width:530px;padding: 15px">
        <div style="float: left">
            <label>
                Chọn người sử dụng</label>
            <select>
                <option label="ketoan01" value="1"></option>
                <option label="ketoan02" value="1"></option>
            </select>
        </div>
        <div style="float: right">
            <input type="button" value="Xem phân quyền" />
            <input type="button" value="Cập nhật" />
            <input type="button" value="Kết thúc" />
        </div>
        <div style="clear:both; padding-top: 20px">
            <table id="test" class="easyui-treegrid">
            </table>
        </div>
    </div>
</asp:Content>
