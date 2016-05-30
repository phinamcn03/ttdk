<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ReportViewer.ascx.cs"
    Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ReportDoc.ReportViewer" %>
<script type="text/javascript">
    reportViewer = {
        init: function () {
            var filterID = '', contentId = '';
            if (FWS.Web.CTemplateController.CurrentContentOptions != null) {
                filterID = FWS.Web.CTemplateController.CurrentContentOptions.filterID;
                contentId = FWS.Web.CTemplateController.CurrentContentOptions.id;
            }
            this.loadControl(contentId);
        },

        loadControl: function (contentId) {
            var html = $.string.Format('<iframe class="vReport" id="rptViewer-{0}" style="width: 100%; height: 100%;" scrolling="no" frameborder="0" src="../Mods/_core.report/PReportViewer.aspx"></iframe>', contentId);
            $('#vReport-Content').after(html).remove();
        }
    };
    $(function () {
        reportViewer.init();
    });
</script>
<div id="vReport-Content">
    Loading...</div>
