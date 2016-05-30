if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.ACore == 'undefined')
    Mods.ACore = {};

Mods.ACore.Group[INSTANT] = {
    ObjMesseage: {
        DeleteTitle: 'Xóa {0}',
        DeleteConfirm: 'Bạn có chắc muốn xóa {0} này?'

    },
    ControlIDs: {
        txtCode: '#[INSTANT]Group-txtCode',
        txtName: '#[INSTANT]Group-txtName',

        btnNew: "#[INSTANT]Group-btnNew",
        btnDelete: "#[INSTANT]Group-btnDel",
        btnAdvanceSearch: "#[INSTANT]Group-btnAdvanceSearch",
        btnSearch: "#[INSTANT]Group-btnSearch"
    },
    TemplateEdit: {
        '1': 'Items/CustomerGroupEntry',
        '2': 'Items/ItemGroupEntry',
        '3': 'Items/VendorGroupEntry'
    },
    ServerOptions: GroupBase_Instant['[INSTANT]'],

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
        var _template = thisObj.TemplateEdit[refType] || "";
        var _optionsController = {
            template: 'Mods/' + _template,
            data: "{a:'--', b:'--'}",
            id: _template.replace('/', '') + "-Window",
            width: 450,
            height: 200,
            title: "Sửa",
            rowID: thisObj.OptionsController.rowID || '',
            callbackComplete: function (opts) {
                switch (refType) {

                    case '1':
                        eval('Mods.ACore.GroupEntryCustomer.DefaultInit(_optionsController);');
                        break;
                    case '2':
                        eval('Mods.ACore.GroupEntryProduct.DefaultInit(_optionsController);');
                        break;
                    case '3':
                        eval('Mods.ACore.GroupEntryVendor.DefaultInit(_optionsController);');
                        break;                   
                }
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
        var inputValue = $.string.Format(thisObj.Grid.formatSearch, opts.Code, opts.Name);
        thisObj.Grid.optionClient.extraParams = {
            currPage: thisObj.Grid.iPage,
            numberRowOfPage: thisObj.Grid.iNumRow,
            inputValue: inputValue,
            gridID: thisObj.ServerOptions.GridID,
            instant: thisObj.ServerOptions.Instant
        };
        thisObj.Grid.ReloadGrid();
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
        GridID: "#[INSTANT]Group_Grid",
        GridUrl: '../Mods/ACore/Service/GroupBaseService.asmx/GetGrid',
        GridPager: '[INSTANT]Group_GridPage',
        iPage: 1,
        iNumRow: 16,
        optionClient: {},
        formatSearch: " Code='{0}' Name='{1}'",
        LoadGrid: function () {
            var thisObj = this;
            var groupObj = Mods.ACore.Group[INSTANT];
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                pager: thisObj.GridPager,
                colNames: colNameGroup_[INSTANT],
                colModel: colModelGroup_[INSTANT],
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: "",
                    gridID: groupObj.ServerOptions.GridID,
                    instant: groupObj.ServerOptions.Instant
                },
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                }
            };
            new CGrid().Init(thisObj.GridID, optionGroup_[INSTANT], thisObj.optionClient);
        },
        ReloadGrid: function () {
            var thisObj = this;
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
    Mods.ACore.Group[INSTANT].Init();
});