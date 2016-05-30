if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined')
    Mods.CoreHst = {};

Mods.CoreHst.GridConfig = {
    GridID: '',
    Type: '',
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Init: function (opts) {
        this.Properties.windowID = opts.options.id;
        this.Properties.rowID = opts.options.rowID;
        this.GridID = opts.GridID;
        this.Type = opts.Type;

        this.loadTemplate();
    },
    Close: function () {
        $('#' + this.Properties.windowID).window('close');
    },
    loadTemplate: function () {
        var self = this;
        if (self.GridID == '')
            return;
        if ($('#fieldset-grid-' + self.GridID).length == 0) {
            $('#GridConfigContainer').load('../Mods/_core.hst/GridConfigTemplate.htm #ui-grid-dialog-' + self.GridID, function (text, status, request) {
                if (status == 'success') {
                    self.createControl();
                }
            });
        }
    },
    createControl: function () {
        var self = this;
        switch (self.GridID) {
            case '50':
            case '59':
                CControl.InitDateBox({ id: 'txtGrid' + self.GridID + 'EffectedDate', value: $.format(new Date(), 'd', FWS_SERVER_CONFIG.Culture) });
                break;
        }
    },
    Action: function () {
        var self = this;
        self.Close();
        var options = {
            Type: self.Type
        };
        switch (self.GridID) {
            case '50':
            case '59':
                var sDate = CControl.GetDateBox('#txtGrid' + self.GridID + 'EffectedDate');
                var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
                var IDate = $.format(dDate, 'yyyy-MM-dd');

                options.EffectedDate = IDate;
                break;
        }
        $.callFrameFunction('.vFrmHst', 'fnGridConfigAction', options);
    }
};
function fnGridConfigClose() {
    Mods.CoreHst.GridConfig.Close();
};
function fnGridConfigAction() {
    Mods.CoreHst.GridConfig.Action();
};