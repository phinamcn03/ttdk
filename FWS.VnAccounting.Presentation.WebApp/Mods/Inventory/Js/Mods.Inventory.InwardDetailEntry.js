if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};

Mods.Inventory.InwardDetailEntry = {
    ServiceUrl: '../Mods/Inventory/Service/InwardStockService.asmx',

    DefaultInit: function () {
        var windowID = "#" + $('#InwardDetailEntry-Content').parent().attr('id');
        var rowID = $(windowID).attr('row-id') || "0";
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();

        switch (rowID) {
            case "-1":
                break;
            case "0":
                break;
            default:
                this.ShowInfo({ ID: rowID });
                break;
        }

    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Init: function () {
        this.Event();
        this.InitData.Load();
    },
    InitData: {
        Data: {},

        Load: function () {
            this.GetCredit();
            this.GetDebit();
            this.GetStock();
            this.GetUnit();
        },
        GetDebit: function () {
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardDetailEntry.ServiceUrl + '/GetAccountList',
                type: 'POST',
                data: { inputValue: 'InventoryDebit' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        thisObj.Debit = data;
                        $('#InwardStockDetailEntry-txtDebit').combobox({
                            data: data,
                            valueField: 'id',
                            textField: 'text'
                        });
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetCredit: function () {
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardDetailEntry.ServiceUrl + '/GetAccountList',
                type: 'POST',
                data: { inputValue: 'InventoryCredit' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        thisObj.Credit = data;
                        $('#InwardStockDetailEntry-txtCredit').combobox({
                            data: data,
                            valueField: 'id',
                            textField: 'text'
                        });
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetUnit: function () {
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardDetailEntry.ServiceUrl + '/GetUnitList',
                type: 'POST',
                data: { inputValue: '' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        thisObj.Unit = data;
                        $('#InwardStockDetailEntry-txtUnit').combobox({
                            data: data,
                            valueField: 'id',
                            textField: 'text'
                        });
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetStock: function () {
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: Mods.Inventory.InwardDetailEntry.ServiceUrl + '/GetStockList',
                type: 'POST',
                data: { inputValue: '' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval("(" + data + ")");
                        thisObj.Stock = data;
                        $('#InwardStockDetailEntry-txtStock').combobox({
                            data: data,
                            valueField: 'id',
                            textField: 'text'
                        });
                    } catch (e) { $.iLog(e); }
                }
            });
        }
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#InwardDetailEntry-Content').parent().attr('id');
        $("#InwardStockDetailEntry-btnSave").click(function () {
            thisObj.Update();
            $(windowID).window('close');
        });
        $("#InwardStockDetailEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#InwardStockDetailEntry-txtCode").focus();
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            InwardNo: $("#InwardStockDetailEntry-txtCode").val(),
            ItemID: $("#InwardStockDetailEntry-txtCode").val(),
            InwardName: $("#InwardStockDetailEntry-txtName").val(),
            StockName: $("#InwardStockDetailEntry-txtStock").combobox('getValue'),
            StockID: $("#InwardStockDetailEntry-txtStock").combobox('getValue'),
            Unit: $("#InwardStockDetailEntry-txtUnit").combobox('getValue'),
            DebitAmount: $("#InwardStockDetailEntry-txtDebit").combobox('getValue'),
            CreditAmount: $("#InwardStockDetailEntry-txtCredit").combobox('getValue'),
            Quantity: $("#InwardStockDetailEntry-txtQuanlity").val(),
            Price: $("#InwardStockDetailEntry-txtPrice").val(),
            TotalAmount: $("#InwardStockDetailEntry-txtTotal").val(),
            ActionRow: "INSERT"
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {

        }
    },
    Update: function () {
        var thisObj = this;
        var opts = thisObj.GetInfo();
        Mods.Inventory.InwardStockEntry.Grid.AddRow(opts);
    }
};
$(function () {
    Mods.Inventory.InwardDetailEntry.Init();
});