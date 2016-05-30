if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.ItemsDoc == 'undefined') Mods.ItemsDoc = {};

Mods.ItemsDoc.Fee = {
    init: function () {
        this.loadAuto();
    },
    loadAuto: function () {
        var vfilter = new CFilter({ FilterID: '23' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object')
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                $.callFrameFunction('iframe#hstgrid-Fee-content', 'filterData', data);
            }
        });
    }
};
$(function () {
    Mods.ItemsDoc.Fee.init();
});