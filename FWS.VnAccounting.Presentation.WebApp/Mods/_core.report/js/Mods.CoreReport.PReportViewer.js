if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.CoreReport = {};

Mods.CoreReport.PReportViewer = {
    viewport: {
        height: '200%'
    },
    init: function () {
        var $win = $(window);
        this.viewport.height = $win.height() + 'px;';
        $('#ui-report-preview').height(this.viewport.height);
    },
    view: function (options) {
        var obj = {
            ExportTo: 'pdf',
            InputValue: options.filterXml
        };
        if (options.success)
            obj.success = options.success;
        $('#ui-report-preview').html('<iframe id="ifrm-ui-report-preview" style="width:100%;height:' + Mods.CoreReport.PReportViewer.viewport.height + '" scrolling="no" frameborder="0" src="../../Mods/Dashboard/Report.aspx"></iframe>');
        $.callFrameFunction('#ifrm-ui-report-preview', 'fnPostToHandler', obj);
    }
};
$(function () {
    //console.log('[M]==> Mods.CoreReport.PReportViewer.$');
    Mods.CoreReport.PReportViewer.init();
});


function filterData(options) {
    //console.log('[M]==> Mods.CoreReport.PReportViewer.filterData', options);
    Mods.CoreReport.PReportViewer.view(options);
};