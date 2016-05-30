if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.CoreReport = {};

Mods.CoreReport.ReportP = {
    init: function (opts) {
        //console.log('[M]==> Mods.CoreReport.ReportP.init', opts);
        $.callFrameFunction('#frmReportPopup', 'filterData', opts);
    }
};

/*
//demo call
var obj = {filterXml:'<RequestParams KHTX="697" ToDate="2013-09-10" FromDate="2013-08-10" ViewID="34" ViewerID="12" Function=""  />'};
FWS.Web.CTemplateController.LoadPopup({
    template: 'Mods/_Core.report/ReportP',
    data: "{a:1}",
    id: "Report-Window",
    width: 1000,
    height: 550,
    title: "Report",
    rowID: '',
    callbackComplete: function (opts) {
        Mods.CoreReport.ReportP.init(obj);
    }
});
*/