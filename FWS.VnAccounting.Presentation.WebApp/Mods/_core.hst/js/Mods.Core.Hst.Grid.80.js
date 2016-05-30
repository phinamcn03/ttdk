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
                   
                    case 'Delete':
                        _this.deleteItem({ type: 1 });
                        break;
                }
            },
            items: {
                
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
                    
                    }
                    else {
                        parent.FWS.Web.Dialog.Message({ message: objRet.Description });
                        //$.messager.alert('Thông báo', objRet.Description);
                    }
                }
            }
        });

    }
};