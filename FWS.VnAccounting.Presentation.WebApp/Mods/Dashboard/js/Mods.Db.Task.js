if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Db == 'undefined') Mods.Db = {};

Mods.Db.Task = {
    init: function () {
        this.loadAuto();
    },
    loadAuto: function () {
        var vfilter = new CFilter({ FilterID: '3' });
        vfilter.autorun({
            success: function (data) {
                FWS.System.IO.AjaxOverlay.Show();
                if (typeof data == 'object')
                    data.success = FWS.System.IO.AjaxOverlay.Hide;
                $.callFrameFunction('iframe#hstgrid-task-content', 'filterData', data);
            }
        });
    }
};
$(function () {
    Mods.Db.Task.init();
});