if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.ReceiptReport = {
    init: function () {
        var filterID = '';
        if (FWS.Web.CTemplateController.CurrentContentOptions != null)
            filterID = FWS.Web.CTemplateController.CurrentContentOptions.filterID;
        this.loadAuto(filterID);
    },

    loadAuto: function (filterID) {
        if (filterID == "")
            filterID = '5';
        var vfilter = new CFilter({ FilterID: filterID });
        vfilter.autorun({
            success: function (data) {
                $.callFrameFunction('#rptTBP', 'filterData', data);
            }
        });
    }
};

Mods.VouchersExt.ReceiptReport.init();
$(function () {

});