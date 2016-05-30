if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ChartAccount = {
    GridUrl: '../Mods/Items/Service/ChartAccountTree.ashx?dtype=1',
    GridID: '#chartaccount_grid',

    Init: function () {
        this.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/ChartAccountEntry',
        data: "{a:'--', b:'--'}",
        id: "ChartAccountEntry-Window",
        width: 520,
        height: 250,
        title: "ChartAccount Entry",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Items.ChartAccountEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#ChartAccount-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#ChartAccount-btnDelete").click(function () {
            var rowIDs = thisObj.GetSelectedRow();
            if (rowIDs != -1)
                thisObj.ExecuteDelete({ IDs: rowID });
            else
                $.messager.alert('Delete', 'Are you delete this?');
        });

        $("#ChartAccount-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#ChartAccount-btnSearch").click(function () {
            thisObj.ExecuteSearch({
                Code: $("#ChartAccount-txtCode").val(),
                Name: $("#ChartAccount-txtName").val()
            });
        });

        $(thisObj.GridID + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $(thisObj.GridID + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
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
        this.OptionsController.rowID = opts.ID || "3";
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteSearch: function (opts) {
        var thisObj = this;
        var inputValue = "";
        if (opts.Code != "")
            inputValue += $.string.Format('Code="{0}"', opts.Code);
        if (opts.Name != "")
            inputValue += ' ' + $.string.Format('Name="{0}"', opts.Name);
        FWS.System.IO.Ajax({
            url: thisObj.GridUrl + "&_qsearch=" + encodeURIComponent(inputValue),
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                try {
                    data = eval("(" + data + ")");
                    $(thisObj.GridID).jqGrid("clearGridData");
                    $.each(data.invdata, function (index, item) {
                        if (typeof item.Code != 'undefined') {
                            item.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', item.ID);
                            $(thisObj.GridID).jqGrid('addRowData', item.ID, item, "last");
                        }
                    });
                } catch (e) {
                    $.iLog(e);
                }
            }
        });
    },
    ExecuteDelete: function (opts) {
        var inputValue = $.string.Format('ID="{0}" Action="DELETE"', opts.ID);

        $.messager.confirm('Delete', 'Are you delete this?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/ChartAccountService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data.Code == "INV_SUCCESS") {
                                Mods.Items.ChartAccount.ReloadGrid();
                            }
                            else {
                                $.messager.alert('Delete', data.Name);
                            }
                        } catch (e) { $.iLog('::Chart Account:ExecuteDelete'); }
                    }
                });
            }
        });
    },
    LoadGrid: function () {
        var thisObj = this,
            gridID = thisObj.GridID;
        var optionClient = {
            url: thisObj.GridUrl,
            colNames: colNameAccount,
            colModel: colModelAccount,
            afterInsertRow: function (rowid, rowdata, rowelem) {
                console.log('afterInsertRow', rowdata, rowid);
            },
            onSelectRow: function (rowid, status) {

            },
            loadComplete: function () {
                var _grid = jQuery(thisObj.GridID);
                var ids = _grid.jqGrid('getDataIDs');
                for (var i = 0; i < ids.length; i++) {
                    var _rowid = ids[i];
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', _rowid);
                    _grid.jqGrid('setCell', _rowid, "Action", actionHtml);
                }
            },
            gridComplete: function () {

            }
        };
        new CGrid().Init(thisObj.GridID, optionAccount, optionClient);
    },
    ReloadGrid: function () {
        $(this.GridID).trigger("reloadGrid");
    },
    GetSelectedRow: function () {
        var rowID = $(this.GridID).jqGrid('getGridParam', 'selrow');
        return rowID || -1;
    },
    GetSelectedRows: function () {
        var rowID = $(this.GridID).jqGrid('getGridParam', 'selarrrow');
        return rowID || [];
    }
};
$(function () {
    Mods.Items.ChartAccount.Init();
});
