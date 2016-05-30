if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst.Grid = {};

Mods.CoreHst.Grid[__HstGridID] = {
    hstOptions: null,
    instance: null,
    gridId: '#hstInstance',
    rowSelected: null,
    init: function (options) {
        if (options) {
            var self = this;
            self.hstOptions = options.hstOptions;
            self.loadConfig();
            self.events();
        }
    },
    loadConfig: function () {
        var self = this;
        var afterInit = self.hstOptions.afterInit;
        self.hstOptions.afterSelectionByProp = function (rowIndex, colName, rangeRowlikeExcel, rangeColumnlikeExcel) {
            if (self.instance == null)
                self.instance = $(self.gridId).handsontable('getInstance');
            var data = self.instance.getDataAtRow(rowIndex);
            //console.log('::data', colName, data);
            self.rowSelected = {
                Data: data,
                Name: colName,
                Index: rowIndex
            };
        };
        self.hstOptions.contextMenu = self.loadContext.call();
    },
    loadContext: function () {
        var self = Mods.CoreHst.Grid[__HstGridID];
        function menuCallback(key, options) {
            switch (key) {
                case 'set_cell':
                    self.savePrice();
                    break;
                case 'set_col':
                    self.savePrice(self.hstOptions);
                    break;
                case 'save_cell':
                    self.save();
                    break;
                case 'save_col':
                    self.save(true);
                    break;
                case 'save_cell_price':
                    self.showConfig(2);
                    break;
                case 'save_col_price':
                    self.showConfig(1);
                    break;
            }
        };
        // some build handler to call asynchronously
        function createCustomMenu(ctr) {
            var td = ctr;
	  var rowSelected = self.instance.getSelected();
            var colIdx = rowSelected[1];          
            //cac cot dynamic
            if (colIdx > 8) {
                return {
                    callback: menuCallback,
                    items: {
                        "save_cell_price": {
                            name: "Ghi nhận giá bán / ô đang chọn",
                            icon: 'update'
                        },
                        "save_col_price": {
                            name: "Ghi nhận giá bán / cột đang chọn",
                            icon: 'update'
                        },
                        "hsep2": "---------",
                        "exit": {
                            name: "Exit",
                            icon: "exit"
                        }
                    }
                };
            }
            else {
                var colName = self.hstOptions.columns[colIdx].data;
                switch (colName) {
                    case 'PriceCurrent':
                        return {
                            callback: menuCallback,
                            items: {
                                "set_cell": {
                                    name: "Sao chép từ giá tham chiếu » vào ô",
                                    icon: 'save'
                                },
                                "set_col": {
                                    name: "Sao chép từ giá tham chiếu » vào cột",
                                    icon: 'save'
                                },
                                "save_cell": {
                                    name: "Cập nhật giá bán / ô đang chọn",
                                    icon: 'update'
                                },
                                "save_col": {
                                    name: "Cập nhật giá bán / cột đang chọn",
                                    icon: 'update'
                                },
                                "hsep2": "---------",
                                "exit": {
                                    name: "Exit",
                                    icon: "exit"
                                }
                            }
                        };
                        break;
                    default:
                        return false;
                        break;
                }
            }
        };
        // some asynchronous click handler
        $(self.gridId).on('mouseup', 'table.htCore tbody tr td', function (e) {
            if (e.which == 3) {
                var $this = $(this);
                $this.data('runCallbackThingie', createCustomMenu);
                var _offset = $this.offset(),
                    position = { x: _offset.left + 10, y: _offset.top + 10 };
                setTimeout(function () {
                    try {
                        $this.contextMenu(position);
                    } catch (e) { }
                }, 1);
            }
        });

        // setup context menu
        $.contextMenu({
            selector: self.gridId + ' table.htCore tbody tr td',
            trigger: 'none',
            build: function ($trigger, e) {
                return $trigger.data('runCallbackThingie')($trigger);
            }
        });
    },
    savePrice: function (opts) {
        var self = this;
        if (typeof opts == 'undefined' || opts == null) {
            var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
            if (typeof rowdata.PriceRef != 'undefined' && rowdata.PriceRef != '') {
                rowdata.PriceCurrent = rowdata.PriceRef;
            }
        }
        else {
            $.each(opts.data, function (index, item) {
                if (typeof item.PriceRef != 'undefined' && item.PriceRef != '') {
                    item.PriceCurrent = item.PriceRef;
                }
            });
        }
        self.instance.render();
    },
    showConfig: function (type) {
        var self = this;
        if (parent && $.isFunction(parent.FWS.Web.Dialog.Grid.Show)) {
            parent.FWS.Web.Dialog.Grid.Show({ GridID: __HstGridID, height: 300, Type: type });
        }
    },
    save: function (isCol) {
        var self = this;
        if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Show))
            parent.FWS.System.IO.AjaxOverlay.Show();
        if (self.rowSelected != null && typeof self.rowSelected != 'undefined') {
            var selected = self.rowSelected;
            var colOptions = self.getColOptions(selected.Name);
            if (typeof colOptions.hstIsDynamic != 'undefined' && colOptions.hstIsDynamic) {
                if (isCol) {
                    selected.Data = self.instance.getData();
                }
                self.actionA(selected);
            }
        }
    },

    getColOptions: function (colName) {
        var self = this,
            ret = null;
        $.each(self.hstOptions.columns, function (index, item) {
            if (item.data == colName) {
                ret = item;
                return false;
            }
        });
        return ret;
    },
    actionA: function (options) {
        var self = this;
        var detail = '';
        var objParams = {
            Function: "InventoryPriceBoard",
            ObjectID: "0",
            EffectedDate: options.Name
        };
        var data = options.Data;
        if (data instanceof Array) {
            $.each(data, function (index, item) {
                for (var i in item) {
                    if (i == options.Name) {
                        if (item[i] != "") {
                            var objItem = { ItemID: item.ItemID, SalePrice: item[i], UnitID: item.UID, StockID: item.SID };
                            detail += new CXml('Item', objItem).getXml();
                        }
                        break;
                    }
                }
            });
        }
        else if (data instanceof Object) {
            if (typeof data[options.Name] != 'undefined' && data[options.Name] != '') {
                var objItem = { ItemID: data.ItemID, SalePrice: data[options.Name], UnitID: data.UID, StockID: data.SID };
                detail += new CXml('Item', objItem).getXml();
            }
        }
        if (detail == '') {
            if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                parent.FWS.System.IO.AjaxOverlay.Hide();
            return;
        }
        var objInput = { UserID: '', LanguageID: '129' };
        var inputValue = new CXml('InputValue', objInput).getXml();

        inputValue += new CXml('RequestParams', objParams).getXml().replace('/>', '>' + detail + '</RequestParams>');
        var paraData = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue) };

        self.actionCall(paraData);
    },

    action: function (opts) {
        var self = this;
        var detail = '';
        if (opts.Type == '2') {
            var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
            if (rowdata.PriceCurrent != "") {
                var objItem = { ItemID: rowdata.ItemID, SalePrice: rowdata.PriceCurrent, UnitID: rowdata.UID, StockID: rowdata.SID };
                detail += new CXml('Item', objItem).getXml();
            }
        }
        else {
            $.each(self.instance.getData(), function (index, item) {
                if (item.PriceCurrent != "") {
                    var objItem = { ItemID: item.ItemID, SalePrice: item.PriceCurrent, UnitID: item.UID, StockID: item.SID };
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
            ObjectID: "0",
            EffectedDate: opts.EffectedDate
        };
        inputValue += new CXml('RequestParams', objParams).getXml().replace('/>', '>' + detail + '</RequestParams>');
        var paraData = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue) };
        self.actionCall(paraData);
    },

    actionCall: function (paraData) {
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
    },

    actionCustomStyle: function (instance, td, row, col, prop, value, cellProperties) {

    },
    actionRenderer: function (instance, td, row, col, prop, value, cellProperties) {
        //console.log('::', cellProperties, value);
        Handsontable.AutocompleteCell.renderer.apply(this, arguments);
        //var rData = instance.getDataAtRow(row);
    },
    events: function () {
        var self = this;

    }
};     