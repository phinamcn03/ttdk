if (typeof (FWS) == 'undefined')
    FWS = {};
if (typeof (FWS.System) == 'undefined')
    FWS.System = {};
if (typeof (FWS.System.IO) == 'undefined')
    FWS.System.IO = {};
FWS.System.IO.AjaxOverlay = { Init: "nothing", Show: "nothing", Hide: "nothing" };
if (COverlay) {
    FWS.System.IO.AjaxOverlay = new COverlay({ autoShow: false, onlyOne: true });
}
$(function () {
    FWS.System.IO.AjaxOverlay.Init();
});

FWS.System.IO.Ajax = function (options) {
    var fn_beforeSend = options.beforeSend;
    var fn_complete = options.complete;
    var fn_error = options.error;
    options.beforeSend = function (XMLHttpRequest) {
        FWS.System.IO.AjaxOverlay.Show();
        if (typeof fn_beforeSend == "function") {
            fn_beforeSend(XMLHttpRequest);
        }
    };
    options.complete = function (XMLHttpRequest, textStatus) {
        FWS.System.IO.AjaxOverlay.Hide();
        if (typeof fn_complete == "function") {
            fn_complete(XMLHttpRequest, textStatus);
        }
    };
    options.error = function (XMLHttpRequest, textStatus, errorThrown) {
        FWS.System.IO.AjaxOverlay.Hide();
        if (typeof fn_error == "function") {
            fn_error(XMLHttpRequest, textStatus, errorThrown);
        }
    };
    return $.ajax(options);
};
/* deleted */
FWS.System.IO.Autocomplete = function (container, UrlOrData, opts) {
    var options = {
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
        formatItem: function (row) { return row[0]; },
        formatMatch: null,
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
    $.extend(options, opts);
    options.inputClass = options.inputClass + " fws-autocomplete-input";
    options.resultsClass = options.resultsClass + " fws-autocomplete-result";
    options.loadingClass = options.loadingClass + " fws-autocomplete-loading";
    $(container).bind("click", function () {
        $(this).select();
    });
    var _retObj = $(container).autocomplete(UrlOrData, options);
    if (options.defaultData) {
        options.loadComplete(container, options.defaultData);
    }
    return _retObj;
};
FWS.System.IO.Combobox = function (container, UrlOrData, opts) {
    var options = {
        data: "",
        valueField: 'id',
        textField: 'text',
        multiple: false,
        onLoadSuccess: function () { },
        onLoadError: function () { },
        onSelect: function (record) { },
        onUnselect: function (record) { }
    };
    $.extend(true, options, opts);
    if (UrlOrData == null) {
        return $(container).combobox(options);
    }
    if (typeof UrlOrData == 'object') {
        options.data = UrlOrData;
        return $(container).combobox(options);
    }
    else {
        FWS.System.IO.Ajax({
            url: UrlOrData,
            type: 'POST',
            data: options.data,
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                if (data) {
                    data = eval("(" + data + ")");
                    if (data && data.length) {
                        options.data = data;
                        var valueField = options.valueField;
                        var firstValue = eval("data[0]." + valueField);
                        var combo = $(container).combobox(options);
                        $(container).combobox("setValue", firstValue);
                        if (options.defaultData) {
                            $(container).combobox('select', options.defaultData);
                        }
                        return combo;
                    }
                }
            }
        });
    }
    $(".combo-text").live("click", function () {
        $(this).select();
    });
};
FWS.System.IO.Datebox = function (container, opts) {
    var options = {
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
    $.extend(options, opts);
    return $(container).datebox(options);
};
FWS.System.IO.DateTimebox = function (container, opts) {
    var options = {
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
                ret = $.format(date, 'dd/MM/yyyy HH:mm', culture);
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
                    ret = $.parseDate(date, "dd/MM/yyyy HH:mm", culture);
                }

                return ret;
            }
            else {
                return new Date();
            }
        },
        onSelect: function (date) { console.log("s"+date); }
    };
    $.extend(options, opts);
    return $(container).datetimebox(options);
};
/* New */
function CAutoComplete(opts) {
    var self = this;
    this.container = "";
    this.autocomplete = null;
    this.options = {
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
        formatItem: function (row) { return row[0]; },
        formatMatch: null,
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
    $.extend(self.options, opts);
    this.Init = function (UrlOrData, container) {
        self.container = container;
        self.autocomplete = $(container).autocomplete(UrlOrData, self.options);
    };
    this.Destroy = function () {
        $(self.container).unautocomplete();
    };
}
function CComboBox(opts) {
    var self = this;
    this.container = "";
    this.combobox = null;
    this.options = {
        data: "",
        valueField: 'id',
        textField: 'text',
        multiple: false,
        editable: true,
        onLoadSuccess: function () { },
        onLoadError: function () { },
        onSelect: function (record) { },
        onUnselect: function (record) { }
    };
    $.extend(true, self.options, opts);
    this.Init = function (container) {
        self.container = container;
        self.combobox = $(container).combobox(self.options);
        $(".combo-text,.combo-arrow").die("click");
        $(".combo-text").live("click", function () {
            $(this).select();
        });
        $(".combo-arrow").live("click", function () {
            $(this).parent().prev(".combo-text").select();
        });
    };
    this.GetValue = function () {
        return self.combobox.combobox('getValue');
    };
    this.SetValue = function (value) {
        self.combobox.combobox('setValue', value);
    };
    this.SetValues = function (values) {
        self.combobox.combobox('setValues', values);
    };
}
function CDateBox(opts) {
    var self = this;
    this.container = "";
    this.datebox = null;
    this.options = {
        panelWidth: 180,
        panelHeight: 'auto',
        currentText: 'Today',
        closeText: 'Close',
        okText: 'Ok',
        editable: false,
        disabled: false,
        formatter: function (date) {
            var culture = "vi-VN";
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
                var culture = "vi-VN";
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
    $.extend(self.options, opts);
    this.Init = function (container) {
        self.container = container;
        self.datebox = $(container).datebox(self.options);
    };
    this.SetValue = function (value) {
        self.datebox.datebox('setValue', value);
    };
    this.GetValue = function () {
        return self.datebox.datebox('getValue');
    };
}
function CTabs(opts) {
    var self = this;
    this.container = "";
    this.tabs = null;
    this.options = {
        width: 'auto',
        height: 'auto',
        plain: false, /* True to render the tab strip without a background container image. */
        fit: false, /* True to set the size of tabs container to fit it's parent container. */
        border: true, /* True to show tabs container border. */
        scrollIncrement: 100, /* The number of pixels to scroll each time a tab scroll button is pressed. */
        scrollDuration: 400, /* The number of milliseconds that each scroll animation should last. */
        tools: null, /* [{iconCls:'icon-add',handler:function(){alert('add')}} , {iconCls:'icon-save',handler:function(){alert('save')} }] */
        onLoad: function (panel) { }, /* Fires when an ajax tab panel finish loading remote data. */
        onSelect: function (title) { }, /* Fires when user select a tab panel. */
        onBeforeClose: function (title) { }, /* Fires before the tab panel is closed, return false to cancel this close action. */
        onClose: function (title) { }, /* Fires when user close a tab panel. */
        onAdd: function (title) { }, /* Fires when a new tab panel is added. */
        onUpdate: function (title) { }, /* Fires when a tab panel is updated. */
        onContextMenu: function (e, title) { } /* Fires when a tab panel is right clicked. */
    };
    $.extend(self.options, opts);

    this.Init = function (container) {
        self.container = container;
        self.tabs = $(container).tabs(self.options);
    };
    this.GetSelected = function () {
        return self.tabs.tabs('getSelected');
    };
    this.Select = function (which) {
        /*Select a tab panel, the 'which' parameter can be the title or index of tab panel.*/
        self.tabs.tabs('select', which);
    };
    this.Exists = function (which) {
        /*Indicate if the special panel is exists, the 'which' parameter can be the title or index of tab panel.*/
        return self.tabs.tabs('exists', which);
    };
    this.GetTabIndex = function (tab) {
        /* Get the selected tab panel.*/
        return self.tabs.tabs('getTabIndex', tab);
    };
    this.GetTab = function (which) {
        /*  Get the specified tab panel, the 'which' parameter can be the title or index of tab panel. */
        return self.tabs.tabs('getTab', which);
    };
    this.GetOptions = function () {
        /* Return the tabs options. */
        return self.tabs.tabs('options');
    };
    this.Resize = function () {
        /*Resize the tabs container and do layout.*/
        self.tabs.tabs('resize');
    };
    this.GetAllTabs = function () {
        /*Return all tab panels.*/
        return self.tabs.tabs('tabs');
    };
    this.Add = function (opts) {
        /* Add a new tab panel, the options parameter is a config object, see tab panel properties for more details.*/
        self.tabs.tabs('add', options);
    };
    this.Close = function (which) {
        /* Close a tab panel, the 'which' parameter can be the title or index of tab panel to be closed.*/
        self.tabs.tabs('close', which);
    };
}
function CNumberSpinner(opts) {
    var self = this;
    this.container = "";
    this.numberspinner = null;
    this.options = {
        width: 'auto',
        value: '',
        min: null,
        max: null,
        increment: 1,
        editable: true,
        disabled: false,
        onSpinUp: function () { },
        onSpinDown: function () { }
    };
    $.extend(self.options, opts);
    this.Init = function (container) {
        self.container = container;
        self.numberspinner = $(container).numberspinner(self.options);
    };
    this.SetValue = function (value) {
        self.numberspinner.numberspinner('setValue', value);
    };
    this.GetValue = function () {
        return self.numberspinner.numberspinner('getValue');
    };
}
function CMessage(opts) {
    var self = this;
    this.container = "";
    this.message = null;
    this.init = function (para) {
        this.options = {
            title: '',
            msg: '',
            timeout: 0,
            showType: 'fade',
            width: 250,
            height: 100,
            icon: "",
            fn: function () { }
        };
        $.extend(true, self.options, para);
    }
    this.Show = function () {
        if (typeof para != 'undefined')
            this.init(para);
        $.messager.show(self.options);
    };
    this.Alert = function (para) {
        if (typeof para != 'undefined')
            this.init(para);
        $.messager.alert(self.options.title, self.options.msg, self.options.icon, self.options.fn);
    };
    this.init(opts);
}