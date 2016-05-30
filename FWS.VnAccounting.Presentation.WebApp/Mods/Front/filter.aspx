<%@ Page Title="" Language="C#" MasterPageFile="~/Master/FwsCoreMain.master" AutoEventWireup="true" CodeBehind="filter.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Front.filter" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleCoreMainPlace" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCoreMainPlace" runat="server">
    <script type="text/javascript">
        $(function () {
            var OptionsController = {
                template: 'Mods/_Core/Filter',
                data: "{a:'-', b:'--'}",
                id: "Filter-Window",
                width: 500,
                height: 200,
                title: "Filter",
                rowID: '',
                callbackComplete: function (opts) {

                }
            };
            
            //FWS-Main-Filter
            $("#FWS-Main-Filter").click(function () {
                FWS.Web.CTemplateController.LoadPopup(OptionsController);    
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentCoreMainPlace" runat="server">
</asp:Content>
