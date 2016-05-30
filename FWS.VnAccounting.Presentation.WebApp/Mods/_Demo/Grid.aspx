<%@ Page Title="" Language="C#"  AutoEventWireup="true" CodeBehind="Grid.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.Grid" %>
<%@ Register src="FunctionList.ascx" tagname="FunctionList" tagprefix="uc1" %>

    
   
<html>

<head>
    <link href="../../Css/Themes/jquery-easy-ui/darkred/easyui.css" rel="stylesheet" type="text/css" />
    <link href="../../Css/Themes/jquery-easy-ui/icon.css" rel="stylesheet" type="text/css" />
    <link href="../../Css/Themes/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../../Css/Themes/JGrid/themes/ui.jqgrid.css" rel="stylesheet" type="text/css" />
    <link href="../../Mods/_Global/Css/FWS.Web.COverlay.css" rel="stylesheet" type="text/css" />    
    <link href="../../Css/Core/core.css" rel="stylesheet" type="text/css" />

    <script src="../../Js/jq/jquery.min.lastest.js" type="text/javascript"></script>
    <script src="../../Js/jq/jquery.extend.js" type="text/javascript"></script>
    <!-- Jquery Grid Plugin -->
    <script src="../../Js/jq.plugin/jquery.jqGrid.locale-en.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.jqGrid.js" type="text/javascript"></script>
    <!-- Jquery Extend Core -->
    <script src="../../Mods/_Global/Js/FWS.Web.COverlay.js" type="text/javascript"></script>
    <script src="../../Mods/_Core/Js/FWS.System.IO.js" type="text/javascript"></script>
    <!-- Jquery Extend Plugin -->
    <script src="../../Js/jq.plugin/jquery.glob.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.glob.all.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.easy.ui.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.splitter.js" type="text/javascript"></script>    
    <!-- JS manual -->
    <script src="../../Mods/_Core/Js/FWS.Web.CCSV.js" type="text/javascript"></script>
    
    <script src="../../Mods/_Core/Js/VnAccounting.Grid.js" type="text/javascript"></script>
    <script src="../../Mods/_Core/Js/FWS.System.Core.js" type="text/javascript"></script>
    <script src="Js/Mods.Items.DemoTax.js" type="text/javascript"></script>

</head>
<body>
    <asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
    <table id="Tax_Grid">
    </table>
    <div id="Tax_GridPage">
    </div>
</body>
</html>