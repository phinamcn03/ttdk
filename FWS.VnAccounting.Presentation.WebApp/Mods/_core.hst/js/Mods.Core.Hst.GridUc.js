var _filter = {};
function showGrid(options) {
    //console.log('::showGrid', options);
    options.gridID = options.gridID || 0;
    Mods.CoreHst.Grid.showGrid(options);
}
function showFilter() {
    alert('filter');
}
function filterData(options) {
    _filter.options = options;
    //console.log('::GridUC.filterData', options);

    var sInputValue = '';
    var objInputValue = { UserID: '', LanguageID: '129' };
    objInputValue.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
    objInputValue.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');

    sInputValue += new CXml('InputValue', objInputValue).getXml();
    sInputValue += options.filterXml;
    reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(sInputValue) };

    var fData = options.view.fData;
    if (typeof fData != 'undefined' && fData != '') {
        var serviceUrl = 'Core/CoreService.asmx/GetContextData';

        $.Ajax({
            url: serviceUrl,
            type: 'post',
            data: reqPara,
            dataType: 'xml',
            isUseServiceData: 1,
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                data = data.CSV2JSON2();
                if (data) {
                    var optionGrid = {
                        gridID: options.view.id,
                        data: data[1]
                    }
                };
                showGrid(optionGrid);
                if ($.isFunction(options.success))
                    options.success();

                if (typeof options.view.tableImport != 'undefined' && options.view.tableImport != '') {
                    $('#GridAcion').show();
                }
                else {
                    $('#GridAcion').hide();
                }
            }
        });
    }
}

function saveGridData() {
    //console.log(':::saveGridData',_filter);
    var instance = $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance');
    var arrData = instance.getData();

    //convert array to xml data
    var reqParaChild = arr2Xml(arrData, { tagName: 'Item' });
    var reqInput = {
    },
    reqPara = {
        Function: "Transaction_Asset",
        Action: 'Import',
        TableName: _filter.options.view.tableImport
    };

    //execute action
    execAction(reqInput, reqPara, reqParaChild);
}

function execAction(reqInput, reqPara, reqParaChild) {
    reqInput.UserID = $.GetCookie('FWS:ACCOUNTING:USER.ID');
    reqInput.Session = $.GetCookie('FWS:ACCOUNTING:USER.SESSION');

    var nodeInputValue = new CXml('InputValue', reqInput).getXml();
    var nodeRequestPara = new CXml('RequestParams', reqPara, reqParaChild).getXml();
    var wsPara = {
        ClientKey: FWS_SERVER_CONFIG.ClientKey,
        InputValue: $.HtmlEncode(nodeInputValue + nodeRequestPara)
    };
    //console.log(nodeInputValue, nodeRequestPara);
    $.Ajax({
        url: 'Core/CoreService.asmx/ExecuteAction',
        type: 'post',
        data: wsPara,
        dataType: 'xml',
        isUseServiceData: 1,
        success: function (data, textStatus, jqXHR) {
            data = $.FindInXml(data) + '';
            data = data.CSV2JSON2();

            if (data && data.length > 1) {
                var msg = data[1][0];
                if (typeof msg == 'undefined')
                    msg = 'System Information :: Database return error !!!';
                if (parent && $.isFunction(parent.FWS.Web.Dialog.Message))
                    parent.FWS.Web.Dialog.Message({ message: msg.Description });
            }
        }
    });
}
function arr2Xml(arr, options) {
    var settings = {};
    var defSettings = {
        tagName: 'row'
    };
    settings = $.extend(true, settings, defSettings, options || {});

    var s = '';
    if (typeof arr != undefined && Array.isArray(arr)) {
        for (row in arr) {
            s += $.string.Format('<{0}', settings.tagName);
            for (cell in arr[row]) {
                s += $.string.Format(' {0}="{1}"', cell, $.HtmlEncode(arr[row][cell]));
            }
            s += $.format(' />');
        }
    }
    return s;
}
//---------------------------------------------

//---------------------------------------------
function showInventoryAlertMinAvaiable() {
    var view = {
        fData: "InventoryAlertMinAvaiable",
        id: "44",
        name: "Tồn kho tối thiểu",
        type: "GRID"
    };
    var filterXml = '<RequestParams ItemIDs="" StockIDs="" ViewID="2" Function="InventoryAlertMinAvaiable" />';
    filterData({
        'view': view,
        'filterXml': filterXml
    });
}
function showInventorySlow() {
    var view = {
        fData: "InventorySlow",
        id: "49",
        name: "Hàng chậm luân chuyển",
        type: "GRID"
    };
    var filterXml = '<RequestParams ItemIDs="" StockIDs="" ViewID="5" Function="InventorySlow" />';
    filterData({
        'view': view,
        'filterXml': filterXml
    });
}

$(function () {
    var f = $.QueryString('defFunction');
    switch (f) {
        case 'InventoryAlertMinAvaiable':
            showInventoryAlertMinAvaiable();
            break;
        case 'InventorySlow':
            showInventorySlow();
            break;
        default:
            var gridId = $.QueryString('gridid') || 0;
            showGrid({ gridID: gridId });
            break;
    }
});