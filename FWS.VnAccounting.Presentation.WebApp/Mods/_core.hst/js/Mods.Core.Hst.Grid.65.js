if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst = {};
if (typeof Mods.CoreHst == 'undefined') Mods.CoreHst.Grid = {};

Mods.CoreHst.Grid[__HstGridID] = {
    gridId: '#hstInstance',
    instance: null,
    hstOptions: null,
    init: function (options) {
        if (options) {
            var _this = this;
            _this.hstOptions = options.hstOptions;
            _this.hstOptions.contextMenu = _this.loadContext(_this.options);

            _this.hstOptions.afterSelectionByProp = function (rowIndex, colName, rangeRowlikeExcel, rangeColumnlikeExcel) {
                if (_this.instance == null)
                    _this.instance = $(_this.gridId).handsontable('getInstance');
                var data = _this.instance.getDataAtRow(rowIndex);
                //console.log('::data', colName, data);
                _this.rowSelected = {
                    Data: data,
                    Name: colName,
                    Index: rowIndex
                };
            };
        }
    },
    loadContext: function (opts) {
        var _this = this;
        return {
            callback: function (key, options) {

                switch (key) {
                    case 'showReport':
                        _this.showReport({ type: '1', context: "COMBINE" });
                        break;
                    case 'showReport_ones':
                        _this.showReport({ type: '1' });
                        break;
                    case 'showReport_GCN':
                        _this.showReport({ type: '2' });
                        break;
                    case 'showForm':
                        _this.showForm({});
                        break;
                    case 'showResult':
                        _this.showResult({});
                        break;
                    case 'showCancelForm':
                        _this.showCancelForm({});
                        break;
                    case 'Delete':
                        _this.deleteWithConfirm({});
                        break;
                }
            },
            items: {
                "showReport": {
                    name: "TBGT (gộp) (Các dòng đang chọn)",
                    icon: 'report'
                },
                "showReport_ones": {
                    name: "TBGT (riêng) (Các dòng đang chọn)",
                    icon: 'report'
                },
                "showReport_GCN": {
                    name: "Giấy chứng nhận (Các dòng đang chọn)",
                    icon: 'report'
                },
                "showForm": {
                    name: "Xem màn hình",
                    icon: 'form'
                },
               
                "showResult": {
                    name: "Thông báo kết quả tiếp nhận",
                    icon: 'form'
                },
                "showCancelForm": {
                    name: "Hủy TBGT",
                    icon: 'form'
                },
                "Delete": {
                    name: "Xóa Đơn",
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
        var _this = this;
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;

        var arr = [];
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.Status >=0) arr.push(it.ID);
        });
        if (arr.length == 0)
        {
            _parent.$.messager.alert('Lỗi', 'Không có dòng nào được chọn, hoặc đã bị xóa.');
            return;
        }

        var extend = '';
        if (options.context)
            extend = $.string.Format(' Context="{0}"', options.context);
        switch (options.type) {
            case '1':
                extend += ' ViewID="35" ViewerID="13"';
                break;
            case '2':
                extend += ' ViewID="38" ViewerID="18"';
                break;
        }
        var obj = {
            filterXml: $.string.Format('<RequestParams TransactionIDs="{0}" Function="" {1} />', arr.join(','), extend)
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
        var _this = this;
        var _parent = parent;
        var _width = 700;
        var _height = 420;
        var rowdata = _this.instance.getDataAtRow(_this.instance.getSelected()[0]);
        if (rowdata.Status == -1) {
            _parent.$.messager.alert('Lỗi', 'Đơn/Công văn này đã bị xóa.');
            return;
        }
        //   alert('Đang xử lý ... [' + rowdata.RefNo + ']');
        console.log("ShowForm", rowdata);
        var opts = '';
        // this.OptionsController.rowID = opts.ID;
        //console.log(rowdata);
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/EditRegisterAppendix',
            data: "{a:1}",
            id: "EditRegisterAppendix-Forms",
            width: _width,
            height: _height,
            title: "EditRegisterAppendix",
            rowID: rowdata.RefNo,
            ID: rowdata.ID,
            callbackComplete: function (opts) {
                _parent.Mods.VouchersExt.ARegisterAppendixEdit.DefaultInit(opts);
                // _parent.Mods.VouchersExt.Receipt.ShowInfo(rowdata.ID);
            }
        });
    },

    showResult: function (options) {
        var _this = this;
        var _parent = parent;
        var _width = 500;
        var _height = 255;
        var rowdata = _this.instance.getDataAtRow(_this.instance.getSelected()[0]);
        if (rowdata.Status == -1) {
            _parent.$.messager.alert('Lỗi', 'Đơn/Công văn này đã bị xóa.');
            return;
        }
        // this.OptionsController.rowID = opts.ID;
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/ucResultMsg',
            data: "{a:1}",
            id: "ResultMsg-Forms",
            width: _width,
            height: _height,
            title: "Thông báo kết quả tiếp nhận",
            rowID: rowdata.RefNo,
            rowData: rowdata,
            ID: rowdata.ID,
            callbackComplete: function (opts) {
                _parent.Mods.VouchersExt.ResultMsg.DefaultInit(opts);
                //   _parent.Mods.VouchersExt.ResultMsg.ShowInfo(rowdata);
            }
        });
        
    },
    showCancelForm: function (options) {
        var _this = this;
        var _parent = parent;
        var _width = 500;
        var _height = 290;
        var rowdata = _this.instance.getDataAtRow(_this.instance.getSelected()[0]);
        if (rowdata.Status == -1) {
            _parent.$.messager.alert('Lỗi', 'Đơn/Công văn này đã bị xóa.');
            return;
        }

        // this.OptionsController.rowID = opts.ID;
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/ucCancelTBGTForm',
            data: "{a:1}",
            id: "CancelTBGTForm-Forms",
            width: _width,
            height: _height,
            title: "Hủy TBGT",
            rowID: rowdata.RefNo,
            rowData: rowdata,
            ID: rowdata.ID,
            callbackComplete: function (opts) {
                _parent.Mods.VouchersExt.CancelTBGTForm.DefaultInit(opts);
                //   _parent.Mods.VouchersExt.ResultMsg.ShowInfo(rowdata);
            }
        });
    },
    deleteWithConfirm: function(option)
    {
        var _this = this;
        var _parent = parent;
        var _width = 500;
        var _height = 290;
        var rowdata = _this.instance.getDataAtRow(_this.instance.getSelected()[0]);
        if (rowdata.Status == -1)
        {
            _parent.$.messager.alert('Không thể xóa', 'Đơn/Công văn này đã bị xóa rồi.');
            return;
        }
        // this.OptionsController.rowID = opts.ID;
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/ucConfirmDelete',
            data: "{a:1}",
            id: "ConfirmDelete-Forms",
            width: _width,
            height: _height,
            title: "Xóa công văn",
            rowID: rowdata.RefNo,
            rowData: rowdata,
            ID: rowdata.ID,
            callbackComplete: function (opts) {
                _parent.Mods.VouchersExt.ConfirmDelete.DefaultInit(opts);
                //   _parent.Mods.VouchersExt.ResultMsg.ShowInfo(rowdata);
            }
        });
    },
    deleteRecord: function (option) {
        var _this = this;
        var _parent = parent;
        var rowdata = _this.instance.getDataAtRow(_this.instance.getSelected()[0]);
        // '<RequestParams ID="1" RefType="21" RefDate="01/07/2013"  TypeCode="EDIT" Function="Transaction_Asset" Action="DELETE">'
        var paraData = $.string.Format('<RequestParams ID="{0}" RefType="21" RefDate="01/07/2013"  TypeCode="EDIT" Function="Transaction_Asset" Action="DELETE"  />',
                rowdata.ID)
        paraData = $.string.Format("<InputValue UserID=\"{0}\"/>", $.cookie('FWS:ACCOUNTING:USER.ID')) + paraData;
        _parent.FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: _parent.FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(paraData),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = _parent.FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        //  parent.FWS.Web.Dialog.Message({ message: data[0].Description });
                        _parent.$.messager.alert('OK', objRet.Description);
                    }
                    else {
                        _parent.$.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    }
};