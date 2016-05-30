if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.VendorGroup = {
    Init: function () {
        this.Grid.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/VendorGroupEntry',
        data: "{a:'-', b:'--'}",
        id: "VendorGroupEntry-Window",
        width: 500,
        height: 140,
        title: "Vendor Group Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Items.VendorGroupEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#venderG-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#venderG-btnDelete").click(function () {
            var rowID = thisObj.GetSelectedRow();
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#venderG-btnSearch").click(function () {
            thisObj.ExecuteSearch({
                Code: $("#venderG-txtCode").val(),
                Name: $("#venderG-txtName").val()
            });
        });
        $("#venderG-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
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
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteSearch: function (opts) {
        var thisObj = this;
        $(thisObj.GridId).clearGridData();
        this.optionClient.extraParams.inputValue = $.string.Format(" Name='{0}' Code='{1}' ", opts.Name, opts.Code);
        new CGrid().Request(thisObj.GridId, thisObj.optionClient);
    },
    ExecuteDelete: function (opts) {
        var inputValue = $.string.Format('ID="{0}" Action="delete"', opts.ID);
        $.messager.confirm('Delete', 'Are you delete this?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/VendorGroupService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data.Code == "INV_SUCCESS") {
                                Mods.Items.VendorGroup.Grid.ReloadGrid();
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
        GridID: "#vendorGroup_Grid",
        GridUrl: '../Mods/Items/Service/VendorGroupService.asmx/GetList',
        GridPager: 'vendorGroup_GridPage',
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
                    colNames: colNameVendorGroup,
                    colModel: colModelVendorGroup,
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
    Mods.Items.VendorGroup.Init();
});
