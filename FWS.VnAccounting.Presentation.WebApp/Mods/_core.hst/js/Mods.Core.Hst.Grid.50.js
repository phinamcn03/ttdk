if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst.Grid = {};

Mods.CoreHst.Grid[__HstGridID] = {
    instance: null,
    hstOptions: null,
    options: null,
    init: function (options) {
        if (options) {
            var self = this;
            self.hstOptions = options.hstOptions;
            self.options = options.options;
            self.hstOptions.contextMenu = self.loadContext(self.options);
            var afterInit = self.hstOptions.afterInit;
            self.hstOptions.afterInit = function () {
                console.log("afterInit");
                if (afterInit instanceof Function)
                    afterInit.call();
                if (self.instance == null)
                    self.instance = $(self.gridId).handsontable('getInstance');
            };
        }
    },
    loadContext: function (opts) {
        var self = this;
        return {
            callback: function (key, options) {
                switch (key) {
                    case 'set_price_all':
                        self.setPrice(opts);
                        break;
                    case 'set_price_row':
                        self.setPrice();
                        break;
                    case 'save_all':
                        self.showConfig(1);
                        break;
                    case 'save_row':
                        self.showConfig(2);
                        break;
                }
            },
            items: {
                "set_price_row": {
                    name: "Set Price Row"
                },
                "set_price_all": {
                    name: "Set Price All"
                },
                "save_row": {
                    name: "Save Row"
                },
                "save_all": {
                    name: "Save All"
                },
                "exit": {
                    name: "Exit"
                }
            }
        };
    },
    setPrice: function (opts) {
        var self = this;
        if (typeof opts == 'undefined' || opts == null) {
            var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
            if (typeof rowdata.RefPrice != 'undefined' && rowdata.RefPrice != '') {
                rowdata.SalePrice = rowdata.RefPrice;
            }
        }
        else {
            $.each(opts.data, function (index, item) {
                if (typeof item.RefPrice != 'undefined' && item.RefPrice != '') {
                    item.SalePrice = item.RefPrice;
                }
            });
        }
        self.instance.render();
    },
    showConfig: function (type) {
        var self = this;
        if (parent && $.isFunction(parent.FWS.Web.Dialog.Grid.Show)) {
            parent.FWS.Web.Dialog.Grid.Show({ GridID: self.options.gridID, height: 300, Type: type });
        }
    },
    action: function (opts) {
        var self = this;
        var detail = '';
        if (opts.Type == '2') {
            var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
            if (rowdata.SalePrice != "") {
                var objItem = { ItemID: rowdata.ID, SalePrice: rowdata.SalePrice, UnitID: rowdata.UnitID };
                detail += new CXml('Item', objItem).getXml();
            }
        }
        else {
            $.each(self.instance.getData(), function (index, item) {
                if (item.SalePrice != "") {
                    var objItem = { ItemID: item.ID, SalePrice: item.SalePrice, UnitID: item.UnitID };
                    detail += new CXml('Item', objItem).getXml();
                }
            });
        }

        if (detail == '')
            return;
        var objInput = { UserID: '', LanguageID: '129' };
        var inputValue = new CXml('InputValue', objInput).getXml();
        var objParams = {
            Function: "InventoryPriceBoard",
            StockID: "0",
            ObjectID: "0",
            EffectedDate: opts.EffectedDate
        };
        inputValue += new CXml('RequestParams', objParams).getXml().replace('/>', '>' + detail + '</RequestParams>');
        var paraData = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue) };
        $.Ajax({
            url: 'Core/CoreService.asmx/ExecuteAction',
            type: 'post',
            data: paraData,
            dataType: 'xml',
            isUseServiceData: 1,
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                data = data.CSV2JSON();
                if (data) {
                    if (parent && $.isFunction(parent.FWS.Web.Dialog.Message))
                        parent.FWS.Web.Dialog.Message({ message: data[0].Description });
                }
            }
        });
    }
};