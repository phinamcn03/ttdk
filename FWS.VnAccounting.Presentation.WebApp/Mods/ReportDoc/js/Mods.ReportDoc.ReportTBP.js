if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.ReportDoc = {};

Mods.ReportDoc.ReportTBP = {
    init: function () {
        var filterID = '';
        if (FWS.Web.CTemplateController.CurrentContentOptions != null) {
            filterID = FWS.Web.CTemplateController.CurrentContentOptions.filterID;
        }
        //console.log('[M]==> Mods.ReportDoc.ReportTBP.init', filterID);
        this.loadAuto(filterID);
    },

    loadAuto: function (filterID) {
        if (filterID == "") filterID = '5';
        var vfilter = new CFilter({ FilterID: filterID });
        //console.log('[M]==> Mods.ReportDoc.ReportTBP.loadAuto', vfilter);
        vfilter.autorun({
            success: function (data) {
                if (data.data && data.data.AutoRun == "1") {
                    data.filterXml = data.filterXml.replace("<RequestParams ", "<RequestParams Context='AutoRun' ");
                    $.callFrameFunction('#rptTBP', 'filterData', data);
                }
            }
        });
    }
};
$(function () {
    Mods.ReportDoc.ReportTBP.init();
});