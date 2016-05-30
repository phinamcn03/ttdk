if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Asset == 'undefined')
    Mods.Asset = {};
Mods.Asset.List = {
  Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Asset/AssetEntry',
        data: "{a:'-', b:'--'}",
        id: "AssetEntry-Window",
        width: 720,
        height: 600,
        title: "Asset Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Asset.Entry.DefaultInit(opts);
        }
    },
    ControlIDs: {
        txtCode: '#Asset-txtCode',
        txtName: '#Asset-txtName',

        btnSearch: '#Asset-btnSearch',
        btnNew: '#Asset-btnAddNew',
        btnDel: '#Asset-btnDelete',
        btnSearchAdv: '#Asset-btnSearchAdvance'
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.LoadEntryNew();
        });
        $(thisObj.ControlIDs.btnDel).click(function () {

        });
        $(thisObj.ControlIDs.btnSearch).click(function () {
            thisObj.Grid.Search({
                Code: $(thisObj.ControlIDs.txtCode).val(),
                Name: $(thisObj.ControlIDs.txtName).val()
            });
        });
        $(thisObj.ControlIDs.btnSearchAdv).click(function () {
            thisObj.LoadEntrySearch();
        });
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    Grid: {
        GridUrl: '../Mods/Asset/Service/Asset.asmx/GetGridAsset',
        GridId: '#Asset_Grid',
        GridPager: 'Asset_GridPage',
        optionClient: "",
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNameAsset,
                colModel: colModelAsset,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {
                    /* Edit */
                    $(thisObj.GridId).find(".ui-icon-pencil").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-pencil").click(function (e) {
                        var rowID = $(this).attr('rowid');
                        Mods.Asset.List.LoadEntryEdit({ ID: rowID });
                        e.stopPropagation();
                    });
                    /* Delete */
                    $(thisObj.GridId).find(".ui-icon-trash").unbind("click");
                    $(thisObj.GridId).find(".ui-icon-trash").click(function (e) {
                        var rowID = $(this).attr('rowid');
                       // Mods.Asset.List.ExecuteDelete({ ID: rowID });
                        e.stopPropagation();
                    });
                }
            };
            new CGrid().Init(thisObj.GridId, optionServerAsset, thisObj.optionClient);
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
    Mods.Asset.List.Init();
    var options = {};
    var control = CControl;
    control.InitForm({ container: '.elite-form' });
});