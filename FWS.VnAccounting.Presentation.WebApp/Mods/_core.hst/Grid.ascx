<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Grid.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._core.hst.Grid" %>
<!-- Handsontable -->
<link href="dist/jquery.handsontable.full.css" rel="stylesheet" type="text/css" />
<link href="css/handsontable.core.css" rel="stylesheet" type="text/css" />
<link href="css/Mods.CoreFilter.Grid.css" rel="stylesheet" type="text/css" />

<!-- IMPORTANT: jquery 1.9.1 for hst -->
<script type="text/javascript" src="js/jquery.core.js"></script>
<script type="text/javascript" src="dist/jquery.handsontable.full.js"></script>

<script type="text/javascript" src="../../Js/jq/jquery.extend.js"></script>
<script type="text/javascript" src="../../Js/jq.plugin/jquery.glob.js"></script>
<script type="text/javascript" src="../../Js/jq.plugin/jquery.glob.all.js"></script>
<script type="text/javascript" src="../../Js/jq.plugin/jquery.splitter.js"></script>
<script type="text/javascript" src="../../Js/jq.plugin/jquery.json2xml.js"></script>

<script type="text/javascript" src="../../Mods/_Core/Js/FWS.Web.CCSV.js"></script>
<script type="text/javascript" src="../_Global/Js/FWS.Web.COverlay.js"></script>
<script type="text/javascript" src="../_Core/Js/FWS.System.IO.js"></script>

<script type="text/javascript" src="js/handsontable.core.js"></script>         
<script type="text/javascript" src="js/Mods.Core.Hst.Grid.js"></script>
<script src="js/Mods.Core.Hst.GridUc.js" type="text/javascript"></script>

<style type="text/css">
    .htsAction
    {
        display: none;
        position: absolute;
        width: 16px;
        height: 16px;
        top: 5px;
        left: 10px;
        z-index: 9999;
        background-image: url(../../images/icon/core/save.png);
        background-repeat: no-repeat;
        cursor: pointer;
    }
</style>
<div id='GridAcion' class='htsAction' onclick='saveGridData()'>
</div>
<asp:Literal runat="server" ID="ltrScriptClient" EnableViewState="false"></asp:Literal>
<div class="vtnt-grid-item" id="hstInstance" style="overflow: scroll;" />
