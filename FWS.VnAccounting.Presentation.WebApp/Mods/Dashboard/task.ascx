<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="task.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Dashboard.task" %>
<%@ Register Src="../_core.hst/Grid.ascx" TagName="Grid" TagPrefix="uc1" %>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Dashboard/Js/Mods.Db.Task.js") %>"></script>
<iframe class="vFrmHst" id="hstgrid-task-content" style="width: 100%; height: 100%;" scrolling="no" frameborder="0" src="../Mods/_core.hst/PGrid.aspx"></iframe>
