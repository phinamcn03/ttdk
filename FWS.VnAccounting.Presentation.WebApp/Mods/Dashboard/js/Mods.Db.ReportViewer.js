if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.Db = {};

Mods.Db.ReportViewer = {
    init: function () {
        var ipv = $.GetURL('InputValue') || '';
        if (ipv != '') {
            ipv = decodeURIComponent(ipv);
            ipv = $.HtmlDecode(ipv);            
            var obj = { filterXml: ipv };
            Mods.Db.ReportViewer.view(obj);
        }
    },
    view: function (options) {
        var obj = {
            ExportTo: 'pdf',
            InputValue: options.filterXml
        };
        if (options.success)
            obj.success = options.success;
        $('#ui-report-preview').html('<iframe id="ifrm-ui-report-preview" style="width:100%;height:100%;" scrolling="no" frameborder="0" src="../../Mods/Dashboard/Report.aspx"></iframe>');
        $.callFrameFunction('#ifrm-ui-report-preview', 'fnPostToHandler', obj);
    }
};
$(function () {
    Mods.Db.ReportViewer.init();
});

function filterData(options) {
    Mods.Db.ReportViewer.view(options);
};