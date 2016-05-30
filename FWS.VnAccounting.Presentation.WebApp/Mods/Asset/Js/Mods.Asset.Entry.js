if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Asset == 'undefined')
    Mods.Asset = {};

Mods.Asset.Entry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
       // this.ClearInfo();
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Init: function () {
        var tabAssetAntry = new CTabs({ fit: true });
        tabAssetAntry.Init("#ItemEntry-tabPhutung");
        this.Grid.Load();
       // this.Event();
    },
    Grid: {
        GridUrl: '../Mods/Asset/Service/Asset.asmx/GetGrid',
        GridId: '#AssetEntry_Grid',
        GridPager: 'AssetEntry_GridPage',
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
                colNames: colNameAssetEntry,
                colModel: colModelAssetEntry,
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
                      //  Mods.Asset.List.LoadEntryEdit({ ID: rowID });
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
            new CGrid().Init(thisObj.GridId, optionServerAssetEntry, thisObj.optionClient);
            //VnAccounting.Grid.Init(thisObj.GridId, optionServerAssetEntry, thisObj.optionClient);
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            VnAccounting.Grid.Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var gridID = this.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format("Code='{0}' Name ='{1}'", opts.Code, opts.Name);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            VnAccounting.Grid.Request(gridID, this.optionClient);
        }
    }
};
$(function () {
    Mods.Asset.Entry.Init();
    var options = {};
    var control = CControl;
   control.InitForm({ container: '.elite-formEntry' });
});
