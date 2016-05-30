if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.Appendix = {
    Init: function () {
        this.Event();
        this.Grid.Load();
    },
    ControlIDs: {
        btnAddNew: "#Appendix-btnAddNew",
        contentID: "#Appendix-Content",
        formID: "#Appendix-Form"

    },
    OptionsController: {
        template: 'Mods/VouchersExt/AppendixEntry',
        data: "{a:'-', b:'--'}",
        id: "AppendixEntry-Window",
        width: 500,
        height: 240,
        title: "Phục lục hợp đồng",
        rowID: '',
        dataApp: '',
        callbackComplete: function (opts) {
            Mods.VouchersExt.AppendixEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
         $(thisObj.ControlIDs.btnAddNew).off('click');
        $(thisObj.ControlIDs.btnAddNew).on('click', function ()  {
            thisObj.LoadEntryNew();
        });
        $("#Appendix_Grid .ui-icon-pencil").off('click');
        $("#Appendix_Grid").on('click','.ui-icon-pencil', function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
        $("#Appendix_Grid .ui-icon-print").off('click');
        $("#Appendix_Grid").on('click','.ui-icon-print', function () {
            var rowID = $(this).attr('rowid');
            thisObj.Print({ ID: rowID });
        });
         $("#Appendix_Grid .ui-icon-trash").off('click');
        $("#Appendix_Grid").on('click','.ui-icon-trash', function ()  {
            var rowID = $(this).attr('rowid');
            thisObj.ExcuteAction(rowID);
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
    Print: function (_obj) {
        var _width = $(window).width() - 300;
        var _height = $(window).height() - 50;
        var obj = {
            filterXml: $.string.Format('<RequestParams RegisTransRefNo="{0}" ViewID="35" ViewerID="13" Function=""  />',
                _obj.ID)
        };
        FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.report/ReportP',
            data: "{a:1}",
            id: "Report-Window",
            width: _width,
            height: _height,
            title: "Xem báo cáo",
            rowID: '',
            callbackComplete: function (opts) {
                Mods.CoreReport.ReportP.init(obj);
            }
        });
    },
    ExcuteAction: function (id) {
        var thisObj = this;
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Action='DELETE' Function='Transaction_Asset' RefType='23' ID='{2}' />",
         129, FWS.System.Core.UserID(), id);
        FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(xml),
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
        GridId: '#Appendix_Grid',
        GridPager: 'Appendix_GridPage',
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
                colNames: colNameAppendix,
                colModel: colModelAppendix,
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
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
            new CGrid().Init(thisObj.GridId, optionServerAppendix, thisObj.optionClient);
            thisObj.LoadData();
        },
        LoadData: function () {

            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='22'/>", 129, FWS.System.Core.UserID());
            var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
            var serviceUrl = FWS.Web.Core.URL.ContextData;
            FWS.System.IO.Ajax({
                url: serviceUrl,
                type: 'POST',
                data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: xml },
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
                        Mods.VouchersExt.Appendix.OptionsController.dataApp = data[1];
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
    }
};
$(function () {
    Mods.VouchersExt.Appendix.Init();
});