if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Accounts == 'undefined')
    Mods.Accounts = {};

Mods.Accounts.Config = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    Properties: {
        windowID: ""
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        this.Properties.windowID = windowID;
    },
    Event: function () {
        var thisObj = this;
        $("#Config_Grid .ui-icon-pencil").live("click", function (e) {
            thisObj.LoadEntry({
                ID: $(this).attr('rowid'),
                Code: $(this).attr('rowCode'),
                Name: $(this).attr('rowName'),
                Value: $(this).attr('rowValue'),
                ValueEx1: $(this).attr('rowValueEx1'),
                ValueEx2: $(this).attr('rowValueEx2')
            });
        });
    },
    LoadEntry: function (rowData) {
        console.log('LoadEntry',rowData);
        var OptionsController = {
            template: 'Mods/Accounts/ConfigEntry',
            data: "{a:'-', b:'--'}",
            id: "ConfigEntry-Window",
            width: 500,
            height: 180,
            title: "Config Entry",
            rowID: '',
            rowData: rowData,
            callbackComplete: function (opts) {
                Mods.Accounts.ConfigEntry.DefaultInit(opts);
            }
        };
        FWS.Web.CTemplateController.LoadPopup(OptionsController);
    },
    Grid: {
        GridUrl: '../Mods/Accounts/Service/ConfigService.asmx/GetGrid',
        GridId: '#Config_Grid',
        GridPager: 'Config_GridPage',
        optionClient: "",
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 12,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNameConfig,
                colModel: colModelConfig,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-pencil" rowID="{0}" rowCode="{1}" rowValue="{2}" rowName="{3}" rowValueEx1="{4}" rowValueEx2="{5}"style="display:inline-block;"></span>', 
                        rowid, rowdata.Code, rowdata.Value, rowdata.Name,
                        rowdata.ValueEx1, rowdata.ValueEx2);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerConfig, thisObj.optionClient);
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var gridID = this.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format("Code='{0}' Name ='{1}'", opts.Code, opts.Name);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, this.optionClient);
        }
    }
};
$(function () {
    Mods.Accounts.Config.Init();
});