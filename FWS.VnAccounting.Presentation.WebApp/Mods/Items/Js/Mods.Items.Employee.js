if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Employee = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/EmployeeEntry',
        data: "{a:'-', b:'--'}",
        id: "EmployeeEntry-Window",
        width: 500,
        height: 250,
        title: "Employee Entry",
        rowID: '',
        callbackComplete: function (opts) {
            Mods.Items.EmployeeEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Employee-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Employee-btnDelete").click(function () {
            var arrID = '';
            var rowID = thisObj.GetSelectedRow();
            if (rowID != "-1") {
                $.each(rowID, function (key, value) {
                    arrID = arrID + value;
                    if (key < rowID.length - 1)
                        arrID = arrID + ",";
                });
                thisObj.ExecuteDelete({ ID: arrID });
            }
            else
                $.messager.alert('Xóa Nhân viên', 'Xin chọn nhân viên cần xóa');
        });
        $("#Employee-btnSearch").click(function () {
            thisObj.Grid.Search({
                Code: $("#Employee-txtCode").val(),
                Name: $("#Employee-txtName").val()
            });
        });
        $("#Employee-btnSearchAdvance").click(function () {
            thisObj.LoadEntrySearch();
        });
        $("#Employee_Grid .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });
        });
        $("#Employee_Grid .ui-icon-pencil").live("click", function () {
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
        var thisObj = this;
        var isMulti = opts.ID.indexOf(',') > -1 ? true : false;
        var sID = isMulti ? 's' : '';
        var sDel = isMulti ? 'DELETEMULTI' : 'DELETE';

        var inputValue = $.string.Format('<InputValue ID{0}="{1}" Action="{2}"/>', sID, opts.ID, sDel);
        $.messager.confirm('Delete', 'Bạn có chắc muốn xóa nhân viên này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/EmployeeService.asmx/Update',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        if ($(data).find("string").length) {
                            data = $(data).find("string:eq(0)").text();
                        }
                        data = eval("(" + data + ")");
                        thisObj.Grid.RefreshCurrentPage();
                    }
                });
            }
        });
    },
    GetSelectedRow: function () {
        var thisObj = this;
        var rowID = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        return rowID || -1;
    },
    Grid: {
        GridUrl: '../Mods/Items/Service/EmployeeService.asmx/GetGrid',
        GridId: '#Employee_Grid',
        GridPager: 'Employee_gridpage',
        optionClient: '',
        Load: function () {
           var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 13,
                    inputValue: ''
                },
                pager: thisObj.GridPager,
                colNames: colNameEmployee,
                colModel: colModelEmployee,
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
            new CGrid().Init(thisObj.GridId, optionServerEmployee, thisObj.optionClient);
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
        },
        SelectedRow: function () {

        }
    }

};
$(function () {
    Mods.Items.Employee.Init();
});