<%@ Page Title="" Language="C#" MasterPageFile="~/Master/FwsCoreMain.master" AutoEventWireup="true" CodeBehind="TreeGridV2.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.TreeGridV2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleCoreMainPlace" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCoreMainPlace" runat="server">

<script type="text/javascript">

    $(function () {
        $('.easyui-linkbutton').linkbutton();
        var mydata = { mydata: [
            { Code: "ST-0001", StockName: "Kho Việt Nam", ParentName: "", Description: "", level: "0", parent: "", isLeaf: false, expanded: false, loaded: true },
            { Code: "ST-0002", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", level: "1", parent: "1", isLeaf: true, expanded: false, loaded: true },
            { Code: "ST-0003", StockName: "Kho Hà Nội", ParentName: "Kho Việt Nam", Description: "", level: "1", parent: "1", isLeaf: true, expanded: false, loaded: true },
            { Code: "ST-0004", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", level: "0", parent: "", isLeaf: false, expanded: false, loaded: true },
            { Code: "ST-0005", StockName: "Kho Hải Phòng", ParentName: "Kho Việt Nam", Description: "", level: "1", parent: "2", isLeaf: true, expanded: false, loaded: true },
            { Code: "ST-0006", StockName: "Kho Đà Nẵng", ParentName: "Kho Việt Nam", Description: "", level: "1", parent: "2", isLeaf: true, expanded: false, loaded: true }
         ]
        };
        jQuery("#list9").jqGrid({
            datatype1: function (postdata) {
                console.log(postdata);
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/ChartAccountService.asmx/GetAccountList',
                    data: { initParentId: 0 },  // For empty input data use "{}",
                    type: "POST",
                    complete: function (retdata, stat) {
                        if (stat == "success") {
                            var thegrid = jQuery("#list9")[0];
                            var bindData = $(retdata.responseText).text();
                            thegrid.addJSONData(JSON.parse(bindData));

                        }
                    }
                });
            },
            datatype: "xml",
            url: '../Mods/Items/Service/ChartAccountService.asmx/GetAccountList?initParentId=&nodeid=',
            mtype: "GET",
            loadComplete: function (data) {
                var thegrid = jQuery("#list9")[0];
                var bindData = $(data).text();
                thegrid.addJSONData(JSON.parse(bindData));
            },
            height: "270",
            loadui: "disable",
            colNames: ['Code', 'Name', 'Parent Name'],
            colModel: [
                { name: 'Code', index: 'id', width: 100, align: "center", editable: true },
                { name: 'Name', index: 'invdate', width: 200, editable: true },
                { name: 'parent', index: 'name', width: 200, editable: true }
            ],
            jsonReader: {
                repeatitems: false,
                root: "invdata"
            },
            treeGrid: true,
            treeGridModel: "adjacency",
            treeIcons: { leaf: 'ui-icon-document-b' }
        });
        /*jQuery("#list9").jqGrid({
        datastr: mydata,
        datatype: "jsonstring",
        height: "auto",
        loadui: "disable",
        colNames: ['Code', 'Stock Name', 'Parent Name'],
        colModel: [
        { name: 'Code', index: 'id', width: 100, align: "center", editable: true },
        { name: 'StockName', index: 'invdate', width: 200, editable: true },
        { name: 'ParentName', index: 'name', width: 200, editable: true }
        ],
        jsonReader: {                repeatitems: false,                root: "mydata"            },
        treeGrid: true,
        treeGridModel: "adjacency",
        treeIcons: { leaf: 'ui-icon-document-b' }
        });*/
    });
</script>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentCoreMainPlace" runat="server">

<table id="list9">
</table>
<div id="pager9"></div>

</asp:Content>
