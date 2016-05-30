/*
Require:     
*/
CControl = {
    HandlerUrl: '../Mods/_Core/Service/ControlHandler.ashx?',
    ServiceUrl: '../Mods/_Core/Service/ControlService.asmx/',
    /*-----------FORM-----------*/
    InitForm: function (options) {
        if (options.container) {
            var thisObj = this;
            //Select control
            $(options.container + ' select[extype]').each(function (index, item) {
                var _control = $(item),
                    _exType = _control.attr('extype');
                var _options = {
                    width: _control.width(),
                    id: _control.attr('id') || '',
                    datacode: _control.attr('datacode') || '',
                    filtercode: _control.attr('filtercode') || '',
                    search: _control.attr('search') || '',
                    value: _control.attr('defaultvalue') || '',
                    callback: _control.attr('afterselect') || ''
                };
                switch (_exType.toLowerCase()) {
                    case "treecombo":
                        thisObj.InitTreeCombo(_options);
                        break;
                    case "checklist":
                        _options.inputValue = $.string.Format("DataCode='{0}' FilterCode='{1}'", _options.datacode, _options.filtercode);
                        thisObj.InitCheckList(_options);
                        break;
                }
            });
            //Input control
            $(options.container + ' input[extype]').each(function (index, item) {
                var _control = $(item),
                    _exType = _control.attr('extype');
                var _options = {
                    width: _control.width(),
                    id: _control.attr('id') || '',
                    datacode: _control.attr('datacode') || '',
                    filtercode: _control.attr('filtercode') || '',
                    search: _control.attr('search') || '',
                    value: _control.attr('defaultvalue') || '',
                    callback: _control.attr('afterselect') || ''
                };
                switch (_exType.toLowerCase()) {
                    case "combobox":
                        _options.inputValue = $.string.Format("DataCode='{0}' FilterCode='{1}'", _options.datacode, _options.filtercode);
                        thisObj.InitCombobox(_options);
                        break;
                    case "datebox":
                        thisObj.InitDateBox(_options);
                        break;
                    case "autocomplete":
                        _options.extraParams = { inputValue: $.string.Format("DataCode='{0}' FilterCode='{1}' Search='{2}'", _options.datacode, _options.filtercode, _options.search) };
                        thisObj.InitAutoComplete(_options);
                        break;
                }
            });
        }
    },
    /*-----------End FORM-----------*/
    /*==============================================================*/
    /*-----------CONTROL-----------*/
    InitControl: function (options) {
        if (options && options.extype && options.container) {
            var thisObj = this;
            var _default = {
                width: 100,
                id: '',
                datacode: '',
                filtercode: '',
                search: '',
                value: '',
                callback: ''
            };
            _default = $.extend({}, _default, options);
            console.log('::DEFAULT', _default);
            thisObj.CreateControl(_default);

            switch (_default.extype.toLowerCase()) {
                case "combobox":
                    _default.inputValue = $.string.Format("DataCode='{0}' FilterCode='{1}'", _default.datacode, _default.filtercode);
                    thisObj.InitCombobox(_default);
                    break;
                case "datebox":
                    thisObj.InitDateBox(_default);
                    break;
                case "autocomplete":
                    _default.extraParams = { inputValue: $.string.Format("DataCode='{0}' FilterCode='{1}' Search='{2}'", _default.datacode, _default.filtercode, _default.search) };
                    thisObj.InitAutoComplete(_default);
                    break;
                case "treecombo":
                    thisObj.InitTreeCombo(_default);
                    break;
                case "checklist":
                    _default.inputValue = $.string.Format("DataCode='{0}' FilterCode='{1}'", _default.datacode, _default.filtercode);
                    thisObj.InitCheckList(_default);
                    break;
            }
        }
    },
    CreateControl: function (options) {
        var ret = '', _properties = '', _template = '';
        var thisObj = this;

        if (options.width != '')
            _properties += $.string.Format("style='width:{0}px;'", options.width);
        if (options.id != '')
            _properties += $.string.Format(" id='{0}'", options.id);
        if (options.extype != '')
            _properties += $.string.Format(" extype='{0}'", options.extype);
        if (options.datacode != '')
            _properties += $.string.Format(" datacode='{0}'", options.datacode);
        if (options.filtercode != '')
            _properties += $.string.Format(" filtercode='{0}'", options.filtercode);
        if (options.search != '')
            _properties += $.string.Format(" search='{0}'", options.search);
        if (options.callback != '')
            _properties += $.string.Format(" afterselect='{0}'", options.callback);
        if (options.value != '')
            _properties += $.string.Format(" defaultvalue='{0}'", options.value);

        switch (options.extype.toLowerCase()) {
            case "datebox":
            case "autocomplete":
            case "combobox":
                _template = "<input type='text' {0}/>";
                break;
            case "treecombo":
            case "checklist":
                _template = "<select {0}/>";
                break;
        }
        ret = $.string.Format(_template, _properties);
        $(options.container).html(ret);
    },
    /*-----------End CONTROL-----------*/
    /*==============================================================*/
    /*-----------Combobox-----------*/
    InitCombobox: function (options) {
        var _default = {
            width: 100,
            id: 'fws_combobox',
            inputValue: '',
            valueField: 'id',
            textField: 'text',
            multiple: false,
            onLoadSuccess: function () { },
            onLoadError: function () { },
            onSelect: function (record) { },
            onUnselect: function (record) { }
        };
        var thisObj = this;
        if (typeof options != 'undefined')
            _default = $.extend({}, _default, options);
        if (typeof _default.value != 'undefined') {
            var _onLoadSuccess = _default.onLoadSuccess;
            _default.onLoadSuccess = function () {
                _onLoadSuccess();
                thisObj.SetCombobox('#' + _default.id, _default.value);
            }
        }
        if (_default.callback != '') {
            _default.onSelect = function (record) {
                try {
                    eval(_default.callback + "(record)");
                } catch (e) { console.log('::Combobox Select:,', e); }
            }
        }
        FWS.System.IO.Ajax({
            url: (thisObj.ServiceUrl + 'GetCombobox'),
            data: { inputValue: _default.inputValue },
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                if (data) {
                    data = eval("(" + data + ")");
                    if (data && data.length) {
                        _default.data = data;
                        $('#' + _default.id)
                            .attr('style', 'width:' + _default.width + 'px;')
                            .combobox(_default);
                    }
                }
            }
        });
    },
    GetCombobox: function (controlID) {
        return $(controlID).combobox('getValue');
    },
    SetCombobox: function (controlID, value) {
        $(controlID).combobox('setValue', value);
    },
    /*-----------End Combobox-----------*/
    /*==============================================================*/
    /*-----------CheckList-----------*/
    /*
    Require: 
    1. jquery-ui-1.8.13.custom.min.js
    2. jquery-ui.css    
    */
    InitCheckList: function (options) {
        var _default = {
            icon: {},
            width: 200,
            emptyText: "Please select...",
            onComplete: function (selector) {
                var values = "";
                for (i = 0; i < selector.options.length; i++) {
                    if (selector.options[i].selected && (selector.options[i].value != "")) {
                        if (values != "") values += ";";
                        values += selector.options[i].value;
                    }
                }
            },
            onItemClick: function (checkbox, selector) { },
            isAll: false
        };
        var thisObj = this;
        if (typeof options != 'undefined')
            _default = $.extend({}, _default, options);
        var container = '#' + _default.id;
        FWS.System.IO.Ajax({
            url: (thisObj.ServiceUrl + 'GetCombobox'),
            data: { inputValue: _default.inputValue },
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length)
                    data = $(data).find("string").text();
                if (data) {
                    data = eval("(" + data + ")");
                    if (data && data.length) {
                        var id_CheckList = _default.id + "-checkList";
                        var html = $.string.Format("<div id='{0}'>", id_CheckList);
                        for (var i = 0; i < data.length; i++) {
                            //html += $.string.Format("<option value='{0}'>{1}</option>", data[i].id, data[i].text);
                            html += $.string.Format('<input type="checkbox" value="{0}" id="{1}-{0}" /><label for="{1}-{0}">{2}</label><br/>', data[i].id, id_CheckList, data[i].text);
                        }
                        html += "</div>";
                        $(container).combobox();
                        $(html).appendTo($(container).combobox('panel'));
                        $('#' + id_CheckList).find('input[type="checkbox"]').click(function () {
                            var arr_value = [];
                            var arr_text = [];
                            $('#' + id_CheckList).find('input[type="checkbox"]').each(function () {
                                if ($(this).is(":checked")) {
                                    arr_value.push($(this).val());
                                    arr_text.push($(this).next('label').text());
                                }
                            });
                            $(container).combobox('setValues', arr_value).combobox('setText', arr_text);
                        });
                    }
                }
            }
        });
    },
    GetCheckList: function (controlID) {

    },
    SetCheckList: function (controlID, value) {

    },
    /*-----------End CheckList-----------*/
    /*==============================================================*/
    /*-----------TreeCombo-----------*/
    InitTreeCombo: function (options) {
        var thisObj = this;
        var _default = {
            url: thisObj.HandlerUrl,
            id: 'fws_treecombo',
            name: 'TreeCombo',
            width: 100,
            animate: true,
            onBeforeExpand: function (node) { },
            onBeforeSelect: function (node) { },
            onSelect: function (node) { },
            onBeforeLoad: function (node, param) { },
            onLoadSuccess: function (node, data) { },
            onLoadError: function () { }
        };
        if (typeof options != 'undefined')
            _default = $.extend({}, _default, options);
        if (typeof _default.datacode != 'undefined')
            _default.url += $.string.Format('DataCode={0}&FilterCode={1}', _default.datacode, _default.filtercode);

        if (typeof _default.value != 'undefined') {
            var _onLoadSuccess = _default.onLoadSuccess;
            _default.onLoadSuccess = function () {
                _onLoadSuccess();
                thisObj.SetTreeCombo('#' + _default.id, _default.value);
            }
        }
        if (_default.callback != '') {
            _default.onSelect = function (node) {
                try {
                    eval(_default.callback + "(node)");
                } catch (e) { console.log('::TreeCombo Select:,', e); }
            }
        }
        $('#' + _default.id).attr('style', 'width:' + _default.width + 'px;').combotree(_default);
    },
    GetTreeCombo: function (controlID) {
        return $(controlID).combotree('getValue');
    },
    SetTreeCombo: function (controlID, value) {
        $(controlID).combotree('setValue', value);
    },
    /*-----------End TreeCombo-----------*/
    /*==============================================================*/
    /*-----------DateBox-----------*/
    InitDateBox: function (options) {
        var _default = {
            panelWidth: 180,
            panelHeight: 'auto',
            currentText: 'Today',
            closeText: 'Close',
            okText: 'Ok',
            editable: false,
            disabled: false,
            formatter: function (date) {
                var culture = "en-US";
                if (typeof FWS_SERVER_CONFIG != 'undefined' && FWS_SERVER_CONFIG.Culture) {
                    culture = FWS_SERVER_CONFIG.Culture;
                }
                var ret = date;
                /* cần phải có plugin jquery.glob.js */
                if (typeof $.format != 'undefined') {
                    ret = $.format(date, 'd', culture);
                }
                return ret;
            },
            parser: function (date) {
                if (date) {
                    var culture = "en-US";
                    if (typeof FWS_SERVER_CONFIG != 'undefined' && FWS_SERVER_CONFIG.Culture) {
                        culture = FWS_SERVER_CONFIG.Culture;
                    }
                    var ret = '';
                    if (typeof $.format != 'undefined') {
                        ret = $.parseDate(date, "d", culture);
                    }
                    return ret;
                }
                else {
                    return new Date();
                }
            },
            onSelect: function (date) { }
        };
        if (typeof options != 'undefined')
            $.extend(true, _default, options);
        try {
            $('#' + _default.id).datebox(_default);
            if (_default.value != '')
                $('#' + _default.id).datebox('setValue', _default.value);
            else
                $('#' + _default.id).datebox('setValue', $.format(new Date(), 'd', FWS_SERVER_CONFIG.Culture));
        } catch (e) {
            console.log(e);
        }
    },
    GetDateBox: function (controlID) {
        return $(controlID).datebox('getValue');
    },
    SetDateBox: function (controlID, value) {
        $(controlID).datebox('setValue', value);
    },
    /*-----------End DateBox-----------*/
    /*==============================================================*/
    /*-----------AutoComplete-----------*/
    InitAutoComplete: function (options) {
        var thisObj = this;
        var _default = {
            id: 'fws_autocomplete',
            inputClass: "ac_input",
            resultsClass: "ac_results",
            loadingClass: "ac_loading",
            minChars: 1,
            delay: 400,
            matchCase: false,
            matchSubset: true,
            matchContains: false,
            cacheLength: 10,
            max: 100,
            mustMatch: false,
            extraParams: {},
            selectFirst: true,
            formatMatch: null,
            formatItem: function (data, i, total) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[0] + " - " + data[1];
                return '';
            },
            formatResult: function (data) {
                if (typeof data != 'undefined' && data.length > 1)
                    return data[1];
                return '';
            },
            HandlerResult: function (event, ui) {
                if (options && typeof options.callback != 'undefined' && options.callback != '') {
                    try {
                        eval(_default.callback + "(event, ui)");
                    } catch (e) { console.log('::AutoSelect:,', e); }
                }
            },
            HandlerFocusOut: function () { },
            autoFill: false,
            width: 0,
            multiple: false,
            multipleSeparator: ", ",
            highlight: function (value, term) {
                return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            },
            scroll: true,
            scrollHeight: 180
        };
        if (typeof options != 'undefined')
            $.extend(true, _default, options);
        var _id = '#' + _default.id;
        _default.inputClass += " fws-autocomplete-input";
        _default.resultsClass += " fws-autocomplete-result";
        _default.loadingClass += " fws-autocomplete-loading";
        $(_id).autocomplete(thisObj.ServiceUrl + 'GetAutoComplete', _default)
            .result(_default.HandlerResult)
            .focusout(_default.HandlerFocusOut);
        $(_id).live("click", function () { $(this).select(); });
    },
    ReInitAutoComplete: function (controlID) {
        var _control = $(controlID);
        _control.unautocomplete();
        _control.removeAttr("autocomplete").removeAttr("class").val("");
        var _options = {
            width: _control.width(),
            id: _control.attr('id') || '',
            datacode: _control.attr('datacode') || '',
            filtercode: _control.attr('filtercode') || '',
            search: _control.attr('search') || '',
            value: _control.attr('defaultvalue') || '',
            callback: _control.attr('afterselect') || ''
        };
        _options.extraParams = { inputValue: $.string.Format("DataCode='{0}' FilterCode='{1}' Search='{2}'", _options.datacode, _options.filtercode, _options.search) };
        this.InitAutoComplete(_options);
    }
    /*-----------End AutoComplete-----------*/
};