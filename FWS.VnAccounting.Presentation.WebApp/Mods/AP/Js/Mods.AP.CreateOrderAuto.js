if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.AP == 'undefined')
    Mods.AP = {};
Mods.AP.CreateOrderAuto = {
    Init: function () {
        this.Grid.Load();
    },
  
    Grid: {
        GridUrl: FWS.Web.Core.URL.ContextData,
        GridId: '#CreateOrderAuto_Grid',
        GridPager: 'CreateOrderAuto_GridPage',
        optionClient: "",
        lastsel: 0,
        Load: function () {
            var thisObj = this;
            console.log("hehe");
            console.log(colModelCreateOrder);
            thisObj.optionClient = {

                extraParams: {

            },
            pager: thisObj.GridPager,
            colNames: colNameCreateOrder,
            colModel: colModelCreateOrder,
            editurl: "javascript:void(0)",
            afterInsertRow: function (rowid, rowdata, rowelem) {
                var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

            },
            afterEditCell: function (rowid, cellname, value, iRow, iCol) {
                console.log("afterEditCell");
            },
            onSelectRow: function (rowid, status) {
                if (rowid && rowid == thisObj.lastsel) {
                    $(thisObj.GridId).editRow(rowid, { keys: false, mtype: "local", oneditfunc: function () { } });
                } else {
                    if (rowid && rowid !== thisObj.lastsel) {
                        $(thisObj.GridId).saveRow(thisObj.lastsel, false, 'clientArray');
                        $(thisObj.GridId).restoreRow(thisObj.lastsel);
                        $(thisObj.GridId).editRow(rowid, { keys: false, mtype: "local", oneditfunc: function () { } });
                        //jQuery(thisObj.GridId).jqGrid('restoreRow', thisObj.lastsel);
                        // jQuery(thisObj.GridId).jqGrid('editRow', rowid, true);
                        thisObj.lastsel = rowid;
                    }
                }
            },
            beforeEditCell: function (rowid, cellname, value, iRow, iCol) {
                console.log("beforeEditCell");
            },
            onCellSelect: function (rowid, iCol, cellcontent) {
            },
            loadComplete: function () {
                $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

            },
            gridComplete: function () {
                /* Edit */
                $(thisObj.GridId).find(".ui-icon-pencil").unbind("click");
                $(thisObj.GridId).find(".ui-icon-pencil").click(function (e) {
                    var rowID = $(this).attr('rowid');
                    //  Mods.Items.Customer.LoadEntryEdit({ ID: rowID });
                    e.stopPropagation();
                });
                /* Delete */
                $(thisObj.GridId).find(".ui-icon-trash").unbind("click");
                $(thisObj.GridId).find(".ui-icon-trash").click(function (e) {
                    var rowID = $(this).attr('rowid');
                    // Mods.Items.Customer.ExecuteDelete({ ID: rowID });
                    e.stopPropagation();
                });



            }
        };

        new CGrid().Init(thisObj.GridId, optionCreateOrder, thisObj.optionClient);
        $(thisObj.GridId).bind('keydown', function (e) {
            if (e.keyCode == 38 || e.keyCode == 40)
                e.preventDefault();
            if (e.keyCode == 13) {
                $(thisObj.GridId).saveRow(thisObj.lastsel, false, 'clientArray');
                $(thisObj.GridId).editRow(thisObj.lastsel * 1 + 1, { keys: false, mtype: "local" });
                thisObj.lastsel = thisObj.lastsel * 1 + 1;
            }
        });
        this.LoadData();
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
    LoadData: function () {
        var thisObj = this;
        var sInputValue = '';

        //var objRequestParam = { Function: options.view.fData };
        var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ItemIDs='' StockIDs='' ViewID='2' Function='InventoryAlertMinAvaiable' />", 129);
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
        for (var i = 0; i <= dataGrid.length; i++)
            $(opts.gridID).jqGrid('addRowData', i + 1, dataGrid[i]);
    }
}
}
    $(function () {
        Mods.AP.CreateOrderAuto.Init();
    });
