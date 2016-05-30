if (typeof (FWS) == 'undefined')
    FWS = {};
if (typeof (FWS.System) == 'undefined')
    FWS.System = {};
if (typeof (FWS.System.Control) == 'undefined')
    FWS.System.Control = {};

/* cần phải có plugin jquery.glob.js */

FWS.System.Control.Autocomplete = {
    Account: function (id, container, UrlOrData, opts) {
        if (container) {
            var jqId = $.string.Format('#{0}', id);
            var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
            container.append(strCur);
        }
        var _url = "../Mods/ACore/Service/VoucherService.asmx/GetPersonAutoComplete";
        if (UrlOrData) {
            _url = UrlOrData;
        }
        return FWS.System.IO.Autocomplete(id, _url, opts);
    },
    ObjectName: function (id, container, UrlOrData, opts) {
        if (container) {
            var jqId = $.string.Format('#{0}', control.id);
            var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
            container.append(strCur);
        }
        var _url = "../Mods/ACore/Service/VoucherService.asmx/GetPersonAutoComplete";
        if (UrlOrData) {
            _url = UrlOrData;
        }
        return FWS.System.IO.Autocomplete(id, _url, opts);
    },
    Set: function (id, data) {
        var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
        $(jqId).attr("c", data.c);
        $(jqId).attr("n", data.n);
        $(jqId).attr("p", data.p);
        $(jqId).attr("a", data.a);
        $(jqId).attr("v", data.v);
    },
    Get: function (id) {
        var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
        return $(jqId).attr("v");
    }
};
FWS.System.Control.Combobox = {
    Currency: function (id, container, UrlOrData, opts) {
        if (container) {
            var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', id);
            container.append(strCur);
        }
        var options = {
            data: { pType: 'currency' },
            valueField: 'value',
            textField: 'text',
            onSelect: function (record) {
            },
            onLoadSuccess: function () {
                $(id).combobox("select", 17);
            }
        };
        var url = "../Mods/_Core/Service/CoreService.asmx/FilterDropDownList";
        if (UrlOrData)
            url = UrlOrData;
        if (opts) {
            $.extend(options, opts);
        }
        FWS.System.IO.Combobox(id, url, options);
    },
    ObjectType: function (id, container, UrlOrData, opts) {
        
        if (container) {
            var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', id);
            container.append(strCur);
        }
        var options = {
            data: { pType: 'currency' },
            valueField: 'value',
            textField: 'text',
            onSelect: function (record) {
            },
            onLoadSuccess: function () {
                $(id).combobox("select", 17);
            }
        };
        var url = "../Mods/_Core/Service/CoreService.asmx/FilterDropDownList";
        if (UrlOrData)
            url = UrlOrData;
        if (opts) {
            $.extend(options, opts);
            console.log('1', options);
        }
        FWS.System.IO.Combobox(id, url, options);
    },
    Get: function (id) {
        var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
        var val = $(jqId).combobox('getValue');
        return val;
    },
    Set: function (id, value) {
        var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
        $(jqId).combobox('setValue', value);
    }
};
FWS.System.Control.Datebox = {
    Date: function (id, container, opts) {
        if (container){
            container.append($.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" input_type="datetime" />', id));
        }
        FWS.System.IO.Datebox(id, opts);
    },
    Get: function (id) {
        return $("#" + id).datebox("getValue");
    },
    Set: function (id, value) {
        return $("#" + id).datebox("setValue", value);
    }
};