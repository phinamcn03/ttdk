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
                if (_this.instance == null) _this.instance = $(_this.gridId).handsontable('getInstance');
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
                    case 'viewReportAll':
                        _this.showReport({ type: 0, NoPrint: 0 });
                        break;
                    case 'viewReport':
                        _this.showReport({ type: 1, NoPrint: 0 });
                        break;
                    case 'viewReportNoPrint':
                        _this.showReport({ type: 1, NoPrint: 1 });
                        break;
                    case 'sendAndViewReport':
                        _this.sendAndShowReport({ type: 1 });
                        break;
                    case 'sendTBNhacNo':
                        _this.sendTBNhacNoMulti({ type: 1 });
                        break;
                }
            },
            items: {
                "viewReportAll": {
                    name: "In thông báo phí [Tất cả]",
                    icon: 'report'
                },
                "hsep1": "---------",
                "viewReport": {
                    name: "In thông báo phí",
                    icon: 'report'
                },
                "viewReportNoPrint": {
                    name: "Xem thông báo phí",
                    icon: 'report'
                },
                "sendAndViewReport": {
                    name: "Gửi thông báo phí qua email",
                    icon: 'report'
                },
                "sendTBNhacNo": {
                    name: "Gửi thông báo nhắc nợ",
                    icon: 'report'
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
        if (options.type == '0') {
            $.each(fnGetData(), function (idx, it) {
                if (it.Selected) arr.push(it.ID);
            });
        }
        else if (options.type == '1') {
            if (_this.rowSelected) {
                arr.push(_this.rowSelected.Data.ID);
            }
        }
        //if (options.NoPrint = '1') {
        //arr.push(options.NoPrint);
        //}
        var dateFrom = _parent.FWS_SERVER_CONFIG.DateFrom;
        var dateTo = _parent.FWS_SERVER_CONFIG.Date;
        var obj = {
            //filterXml: $.string.Format('<RequestParams KHTX="{0}" FromDate="{1}" ToDate="{2}" ViewID="34" ViewerID="12" Function="" />', arr.join(','), dateFrom, dateTo)
            filterXml: $.string.Format('<RequestParams KHTX="{0}" Context="CONGNO" ViewID="34" ViewerID="12" Function="" NoPrint="{1}" />', arr.join(','), options.NoPrint)
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

    sendAndShowReport: function (option) {
        var _this = this;
        var arr = [];
        var obj = {
            filterXml: $.string.Format('<RequestParams Action="UPDATE_SENDTHONGBAOPHI" Email="{0}"/><RequestParams KHTX="{1}" ViewID="34" ViewerID="12" Function="" />', _this.rowSelected.Data.Email, _this.rowSelected.Data.ID)
        };
        FWS.System.IO.Ajax({
            url: '/vtnt.Service.Data/Asset/AssetService.asmx/UpdateAndSendReport',
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(obj.filterXml)
            },
            beforeSend: function () {
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Show))
                    parent.FWS.System.IO.AjaxOverlay.Show();
            },
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                data = data.CSV2JSON();
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                    parent.FWS.System.IO.AjaxOverlay.Hide();

                if (data) {
                    var objRet = data[0];
                    console.log(objRet);
                    if (objRet.Result > 0) {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                        //$.messager.alert('OK', objRet.Description);
                        //thisObj.Print({ ID: thisObj.ID, Type: type });
                        // Mods.VouchersExt.[INSTANT].Grid.Reload();
                    }
                    else {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                        //$.messager.alert('Thông báo', objRet.Description);
                    }
                }
            },
            error: function () {
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                    parent.FWS.System.IO.AjaxOverlay.Hide();
            }
        });
    },
    sendTBNhacNoMulti:function(option)
    {
        var _this = this;
        var selectedCount = 0;
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected  > 0) {
                selectedCount++;
            }
        });
        if (selectedCount == 0) {
            parent.FWS.Web.Dialog.Message({ message: "Không có đơn nào được chọn để gửi Email." });
            return;
        }
        if (selectedCount > 10) {
            parent.FWS.Web.Dialog.Message({ message: "Để tránh email bị chặn, mỗi lần chỉ gửi tối đa 10 đơn. Xin hãy chọn lại." });
            return;
        }
        $.each(fnGetData(), function (idx, it) {
            it.Note ='Sending...'
            _this.instance.iSetCell('ID', it.ID, 'Note', 'Sending...');

            _this.sendTBNhacNo({
                rowData: it,
                setResult:function(objRet)
                {
                    _this.instance.iSetCell('ID', rowData.ID, 'Note', objRet.Description);
                    if (objRet.Result > 0)
                    {
                        _this.instance.iSetCell('ID', rowData.ID, 'Selected', false);
                    }
                    
                    
                }

            });
            //if (it.Selected) arr.push(it.ID);
        });
        _this.instance.render();

    },
    sendTBNhacNo: function (option) {
        var _this = this;
        var rowData = option.rowData;
        if (option==undefined)
        {
            rowData = _this.rowSelected.Data;
        }
        var arr = [];
        var obj = {
            filterXml: $.string.Format('<RequestParams Email="{0}" KHTX="{1}" ViewID="34" ViewerID="27" Function="" Context="KHACHANG_TBNHACNO" IncludeSign="1" />', rowData.Email, rowData.ID)
        };
        FWS.System.IO.Ajax({
            url: '/vtnt.Service.Data/Asset/AssetService.asmx/SendReport',
            type: 'POST',
            data: {
                ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(obj.filterXml)
            },
            beforeSend: function () {
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Show))
                    parent.FWS.System.IO.AjaxOverlay.Show();
            },
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                data = data.CSV2JSON();
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                    parent.FWS.System.IO.AjaxOverlay.Hide();

                if (data) {
                    var objRet = data[0];
                    option.setResult(objRet);
                    //console.log(objRet);
                    /*
                    if (objRet.Result > 0) {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                        //$.messager.alert('OK', objRet.Description);
                        //thisObj.Print({ ID: thisObj.ID, Type: type });
                        // Mods.VouchersExt.[INSTANT].Grid.Reload();
                    }
                    else {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                        //$.messager.alert('Thông báo', objRet.Description);
                    }*/

                }
            },
            error: function () {
                if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                    parent.FWS.System.IO.AjaxOverlay.Hide();
            }
        });
    }
};