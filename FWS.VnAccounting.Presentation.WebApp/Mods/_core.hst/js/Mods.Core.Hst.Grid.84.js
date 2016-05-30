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


                    case 'UnBlock':
                        _this.unblock({ type: 1 });
                        break;
                }
            },
            items: {

                "UnBlock": {
                    name: "Bỏ phong tỏa",
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