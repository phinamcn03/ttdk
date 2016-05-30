if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.VouchersExt == 'undefined') Mods.VouchersExt = {};
//if (typeof Mods.VouchersExt.ReceiptTransDetail == 'undefined') Mods.VouchersExt.ReceiptTransDetail = {};

Mods.VouchersExt.ReceiptTransDetail = {
    frameId: 'hstgrid-Customers-content',
    rowID:0,
    init: function (rowID) {
        console.log("ID", FWS.Web.CTemplateController.CurrentContentOptions.id);
        this.rowID = rowID;
        //this.frameId = FWS.Web.CTemplateController.CurrentContentOptions.id + '_' + this.frameId;
        //FWS.Web.CTemplateController.CurrentContentOptions.FilterID = 7;
        var html = '<iframe class="vFrmHst" id="' + this.frameId + '" style="width: 100%; height: 100%;" scrolling="no" frameborder="0" src="../Mods/_core.hst/PGrid.aspx" GridID="24"></iframe>';
        $('#customer-content').after(html).remove();
        //FWS.Web.CTemplateController.CurrentContentOptions
       this.loadAuto();
    },
    loadAuto: function () {
        var _this = this;
        var vfilter = new CFilter({ FilterID: 37,Context:'AutoRun' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object') {
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                }
                FWS.System.IO.AjaxOverlay.Hide();
                var inputValue = "<RequestParams Function=\"GetTransaction_Asset\" Context=\"Receipt\" TBPhiID=\"" + _this.rowID + "\" />";
                
                if (data.data && data.data.AutoRun == "1") {
                    data.filterXml = inputValue;
                    $.callFrameFunction('iframe#' + _this.frameId, 'filterData', data);
                }
            }
        });
    }
};
$(function () {    
    //Mods.VouchersExt.ReceiptTransDetail.init();
});