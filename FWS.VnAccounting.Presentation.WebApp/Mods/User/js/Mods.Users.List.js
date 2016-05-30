if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Users == 'undefined')
    Mods.Users = {};

Mods.Users.List = {
    ControlIDs: {
        btnAddNew: "#UserList-AddNewUser",
        contentID: "#UserList-Content",
        formID: "#UserList-Form"

    },
    OptionsController: {
        template: 'Mods/User/UCUserEntry',
        data: "{a:'-', b:'--'}",
        id: "UserList-Window",
        width: 400,
        height: 250,
        title: "Màn hình user",
        rowID: '',
        dataApp: '',
        callbackComplete: function (opts) {
            Mods.Users.Entry.DefaultInit(opts);
        }
    },
    Init: function () {
        this.Grid.Load();
        //this.GroupUser.Load();
        this.Event();
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnAddNew).bind("click", function () {
            Mods.Users.List.LoadEntryNew();
        });
        $("#UserList_GridID .ui-icon-pencil").off('click');
        $("#UserList_GridID").on('click', '.ui-icon-pencil', function () {
            var rowID = $(this).attr('rowid');
            console.log(rowID);
            thisObj.LoadEntryEdit({ ID: rowID });
        });
        $("#UserList_GridID").on("click", '.ui-icon-trash', function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete({ ID: rowID });

        });
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    ExecuteDelete: function (otps) {
        var thisObj = this;
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams ID='{2}' Function='UserList' Action='{3}'/>",
         129, FWS.System.Core.UserID(), otps.ID, "DELETE");

        var inputValue = xml;
        FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(inputValue),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        $.messager.alert('OK', objRet.Description);
                        // Mods.Items.[INSTANT].Grid.Reload();
                        thisObj.Grid.LoadData();
                    }
                    else {
                        $.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    },
    Grid: {
        GridUrl: '',
        GridId: '#UserList_GridID',
        GridPager: 'UserList_GridPage',
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
                colNames: colNameUserList,
                colModel: colModelUserList,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>', rowelem.ID);
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
            new CGrid().Init(thisObj.GridId, optionServerUserList, thisObj.optionClient);
            thisObj.LoadData();
        },
        LoadData: function () {

            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetUserList'/>", 129, FWS.System.Core.UserID());
            var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
            var serviceUrl = FWS.Web.Core.URL.ContextData;
            FWS.System.IO.Ajax({
                url: serviceUrl,
                type: 'POST',
                data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                InputValue: $.HtmlEncode(xml)
                },
                dataType: 'xml',
                success: function (data, textStatus, jqXHR) {
                    try {
                        data = $.FindInXml(data);
                        data = data.CSV2JSON2();
                        if (data) {
                            var optionGrid = {
                                gridID: thisObj.GridId,
                                data: data[1]
                            }
                        };

                        thisObj.ShowGrid(optionGrid);
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });

        },
        ShowGrid: function (opts) {
            var thisObj = this;
            var dataGrid = opts.data;
            for (var i = 0; i < dataGrid.length; i++) {
                $(opts.gridID).jqGrid('addRowData', i + 1, dataGrid[i]);
            }
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
    Mods.Users.List.Init();
});
