if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.ItemsDoc == 'undefined') Mods.ItemsDoc = {};
if (typeof Mods.ItemsDoc.Customers == 'undefined') Mods.ItemsDoc.Customers = {};

Mods.ItemsDoc.Customers[FWS.Web.CTemplateController.CurrentContentOptions.id] = {
    frameId: 'hstgrid-Customers-content',
    init: function () {
        this.frameId = FWS.Web.CTemplateController.CurrentContentOptions.id + '_' + this.frameId;
        var html = '<iframe class="vFrmHst" id="' + this.frameId + '" style="width: 100%; height: 100%;" scrolling="no" frameborder="0" src="../Mods/_core.hst/PGrid.aspx"></iframe>';
        $('#customer-content').after(html).remove();
        this.loadAuto();
    },
    loadAuto: function () {
        var _this = this;
        var vfilter = new CFilter({ FilterID: FWS.Web.CTemplateController.CurrentContentOptions.filterID, Context: 'AutoRun' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object') {
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                }
                FWS.System.IO.AjaxOverlay.Hide();
                if (data.data && data.data.AutoRun == "1") {
                    data.filterXml = data.filterXml.replace("<RequestParams ", "<RequestParams Context='AutoRun' "); 
                    $.callFrameFunction('iframe#' + _this.frameId, 'filterData', data);
                }
            }
        });
    }
};
$(function () {    
    Mods.ItemsDoc.Customers[FWS.Web.CTemplateController.CurrentContentOptions.id].init();
});