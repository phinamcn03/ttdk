//--------------------------------------------------------------------------------------------------
// FWS.Web.CTemplateController Object
//--------------------------------------------------------------------------------------------------
if (typeof (FWS) == 'undefined')
    FWS = {};
if (typeof (FWS.Web) == 'undefined')
    FWS.Web = {};
FWS.Web.CTemplateController = {
    CurrentContentOptions: null,
    CurrentPopupOptions: null,
    ArrayContentOptions: [],
    ArrayPopupOptions: []
};
FWS.Web.CTemplateController.CheckLogin = function () {
    var userID = $.cookie("FWS:ACCOUNTING:USER.ID");
    if (!userID) {
        return false;
    }
    return true;
};
FWS.Web.CTemplateController.ShowLogin = function () {
    this.LoadPopup({
        template: 'Mods/Accounts/Login',
        data: "{a:'-', b:'--'}",
        id: "Login-Window",
        width: 430,
        height: 270,
        closable: false,
        secure: false,
        title: "Đăng nhập hệ thống",
        callbackComplete: function (opts) {
            Mods.Accounts.Login.DefaultInit(opts);
        }
    });
};
FWS.Web.CTemplateController.Properties = {
    CurrentContentID: "",
    CurrentPopupID: ""
};
FWS.Web.CTemplateController.UpdateArrayContentOption = function (opts) {
    var arr = this.ArrayContentOptions;
    arr.push(opts);
};
FWS.Web.CTemplateController.UpdateArrayPopupOption = function (opts) {
    var arr = this.ArrayPopupOptions;
    arr.push(opts);
};
FWS.Web.CTemplateController.SetTitle = function (title) {
    $("#ContentCoreMain-Layout > .layout-panel-center > .panel-header .panel-title").html(title);
};
FWS.Web.CTemplateController.LoadContentTimer = null;
FWS.Web.CTemplateController.LoadContent = function (opts) {
    var options = {
        commandName: 'GetTemplatePage',
        resultCallback: 'FWS.Web.Handler.ShowContent',
        container: "#MainContent",
        template: "",
        data: "{a:'', b:''}",
        title: "",
        parentID: "0",
        parentOptions: null,
        id: "",
        parentID: null,
        prevID: this.Properties.CurrentContentID,
        isChild: false,
        rowID: "0",
        isLoad: "0",
        secure: true,
        filterID: 1,    //set default value
        callbackComplete: function (options) { }
    };
    $.extend(true, options, opts);

    //console.log('::FWS.Web.CTemplateController.LoadContent', options);
    if (options.secure) {
        if (!this.CheckLogin()) {
            this.ShowLogin();
            return false;
        }
    }
    /* tạo cache */
    this.UpdateArrayContentOption(options);
    if (options.isChild) {
        if (options.parentID == null)
            options.parentID = this.Properties.CurrentContentID;
        if (options.parentOptions == null)
            options.parentOptions = this.CurrentContentOptions;
    }
    this.Properties.CurrentContentID = options.id;
    var container = options.container;
    var $main = $(container);
    var id = options.id;
    var $id = "#" + id;
    var isLoad = options.isLoad;
    var template = options.template;
    if (isLoad == "1") {
        $main.find($id).remove();
    }
    if (options.title) {
        FWS.Web.CTemplateController.SetTitle(options.title);
    }

    $main.find(".MainContent").hide();

    var arrTemplate = ['Mods/ReportDoc/ReportViewer', 'Mods/ItemsDoc/Customers'];

    if ($main.find($id).length) {
        $main.find($id).show();
        if (typeof options.callbackComplete == "function") {
            options.callbackComplete(options);
        }
    }
    else if ($main.find(".MainContent[template='" + template + "']").length && $.inArray(template, arrTemplate) == -1) {
        $main.find(".MainContent[template='" + template + "']").show();
        if (typeof options.callbackComplete == "function") {
            options.callbackComplete(options);
        }
    }
    else {
        var html = $.string.Format("<div class='MainContent' id='{0}' template='{1}'></div>", id, template);
        $main.append(html);
        if (FWS.Web.CTemplateController.LoadContentTimer) {
            clearTimeout(FWS.Web.CTemplateController.LoadContentTimer);
        }
        FWS.Web.CTemplateController.LoadContentTimer = setTimeout(function () {
            FWS.Web.CTemplateController.Load(options);
        }, 100);
    }
    this.CurrentContentOptions = options;
};
FWS.Web.CTemplateController.ReloadContent = function (options) {
    var container = options.container;
    var $main = $(container);
    var id = options.id;
    var $id = "#" + id;
    $main.find($id).remove();
    FWS.Web.CTemplateController.LoadContent(options);
};
FWS.Web.CTemplateController.LoadPopup = function (opts) {
    var options = {
        commandName: 'GetTemplatePage',
        resultCallback: 'FWS.Web.Handler.ShowPopup',
        container: "#MainContent",
        template: "",
        data: "{a:'', b:''}",
        id: "",
        parentID: null,
        parentOptions: null,
        prevID: this.Properties.CurrentPopupID,
        isChild: false,
        title: "",
        rowID: "0",
        isLoad: "0",
        secure: true,
        ID:"0",
        callbackComplete: function (data) { }
    };
    $.extend(true, options, opts);
    if (options.secure) {
        if (!this.CheckLogin()) {
            this.ShowLogin();
            return false;
        }
    }
    /* tạo cache */
    this.UpdateArrayContentOption(options);
    if (options.isChild) {
        if (options.parentID == null)
            options.parentID = this.Properties.CurrentPopupID;
        if (options.parentOptions == null)
            options.parentOptions = this.CurrentPopupOptions;
    }
    var id = "#" + options.id;
    var rowID = options.rowID;
    if ($('body').find(id).length) {
        $(id).attr('row-id', rowID);
        $(id).window('open');
        if (typeof options.callbackComplete == "function") {
            options.callbackComplete(options);
        }
    }
    else {
        setTimeout(function () {
            FWS.Web.CTemplateController.Load(options);
        }, 100);

    }
};
FWS.Web.CTemplateController.LoadStyleSheet = function (path) {
    if (!this.styleSheets[path]) {
        var styleSheet;
        styleSheet = document.createElement('link');
        styleSheet.type = "text/css";
        styleSheet.rel = 'stylesheet';
        styleSheet.href = path;
        document.getElementsByTagName("head")[0].appendChild(styleSheet);
        this.styleSheets[path] = styleSheet;
    }
};
FWS.Web.CTemplateController.Load = function (options) {
    var _url = '../Mods/_Global/Service/TemplateController.asmx/ExecuteCommand';
    var _data = $.string.Format("{commandName:'{0}', callbackMethod:'{1}', data:{actionView:'{2}', actionData: {3}}}",
                        options.commandName,
                        options.resultCallback,
                        options.template,
                        options.data);
    FWS.System.IO.Ajax({
        type: 'POST',
        url: _url,
        data: _data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result) {
                result = result.d;
                var func_name = result[1];
                var func_opts = result[0];
                eval(func_name + "(func_opts, options);");
            }
        }
    });
};


