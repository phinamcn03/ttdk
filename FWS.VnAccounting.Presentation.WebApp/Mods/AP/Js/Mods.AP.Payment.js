if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.AP == 'undefined')
    Mods.AP = {};

$('#AP-Payment-Del').live('click', function () {
    var $grid = $('#Payment_Grid');
    //console.log($grid);
    //console.log($grid.getDataIDs());
    var data = $grid.getRowData();
    console.log('::DATA', data);

    var colName = 'TotalAmount';
    for (idx in data) {
        var d = data[idx];
        var v = d[colName];

        var vEn = $.parseFloat(v, 'n', 'vi-VN');
        console.log(v, ' >>> ', vEn);
    }

    //Format Date
    console.log('---------------------------');
    var sF1 = '2012-03-13 08:10:50';
    var date = new Date(sF1);
    console.log(sF1);
    console.log('---------------------------');
    var sEn = $.format(date, 'd', 'en-US');
    var sVn = $.format(date, 'd', 'vi-VN');
    var sCustom = $.format(date, 'MM-dd-yyyy')
    console.log('Show En:: ', sEn);
    console.log('Show Vn:: ', sVn);
    console.log('Show Cus:: ', sCustom);

    console.log('---------------------------');
    var dEn = $.parseDate(sEn, 'd', 'en-US');
    var dVn = $.parseDate(sVn, 'd', 'vi-VN');
    var dCus = $.parseDate(sCustom, 'MM-dd-yyyy');
    console.log('Data En:: ', dEn);
    console.log('Data Vn:: ', dVn);
    console.log('Data Cus:: ', dCus);
    console.log('---------------------------');
});

Mods.AP.Payment = {
    Init: function () {
        this.Grid.Load();
        this.Event();
        this.ComboBox.Init();
    },
    Event: function () {
        var thisObj = this;
        $("#Search-Payment").click(function () {
            var options = {
                TemplateTime: $("#TemplateTime-Payment").val(),
                RefNo: $("#InwardNo-Payment").val(),
                FromDate: $("#FromDate-Payment").datebox("getValue"),
                TotalAmount: $("#TotalAmount-Payment").val(),
                ToDate: $("#ToDate-Payment").datebox("getValue"),
                PartnerID: $("#PartnerName-Payment").attr("pId")
            };
            var input = FWS.System.Core.BuildInputValue(options);
            thisObj.Grid.Search(input);
        });
        this.CreateAutocomplete();
    },
    ComboBox: {
        Init: function () {
            var options = {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    //Mods.Inventory.InwardStockEntry.OnChange(record);
                }
            };
            FWS.System.IO.Combobox("#TemplateTime-Payment", '../Mods/Inventory/Service/InwardStockService.asmx/GetIntDefinationList', options);
        }
    },
    CreateAutocomplete: function () {
        var url = "../Mods/Items/Service/VendorService.asmx/GetDataAutoComplete";
        var _ac1 = FWS.System.IO.Autocomplete("#PartnerName-Payment", url, {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: true,
            scrollHeight: 220,
            extraParams: {
                inputValue: $.string.Format("Code='{0}' Name ='{1}'", $("#PartnerName-Payment").val(), ''),
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[1];
            },
            formatResult: function (data) {
                return data[0];
            }
        }).result(function (event, item) {
            $("#PartnerName-Payment").attr("pId", item[5]);
        });

    },
    Grid: {
        GridUrl: '../Mods/AP/Service/PurchasePaymentService.asmx/GetGrid',
        GridId: '#Payment_Grid',
        GridPager: 'Payment_GridPage',
        optionClient: {},
        Load: function () {
            var thisObj = Mods.AP.Payment.Grid;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colNamePurchasePayment,
                colModel: colModelPurchasePayment,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                }
            };
            new CGrid().Init(thisObj.GridId, optionServerPurchasePayment, thisObj.optionClient);
        },
        Search: function (inputValue) {
            $(this.GridId).clearGridData();
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(this.GridId, this.optionClient);
        }
    }
};

$(function () {
    Mods.AP.Payment.Init();
});
