if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.CoreFilter == 'undefined')
    Mods.CoreFilter = {};

Mods.CoreFilter.Filter = {
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Init: function (opts) {
        var filterID = opts.filterID;
        if (opts.options) {
            this.Properties.windowID = opts.options.id;
            this.Properties.rowID = opts.options.rowID;
        }

        if ($('#vFrmContainer').html().length > 0) {
            $.callFrameFunction('#vFrmFilter', 'filterShow', { 'filterID': filterID });            
        }
        else {
            var content = $.string.Format('<iframe id="vFrmFilter" style="width:100%;height:100%;" frameborder="0" src="../Mods/_core.filter/PFilter.aspx?filterID={0}" scrolling="no"></iframe>', filterID);
            $('#vFrmContainer').html(content);
        }
    },
    Close: function () {
        $('#' + this.Properties.windowID).window('close');
    },
    FilterData: function () {
        $.callFrameFunction('#vFrmFilter', 'filterData');
    }
};

function fnCloseFilter() {
    Mods.CoreFilter.Filter.Close();
};
function fnfilterData() {
    Mods.CoreFilter.Filter.FilterData();
};