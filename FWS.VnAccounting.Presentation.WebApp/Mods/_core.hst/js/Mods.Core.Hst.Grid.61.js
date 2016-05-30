if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst.Grid = {};

Mods.CoreHst.Grid[__HstGridID] = {
    hstOptions: null,
    instance: null,
    gridId: '#hstInstance',
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
        delete self.hstOptions.startRows;
        self.hstOptions.minSpareRows = 1;
        self.hstOptions.autoWrapRow = true;
        self.hstOptions.autoWrapCol = true;

        self.hstOptions.afterChange = function (changes, source) {
            if (changes instanceof Array && changes.length == 1) {
                var item = changes[0];
                switch (item[1]) {
                    case "Action":
                        var settings = self.instance.getSettings();
                        if (item[3] == '1') {
                            $.each(settings.columns, function (index, item) {
                                switch (item.data) {
                                    case "ItemName":
                                        item.type = {
                                            strict: false,
                                            editor: Handsontable.AutocompleteEditor,
                                            source: function (query, process) { process(["Vinh", "Tai", "Name", "Thien"]); }
                                        };
                                    case "SerialNo":
                                        item.type = {
                                            strict: false,
                                            editor: Handsontable.AutocompleteEditor,
                                            source: function (query, process) { process(["red", "yellow", "blue"]); }
                                        };
                                        break;

                                }
                            });
                        }
                        else if (item[3] == '2') {
                            $.each(settings.columns, function (index, item) {
                                switch (item.data) {
                                    case "ItemName":
                                        item.type = {
                                            strict: false,
                                            editor: Handsontable.AutocompleteEditor,
                                            source: function (query, process) { process(["A", "B", "C", "D"]); }
                                        };
                                    case "SerialNo":
                                        item.type = {
                                            strict: false,
                                            editor: Handsontable.AutocompleteEditor,
                                            source: function (query, process) { process(["1", "2", "3"]); }
                                        };
                                        break;

                                }
                            });
                        }
                        self.instance.updateSettings(settings);
                        self.instance.render();
                        break;
                }
            }
        };

        var afterInit = self.hstOptions.afterInit;
        self.hstOptions.afterInit = function () {
            if (afterInit instanceof Function)
                afterInit.call();
            if (self.instance == null)
                self.instance = $(self.gridId).handsontable('getInstance');
        };

        self.hstOptions.contextMenu = self.loadContext();

        //add editor     
        //$.each(self.hstOptions.columns, function (index, item) {
        //    switch (item.data) {
        //        case "ItemName":
        //            item.type = {
        //                strict: false,
        //                editor: Handsontable.AutocompleteEditor,
        //                source: ["Vinh", "Tai", "Name", "Thien"]
        //            };
        //        case "SerialNo":
        //            item.type = {
        //                strict: false,
        //                editor: Handsontable.AutocompleteEditor,
        //                source: ["red", "yellow", "blue"]
        //            };
        //            break;
        //
        //    }
        //});

        self.hstOptions.cells = function (row, col, prop) {
            this.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                switch (prop) {
                    case 'ItemName':
                    case 'SerialNo':
                        self.actionRenderer.apply(this, arguments);
                        break;
                    default:
                        new CHstFormater().exec.apply(this, arguments);
                        break;
                }
            }
        };
        console.log('::[61]', self.hstOptions);
    },
    loadContext: function () {
        var self = this;
        return {
            callback: function (key, options) {

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
    actionCustomStyle: function (instance, td, row, col, prop, value, cellProperties) {

    },
    actionRenderer: function (instance, td, row, col, prop, value, cellProperties) {
        //console.log('::', cellProperties, value);
        Handsontable.AutocompleteCell.renderer.apply(this, arguments);
        //var rData = instance.getDataAtRow(row);
    },
    events: function () {
        var self = this;
        $(self.gridId)
            .css("cursor", "pointer")
            .on("click", "img.ImgAction,img.ImgAction2", function (obj) {
                var colName = 'Plus1';
                if ($(this).hasClass('ImgAction')) {
                    colName = 'Plus2';
                }
                self.instance.setDataAtRowProp(selectedRowData.Index, colName, '-');

                self.loadChildData(selectedRowData.Index);
            })
            .on("click", "img.minus-client,img.minus-account", function (obj) {
                var colName = 'Plus1';
                if ($(this).hasClass('minus-account')) {
                    colName = 'Plus2';
                }
                self.instance.setDataAtRowProp(selectedRowData.Index, colName, '+');
            })
            .on("dblclick", "table.htCore tbody tr", function (obj) {
                if (selectedRowData != null) {
                    switch (selectedRowData.Name) {
                        case "Code":
                        case "LocalCurrencyCode":
                            selectedRowData.Data.LocalCurrencyCode = $(self.filterXml).attr('CurrencyCode');
                            selectedRowData.Data.LocalCurrencyID = $(self.filterXml).attr('Currency');
                            if ($.isFunction(parent.BalanceShow))
                                parent.BalanceShow(selectedRowData.Data);
                            break;
                    }
                }
            });
    }
};     