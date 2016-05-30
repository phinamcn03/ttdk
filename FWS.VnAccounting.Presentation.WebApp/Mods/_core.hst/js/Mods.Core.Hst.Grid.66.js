if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst.Grid = {};

Mods.CoreHst.Grid[__HstGridID] = {
    gridId: '#hstInstance',
    instance: null,
    hstOptions: null,
    init: function (options) {
        if (options) {
            var self = this;
            self.hstOptions = options.hstOptions;
            self.hstOptions.contextMenu = self.loadContext(self.options);

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
        }
    },
    loadContext: function (opts) {
        var self = this;
        return {
            callback: function (key, options) {
                switch (key) {
                    case 'showForm':
                        self.showForm({});
                        break;
                }
            },
            items: {
                "showForm": {
                    name: "Xem màn hình - Chi tiết phiếu thu",
                    icon: 'form'
                },
                "hsep2": "---------",
                "exit": {
                    name: "Đóng",
                    icon: 'exit'
                }
            }
        };
    },

    //Xem report
    showReport: function (options) {
        var self = this;
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;

        var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
        console.log(rowdata);
        var obj = {
            filterXml: $.string.Format('<RequestParams RegisTransRefNo="{0}" ViewID="35" ViewerID="13" Function=""  />',
                rowdata.RefNo)
        };
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.report/ReportP',
            data: "{a:1}",
            id: "Report-Window",
            width: _width,
            height: _height,
            title: "Xem báo cáo",
            rowID: '',
            callbackComplete: function (opts) {
                _parent.Mods.CoreReport.ReportP.init(obj);
            }
        });
    },

    //Xem màn hình
    showForm: function (options) {
        var self = this;
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;
        var rowdata = self.instance.getDataAtRow(self.instance.getSelected()[0]);
        //  alert('Đang xử lý ... [' + rowdata.ID + ']');
        var opts = '';
        //PayMethod
        if (rowdata.PayMethod == 0) {
            $(window.parent.document.getElementById('IFunc-119')).remove();
            //139
            _parent.FWS.Web.CTemplateController.LoadPopup({
                template: 'Mods/VouchersExt/CashReceipt',
                data: "{a:1}",
                id: "CashReceipt-Forms",
                width: _width,
                height: _height,
                title: "CashReceipt",
                rowID: '',
                callbackComplete: function (opts) {
                    _parent.Mods.VouchersExt.AReceiptACash.ShowInfo(rowdata.ID);
                }
            });
        }
        else if (rowdata.PayMethod == 1) {
            $(window.parent.document.getElementById('IFunc-139')).remove();
            _parent.FWS.Web.CTemplateController.LoadPopup({
                template: 'Mods/VouchersExt/TranferReciept',
                data: "{a:1}",
                id: "TranferReciept-Forms",
                width: _width,
                height: _height,
                title: "TranferReciept",
                rowID: '',
                callbackComplete: function (opts) {
                    _parent.Mods.VouchersExt.AReceiptATranfer.ShowInfo(rowdata.ID);
                }
            });
        }
    }
};