<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Filter.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Core.Filter" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_Core/Js/CViewFilter.js") %>"></script>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/_Core/Js/CViewParams.js") %>"></script>
<link href="../Mods/_Core/Css/FWS.Filter.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
    //var _filter = new CViewFilter();
    $("#Filter-ListView").click(function () {
        $("#gbox_Filter_Grid").show();
    });
    $("#Filter-Description").click(function () {

    });
    $("#Filter-Display").click(function () {
        var xml = FWS.Filter.Dialog.GetPara();
        console.log(xml);
    });
</script>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<div class="border-layout">
    <fieldset class="border-layout-functions"><legend>Chức năng</legend>
        <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" id="Filter-Display">
            Display</a>
    </fieldset>
    <fieldset class="border-layout-search relative">
        <div class="border-layout-search-content">
            <div class="layout-table-columns">
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 20px;">
                        <li>
                            <label>List:</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Filter-ListView" />
                        </li>
                    </ul>
                </div>
                <div class="layout-table-column">
                    <ul class="layout-table-column-label" style="width: 60px;">
                        <li>
                            <label>Description:</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="Filter-Description" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </fieldset>
</div>
<div class="border-layout">
    <fieldset class="border-layout-list">
        <table id="Filter_Grid">
        </table>
    </fieldset>
    <fieldset class="border-layout-form">
        <div id="Filter_Dialog"></div>
    </fieldset>
</div>
