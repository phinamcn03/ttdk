if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.CustomerGroup = {
    Init: function () {
        this.Grid.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/CustomerGroupEntry',
        data: "{a:'-', b:'--'}",
        id: "CustomerGroupEntry-Window",
        width: 500,
        height: 200,
        title: "CustomerGroup Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Items.CustomerGroupEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#CustomerGroup-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#CustomerGroup-btnDelete").click(function () {
            var rowID = thisObj.GetSelectedRow();
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#CustomerGroup-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#CustomerGroup-btnSearch").click(function () {
            thisObj.ExecuteSearch({
                Code: $("#CustomerGroup-txtCode").val(),
                Name: $("#CustomerGroup-txtName").val()
            });
        });
        $(thisObj.Grid.GridID + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $(thisObj.Grid.GridID + " .ui-icon-pencil").live("click", function () {
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
        var inputValue = $.string.Format(thisObj.Grid.formatSearch, opts.Code, opts.Name);
        thisObj.Grid.optionClient.extraParams = {
            currPage: thisObj.Grid.iPage,
            numberRowOfPage: thisObj.Grid.iNumRow,
            pInput: inputValue
        };
        new CGrid().Request(thisObj.Grid.GridID, thisObj.Grid.optionClient);
    },
    ExecuteDelete: function (opts) {
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa đơn vị này?', function (r) {
            if (r) {
                var inputValue = $.string.Format('ID="{0}" Action="DELETE"', opts.ID);
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/CustomerGroupService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data.Code == "SUSSCESS") {
                                Mods.Items.CustomerGroup.Grid.ReloadGrid();
                            }
                            else {
                                $.messager.alert('EDITABLE', data.Name);
                            }
                        } catch (e) { $.iLog(e); }
                    }
                });
            }
        });
    },
    Grid: {
        GridID: "#customergroup_grid",
        GridUrl: '../Mods/Items/Service/CustomerGroupService.asmx/GetList',
        GridPager: 'customergroup_gridpage',
        iPage: 1,
        iNumRow: 16,
        optionClient: {},
        formatSearch: " Code='{0}' Name='{1}'",
        LoadGrid: function () {
            var thisObj = this;
            try {
                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colNameCustomerGroup,
                    colModel: colModelCustomerGroup,
                    extraParams: {
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        pInput: ""
                    },
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                        $(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                new CGrid().Init(thisObj.GridID, option, thisObj.optionClient);
            } catch (e) {
                console.log(e);
            }

        },
        ReloadGrid: function () {
            var thisObj = this;
            $(thisObj.GridID).clearGridData();
            thisObj.LoadGrid();
        }
    },
    GetSelectedRow: function () {
        var rowID = $(this.Grid.GridID).jqGrid('getGridParam', 'selrow');
        return rowID || -1;
    }
};
$(function () {
    Mods.Items.CustomerGroup.Init();
});
