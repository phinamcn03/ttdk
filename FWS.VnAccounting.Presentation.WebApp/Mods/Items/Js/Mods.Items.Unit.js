if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Unit = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/UnitEntry',
        data: "{a:'--', b:'--'}",
        id: "UnitEntry-Window",
        width: 520,
        height: 190,
        title: "Unit Entry",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Items.UnitEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Unit-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Unit-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete({ ID: rowID });
            else
                $.messager.alert('Xóa đơn vị', 'Xin chọn Đơn vị cần xóa');
        });
        $("#Unit-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Unit-txtCode").val(),
                Name: $("#Unit-txtName").val()
            });
        });
        $("#Unit-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#Unit_Grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#Unit_Grid .ui-icon-pencil").live("click", function () {
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
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteDelete: function (opts) {
        thisObj = this;
        var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}" Action="Delete"/>', 1, opts.ID);
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa đơn vị này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/UnitService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        var data = $(data).find("string").text();
                        data = eval("(" + data + ")");
                        thisObj.Grid.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    Grid: {
        GridUrl: '../Mods/Items/Service/UnitService.asmx/GetGrid',
        GridId: '#Unit_Grid',
        GridPager: 'Unit_Gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: "",
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNameUnit,
                colModel: colModelUnit,
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

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerUnit, thisObj.optionClient);
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
            this.optionClient.extraParams.currPage = this.iPage;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, this.optionClient);
        },
        GetSelectedRow: function () {
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        }
    }


};
$(function () {
    Mods.Items.Unit.Init();
});
