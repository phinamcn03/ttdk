if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Accounts == 'undefined')
    Mods.Accounts = {};

Mods.Accounts.Role = {
    Properties: {
        GroupID: function () {
            console.log($("#GroupUser-Role").combobox('getValue'));
            return $("#GroupUser-Role").combobox('getValue');
        }
    },
    Init: function () {
        this.Grid.Load();
        this.GroupUser.Load();
        this.Event();
    },
    Event: function () {
        $("#Update-Role").bind("click", function () {
            Mods.Accounts.Role.UpdateRole();
        });
    },
    UpdateRole: function () {
        var thisObj = this;
        var xml = "";
        var _data = $(thisObj.Grid.GridID).jqGrid('getGridParam', 'data');
        for (var i = 0; i < _data.length; i++) {
            var _isUsed = "0";
            var isInsert =0,IsUpdate =0,IsDelete =0;
            var _item = $("#cbxIsUsed-" + _data[i].ID);
            if (_item.length > 0 && _item.attr("checked")) {
                _isUsed = "1";
            }
            var _itemInsert = $("#cbxInsert-" + _data[i].ID);
            if (_itemInsert.length > 0 && _itemInsert.attr("checked")) {
                isInsert = "1";
            }
            var _itemUpdate = $("#cbxUpdate-" + _data[i].ID);
            if (_itemUpdate.length > 0 && _itemUpdate.attr("checked")) {
                IsUpdate = "1";
            }
            var _itemDelete = $("#cbxDelete-" + _data[i].ID);
            if (_itemDelete.length > 0 && _itemDelete.attr("checked")) {
                IsDelete = "1";
            }
            //if (_data[i].IsUsed != _isUsed) {
                xml += "<Detail";
                xml += $.string.Format(" IFID='{0}'", _data[i].ID);
                xml += $.string.Format(" Used='{0}'", _isUsed);
                xml += $.string.Format(" Insert='{0}'", isInsert);
                xml += $.string.Format(" Update='{0}'", IsUpdate);
                xml += $.string.Format(" Delete='{0}'", IsDelete);
                xml += " />";
            //}
        }
        FWS.System.IO.Ajax({
            url: '../Mods/Accounts/Service/RoleService.asmx/UpdateRoleByGroupID',
            type: 'POST',
            data: {
                groupID: thisObj.Properties.GroupID(),
                listRole: xml
            },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string:eq(0)").text();
                }
                if (data != "") {
                    data = data.split('|');
                    if (data.length > 1) {
                        if (data[0]) {
                            alert(data[1]);
                        }
                    }
                }
            }
        });
    },
    GroupUser: {
        HtmlID: "#GroupUser-Role",
        HtmlService: '../Mods/Accounts/Service/RoleService.asmx/GetListGroup',
        Load: function () {
            var thisObj = this;
            var options = {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    Mods.Accounts.Role.GroupUser.OnChange(record);
                },
                onLoadSuccess: function (obj) {
                /*
                                        var val = $(thisObj.HtmlID).combobox('getValue');
                    //                    console.log(obj);
                                        if (obj) {
                                            val = obj[0].value;
                                        }

                    //                    console.log(val);

                                        var _namespaceGrid = Mods.Accounts.Role.Grid;
                                        var _url = _namespaceGrid.GridUrl + "?groupid=" + val;
                                        $(_namespaceGrid.GridID).jqGrid('setGridParam', { url: _url });
                                        _namespaceGrid.ReloadGrid();
                    */
                }
            };
            FWS.System.IO.Combobox(thisObj.HtmlID, thisObj.HtmlService, options);
        },
        OnChange: function (item) {
            var _namespaceGrid = Mods.Accounts.Role.Grid;
            var _url = _namespaceGrid.GridUrl + "?groupid=" + item.id;
            $(_namespaceGrid.GridID).jqGrid('setGridParam', { url: _url });
            _namespaceGrid.ReloadGrid();
        }
    },
    Grid: {
        GridUrl: '../Mods/Accounts/Service/RoleHandler.ashx',
        GridID: '#RoleTree',
        optionClient: null,
        Load: function (groupId) {
            var thisObj = this;

            thisObj.optionClient = {
                url: thisObj.GridUrl + "?groupid=1",
                width: optionServerRole.width,
                height: optionServerRole.height,
                datatype: "json",
                ExpandColumn: 'Feature',
                treeGrid: true,
                treedatatype: "json",
                treeGridModel: 'adjacency',
                jsonReader: {
                    root: "invdata",
                    page: "currpage",
                    total: "totalpages",
                    records: "totalrecords",
                    repeatitems: false,
                    id: "ID"
                },
                treeReader: {
                    level_field: "level",
                    parent_id_field: "parent_id", // then why does your table use "parent_id"?
                    leaf_field: "isLeaf",
                    expanded_field: "expanded"
                },
                colNames: colNameRole,
                colModel: colModelRole,
                loadComplete: function () {
                    var ids = $(thisObj.GridID).jqGrid('getDataIDs');
                    for (var i = 0; i < ids.length; i++) {
                        var _rowid = ids[i];
                        var _row = $(thisObj.GridID).jqGrid('getRowData', ids[i]);
                        var _checked = "";
                        if (_row && typeof (_row.IsUsed) != 'undefined' && _row.IsUsed == "1") {
                            _checked = "checked";
                        }
                        //khi add thêm child node thi` _row.IsUsed của parent lúc này đang là html <input ...> cho nên nó ko lấy đc giá trị IsUsed thực sự
                        //=> bỏ qua khi IsUsed đã đc set cell là html <input...>
                        if (_row.IsUsed.length < 6) {
                            var actionHtml = $.string.Format('<input type="checkbox" id="cbxIsUsed-{0}" {1} style="display:inline-block;"></input>', _rowid, _checked);
                            $(thisObj.GridID).jqGrid('setCell', _rowid, "IsUsed", actionHtml);
                        }

                        //Insert
                        _checked = "";
                        if (_row && typeof (_row.Insert) != 'undefined' && _row.Insert == "1") {
                            _checked = "checked";
                        }
                        //khi add thêm child node thi` _row.IsUsed của parent lúc này đang là html <input ...> cho nên nó ko lấy đc giá trị IsUsed thực sự
                        //=> bỏ qua khi IsUsed đã đc set cell là html <input...>
                        if (_row.Insert.length < 6) {
                            var actionHtml = $.string.Format('<input type="checkbox" id="cbxInsert-{0}" {1} style="display:inline-block;"></input>', _rowid, _checked);
                            $(thisObj.GridID).jqGrid('setCell', _rowid, "Insert", actionHtml);
                        }

                        //Update
                        _checked = "";
                        if (_row && typeof (_row.Update) != 'undefined' && _row.Update == "1") {
                            _checked = "checked";
                        }
                        //khi add thêm child node thi` _row.IsUsed của parent lúc này đang là html <input ...> cho nên nó ko lấy đc giá trị IsUsed thực sự
                        //=> bỏ qua khi IsUsed đã đc set cell là html <input...>
                        if (_row.Update.length < 6) {
                            var actionHtml = $.string.Format('<input type="checkbox" id="cbxUpdate-{0}" {1} style="display:inline-block;"></input>', _rowid, _checked);
                            $(thisObj.GridID).jqGrid('setCell', _rowid, "Update", actionHtml);
                        }

                        //Delete
                        _checked = "";
                        if (_row && typeof (_row.Delete) != 'undefined' && _row.Delete == "1") {
                            _checked = "checked";
                        }
                        //khi add thêm child node thi` _row.IsUsed của parent lúc này đang là html <input ...> cho nên nó ko lấy đc giá trị IsUsed thực sự
                        //=> bỏ qua khi IsUsed đã đc set cell là html <input...>
                        if (_row.Delete.length < 6) {
                            var actionHtml = $.string.Format('<input type="checkbox" id="cbxDelete-{0}" {1} style="display:inline-block;"></input>', _rowid, _checked);
                            $(thisObj.GridID).jqGrid('setCell', _rowid, "Delete", actionHtml);
                        }
                    }
                }
            };
            new CGrid().Init(thisObj.GridID, optionServerRole, thisObj.optionClient);
            //$(thisObj.GridID).jqGrid(thisObj.optionClient);
        },
        ReloadGrid: function () {
            $(this.GridID).trigger("reloadGrid");
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
    Mods.Accounts.Role.Init();
});
