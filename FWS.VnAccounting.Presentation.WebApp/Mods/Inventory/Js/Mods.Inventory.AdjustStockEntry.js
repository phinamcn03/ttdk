if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
var NumRow = 1;
Mods.Inventory.AdjustStockEntry = {
    ServiceUrl: '../Mods/Inventory/Service/AdjustmentStockService.asmx',
    Init: function () {

        this.Event();
        //        this.GetStocks();
        //        this.GetRefNo();

    },
   
    SetData: function () {
        var thisObj = Mods.Inventory.AdjustStockEntry;
        var _date = $.format(new Date(FWS_SERVER_CONFIG.Date), 'd', FWS_SERVER_CONFIG.Culture);
        $("#AdjustStockEntry-txtAdjDate").datebox("setValue", _date);
        FWS.System.IO.Combobox("#AdjustStockEntry-txtAdjustmentType", thisObj.ServiceUrl + '/GetTemplate',
            {
                data: { inputValue: 'CustomControl="Global/AdjustmentType"' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                },
                onLoadSuccess: function () {
                }
            }
        );

            FWS.System.IO.Combobox("#AdjustStockEntry-txtStockList", thisObj.ServiceUrl + '/GetStockList',
            {
                data: { inputValue: '<InputValue UserID="1" />' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                },
                onLoadSuccess: function () {
                }
            }
        );

            FWS.System.IO.Ajax({
                url: "../Mods/AP/Service/PurchaseOrderService.asmx" + '/GetRefNo',
                type: 'POST',
                data: { inputValue: 10 },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $("#AdjustStockEntry-txtAdjNo").val(data.RefNo);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
    },
    DefaultInit: function (opts) {
        var windowID = opts.id;
        var rowID = opts.rowID;
        var parentOptions = opts.parentOptions;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.Properties.parentOptions = parentOptions;
        this.ClearInfo(windowID);
        switch (rowID) {
            case "-1":
                this.ShowSearch();
                break;
            case "0":
                if (!this.Grid.IsLoad)
                    this.Grid.Load({ ID: 0 });
                else
                    this.Grid.ReloadGrid();
                break;
            default:
                this.ShowInfo({ ID: rowID });
                break;
        }
        FWS.System.IO.Datebox("#AdjustStockEntry-txtAdjDate");
        this.SetData();
        // this.Grid.Load();
    },
    Properties: {
        windowID: "",
        rowID: "0",
        parentOptions: null
    },
    ClearInfo: function (element) {
        $("#" + element).find("input:text").val('');
    },
    Event: function () {
        var thisObj = this;
        $("#AdjustStockEntry-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#AdjustStockEntry-btnDelete").click(function () {
            var rowID = thisObj.Grid.GetSelectedRow();
            if (rowID != "-1")
                thisObj.ExecuteDelete(rowID, 1);
            else
                $.messager.alert('Xóa kho', 'Xin chọn Kho cần xóa');
        });
        $("#AdjustStockEntry-btnSearch").click(function () {
            thisObj.Grid.Search({
                FromDate: thisObj.FormatDate($("#TranferStockEntry-txtFromDate").datebox('getValue')),
                ToDate: thisObj.FormatDate($("#TranferStockEntry-txtToDate").datebox('getValue'))
            });
        });

        $('#TranferStockEntry-txtFromDate, #TranferStockEntry-txtToDate').datebox();

        $(thisObj.Grid.GridId + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.ExecuteDelete(rowID, 0);
            //
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadContent(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    GetRefNo: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Inventory/Service/InwardStockService.asmx/GetNextRefNo',
            type: 'POST',
            data: { inputValue: ' RefType="9"' },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $("#TranferStockEntry-txtTranferNo").val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },

    GetInfo: function () {
        var sDate = $("#TranferStockEntry-txtTranferDate").datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var IDate = $.format(dDate, 'MM/dd/yyyy');
        var options = {
            ID: this.Properties.rowID || "0",
            FromStock: $("#TranferStockEntry-cbFromStock").combobox('getValue'),
            ToStock: $("#TranferStockEntry-cbToStock").combobox('getValue'),
            InNo: $("#TranferStockEntry-txtTranferNo").val(),
            InDate: IDate,
            InDesc: $("TranferStockEntry-txtDescription").val(),
            Amount: objFooter.Amount,
            ClientID: 1,
            RefType: 1
        };
        return options;
    },
    GetInputValue: function (opts) {
        var thisObj = this;
        var input
        opts = opts || thisObj.GetInfo();
        var options = {
            ID: ""
        };
        $.extend(true, options, opts);
        var rowID = this.Properties.rowID;
        //        var action = rowID == "0" ? "INSERT" : "UPDATE";
        //        var inputMaster = $.string.Format('<Master UserID="1" Action="{0}" ID="{1}" ObjectID="{2}" ObjectType="{3}" Description="{4}" InwardDate="{5}" RefType="{6}" Code ="{7}" Amount="{8}" RefID="{9}" ClientID="{10}" />',
        //                                   action, options.ID, options.Name, options.Type, options.InDesc, options.InDate, options.InRef, options.InNo, options.Amount, options.InRef, options.ClientID);
        //        var inputDetail = "\n";
        //        var ids = $(thisObj.GridID).getDataIDs();
        //        for (var i = 0; i < ids.length; i++) {
        //            var obj = $(thisObj.GridID).getRowData(ids[i]);
        //            if (obj.ActionRow != "")
        //                inputDetail += $.string.Format('<Detail Action="{0}" ID="{1}" MasterID="{2}" ToStock="{3}" ItemID="{4}" Quantity="{5}" Price="{6}" Amount="{7}" ExpDate="{8}" SerialNo="{9}" CreditAccount ="{10}" DebitAccount="{11}" Description="{12}" />',
        //                                                     obj.ActionRow, obj.ID, options.ID, obj.StockID, obj.ItemID, obj.Quantity, obj.Price, obj.Amount, "", "123", obj.CreditAmountID, obj.DebitAmountID, "");

        //        }
        //        input = $.string.Format('<InputValue>{0} {1}</InputValue>', inputMaster, inputDetail);
        return input
    },
    Update: function (opts) {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = thisObj.GetInputValue();
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        // Mods.Inventory.InwardStockEntry.Back();
                        // Mods.Inventory.InwardStockEntry.Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Grid: {
        GridId: '#AdjustStockEntry_Grid',
        GridPager: 'AdjustStockEntry_Gridpage',
        iDRowEdit: 0,
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function () {
            thisObj = this;
            thisObj.optionClient = {
                gridUrl: Mods.Inventory.AdjustStockEntry.ServiceUrl + "/GetTranferStockEntryList",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: ''
                },
                colNames: colNameTranferStockEntry,
                colModel: colModelTranferStockEntry,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    Mods.Inventory.AdjustStockEntry.LoadEntryEdit({ ID: rowID });
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                onSelectRow: function (rowId) {
                    //                    var cbIsChecked = ($("#jqg_InwardStock_Grid_" + rowId).is(':checked'));
                    //                    if (cbIsChecked == false) {
                    //                        $("#" + rowId).removeClass("DeleteClass");
                    //                    }
                    //                    else {
                    //                        Mods.Inventory.InwardStock.CheckDeleteRow({ ID: rowId });
                    //                    }
                },
                gridComplete: function () {


                }
            };
            new CGrid().Init(thisObj.GridId, TranferStockEntryOption, thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar');
            thisObj.CreateAutocompleteGrid();
            thisObj.HotKey();
        },

        ReloadGrid: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format('FromDate="{0}" ToDate ="{1}"', opts.FromDate, opts.ToDate);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || -1;
        },
        HotKey: function () {
            var objThis = this;
            $("input[type=text]").focus(function () { $(this).select(); });
            $("#gs_Unit").attr('readonly', 'readonly');
            $('input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Quantity')
                    objThis.InsertRow();
                else if (_controlid == 'gs_ItemCode')
                    $(objThis.GridId + " #gs_Description").focus();
            });
        },
        InsertRow: function () {
            $("#gs_ItemCode").focus();
            var dataRow = {};
            var objThis = Mods.Inventory.AdjustStockEntry;
            var Quantity = ""//$("#gs_Quantity").numberbox('getValue');
            dataRow.ItemID = $("#gs_ItemName").attr("IDValue");
            dataRow.ItemName = $("#gs_ItemName").val();

            dataRow.ItemCode = $("#gs_ItemCode").val();
            dataRow.Description = $("#gs_Description").val();

            if (dataRow.ItemID == '') {
                $("#gs_ItemCode").focus();
                return;
            }

            dataRow.Unit = $("#gs_Unit").val();
            dataRow.UnitID = $("#gs_Unit").attr("idvalue");

            if (Quantity == "") {
                Quantity = $("#gs_Quantity").val();
            }
            // dataRow.Quantity = Quantity;            
            dataRow.Quantity = 100;
            console.log(dataRow);
            if (this.iDRowEdit == 0) {

                dataRow.ID = NumRow++;
                dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.Grid.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
            }
            else {

                dataRow.ID = this.iDRowEdit;
                var actionRow = $(this.GridId).getCell(dataRow.ID, 'ActionRow');
                if (actionRow == "INSERT")
                    dataRow.ActionRow = "INSERT";
                else
                    dataRow.ActionRow = "UPDATE";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.Grid.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.IDRowEdit = 0;
            }
            $('input[id^="gs_"]').val('').removeAttr('IDValue');
            $("#gs_ItemCode").focus();
        },
        CreateAutocompleteGrid: function () {
            var url = "../Mods/AP/Service/PurchaseOrderService.asmx/";
            console.log(url);
            var _ac1 = FWS.System.IO.Autocomplete("#gs_ItemCode", url + "GetProdutAutoComplete", {
                width: 378,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}'", $("#gs_ItemCode").val(), '') },
                    currPage: 1,
                    numberRowOfPage: 50
                },
                formatItem: function (data, i, total) {
                    if (data.length > 0)
                        return data[0] + " - " + data[1];
                    return '';
                },
                formatResult: function (data) {
                    if (data.length > 0)
                        return data[0]
                    return "";
                }
            }).result(function (event, item) {
                if (item.length > 0) {
                    $("#gs_ItemCode").val(item[0]);
                    $("#gs_ItemName").val(item[1]);
                    $("#gs_ItemName").attr("IDValue", item[2]);
                    $("#gs_Unit").val(item[3]);
                    $("#gs_Unit").attr("IDValue", item[7]);
                }
                else {
                    $("#gs_ItemCode").val('');
                    $("#gs_ItemName").val('');
                    $("#gs_ItemName").attr("IDValue", '');
                    $("#gs_Unit").val('');
                    $("#gs_Unit").attr("IDValue", '');
                }

            });
        }
    }
};
$(function () {
    Mods.Inventory.AdjustStockEntry.Init();
});