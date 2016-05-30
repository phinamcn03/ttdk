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
                        _this.showReport({ type: 0 });
                        break;
                    case 'viewReport':
                        _this.showReport({ type: 1 });
                        break;
                    case 'sendAndViewReport':
                        _this.sendAndShowReport({ type: 1 });
                        break;
                    case 'Delete':
                        _this.deleteItem({ type: 1 });
                        break;
                    case 'Block':
                        
                         _this.block({ type: 1 });
                           
                         break;
                    case 'UnBlock':
                        _this.unblock({ type: 1 });
                        break;
                }
            },
            items: {
                /*
                "viewReportAll": {
                    name: "Xem báo cáo - Giấy báo thanh toán [Tất cả]",
                    icon: 'report'
                },
                "hsep1": "---------",
                "viewReport": {
                    name: "Xem báo cáo - Giấy báo thanh toán",
                    icon: 'report'
                },
                "hsep4": "---------",
                "sendAndViewReport": {
                    name: "Gửi giấy báo thanh toán qua email",
                    icon: 'report'
                },
                "hsep2": "---------",
                */
                "Block": {
                    name: "Phong tỏa",
                    icon: 'exit'
                },
                "UnBlock": {
                    name: "Bỏ Phong tỏa",
                    icon: 'exit'
                },
                "Delete": {
                    name: "Xóa",
                    icon: 'exit'
                },
                "hsep3": "---------",
                
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
        var dateFrom = _parent.FWS_SERVER_CONFIG.DateFrom;
        var dateTo = _parent.FWS_SERVER_CONFIG.Date;
        var obj = {
            filterXml: $.string.Format('<RequestParams KHTX="{0}"  ViewID="34" ViewerID="12" Function="" />', arr.join(','))
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
    deleteItem: function (option) {
        var _this = this;
        var arr = [];
        var obj = {
            filterXml: $.string.Format('<InputValue UserID="{1}"/><RequestParams Function="Person" Action="DELETE" ID="{0}" />', _this.rowSelected.Data.ID, $.cookie('FWS:ACCOUNTING:USER.ID'))
        };
        //parent.FWS.Web.Dialog.Message({ message: 'Hello' })
        //        parent.FWS.Web.Service.ExecuteAction({
        //            
        //        }
        //parent.FWS.Web.Dialog.confirm('Xóa khách hàng', 'Bạn có chắc muốn xóa Khách hàng này?', function (r) {
        //    if (r) {
        FWS.System.IO.Ajax({
            url: parent.FWS.Web.Core.URL.ExecuteAction,
            //url: 'vtnt.Service.Data/Core/CoreService.asmx/GetContextData',
            type: 'POST',
            data: { ClientKey: parent.FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(obj.filterXml),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    var objRet = parent.FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
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
            }
        });

        //    }
        //});

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
    unblock: function (option) {
        var _this = this;
        var arr = [];
        var selectedCount = 0;
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.Code > "") {
                selectedCount++;
            }
        });
        if (selectedCount == 0) {
            parent.FWS.Web.Dialog.Message({ message: "Không có KHTX nào được chọn." });
            return;
        }
        var inputxml = $.string.Format('<InputValue UserID="{0}"/><RequestParams Function="Transaction_Asset" TableName="PhongToaKHTX" Action="UnBlock" >', $.cookie('FWS:ACCOUNTING:USER.ID'));
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.Code > "") {
                inputxml += $.string.Format('<Item Code="{0}"/>', it.Code);
            }
        });
        inputxml += "</RequestParams>";
        var obj = {
            filterXml: inputxml
        };

        FWS.System.IO.Ajax({
            url: parent.FWS.Web.Core.URL.ExecuteAction,
            //url: 'vtnt.Service.Data/Core/CoreService.asmx/GetContextData',
            type: 'POST',
            data: {
                ClientKey: parent.FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(obj.filterXml),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    var objRet = parent.FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Result > 0) {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                    }
                    else {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                    }
                }
            }
        });
    },
    block: function (option) {
        var _this = this;
        var arr = [];
        var selectedCount = 0;
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.Code > "") {
                selectedCount++;
            }
        });
        if (selectedCount == 0) {
            parent.FWS.Web.Dialog.Message({ message: "Không có KHTX nào được chọn." });
            return;
        }
        var inputxml = $.string.Format('<InputValue UserID="{0}"/><RequestParams Function="Transaction_Asset" TableName="PhongToaKHTX" Action="Block" >', $.cookie('FWS:ACCOUNTING:USER.ID'));
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.Code > "") {
                inputxml += $.string.Format('<Item Code="{0}"/>', it.Code);
            }
        });
        inputxml += "</RequestParams>";
        var obj = {
            filterXml: inputxml
        };

        FWS.System.IO.Ajax({
            url: parent.FWS.Web.Core.URL.ExecuteAction,
            //url: 'vtnt.Service.Data/Core/CoreService.asmx/GetContextData',
            type: 'POST',
            data: {
                ClientKey: parent.FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(obj.filterXml),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();
                if (data && typeof data === "string") {
                    var objRet = parent.FWS.Web.Core.ToActionJSON(data);
                    if (objRet.Result > 0) {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                    }
                    else {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                    }
                }
            }
        });
    }
};