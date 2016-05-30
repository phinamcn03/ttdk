if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.ItemsDoc == 'undefined') Mods.ItemsDoc = {};

Mods.ItemsDoc.Voucher = {
    init: function () {
        this.loadAuto();
    },
    loadAuto: function () {
        var vfilter = new CFilter({ FilterID: '7' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object')
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                FWS.System.IO.AjaxOverlay.Hide();
                if (data.data && data.data.AutoRun == "1") {
                    data.filterXml = data.filterXml.replace("<RequestParams ", "<RequestParams Context='AutoRun' ");
                    $.callFrameFunction('iframe#hstgrid-Voucher-content', 'filterData', data);
                    //$.callFrameFunction('iframe#hstgrid-Customer-content', 'filterData', data);
                }
                //$.callFrameFunction('iframe#hstgrid-Voucher-content', 'filterData', data);
            }
        });
    }
};
$(function () {
    Mods.ItemsDoc.Voucher.init();
});