//--------------------------------------------------------------------------------------------------
// Callback Handler
//--------------------------------------------------------------------------------------------------
FWS.Web.Handler = {
    ExecBase: function (options) {
        if (options.CustomStyle && options.CustomStyle.length) {
            FWS.Web.CTemplateController.LoadStyleSheet(options.CustomStyle);
        }
        if (options.Script && options.Script.length) {
            eval(options.Script);
        }
    },
    ShowContent: function (result, options) {
        var container = options.container;
        var ret = result.Html;
        if (result.Html && result.Html.length) {
            $(container).find("#" + options.id).append(ret);
            $(container).find("#" + options.id).show();
        }
        FWS.Web.Handler.ExecBase(result);
        FWS.Web.Core.LoadTemplateStyle();
        FWS.Web.Core.LoadTemplateEvent(options);
        if (typeof options.callbackComplete == "function") {
            options.callbackComplete(options);
        }
    },
    ShowPopup: function (result, options) {
        var container = options.container;
        if (result.Html && result.Html.length) {
            var ret = $.string.Format("<div id='{0}' row-id='{1}'>{2}</div>", options.id, options.rowID, result.Html);
            $(container).append(ret);
            var id = "#" + options.id;
            var fn_opts = function (value, _default) {
                if (typeof value == "undefined") {
                    return _default;
                }
                return value;
            };
            var windowOptions = {
                title: fn_opts(options.title, ""),
                width: fn_opts(options.width, 500),
                height: fn_opts(options.height, 300),
                zIndex: fn_opts(options.zIndex, 9000),
                modal: fn_opts(options.modal, true),
                closable: fn_opts(options.closable, true),
                collapsible: fn_opts(options.collapsible, false),
                minimizable: fn_opts(options.minimizable, false),
                maximizable: fn_opts(options.maximizable, false),
                resizable: fn_opts(options.resizable, false),
                draggable: fn_opts(options.draggable, true),
                inline: fn_opts(options.inline, false)
            };
            $(id).window(windowOptions);
        }
        FWS.Web.Handler.ExecBase(result);
        FWS.Web.Core.LoadTemplateStyle();
        FWS.Web.Core.LoadTemplateEvent(options);
        if (typeof options.callbackComplete == "function") {
            options.callbackComplete(options);
        }
    }
};
//--------------------------------------------------------------------------------------------------
// Control Language
//--------------------------------------------------------------------------------------------------
FWS.Web.CControl = {
    ApplyLanguage: function (listCtr) {
        var ctr = null, item = null;
        for (idx in listCtr) {
            item = listCtr[idx];
            ctr = $('#' + item.Name);
            if (ctr.length > 0) {
                if (item.Caption != '')
                    ctr.html(item.Caption);
                if (item.ToolTip != '')
                    ctr.attr('title', '::' + item.ToolTip);
            }
        }
    }
};