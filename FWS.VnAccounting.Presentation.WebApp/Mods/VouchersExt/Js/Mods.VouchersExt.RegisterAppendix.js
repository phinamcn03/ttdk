if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.RegisterAppendix = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    RefType: 21,
    DataPayment: [],
    ControlIDs: {
        MainTab: "#RegisterAppendix-MainTab",
        btnAddNew: "#RegisterAppendix-btnAddNew",
        txtRefDate: "#RegisterAppendix-txtRefDate",
        txtRefNo: "#RegisterAppendix-txtRefNo",
        txtSoTB: "#RegisterAppendix-txtSoTB",
        OldRefNo: "#RegisterAppendix-OldRefNo",
        ObjectID: "#RegisterAppendix-ObjectID",
        ObjectName: "#RegisterAppendix-ObjectName",
        Address: "#RegisterAppendix-Address",
        Content: "#RegisterAppendix-Content"
    },
    Init: function () {
        var thisObj = this;
        thisObj.CreateControl();
        thisObj.Event();
        thisObj.GridColateral.Load();
        thisObj.GridReColateral.Load();
        thisObj.GridProperty.Load();
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $(thisObj.ControlIDs.Content).parent().attr('id');

        $(thisObj.ControlIDs.btnAddNew).off('click');
        $(thisObj.ControlIDs.btnAddNew).on('click', function () {
            thisObj.ExcuteAction("INSERT", 0);
        });

    },
    CreateControl: function () {
        var thisObj = this;
        var demo = new CTabs({ fit: false });
        demo.Init(thisObj.ControlIDs.MainTab);
        thisObj.CreateKHTX();
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtRefDate);
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtRefDate).datebox('setValue', sCustom);
    },
    LoadDefault: function () {
        var thisObj = this;
        //  thisObj.GetRefNo();
        //  var date = new Date(FWS_SERVER_CONFIG.Date);
        //  var sCustom = $.format(date, 'dd/MM/yyyy');
        //   $(thisObj.ControlIDs.txtDateMsg).datebox('setValue', sCustom);
        //  $(thisObj.ControlIDs.txtCollType).combobox('setValue', 0);
        ///  $(thisObj.ControlIDs.txtSendTo).combobox('setValue', 292);
    },
    ClearInfo: function () {
        var windowID = this.ControlIDs.Content;
        $(windowID).find("input:text").val('');
        // this.LoadDefault();
    },

    Properties: {
        windowID: "",
        rowID: "0"
    },
    CreateKHTX: function () {
        var thisObj = this;
        var _url = thisObj.ServiceUrl + "/GetCustomerAutoComplete";
        var _ac1 = FWS.System.IO.Autocomplete(thisObj.ControlIDs.ObjectID, _url, {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.ControlIDs.ObjectID).val(), "") },
                typeRef: 1
            },
            formatItem: function (data, i, total) {
                if (data.length > 0)
                    return data[1] + " - " + data[2];
                return '';
            },
            formatResult: function (data) {
                if (data.length > 0)
                    return data[1]
                return "";
            }
        }).result(function (event, item) {
            if (item.length > 0) {
                $(thisObj.ControlIDs.ObjectName).val(item[2]);
                $(thisObj.ControlIDs.Address).val(item[3]);
            }
            else {
                $(thisObj.ControlIDs.ObjectName).val("");
                $(thisObj.ControlIDs.Address).val("");
            }
        });
    },
    CreateInput: function (action) {
        var thisObj = this;
        var str = '<RequestParams ID="{0}" RefNo="{1}" SoTB="{12}" RefDate="{2}" RegisTransRefNo="{3}" Description="{4}" Function="Transaction_Asset"';
        str += ' ObjectID="{5}" ObjectName="{6}" RefType="21" OldRefNo="{7}" AssetType="{8}"';
        str += ' AssetLicenseNumber="{9}" AssetNumberPlate="{10}" Action="{11}">';

        var sDate = $(thisObj.ControlIDs.txtRefDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var _date = $.format(dDate, 'MM/dd/yyyy');
        var _tNo = $(thisObj.ControlIDs.txtRefNo).val();
        var _tSoTB = $(thisObj.ControlIDs.txtSoTB).val();
        var _tNoOld = $(thisObj.ControlIDs.OldRefNo).val();
        var _tObjID = $(thisObj.ControlIDs.ObjectID).val();
        var _tObjName = ''; // $(thisObj.ControlIDs.ObjectName).val();
        var _txtObjectAddress = $(thisObj.ControlIDs.Address).val();
        var req = $.string.Format(str, '', _tNo, _date, '', '', _tObjID, _tObjName, _tNoOld, '', '', '', action, _tSoTB);

        //<RequestParams ID='{2}' RefNo='{3}' RefDate='{4}' RegisTransRefNo='{5}' Description='{6}' Function="Transaction_Asset" ObjectID='{7}' ObjectName='{8}' RefType='{9}' OldRefNo='{10}' AssetType='{11}' AssetLicenseNumber='{12}' AssetNumberPlate='{13}' Action='{14}'/>
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/>{2}{3}{4}{5}</RequestParams>",
         129, FWS.System.Core.UserID(), req, thisObj.GridColateral.InputString(), thisObj.GridReColateral.InputString(), thisObj.GridProperty.InputString());
        console.log(xml);
        return xml;
    },
    ExcuteAction: function (action, id) {
        var thisObj = this;
        var inputValue = thisObj.CreateInput(action);
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
                        thisObj.ClearInfo();
                        $(thisObj.GridColateral.GridId).clearGridData();
                        $(thisObj.GridReColateral.GridId).clearGridData();
                        $(thisObj.GridProperty.GridId).clearGridData();
                    }
                    else {
                        $.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    },
    GridColateral: {
        GridUrl: '',
        GridId: '#RegisterAppendix_GridColateral',
        GridPager: 'RegisterAppendix_GridColateralPage',
        GridView: "#gview_RegisterAppendix_GridColateral",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameCollateral,
                colModel: colModelCollateral,
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    thisObj.SetInfoGrid(rowID);
                    //  alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerCollateral, thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.HotKey();
            //  thisObj.LoadData();
        },
        HotKey: function () {
            var objThis = this;
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Name' || _controlid == 'gs_CMND' || _controlid == 'gs_Address')
                    objThis.InsertRow();
                else if (_controlid == 'gs_Name')
                    $(objThis.GridView + " #gs_Name").focus();
            });
            $(objThis.GridId).find(".ui-icon-trash").unbind("click");
            $(objThis.GridId).find(".ui-icon-pencil").unbind("click");
            $(objThis.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.Delete(rowID);
            });
            $(objThis.GridId + " .ui-icon-pencil").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};
            dataRow.Name = $(objThis.GridView + " #gs_Name").val();
            dataRow.CMND = $(objThis.GridView + " #gs_CMND").val();
            dataRow.Address = $(objThis.GridView + " #gs_Address").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1
                dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_Name").focus();
            }
            else {
                dataRow.ID = this.iDRowEdit;
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_Name").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow)
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
            $(objThis.GridView + " #gs_Name").val(obj.Name);
            $(objThis.GridView + " #gs_CMND").val(obj.CMND);
            $(objThis.GridView + " #gs_Address").val(obj.Address);
            console.log("SetInfoGrid",idRow);

        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                input += $.string.Format('<AssetOwnner Code="{0}" Name="{1}" Addess="{2}" IDCardNumber="{3}"/>',
                                            obj.ID, $.HtmlEncode(obj.Name), $.HtmlEncode(obj.Address), $.HtmlEncode(obj.CMND));
            }
            return input;
        }
    },
    GridReColateral: {
        GridUrl: '',
        GridId: '#RegisterAppendix_GridReColateral',
        GridPager: 'RegisterAppendix_GridReColateralPage',
        GridView: "#gview_RegisterAppendix_GridReColateral",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameReCollateral,
                colModel: colModelReCollateral,
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerReCollateral, thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

            thisObj.HotKey();
            thisObj.CreateControl();
            //  thisObj.LoadData();
        },
        CreateControl: function () {
            var thisObj = this;
            var _url = Mods.VouchersExt.RegisterAppendix.ServiceUrl + "/GetCustomerAutoComplete";
            var _ac1 = FWS.System.IO.Autocomplete(thisObj.GridView + " #gs_Code", _url, {
                width: 378,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.GridView + " #gs_Code").val(), "") },
                    typeRef: 1
                },
                formatItem: function (data, i, total) {
                    if (data.length > 0)
                        return data[1] + " - " + data[2];
                    return '';
                },
                formatResult: function (data) {
                    if (data.length > 0)
                        return data[1]
                    return "";
                }
            }).result(function (event, item) {
                if (item.length > 0) {
                    $(thisObj.GridView + " #gs_Name").val(item[2]);
                    $(thisObj.GridView + " #gs_Address").val(item[3]);
                }
                else {
                    $(thisObj.GridView + " #gs_Name").val("");
                    $(thisObj.GridView + " #gs_Address").val("");
                }
            });
        },
        HotKey: function () {
            var objThis = this;
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Name' || _controlid == 'gs_Code' || _controlid == 'gs_Address')
                    objThis.InsertRow();
                else if (_controlid == 'gs_Name')
                    $(objThis.GridView + " #gs_Name").focus();
            });
            $(objThis.GridId).find(".ui-icon-trash").unbind("click");
            $(objThis.GridId).find(".ui-icon-pencil").unbind("click");
            $(objThis.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                console.log(rowID);
                objThis.Delete(rowID);
            });
            $(objThis.GridId + " .ui-icon-pencil").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};
            dataRow.Name = $(objThis.GridView + " #gs_Name").val();
            dataRow.Code = $(objThis.GridView + " #gs_Code").val();
            dataRow.Address = $(objThis.GridView + " #gs_Address").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1
                dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_Name").focus();
            }
            else {
                dataRow.ID = this.iDRowEdit;
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_Name").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow)
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
            $(objThis.GridView + " #gs_Name").val(obj.Name);
            $(objThis.GridView + " #gs_Code").val(obj.Code);
            $(objThis.GridView + " #gs_Address").val(obj.Address);
        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                input += $.string.Format('<Warranter ID="{0}" Code="{1}" Name="{2}" Address="{3}"/>',
                                            obj.ID, $.HtmlEncode(obj.Code), $.HtmlEncode(obj.Name), $.HtmlEncode(obj.Address));
            }
            return input;
        }
    },
    GridProperty: {
        GridUrl: '',
        GridId: '#RegisterAppendix_GridProperty',
        GridPager: 'RegisterAppendix_GridPropertyPage',
        GridView: "#gview_RegisterAppendix_GridProperty",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameProperty,
                colModel: colModelProperty,
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerProperty, thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

            thisObj.HotKey();
            thisObj.CreateControl();
            //  thisObj.LoadData();
        },
        CreateControl: function () {
            var thisObj = this;
            var eml = thisObj.GridView + " #gs_Type";
            var url = "../Mods/VouchersExt/Service/Appendix.asmx" + "/GetContextData";
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='AssetType' />", 129, FWS.System.Core.UserID());
            FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: 1,
                onSelect: function (record) {
                    $(thisObj.GridView + " #gs_Type").attr("TextValue", record.text);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function (r) {

                    // $(thisObj.GridView + " #gs_Type").combobox('setValue', 1);
                    // console.log(r);
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
        },
        HotKey: function () {
            var objThis = this;
            console.log("enter");
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Type' || _controlid == 'gs_LicenseNumber' || _controlid == 'gs_NumberPlate' || _controlid == 'gs_Description')
                    objThis.InsertRow();
                else if (_controlid == 'gs_Type')
                    $(objThis.GridView + " #gs_Type").focus();
            });
            $(objThis.GridId).find(".ui-icon-trash").unbind("click");
            $(objThis.GridId).find(".ui-icon-pencil").unbind("click");
            $(objThis.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.Delete(rowID);
            });
            $(objThis.GridId + " .ui-icon-pencil").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};

            dataRow.TypeID = $(objThis.GridView + " #gs_Type").combobox('getValue');
            dataRow.Type = $(objThis.GridView + " #gs_Type").attr("TextValue");
            //  dataRow.Type = $(objThis.GridView + " #gs_Type").attr("IDValue"); ;
            dataRow.LicenseNumber = $(objThis.GridView + " #gs_LicenseNumber").val();
            dataRow.NumberPlate = $(objThis.GridView + " #gs_NumberPlate").val();
            dataRow.Description = $(objThis.GridView + " #gs_Description").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1
                dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_Type").focus();
            }
            else {
                dataRow.ID = this.iDRowEdit
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_Type").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow)
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
            $(objThis.GridView + " #gs_Type").combobox('setValue', obj.TypeID);
            //  $(objThis.GridView + " #gs_Type").val(obj.Type);
            $(objThis.GridView + " #gs_TypeID").val(obj.TypeID);
            $(objThis.GridView + " #gs_LicenseNumber").val(obj.LicenseNumber);
            $(objThis.GridView + " #gs_NumberPlate").val(obj.NumberPlate);
            $(objThis.GridView + " #gs_Description").val(obj.Description);
        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                input += $.string.Format('<Asset Type="{0}" LicenseNumber="{1}" NumberPlate="{2}" Description="{3}"/>',
                                             obj.Type, $.HtmlEncode(obj.LicenseNumber), $.HtmlEncode(obj.NumberPlate), $.HtmlEncode(obj.Description));
            }
            return input;
        }
    }
};
$(function () {
    Mods.VouchersExt.RegisterAppendix.Init();
});
