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


                    case 'SendEmail':
                        _this.sendEmail({ type: 1 });
                        break;
                    case 'Delete':
                        _this.deleteItem({ type: 1 });
                        break;
                }
            },
            items: {

                "SendEmail": {
                    name: "Gửi Email",
                    icon: 'email'
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


    sendEmail: function (option) {
        var _this = this;
        var arr = [];
        var inputTemplate = "";
        var selectedCount = 0;
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.TransactionID > 0) {
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
        inputTemplate = "<InputValue UserID=\"{0}\"/><RequestParams RefType=\"21\" Context=\"WEB\" RefNo=\"{1}\" ViewID=\"38\" ViewerID=\"18\" ID=\"{2}\" IncludeSign=\"1\" Email=\"{3}\" SoNhanDon=\"{4}\"/>";
        //Show Overlay
        if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Show))
            parent.FWS.System.IO.AjaxOverlay.Show();
        var finishCount = 0;
        $.each(fnGetData(), function (idx, it) {
            if (it.Selected && it.TransactionID > 0) {
                var obj = {
                    filterXml: $.string.Format(inputTemplate,
                          $.cookie('FWS:ACCOUNTING:USER.ID'),
                         it.RefNo,
                         it.TransactionID,
                         it.Email,
                         it.Number
                    )
                    , item: it
                };
                FWS.System.IO.Ajax({
                    //url: parent.FWS.Web.Core.URL.ExecuteAction,
                    url: parent.FWS.Web.Core.URL.AssetService + '/SendGCN',
                    type: 'POST',
                    data: { ClientKey: parent.FWS_SERVER_CONFIG.ClientKey,
                        inputValue: $.HtmlEncode(obj.filterXml),
                        instant: '[INSTANT]',
                        input: obj
                    },
                    success: function (data, textStatus, jqXHR) {

                        data = $.FindInXml(data);
                        data = data.CSV2JSON();
                        if (data) {
                            var objRet = data[0];
                            if (objRet.Result > 0) {
                                _this.instance.iSetCell('TransactionID', it.TransactionID, 'SendGCNDateTime', objRet.Description);
                                _this.instance.iSetCell('TransactionID', it.TransactionID, 'Selected', false);
                            }
                            else {
                                _this.instance.iSetCell('TransactionID', it.TransactionID, 'SendGCNDateTime', "Có lỗi trong quá trình gửi Email");
                                console.log("SendEmail Error",objRet);
                            }

                        }

                    },
                    complete: function (data, textStatus, jqXHR) {
                        //Close Overlay if last request
                        finishCount++;
                        if (finishCount == selectedCount) {
                            _this.instance.render();
                            if (parent && $.isFunction(parent.FWS.System.IO.AjaxOverlay.Hide))
                                parent.FWS.System.IO.AjaxOverlay.Hide();
                        }
                    }
                });
            }
        });
    },
    deleteItem: function (option) {
        var _this = this;
        var arr = [];
        var obj = {
            filterXml: $.string.Format('<InputValue UserID="{1}"/><RequestParams Function="NhanDon" Action="DELETE" ID="{0}" />', _this.rowSelected.Data.ID, $.cookie('FWS:ACCOUNTING:USER.ID'))
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