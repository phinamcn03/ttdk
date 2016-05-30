if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Simple[INSTANT] = {
    ObjMesseage: {
        DeleteTitle: 'Xóa {0}',
        DeleteConfirm: 'Bạn có chắc muốn xóa {0} này?'

    },
    ControlIDs: {
        txtCode: '#[INSTANT]_txtCode',
        txtName: '#[INSTANT]_txtName',

        btnNew: "#[INSTANT]_btnNew",
        btnDelete: "#[INSTANT]_btnDel",
        btnAdvanceSearch: "#[INSTANT]_btnAdvanceSearch",
        btnSearch: "#[INSTANT]_btnSearch"
    },
    TemplateEdit: 'Items/[INSTANT]Entry',
    ServerOptions: Simple_Instant['[INSTANT]'],

    Init: function () {
        this.Grid.LoadGrid();
        this.Event();
    },
    Event: function () {
        var thisObj = this;
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.LoadEntryNew();
        });
        $(thisObj.ControlIDs.btnDelete).click(function () {
            var rowID = thisObj.GetSelectedRow();
            var arrID = '';
            if (rowID != "-1") {
                $.each(rowID, function (key, value) {
                    arrID = arrID + value;
                    if (key < rowID.length - 1)
                        arrID = arrID + ",";
                });
                thisObj.ExecuteDelete({ ID: arrID });
            } else
                $.messager.alert('Xóa nhóm', 'Xin chọn nhóm cần xóa');
        });
        $(thisObj.ControlIDs.btnAdvanceSearch).click(function () {
            thisObj.LoadEntrySearch();
        });
        $(thisObj.ControlIDs.btnSearch).click(function () {
            thisObj.ExecuteSearch({
                Code: $(thisObj.ControlIDs.txtCode).val(),
                Name: $(thisObj.ControlIDs.txtName).val()
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
    LoadEntry: function (rowID) {
        var thisObj = this;
        var refType = thisObj.ServerOptions.RefType;
        var _template = thisObj.TemplateEdit || "";
        var _optionsController = {
            template: 'Mods/' + _template,
            data: "{a:'--', b:'--'}",
            id: _template.replace('/', '') + "-Window",
            width: 450,
            height: 200,
            title: "Sửa",
            rowID: thisObj.OptionsController.rowID || '',
            type: refType,
            callbackComplete: function (opts) {
                eval('Mods.Items.Simple[INSTANT]Entry.DefaultInit(_optionsController)');
            }
        };
        FWS.Web.CTemplateController.LoadPopup(_optionsController);
    },
    OptionsController: {},
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
        //var inputValue = $.string.Format(thisObj.Grid.formatSearch, opts.Code, opts.Name);
        var simpleObj = Mods.Items.Simple[INSTANT];
        var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' PageIndex='{2}' RowsPerPage='{3}' Code='{4}' Name='{5}' />",
            129, simpleObj.ServerOptions.RefType, thisObj.Grid.iPage, thisObj.Grid.iNumRow, $(thisObj.ControlIDs.txtCode).val(), $(thisObj.ControlIDs.txtName).val());
        var inputValue = FWS.System.Core.AttachMeta(xml, {});
        thisObj.Grid.optionClient.extraParams = {
            ClientKey: '4F5C2508-1ADA-4672-BED1-C7AA3590ACFD',
            currPage: thisObj.Grid.iPage,
            numberRowOfPage: thisObj.Grid.iNumRow,
            inputValue: inputValue,
            gridID: thisObj.ServerOptions.GridID,
            instant: thisObj.ServerOptions.Instant
        };
        thisObj.Grid.Reload();
    },
    ExecuteDelete: function (opts) {
        var thisObj = this;
        var refType = thisObj.ServerOptions.RefType;
        var serviceUrl = '';
        var groupName = '';
        switch (refType) {
            case '1':
                //not sure .. please update here -nam.le
                serviceUrl = '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction';
                groupName = 'Nhóm khách hàng';
                break;
            case '2':
                serviceUrl = '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction';
                groupName = 'Nhóm hàng';
                break;
            case '3':
                serviceUrl = '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction';
                groupName = 'Nhóm nhà cung cấp';
                //not sure .. please update here
                break;
        };
        var title = $.string.Format(thisObj.ObjMesseage.DeleteTitle, groupName);
        var msgConfirm = $.string.Format(thisObj.ObjMesseage.DeleteConfirm, groupName);
        $.messager.confirm(title, msgConfirm, function (r) {
            if (r) {
                var isMulti = opts.ID.indexOf(',') > -1 ? true : false;
                var sID = isMulti ? 's' : '';
                var sDel = isMulti ? 'DELETEMULTI' : 'DELETE';

                var inputValue = $.string.Format('<InputValue ID{0}="{1}" Action="{2}"/>', sID, opts.ID, sDel);
                FWS.System.IO.Ajax({
                    url: serviceUrl,
                    type: 'POST',
                    data: { InputValue: inputValue, instant: thisObj.ServerOptions.Instant },
                    success: function (data, textStatus, jqXHR) {
                        try {
                            var data = $(data).find("string").eq(0).text();
                            data = eval("(" + data + ")");
                            if (data)
                                if (data.Code == "OK") {
                                    thisObj.Grid.ReloadGrid();
                                }
                                else {
                                    $.messager.alert('EDITABLE', data.Name);
                                }
                            else
                                $.messager.alert('EDITABLE', 'Updating.....fail!!!');
                        } catch (e) { $.iLog(e); }
                    }
                });
            }
        });
    },
    Grid: {
        GridID: "#[INSTANT]_Grid",
        GridUrl: FWS.Web.Core.URL.ContextData,
        GridPager: '[INSTANT]_GridPage',
        iPage: 1,
        iNumRow: 16,
        optionClient: {},
        formatSearch: ' Code="{0}" Name="{1}" ',
        LoadGrid: function () {
            var thisObj = this;
            var simpleObj = Mods.Items.Simple[INSTANT];
            var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' PageIndex='{2}' RowsPerPage='{3}' />", 129, simpleObj.ServerOptions.RefType, thisObj.iPage, thisObj.iNumRow);
            var inputValue = FWS.System.Core.AttachMeta(xml, {});
            
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                pager: thisObj.GridPager,
                colNames: colName_[INSTANT],
                colModel: colModel_[INSTANT],
                extraParams: {
                    ClientKey: FWS.System.Core.ClientKey,
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    type: simpleObj.ServerOptions.RefType,
                    contextData: '1',
                    inputValue: inputValue
                },
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowelem.IDKey);
                    $(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                }
            };
            new CGrid().Init(thisObj.GridID, option_[INSTANT], thisObj.optionClient);
        },
        Reload: function () {
            var thisObj = this;
            //console.log(thisObj.optionClient);            
            $(thisObj.GridID).clearGridData();
            new CGrid().Request(thisObj.GridID, thisObj.optionClient);
        }
    },
    GetSelectedRow: function () {
        var rowID = $(this.Grid.GridID).jqGrid('getGridParam', 'selarrrow');
        return rowID || -1;
    }
};

$(function () {        
    Mods.Items.Simple[INSTANT].Init();   
});