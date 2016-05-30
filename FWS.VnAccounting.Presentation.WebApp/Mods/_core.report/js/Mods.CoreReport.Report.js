if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.CoreReport = {};

Mods.CoreReport.Report = {
    init: function () {
        var filterID = '';
        if (FWS.Web.CTemplateController.CurrentContentOptions != null)
            filterID = FWS.Web.CTemplateController.CurrentContentOptions.filterID;

        console.log('::Mods.CoreReport.Report.init', filterID);
        //this.loadAuto(filterID);
    },
    loadFilter: function (filterID) {
        filterID = filterID || 5;
        FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.filter/Filter',
            data: "{a:1}",
            id: "Filter-Window",
            width: 550,
            height: 470,
            title: "Filter",
            callbackComplete: function (opts) {
                Mods.CoreFilter.Filter.Init({ filterID: filterID, options: opts });
            }
        });
    },
    loadAuto: function (filterID) {
        if (typeof filterID != 'undefined' && filterID > 0) {
            var vfilter = new CFilter({ FilterID: filterID });
            vfilter.autorun({
                success: function (data) {
                    //console.log('data', data);
                    //$.callFrameFunction('#ui-report-viewer iframe.vFrmHst', 'filterData', data);
                }
            });
        }
        else
            console.log('Mods.CoreReport.Report.loadAuto ', filterID);
    }
};

$(function () {
    console.log('Mods.CoreReport.Report.js', FWS.Web.CTemplateController.CurrentContentOptions);
    Mods.CoreReport.Report.init();
});