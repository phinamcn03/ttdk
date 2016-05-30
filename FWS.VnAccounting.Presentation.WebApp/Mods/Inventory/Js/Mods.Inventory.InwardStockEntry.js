if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
var NumRow = 1;
var Precision = 0;
var Groupseparator = ',';
Mods.Inventory.InwardStockEntry = {
    GridID: '#InwardStockEntry_Grid',
    ServiceUrl: '../Mods/Inventory/Service/InwardStockService.asmx',

    OptionsController: {
        template: 'Mods/Inventory/InwardStockDetailEntry',
        data: "{a:'-', b:'--'}",
        id: "InwardDetailEntry-Window",
        width: 500,
        height: 350,
        title: "InwardDetailEntry Entry",
        callbackComplete: function (options) {
            Mods.Inventory.InwardDetailEntry.DefaultInit(options);
        }
    },
    Init: function () {
        this.DefinationList.Init();
        this.Event();
        this.SetDafaultValue();
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
    },

    Properties: {
        windowID: "",
        rowID: "0",
        parentOptions: null
    },
    Back: function () {
        var parentOptions = this.Properties.parentOptions;
        if (parentOptions)
            FWS.Web.CTemplateController.LoadContent(parentOptions);
    },
    SetDafaultValue: function () {
        //$('#InwardStockEntry-cbType').combobox("select", 2);
        FWS.System.IO.Datebox("#InwardStockEntry-txtInwardDate");
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $("#InwardStockEntry-txtInwardDate").datebox('setValue', sCustom);
        this.DefinationList.GetRefNo();
    },
    SetFormatType: function () {
        $("#gs_Quantity").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox').numberbox();
        $("#gs_Price").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox').numberbox();
        $("#gs_Amount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox').numberbox();
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#InwardStockEntry-Content').parent().attr('id');
        $("#InwardStockEntry-btnSave").click(function () {
            Mods.Inventory.InwardStockEntry.Update();
            // thisObj.Back();
        });
        $("#InwardStockEntry-btnPost").click(function () {
            thisObj.Back();
        });
        $("#InwardStockEntry-btnCancel").click(function () {
            //$(windowID).window('close');
            thisObj.Back();
        });
        $("#InwardStockEntry-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $(thisObj.Grid.GridId + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.Delete(rowID);
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetInfoGrid(rowID);
            //thisObj.LoadEntryEdit({ ID: rowID });
        });
    },

    SaveInward: function () {

    },
    CreateAutocompleteGrid: function () {
        var url = "../Mods/AP/Service/PurchaseOrderService.asmx/";
        var _ac1 = FWS.System.IO.Autocomplete("#gs_InwardNo", this.ServiceUrl + "/GetProdutAutoComplete", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}'", $("#gs_InwardNo").val(), '') },
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
                $("#gs_InwardCode").val(item[0]);
                $("#gs_InwardName").val(item[1]);
                $("#gs_InwardName").attr("IDValue", item[2]);
                $("#gs_Unit").val(item[3]);
                $("#gs_Unit").attr("IDValue", item[7]);
                $("#gs_CreditAmount").val(item[4]);
                $("#gs_DebitAmount").val(item[5]);
                $("#gs_DebitAmount").attr("IDValue", item[8]);
                $("#gs_CreditAmount").attr("IDValue", item[9]);
            }
            else {
                $("#gs_InwardCode").val('');
                $("#gs_InwardName").val('');
                $("#gs_InwardName").attr("IDValue", '');
                $("#gs_Unit").val('');
                $("#gs_Unit").attr("IDValue", '');
                $("#gs_CreditAmount").val('');
                $("#gs_DebitAmount").val('');
                $("#gs_DebitAmount").attr("IDValue", '');
                $("#gs_CreditAmount").attr("IDValue", '');
            }

        });
        var _ac2 = FWS.System.IO.Autocomplete("#gs_DebitAmount", url + "GetAccountList", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue FilterCode="InventoryDebit" UserID="{0}" Code="{1}"/>', "1", $("#gs_DebitAmount").val())
                }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $("#gs_DebitAmount").val(item[2]);
            $("#gs_DebitAmount").attr('IDValue', item[0]);
        });

        var _ac3 = FWS.System.IO.Autocomplete("#gs_CreditAmount", url + "GetAccountList", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue FilterCode="InventoryCredit" UserID="{0}" Code="{1}"/>', "1", $("#gs_CreditAmount").val())
                }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $("#gs_CreditAmount").val(item[2]);
            $("#gs_CreditAmount").attr('IDValue', item[0]);
        });
        var _stock = FWS.System.IO.Autocomplete("#gs_StockName", Mods.Inventory.InwardStockEntry.ServiceUrl + "/GetAutoStocks", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format('<InputValue UserID="{0}" Code="{1}"/>', "1", $("#gs_StockName").val()) }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $("#gs_StockName").val(item[2]);
            $("#gs_StockName").attr('IDValue', item[0]);
        });

    },
    GetInfo: function () {
        var _idObjectName = "InwardStockEntry-txtObjectName" + $("#InwardStockEntry-cbType").combobox('getValue');
        var sDate = $("#InwardStockEntry-txtInwardDate").datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var IDate = $.format(dDate, 'MM/dd/yyyy');
        var objFooter = $(this.Grid.GridId).footerData('get');
        var options = {
            ID: this.Properties.rowID || "0",
            Type: $("#InwardStockEntry-cbType").combobox('getValue'),
            InNo: $("#InwardStockEntry-txtInwardNo").val(),
            Name: $("#" + _idObjectName).attr("cid"),
            InDate: IDate,
            InDesc: $("#InwardStockEntry-txtDescription").val(),
            Posted: 1,
            Amount: objFooter.Amount,
            ClientID: 1,
            InRef: $("#InwardStockEntry-txtReferenceID").val(),
            RefType: 7
        };
        return options;
    },
    SetInfo: function (data) {
        $("#InwardStockEntry-cbType").combobox('select', data.ObjectType);
        $("#InwardStockEntry-txtInwardNo").val(data.Code);
        $("#InwardStockEntry-txtReferenceID").val(data.RefID);
        $("#InwardStockEntry-txtDescription").val(data.Description);
        this.DefinationList.GetObjectName({ ID: data.ObjectID, Type: data.ObjectType });

        var _date = jQuery.format(new Date(data.VoucherDate), "dd/MM/yyyy");
        $('#InwardStockEntry-txtInwardDate').datebox("setValue", _date);
    },
    ClearInfo: function (element) {
        $("#" + element).find("input:text").val('');
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.Grid.iDRowEdit = 0;
        $("#gs_ID").val('');
        $("#gs_InwardNo").val('');
        $("#gs_InwardName").val('');
        $("#gs_InwardName").attr("IDValue", '');
        $("#gs_Unit").val('');
        $("#gs_Unit").attr("IDValue", '');
        $("#gs_CreditAmount").val('');
        $("#gs_DebitAmount").val('');
        $("#gs_DebitAmount").attr("IDValue", '');
        $("#gs_CreditAmount").attr("IDValue", '');
        $("#gs_Quantity").val(0);
        $("#gs_Price").val(0);
        $("#gs_InwardNo").focus();

    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Inventory.InwardStock.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            this.DefinationList.GetInwardStock(opts);
            this.Grid.Load(opts);
        }
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
        var action = rowID == "0" ? "INSERT" : "UPDATE";
        var inputMaster = $.string.Format('<Master UserID="1" Action="{0}" ID="{1}" ObjectID="{2}" ObjectType="{3}" Description="{4}" VoucherDate="{5}" RefType="{6}" Code ="{7}" Amount="{8}" RefID="{9}" ClientID="{10}" />',
                                   action, options.ID, options.Name, options.Type, options.InDesc, options.InDate, options.RefType, options.InNo, options.Amount, options.InRef, options.ClientID);
        var inputDetail = "\n";
        var ids = $(thisObj.GridID).getDataIDs();
        for (var i = 0; i < ids.length; i++) {
            var obj = $(thisObj.GridID).getRowData(ids[i]);
            if (obj.ActionRow != "")
                inputDetail += $.string.Format('<Detail Action="{0}" ID="{1}" MasterID="{2}" StockID="{3}" ItemID="{4}" Quantity="{5}" Price="{6}" Amount="{7}" ExpDate="{8}" SerialNo="{9}" CreditAccount ="{10}" DebitAccount="{11}" Description="{12}" />',
                                                     obj.ActionRow, obj.ID, '', obj.StockID, obj.ItemID, obj.Quantity, obj.Price, obj.Amount, "", "123", obj.CreditAmountID, obj.DebitAmountID, "");
        }
        input = $.string.Format('<InputValue>{0} {1}</InputValue>', inputMaster, inputDetail);
        return input
    },
    Update: function () {
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
                        Mods.Inventory.InwardStockEntry.Back();
                        Mods.Inventory.InwardStock.Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Grid: {
        GridId: '#InwardStockEntry_Grid',
        GridPager: 'InwardStockEntry_Gridpage',
        iDRowEdit: 0,
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        IsLoad: false,
        Load: function (opts) {
            thisObj = this;
            var _inputValue = $.string.Format('ID="{0}" RefType="{1}"', opts.ID,7);
            $.each(colModelInwardStockEntry, function (index, item) {
                item.frozen = false;
            });

            thisObj.optionClient = {
                gridUrl: Mods.Inventory.InwardStockEntry.ServiceUrl + "/GetInwardStockGridEntry",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: _inputValue
                },
                colNames: colNameInwardStockEntry,
                colModel: colModelInwardStockEntry,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                gridComplete: function () {
                    thisObj.IsLoad = true;
                    $(thisObj.GridId).footerData('set', { Price: 'Tổng:', Amount: thisObj.TotalAmount() });
                },
                onSelectRow: function (rowId) {
                    var cbIsChecked = ($("#jqg_InwardStockEntry_Grid_" + rowId).is(':checked'));
                    if (cbIsChecked == false)
                        $("#" + rowId).removeClass("DeleteClass");
                }
            };
            console.log(InwardStockEntryOption);
            ///var sum = grid.jqGrid('getCol', 'Amount', false, 'sum');
            new CGrid().Init(thisObj.GridId, InwardStockEntryOption, thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.HotKey();
            Mods.Inventory.InwardStockEntry.CreateAutocompleteGrid();
            Mods.Inventory.InwardStockEntry.SetFormatType();
            $("#gs_Quantity").val(1);
            $("#gs_Price").val(1);
        },
        TotalAmount: function () {
            var totalAMT = 0.0;
            var thisObj = this;
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '') {
                    if (objRow.ActionRow != "DELETE")
                        totalAMT += $.parseFloat(objRow.Amount, 'n', 'vi-VN');
                }
            });
            return totalAMT;
        },
        HotKey: function () {
            var objThis = this;
            $("input[type=text]").focus(function () { $(this).select(); });
            $("#gs_Quantity").keyup(function (e) {
                var _quantity = $("#gs_Quantity").val();
                var _price = $("#gs_Price").val();

                if (_quantity == "") {
                    $("#gs_Quantity").focus();
                    return;
                }
                if (!isNaN(_price)) {
                    $("#gs_Amount").numberbox('setValue', (_quantity * _price));
                }
            });
            $("#gs_Price").keyup(function (e) {
                var _price = $("#gs_Price").val();
                var _quantity = $("#gs_Quantity").numberbox('getValue');

                if (_price == "") {
                    $("#gs_Price").focus();
                    return;
                }
                if (!isNaN(_price)) {
                    $("#gs_Amount").numberbox('setValue', (_quantity * _price));
                }
            });

            //gs_ 
            $("#gs_Amount").attr('readonly', 'readonly');
            $("#gs_Unit").attr('readonly', 'readonly');
            $('input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Price' || _controlid == 'gs_Note')
                    objThis.InsertRow();
                else if (_controlid == 'gs_ItemCode')
                    $(objThis.GridId + " #gs_Quantity").focus();
            });
        },
        InsertRow: function () {
            // $("#gs_ItemCode").focus();
            var objThis = Mods.Inventory.InwardStockEntry;
            var Quantity = $("#gs_Quantity").numberbox('getValue');
            var Price = $("#gs_Price").numberbox('getValue');
            var Amount = $("#gs_Amount").numberbox('getValue');

            var dataRow = {};
            dataRow.ItemID = $("#gs_InwardName").attr("IDValue");
            dataRow.InwardName = $("#gs_InwardName").val();
            dataRow.InwardNo = $("#gs_InwardNo").val();
            if (dataRow.ItemID == '') {
                $("#gs_ItemCode").focus();
                return;
            }
            dataRow.StockID = $("#gs_StockName").attr("IDValue");
            dataRow.StockName = $("#gs_StockName").val()
            if (dataRow.StockName == '') {
                $("#gs_StockName").focus();
                return;
            }
            // dataRow.Unit = $("#gs_Unit").val();
            dataRow.Unit = $("#gs_Unit").attr("idvalue");
            dataRow.DebitAmount = $("#gs_DebitAmount").val();
            dataRow.DebitAmountID = $("#gs_DebitAmount").attr("IDValue");
            dataRow.CreditAmount = $("#gs_CreditAmount").val();
            dataRow.CreditAmountID = $("#gs_CreditAmount").attr("IDValue");

            if (Price == "") {
                Price = $("#gs_Price").val();
            }
            dataRow.Price = Price;
            if (Quantity == "") {
                Quantity = $("#gs_Quantity").val();
            }
            dataRow.Quantity = Quantity;
            dataRow.Amount = Amount;
            if (dataRow.Amount == "") {
                $("#gs_Amount").focus();
                return;
            }
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
            $(objThis.Grid.GridId).footerData('set', { Price: 'Tổng:', Amount: objThis.Grid.TotalAmount() });
            $('input[id^="gs_"]').val('').removeAttr('IDValue');
            $("#gs_InwardNo").focus();
            return;
        },
        ReloadGrid: function () {
            $(this.GridId).clearGridData();

            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        AddRow: function (obj) {
            var _id = $(this.GridId).getDataIDs().length;
            $(this.GridId).jqGrid('addRowData', _id, obj, "last");
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var options = {
                ID: "",
                FromDate: "",
                ToDate: ""
            };
            $.extend(true, options, opts);
            var inputValue = $.string.Format('ID="{0}" FromDate="{0}" ToDate ="{1}"', options.ID, options.FromDate, options.ToDate);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId + " tr[id='" + rowid + "']").addClass("DeleteClass");
            $(thisObj.GridId).setCell(rowid, 'ActionRow', 'DELETE', '');
            $(thisObj.GridId).footerData('set', { Price: 'Tổng:', Amount: thisObj.TotalAmount() });
        },
        SetInfoGrid: function (idRow) {
            var obj = $(this.GridId).getRowData(idRow);
            if (obj.ActionRow != "DELETE") {
                this.iDRowEdit = idRow;
                //obj.ActionRow, obj.ID, options.ID, obj.StockID, obj.ItemID, obj.Quantity, obj.Price, obj.TotalAmount, "", "123", obj.CreditAmountID, obj.DebitAmountID, "");
                $("#gs_ID").val(obj.ID);
                $("#gs_InwardNo").val(obj.InwardNo);
                $("#gs_InwardName").val(obj.InwardName);
                $("#gs_InwardName").attr("IDValue", obj.InwardID);
                $("#gs_StockName").val(obj.StockName);
                $("#gs_StockName").attr("IDValue", obj.StockID);
                $("#gs_Unit").val(obj.Unit);
                $("#gs_Unit").attr("IDValue", obj.UnitID);
                $("#gs_CreditAmount").val(obj.CreditAmount);
                $("#gs_DebitAmount").val(obj.DebitAmount);
                $("#gs_DebitAmount").attr("IDValue", obj.DebitAmountID);
                $("#gs_CreditAmount").attr("IDValue", obj.CreditAmountID);
                $("#gs_Quantity").val(obj.Quantity);
                $("#gs_Price").val(obj.Price);
                $("#gs_Amount").val(obj.Amount);
            }
        }
    },
    AutoComplete: function (type, control) {
        var _url = this.ServiceUrl + "/GetDataAutoComplete";
        var _acObjectName = FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            //cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: true,
            scrollHeight: 220,
            extraParams: {
                inputType: type,
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                return data[2];
            }
        }).result(function (event, item) {

        });
    },
    OnChange: function (opts) {
        var thisObj = this,
            _parent = $(".cObjectName");
        _parent.html('');
        var _id = "InwardStockEntry-txtObjectName" + opts.value;
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', _id);
        input.setAttribute('style', 'width: 250px;');
        _parent.append(input);

        Mods.Inventory.InwardStockEntry.AutoComplete(opts.value, "#" + _id);
    },
    DefinationList:
    {
        ObjectType: null,
        Init: function () {
            var thisObj = this;
            thisObj.GetObjectType();
        },
        IsFirst: true,
        GetObjectType: function () {
            var thisObj = this;

            FWS.System.IO.Combobox('#InwardStockEntry-cbType', Mods.Inventory.InwardStockEntry.ServiceUrl + '/GetIntDefinationList',
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    Mods.Inventory.InwardStockEntry.OnChange(record);
                },
                onLoadSuccess: function () {
                    $('#InwardStockEntry-cbType').combobox("select", 1);
                    Mods.Inventory.InwardStockEntry.OnChange({ value: 1 });

                }
            }
        );
        },
        GetRefNo: function () {
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardStockEntry.ServiceUrl + '/GetNextRefNo',
                type: 'POST',
                data: { inputValue: ' RefType="7"' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $("#InwardStockEntry-txtInwardNo").val(data.RefNo);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetInwardStock: function (opts) {
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardStockEntry.ServiceUrl + '/GetInwardStock',
                type: 'POST',
                data: { inputValue:  $.string.Format('ID="{0}" RefType="{1}"', opts.ID,7) },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            Mods.Inventory.InwardStockEntry.SetInfo(data);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetObjectName: function (opts) {
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardStockEntry.ServiceUrl + '/GetObjectName',
                type: 'POST',
                data: { inputValue: 'ID="' + opts.ID + '"', inputType: opts.Type },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $("#InwardStockEntry-txtObjectName" + $('#InwardStockEntry-cbType').combobox('getValue')).val(data.Name);
                            $("#InwardStockEntry-txtObjectName" + $('#InwardStockEntry-cbType').combobox('getValue')).attr('cid', data.ID);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        }
    }
};
$(function () {
    Mods.Inventory.InwardStockEntry.Init();
});