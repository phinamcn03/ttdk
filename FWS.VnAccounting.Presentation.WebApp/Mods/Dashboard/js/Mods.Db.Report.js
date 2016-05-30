if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.Db = {};

Mods.Db.Report = {
    init: function () {
        //this.loadFilter(5); 
        var filterID = '';
        if (FWS.Web.CTemplateController.CurrentContentOptions != null)
            filterID = FWS.Web.CTemplateController.CurrentContentOptions.filterID;
        this.loadAuto(filterID);
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
        if (filterID == "")
            filterID = '5';
        var vfilter = new CFilter({ FilterID: filterID });
        vfilter.autorun({
            success: function (data) {
                console.log('Mods.Db.Report', data);
                $.callFrameFunction('#ui-report-viewer iframe.vFrmHst', 'filterData', data);
            }
        });
    }
};
$(function () {
    Mods.Db.Report.init();
});