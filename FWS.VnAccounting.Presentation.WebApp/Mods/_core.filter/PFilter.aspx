<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PFilter.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._core.filter.PFilter" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Thông số lọc dữ liệu</title>
    <!-- jq -->
    <script src="../../Js/jq/jquery.min.1.9.1.js" type="text/javascript"></script>
    <script src="../../Js/jq/jquery.extend.js" type="text/javascript"></script>
    <!-- jq.ui -->
    <link href="../../Css/Themes/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../../Js/jq/jquery-ui.min.1.10.2.js"></script>
    <link href="../../Css/Themes/jquery-ui/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="../../Css/Jquery/token-input.css" rel="stylesheet" type="text/css" />
    <!-- jq.plugin-->
    <script src="../../Js/jq.plugin/jquery.glob.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.glob.all.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.splitter.js" type="text/javascript"></script>
    <!-- jq.widgets-->
    <link href="../../Js/jq.widgets/styles/jqx.ui-redmond.css" rel="stylesheet" type="text/css" />
    <link href="../../Js/jq.widgets/styles/jqx.base.css" rel="stylesheet" type="text/css" />
    <script src="../../Js/jq.widgets/jqx-all.js" type="text/javascript"></script>
    <script src="../../Js/jq.widgets/globalization/jquery.global.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.slimScroll.js" type="text/javascript"></script>
    <script src="../../Js/jq.plugin/jquery.tokeninput.js" type="text/javascript"></script>
    <!-- filter.core -->
    <link href="../../Css.filter/Core/Core.css" rel="stylesheet" />
    <link href="../../Css.filter/core/Form.css" rel="stylesheet" type="text/css" />
    <script src="../../Js/core.filter/CXml.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CCSV.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CTabs.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CDialog.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CFormat.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CControl.js" type="text/javascript"></script>
    <script src="../../Js/core.filter/CFilter.js" type="text/javascript"></script>
    <link href="css/Mods.CoreFilter.PFilter.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        //Filter ----------------------------------------------------------------------------
        var curFilterID = 0;
        var fID = $.QueryString('filterID') || 1;
        var vfilter = null, vreportPreview = null;
        function filterData() {
            var info = vfilter.getFilterData();
            //Raise event to main page & pass information
            if (typeof parent.FWS != 'undefined' &&
                typeof parent.FWS.Web != 'undefined' &&
                typeof parent.FWS.Web.Filter != 'undefined' &&
                typeof parent.FWS.Web.Filter.exec == 'function') {
                filterClose();

                if (vfilter.FilterView.FilterViewData[0].ViewerType == 'REPORT') {
                    var frame = '<iframe id="ifrm-ui-report-preview-popup" style="width:100%;height:100%;" scrolling="no" frameborder="0" src="../Mods/_core.report/PReportViewer.aspx"></iframe>',
                        title = vfilter.FilterView.FilterViewData[0].Name;
                    if (vreportPreview == null) {
                        vreportPreview = new parent.FWS.Web.Dialog.Popup({
                            title: 'Preview:: ' + title,
                            content: frame,
                            callback: function () {
                                parent.$.callFrameFunction('#ifrm-ui-report-preview-popup', 'filterData', info);
                            }
                        });
                    }
                    else {
                        vreportPreview.load({
                            title: 'Preview:: ' + title,
                            callback: function () {
                                parent.$.callFrameFunction('#ifrm-ui-report-preview-popup', 'filterData', info);
                            }
                        });
                    }
                }
                else {
                    parent.FWS.Web.Filter.exec(info);
                }
            }
        };
        function filterShow(options) {
            if (curFilterID != options.filterID) {
                curFilterID = options.filterID;
                vfilter = new CFilter({ FilterID: curFilterID, Type: '2' });
                vfilter.init({ ContentID: '#vtnt_filter_container' });
            }
            else {
                vfilter.reset();
            }
        };
        function filterClose() {
            if (parent && $.isFunction(parent.fnCloseFilter))
                parent.fnCloseFilter();
        };

        function filterOpen() {
            vfilter.loadFilterDialog();
        };

        function getFilterData() {
            if (vfilter != null) {
                return vfilter.getFilterData();
            }
            return;
        };
        //Filter default init -----------------------------------------------------------------
        $(function () {
            filterShow({ filterID: fID });
        });

    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="vtnt_container">
        <div id='vtnt_filter_container' style="height: 398px;">
        </div>
        <div class='vtnt_filter_action'>
            <div class='vtnt_filter_action_item' onclick='filterClose()'>
                Thoát</div>
            <div class='vtnt_filter_action_item' onclick='filterData()'>
                Xem</div>
        </div>
    </div>
    </form>
</body>
</html>
