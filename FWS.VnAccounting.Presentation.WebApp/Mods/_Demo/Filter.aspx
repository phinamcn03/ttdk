<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Filter.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.Filter" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="~/Css/Themes/jquery-easy-ui/gray/easyui.css" rel="stylesheet" type="text/css" />
    <link href="~/Css/Themes/jquery-easy-ui/icon.css" rel="stylesheet" type="text/css" />
    <link href="~/Css/Themes/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="~/Css/Themes/JGrid/themes/ui.jqgrid.css" rel="stylesheet" type="text/css" />
    <link href="~/Mods/_Global/Css/FWS.Web.COverlay.css" rel="stylesheet" type="text/css" />  
    <link href="~/Css/Jquery/autocomplete/jquery.autocomplete.css" rel="stylesheet" type="text/css" />  
    <link href="~/Css/Core/core.css" rel="stylesheet" type="text/css" />
    <!-- Jquery Core -->
    <script src="../../Js/jq/jquery.min.lastest.js" type="text/javascript"></script>
    <script src="../../Js/jq/jquery.extend.js" type="text/javascript"></script>
    <!-- Jquery Grid Plugin -->
    <script src="../../Js/jq.plugin/jquery.jqGrid.locale-en.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.jqGrid.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.hotkeys.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.autocomplete.js" type="text/javascript"></script>
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

    <script src="../_Core/Js/CViewFilter.js" type="text/javascript"></script>
    <script src="../_Core/Js/CViewParams.js" type="text/javascript"></script>
    <script src="../_Core/Js/FWS.System.Control.js" type="text/javascript"></script>
    <script src="../_Core/Js/FWS.System.IO.js" type="text/javascript"></script>
    <script type="text/javascript">
        var _filter = new CViewFilter();
        function onClick() {
            $("#gbox_filter").show();
        };
        function onDesClick() {
            console.log("aa", FWS_Filter.GetViewParams());
        };
        function GetPara() {
            var xml = _filter.GetPara();
            console.log(xml);
            //console.log("aa", FWS_Filter.GetViewParams());
        };
        $(function () {
            var options = { PageCode: "REPORT" };
            _filter.Create(options);
            $("#gbox_filter").css("");
            $("#gbox_filter").hide();
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
    <input type="button" id="btnDisplay" value="DISPLAY" onclick="GetPara()" />
    <input id="idListView" style="float:left;" onclick="onClick();" />
    <input id="Filter-Description" onclick="onDesClick();" style="float:left;width: 100px;height: 30px" />
    <table id="filter">
        
    </table>
    <div id="filterDialog">
        
    </div>
    </form>
</body>
</html>
