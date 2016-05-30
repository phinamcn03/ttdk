if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Core == 'undefined')
    Mods.Core = {};

Mods.Core.EmployeeDepartment = {
    ObjMesseage: {
        ActionTitle: 'Thong bao',
        DeleteTitle: 'Xóa Phong Ban',
        DeleteConfirm: 'Bạn có chắc muốn xóa Phong Ban này?'
    },
    OptionsController: {
        template: 'Mods/Core/EmployeeDepartmentEntry',
        data: "{a:'--', b:'--'}",
        id: "EmployeeDepartmentEntry-Window",
        width: 520,
        height: 250,
        title: "EmployeeDepartmentEntry Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Core.EmployeeDepartmentList.DefaultInit(opts);
        }
    },
    Init: function () {
        this.Load();
        this.Grid.Load();
        this.Event();
    },
    Load: function () {

    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID || "-1";
        this.LoadEntry();
    },
    Event: function () {
        var thisObj = this;
        $("#EmployeeDepartment-btnNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#EmployeeDepartment-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != -1)
                thisObj.ExecuteAction({ id: rowID, action: 'DELETE', title: thisObj.ObjMesseage.DeleteTitle, confirm: thisObj.ObjMesseage.DeleteConfirm });
            else
                $.messager.alert('Delete', 'Are you delete this?');
        });
        $(thisObj.Grid.GridID + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteAction({ id: rowID, action: 'DELETE', title: thisObj.ObjMesseage.DeleteTitle, confirm: thisObj.ObjMesseage.DeleteConfirm });
        });
        $(thisObj.Grid.GridID + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    ExecuteAction: function (options) {
        var thisObj = this;
        if (typeof options == 'undefined')
            return;
        var _inputValue = $.string.Format('<InputValue Action="{0}" ID="{1}" FilterCode="Employee"/>', options.action, options.id);
        $.messager.confirm(options.title, options.confirm, function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Core/Service/EmployeeDepartmentService.asmx/Update',
                    type: 'POST',
                    data: { inputValue: _inputValue },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                            data = eval("(" + data + ")");
                            if (data) {
                                $.messager.alert(thisObj.ObjMesseage.ActionTitle, data.Description);
                                thisObj.Grid.Reload();
                            }
                        }
                    }
                });
            }
        });
    },
    Grid: {
        GridUrl: '../Mods/Core/Service/EmployeeDepartment.ashx?dtype=1',
        GridID: '#EmployeeDepartment_Grid',
        Load: function () {
            var thisObj = this, gridID = thisObj.GridID;
            var optionClient = {
                url: thisObj.GridUrl,
                colNames: colNameEmployeeDepartment,
                colModel: colModelEmployeeDepartment,
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
            new CGrid().Init(thisObj.GridID, optionEmployeeDepartment, optionClient);
        },
        Events: function () {
            var thisObj = this;
            $(thisObj.GridID + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                thisObj.DeleteRow(rowID);
            });
        },
        Reload: function () {
            $(this.GridID).clearGridData();
            $(this.GridID).trigger("reloadGrid");
        },
        GetSelectedRow: function () {
            var rowID = $(this.GridID).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        }
    }
};
$(function () {
    Mods.Core.EmployeeDepartment.Init();
});