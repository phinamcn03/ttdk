if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.ActiveIngredient = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/ActiveIngredientEntry',
        data: "{a:'--', b:'--'}",
        id: "ActiveIngredientEntry-Window",
        width: 520,
        height: 190,
        title: "ActiveIngredient Entry",
        rowID: '', /* 0: new| -1: search | con lai: edit */
        callbackComplete: function (opts) {
            Mods.Items.ActiveIngredientEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#ActiveIngredient-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#ActiveIngredient-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete({ ID: rowID });
            else
                $.messager.alert('Xóa hoạt chất', 'Xin chọn hoạt chất cần xóa');
        });
        $("#ActiveIngredient-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#ActiveIngredient-txtCode").val(),
                Name: $("#ActiveIngredient-txtName").val()
            });
        });
        $("#ActiveIngredient-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#ActiveIngredient_Grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#ActiveIngredient_Grid .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid'); thisObj.LoadEntryEdit({ ID: rowID });
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
        var inputValue = $.string.Format('<InputValue ID="{0}" Action="Delete"/>', opts.ID);
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa hoạt chất này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/ActiveIngredientService.asmx/Update',
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
        GridUrl: FWS.Web.Core.URL.ContextData,
        GridId: '#ActiveIngredient_Grid',
        GridPager: 'ActiveIngredient_Gridpage',
        iPage: 1,
        iNumRow: 12,
        optionClient: "",
        Load: function () {
            var thisObj = this;
            var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' PageIndex='{2}' RowsPerPage='{3}' />", 129, 12, thisObj.iPage, thisObj.iNumRow);
            //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 11);
            //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 24);
            var inputValue = FWS.System.Core.AttachMeta(xml, {});

            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    ClientKey: '4F5C2508-1ADA-4672-BED1-C7AA3590ACFD',
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: inputValue
                },
                pager: thisObj.GridPager,
                colNames: colNameActiveIngredient,
                colModel: colModelActiveIngredient,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowelem.IDKey);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
                },
                gridComplete: function () {
                    //console.log('grid load complete');
                }
            };            
            new CGrid().Init(thisObj.GridId, optionServerActiveIngredient, thisObj.optionClient);
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
    Mods.Items.ActiveIngredient.Init();
});
