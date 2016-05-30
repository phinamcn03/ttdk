if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.ItemsDoc == 'undefined') Mods.ItemsDoc = {};

Mods.ItemsDoc.Invoice = {
    init: function () {
        this.loadAuto();
    },
    loadAuto: function () {
        var vfilter = new CFilter({ FilterID: '8' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object')
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                $.callFrameFunction('iframe#hstgrid-Invoice-content', 'filterData', data);
            }
        });
    }
};
$(function () {
    Mods.ItemsDoc.Invoice.init();
});