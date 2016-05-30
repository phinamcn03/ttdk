if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.AP = {};
var NumRow = 1;
var Precision = 0;
var Groupseparator = ',';
var ObjMesseage = {
    SaveConfirm:'Bạn muốn lưu đơn đặt hàng này?',
    SaveTitle:'Lưu đơn đặt hàng'
};
Mods.AP.Order = {
    ServiceUrl: '../Mods/AP/Service/PurchaseOrderService.asmx',
    Init: function () {
        this.Grid.Load();
        this.Event();
        FWS.System.IO.Datebox("#APOrder-txtVourcherDate");
        this.SetDafaultValue();
        var thisObj = this; ;
        jQuery(document).bind('keydown', 'Ctrl+s', function (evt) {
            thisObj.SaveOrder();
            return false;
        });


    },

    ClearForm: function () {
        this.Grid.Clear();
        $('input').val('').removeAttr('IDValue');
    },
    SetDafaultValue: function () {
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd-MM-yyyy');
        $("#APOrder-txtVourcherDate").datebox('setValue', sCustom);
        this.GetRefNo();
    },
    GetRefNo: function () {
        var thisObj = this; ;
        FWS.System.IO.Ajax({
            url: Mods.AP.Order.ServiceUrl + '/GetNextRefNo',
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $("#APOrder-txtVourcherNo").val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    FormatUS: function (val) {
        return $.parseFloat(val, 'n', 'vi-VN');
    },

    SaveOrder: function () {
        var thisObj = this;
        var templateMaster = '<InputValue UserID = "1" PartnerID="{0}" ReferenceID="{1}" RefType="4" RefDate="{2}" Amount="{3}" RefNo="{4}" Note="{5}"/>';
        var templateDetail = '<ItemDetail ItemID="{0}" Quantity="{1}" Price="{2}" Amount="{3}" TaxID="1"/>';
        var inputDetail = "";
        var objData = $(thisObj.Grid.GridId).jqGrid('getRowData');
        var Amount = 0;
        var pInputValue = "";
        $.each(objData, function (index, objRow) {
            if (objRow.ID != '') {
                var RowAmount = thisObj.FormatUS(objRow.Amount);
                Amount += RowAmount;
                inputDetail += $.string.Format(templateDetail, objRow.ItemID, thisObj.FormatUS(objRow.Quantity), thisObj.FormatUS(objRow.Price), RowAmount);
            }
        });

        var sVourcherDate = $("#APOrder-txtVourcherDate").datebox('getValue');
        var dVourcherDate = $.parseDate(sVourcherDate, 'dd-MM-yyyy'); //
        var VourcherDate = $.format(dVourcherDate, 'yyyy-MM-dd');
        pInputValue = $.string.Format(templateMaster, $("#APOrder-txtVendorCode").attr('IDValue'), $("#APOrder-txtReferenceID").val(), VourcherDate, Amount, $("#APOrder-txtVourcherNo").val(), $("#APOrder-txtNode").val());
        pInputValue += inputDetail;



        $.messager.confirm(ObjMesseage.SaveTitle, ObjMesseage.SaveConfirm, function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/AP/Service/PurchaseOrderService.asmx/CreateTrasaction',
                    type: 'POST',
                    data: { InputValue: pInputValue },
                    success: function (data, textStatus, jqXHR) {
                        var data = $(data).find("string").text();
                        data = eval("(" + data + ")");
                        if (data.IsSuccessfull) {
                            $.messager.alert('Result order Purchase ', 'Successfull!');
                            Mods.AP.Order.ClearForm();
                            Mods.AP.Order.SetDafaultValue();
                        }
                    }
                });
            }
        });


       
    },
    CheckConditionSave: function () {

    },
    Event: function () {
        var thisObj = this;
        thisObj.CreateAutocomplete();
        $("#Order-btnSave").click(function () {
            var validate = $("#APOrder-Form").form('validate');
            if (validate) {
                thisObj.SaveOrder();
            }
        });

        $("#Order-btnNew").click(function () {
            Mods.AP.Order.ClearForm();
            Mods.AP.Order.SetDafaultValue();
        });
        $("#Order-btnClear").click(function () {


        });
        //        $("#Customer-btnSearchAdvance").click(function () {
        //            thisObj.LoadEntrySearch();
        //        });
        //        $("#Customer_Grid .ui-icon-trash").live("click", function () {
        //            var rowID = $(this).attr('rowid');
        //            thisObj.ExecuteDelete({ ID: rowID });
        //        });
        $("#Order_Grid .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetDataEditDetail(rowID);
        });


    },

    CreateAutocomplete: function () {
        var url = "../Mods/Items/Service/VendorService.asmx/GetDataAutoComplete";
        FWS.System.IO.Autocomplete("#APOrder-txtVendorCode", url, {
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
                    return $.string.Format("Code='{0}' Name ='{1}'", $("#APOrder-txtVendorCode").val(), '')
                },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0] + " - " + data[1];
                return '';
            },
            formatResult: function (data) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0];
                return '';
            }
        }).result(function (event, item) {
            if (typeof item != 'undefined' && item.length > 4) {
                $("#APOrder-txtVendorName").val(item[1]);
                $("#APOrder-txtTax").val(item[2]);
                $("#APOrder-txtAddress").val(item[3]);
                $("#APOrder-txtContact").val(item[4]);
                $("#APOrder-txtVendorCode").attr("IDValue", item[5]);
            }
            else {
                $("#APOrder-txtVendorName").val('');
                $("#APOrder-txtTax").val('');
                $("#APOrder-txtAddress").val('');
                $("#APOrder-txtContact").val('');
                $("#APOrder-txtVendorCode").removeAttr("IDValue");
            }
        });

        FWS.System.IO.Autocomplete("#APOrder-txtVendorName", url, {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("Code='{1}' Name ='{0}'", $("#APOrder-txtVendorName").val(), '') },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[1] + " - " + data[0];
                return '';
            },
            formatResult: function (data) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[1];
                return '';
            }
        }).result(function (event, item) {
            if (typeof item != 'undefined' && item.length > 4) {
                $("#APOrder-txtVendorCode").val(item[1]);
                $("#APOrder-txtTax").val(item[2]);
                $("#APOrder-txtAddress").val(item[3]);
                $("#APOrder-txtContact").val(item[4]);
                $("#APOrder-txtVendorCode").attr("IDValue", item[5]);
            }
            else {
                $("#APOrder-txtVendorCode").val('');
                $("#APOrder-txtTax").val('');
                $("#APOrder-txtAddress").val('');
                $("#APOrder-txtContact").val('');
                $("#APOrder-txtVendorCode").removeAttr("IDValue");
            }
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
        var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}" Action="Delete"/>', 1, opts.ID);
        $.messager.confirm('Xóa khách hàng', 'Bạn có chắc muốn xóa Khách hàng này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/CustomerService.asmx/Update',
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
    Grid: {
        GridUrl: Mods.AP.Order + '/GetGrid',
        GridId: '#APOrder_Grid',
        GridPager: 'APOrder-_GridPage',
        optionClient: "",
        IDRowEdit: 0,
        Clear: function () {
            var thisObj = this;
            $(thisObj.GridId).jqGrid("clearGridData");
            $("#gs_Quantity").numberbox('setValue', 1);
        },
        DeleteRow: function (rowID) {
            $(this.GridIdridID).jqGrid('delRowData', rowID);
        },
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                //   gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNameAPOrder,
                colModel: colModelAPOrder,
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
            new CGrid().Init(thisObj.GridId, optionServerAPOrder, thisObj.optionClient);
            jQuery(thisObj.GridId).jqGrid('filterToolbar');
            thisObj.CreateAutoCompleteGrid();
            thisObj.HotKey();
            thisObj.SetFormatType();
            $("#gs_Quantity").val(1);
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        SetDataEditDetail: function (rowID) {
            var thisObj = Mods.AP.Order;
            this.IDRowEdit = rowID;
            var objRow = $(this.GridId).jqGrid('getRowData', rowID);
            $("#gs_ItemCode").val(objRow.ItemCode).attr("IDValue", objRow.ItemID).focus();
            $("#gs_Price").numberbox('setValue', thisObj.FormatUS(objRow.Price));
            $("#gs_Amount").numberbox('setValue', thisObj.FormatUS(objRow.Amount));
            $("#gs_Quantity").numberbox('setValue', thisObj.FormatUS(objRow.Quantity));
            $("#gs_ItemName").val(objRow.ItemName);
            $("#gs_Note").val(objRow.Note);
            $("#gs_Unit").val(objRow.Unit);
        },
        InsertGridLocal: function () {
            var objThis = Mods.AP.Order;
            $("#gs_ItemCode").focus();
            var Quantity = $("#gs_Quantity").numberbox('getValue');
            var Price = $("#gs_Price").numberbox('getValue');
            var Amount = $("#gs_Amount").numberbox('getValue');
            var ItemCode = $("#gs_ItemCode").val();
            if (ItemCode == '') {
                $("#gs_ItemCode").focus();
                return;
            }
            if (Amount === '' || Amount == 0) {
                $("#gs_Price").focus();
                return;
            }
            var dataRow = {};
            dataRow.ItemName = $("#gs_ItemName").val();
            dataRow.ItemCode = $("#gs_ItemCode").val();
            dataRow.Unit = $("#gs_Unit").val();
            dataRow.Note = $("#gs_Note").val();
            dataRow.CreditAccount = ''; // $("#gs_CreditAccount").attr("IDValue");
            dataRow.ItemID = $("#gs_ItemCode").attr("IDValue");
            dataRow.Price = Price;
            dataRow.Quantity = Quantity;
            dataRow.Amount = Amount;
            if (this.IDRowEdit == 0) {
                dataRow.ID = NumRow++;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.Grid.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
            }
            else {
                dataRow.ID = this.IDRowEdit;
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.Grid.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.IDRowEdit = 0;
            }
            $("#gs_Price").focus();
            $('input[id^="gs_"]').val('').removeAttr('IDValue');
            $("#gs_Price").numberbox('setValue', '');
            $("#gs_Amount").numberbox('setValue', '');
            $("#gs_Quantity").numberbox('setValue', 1);

        },
        SetFormatType: function () {
            $("#gs_Quantity").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $("#gs_Price").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
            $("#gs_Amount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        },
        HotKey: function () {
            var objThis = this;
            $("#gs_Quantity").keyup(function (e) {
                var Quantity = $("#gs_Quantity").val();
                var Price = $("#gs_Price").numberbox('getValue');
                if (Quantity == "") {
                    $("#gs_Quantity").focus();
                    return;
                }
                //console.log( "val", $("#gs_Quantity").val());
                if (!isNaN(Price)) {
                    $("#gs_Amount").numberbox('setValue', (Quantity * Price));
                }
            });

            $("#gs_Price").keyup(function (e) {
                var Price = $("#gs_Price").val();
                var Quantity = $("#gs_Quantity").numberbox('getValue');
                if (Price == "") {
                    $("#gs_Price").focus();
                    return;
                }
                //console.log( "val", $("#gs_Quantity").val());
                if (!isNaN(Price)) {
                    $("#gs_Amount").numberbox('setValue', (Quantity * Price));
                }
            });
            $("#gs_Amount").attr('readonly', 'readonly');
            $('input[id^="gs_"]').bind('keydown', 'return', function (evt) { objThis.InsertGridLocal() });
            $("#gs_Price").bind('tab', 'return', function (evt) { $("#gs_Note").focus() });
        },
        CreateAutoCompleteGrid: function () {
            var url = "../Mods/AP/Service/PurchaseOrderService.asmx/"; gs_ItemCode
            FWS.System.IO.Autocomplete("#gs_ItemCode", url + "GetProdutAutoComplete", {
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
                    $("#gs_ItemName").val(item[1]);
                    $("#gs_ItemCode").attr('IDValue', item[2]);
                    $("#gs_Unit").val(item[3]);
                    //$("#gs_Price").numberbox('setValue', item[6]);
                }
                else {
                    $("#gs_ItemName").val('');
                    $("#gs_ItemCode").removeAttr('IDValue');
                    $("#gs_Unit").val('');
                    $("#gs_Price").val('');
                }
            });
        }
    }
};
$(function () {
    Mods.AP.Order.Init();
    //console.log('AP_OrderPurchase_Controls', AP_OrderPurchase_Controls);
});
