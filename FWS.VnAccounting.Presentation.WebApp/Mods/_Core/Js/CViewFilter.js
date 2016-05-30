function CViewFilter(options) {
    //begin class
    ObjViewFilter = this;
    //hàm contructor
    this.Contructor = function (data) {
        this.CViewParamsObj = null;
        this.LastViewParams = null;
        this.LastestViewInfo = null;
        this.ArrayParamCache = [];
        if (data)
            this.PageCode = data.PageCode;
    };
    this._options = {
        ViewID: null,
        URL: ""
    };
    $.extend(this._options, options);
    this.GetPara = function (options) {
        this.UpdateArrayParamCache();
        var CParaToXML = {
            ToXML: function (name, value) {
                if (value && value != "") {
                    return $.string.Format(" {0}='{1}'", name, value);
                }
                return "";
            }
        };
        var __viewId;
        if (options && options.viewId) {
            __viewId = options.viewId;
        }
        else {
            __viewId = this.CViewParamsObj.ID;
        }
        var para = {};
        var __ArrData = this.GetArrayParamCache(__viewId);
        var __xml = "<InputValue ";
        __xml += CParaToXML.ToXML("ViewID", this.CViewParamsObj.ID);
        for (var i in __ArrData.Controls) {
            switch (__ArrData.Controls[i].id) {
                case "ToDate":
                    para.ToDate = __ArrData.Controls[i].value;
                    para.ToDate = $.format($.parseDate(__ArrData.Controls[i].value, '', "en-US"), "MM/dd/yyyy");
                    __xml += CParaToXML.ToXML("ToDate", para.ToDate);
                    break;
                case "FromDate":
                    para.FromDate = __ArrData.Controls[i].value;
                    para.FromDate = $.format($.parseDate(__ArrData.Controls[i].value, '', "en-US"), "MM/dd/yyyy");
                    __xml += CParaToXML.ToXML("FromDate", para.FromDate);
                    break;
                case "Currency":
                    para.Currency = __ArrData.Controls[i].value;
                    __xml += CParaToXML.ToXML("Currency", para.Currency);
                    break;
                case "Account":
                    para.Account = __ArrData.Controls[i].value;
                    __xml += CParaToXML.ToXML("Account", para.Account);
                    break;
                case "ObjectType":
                    para.ObjectType = __ArrData.Controls[i].value;
                    __xml += CParaToXML.ToXML("ObjectType", para.ObjectType);
                    break;
                case "ObjectName":
                    para.ObjectName = __ArrData.Controls[i].value;
                    __xml += CParaToXML.ToXML("ObjectName", para.ObjectName);
                    break;
            }
        }
        __xml += " />";
        return __xml;
    };
    this.Create = function (data) {
        this.Contructor(data);
        Grid.Load(data.PageCode);
        return this;
    };
    this.ViewChange = function (rowid) {
        //update name & description info
        var data = $(Grid.GridId).jqGrid('getRowData', rowid);
        $("#Filter-ListView").val(data.Name);
        $("#Filter-Description").val(data.Description);
        $("#gbox_Filter_Grid").hide();
        //load list params
        var option = {
            viewId: rowid,
            extraParams: { sViewID: rowid },
            dockId: "#Filter_Dialog"
        }
        var matchView = this.ReturnMatchedView(rowid);
        this.CViewParamsObj = new CViewParams().Create(option, matchView);
    };

    //Cache
    this.GetArrayParamCache = function (viewID) {
        var arrData = this.ArrayParamCache;
        var result = "";
        if (arrData && arrData.length) {
            for (var i in arrData) {
                var item = arrData[i];
                if (item.ViewID == viewID) {
                    result = item;
                    break;
                }
            }
        }
        if (result)
            return result;
        else
            return this.GetLastestViewCache();
    };
    this.GetLastestViewCache = function () {
        var arrData = this.ArrayParamCache;
        var result = null;
        if (arrData && arrData.length) {
            for (var i in arrData) {
                var item = arrData[i];
                if (item.Lastest) {
                    result = item;
                    break;
                }
            }
        }
        return result;
    };
    this.UpdateArrayControlsCache = function (arrayControls) {
        //error: call when CViewParams has not exists yet
        if (!this.CViewParamsObj) {
            return [];
        }
        var arrControls = this.CViewParamsObj.GetViewParams();
        var arrControlsCache = this.GetLastestViewCache();
        /* Set Value each control */
        if (arrControls && arrControls.length) {
            for (var i = 0; i < arrControls.length; i++) {
                var control = arrControls[i];
                var controlID = control.id;
                //                var value = $(controlID).val() || "";
                //                control.value = value;
                if (typeof control.PortfolioID != "undefined") {
                    var portId = $(controlID).attr("v");
                    control.PortfolioID = portId;
                    control.value = portId;
                    if (control.PortfolioID == "undefined")
                        control.PortfolioID = "";
                }

                if (typeof (opts) != "undefined") {
                    for (var j in opts) {
                        var controlOpts = opts[j];
                        if (controlOpts.Controlid == controlID) {
                            $.extend(true, control, controlOpts);
                        }
                    }
                }
            }
        }
        else {
            if (opts)
                arrControls = opts;
        }
        return arrControls;
    };
    this.UpdateAllViewCache = function (arrayControls) {
        if (arrayControls && arrayControls.length) {
            for (var i in arrayControls) {
                var lastestControl = arrayControls[i];
                var controlID = lastestControl.Controlid;
                for (var j in this.ArrayParamCache) {
                    var arrayParamCache = this.ArrayParamCache[j];
                    var arrayControlCache = arrayParamCache.Controls;
                    for (var k in arrayControlCache) {
                        var controlCache = arrayControlCache[k];
                        if (controlCache.id == controlID) {
                            if (controlCache.id == "#Level" || controlCache.Controlid == "#PortfolioID") {
                                $.extend(true, controlCache, lastestControl);
                            }
                        }
                    }
                }
            }
        }
    };
    this.UpdateArrayParamCache = function (viewID, arrayControls) {
        if (!viewID) {
            viewID = this.CViewParamsObj.ID;
        }
        //call CViewParams has not exists yet
        var arrControls = this.UpdateArrayControlsCache(arrayControls);
        var options = {
            ViewID: viewID,
            Active: false,
            Lastest: false,
            PageCode: this.PageCode || "",
            IsChange: false,
            Controls: arrControls
        };
        var existed = false;
        var arrData = this.ArrayParamCache;
        if (arrData && arrData.length) {
            for (var i in arrData) {
                var item = arrData[i];
                if (item.ViewID == viewID && item.PageCode == this.PageCode) {
                    var controls = $.extend({}, item.Controls, options.Controls);
                    item.Controls = controls;
                    existed = true;
                    item.Active = true;
                    item.Lastest = true;
                }
                else {
                    if (item.PageCode == this.PageCode) {
                        item.Active = false;
                    }
                    item.Lastest = false;
                }
            }
        }
        if (!existed) {
            options.Active = true;
            options.Lastest = true;
            arrData.push(options);
        }
        /* Set properties ischange */
        this.SetViewIsChange(options.Controls);
        /* Update Account & Level foreach View */
        this.UpdateAllViewCache(options.Controls);
    };
    this.SetViewIsChange = function (arrayControls) {
        var arrParamCache = this.ArrayParamCache;
        for (var i in arrParamCache) {
            var paramCache = arrParamCache[i];
            var arrControlCache = paramCache.Controls;
            for (var j in arrControlCache) {
                var controlCache = arrControlCache[j];
                if (controlCache.Controlid == "#PortfolioID") {
                    for (var k in arrControls) {
                        var control = arrControls[k];
                        if (control.Controlid == "#PortfolioID") {
                            if (control.PortfolioID != controlCache.PortfolioID) {
                                paramCache.IsChange = true;
                            }
                            else {
                                paramCache.IsChange = false;
                            }
                        }
                    }
                }
            }
        }
    };
    this.ReturnActiveViewOfTabCode = function (pagecode) {
        var thisObj = this;
        var arrData = thisObj.ArrayParamCache;
        if (arrData && arrData.length) {
            for (var i in arrData) {
                var item = arrData[i];
                if (item.TabCode == tabcode && item.Active) {
                    return item;
                }
            }
        }
        return null;
    };
    this.ReturnMatchedView = function (viewId) {
        var thisObj = this;
        var matchedView = null;
        matchedView = thisObj.GetArrayParamCache(viewId);
        //        for (i = 0; i < thisObj.ArrayParamCache.length; i++) {
        //            if (thisObj.ArrayParamCache[i].ViewID == viewId) {
        //                matchedView = thisObj.ArrayParamCache[i];
        //                break;
        //            }
        //        }
        if (matchedView == null) {
            matchedView = thisObj.GetLastestViewCache();
            //var __filterData = {};
            if (matchedView == null) {
                var options = {
                    ViewID: viewId,
                    Active: true,
                    Lastest: true,
                    PageCode: thisObj.PageCode,
                    IsChange: false,
                    Controls: []
                };
                this.UpdateArrayParamCache(viewId, []);
                return thisObj.ReturnMatchedView(viewId);
            }
        }
        return matchedView;
    };
    //end Cache

    var Grid = {
        GridUrl: '../Mods/_Core/Service/CoreService.asmx/FilterGetViews',
        GridId: '#Filter_Grid',
        optionClient: '',
        Load: function (sPageCode) {
            thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    sPageCode: sPageCode
                },
                colNames: colNameFilter,
                colModel: colModelFilter,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                onSelectRow: function (rowid, status) {
                    ObjViewFilter.ViewChange(rowid);
                },
                loadComplete: function () {

                },
                gridComplete: function () {
                    $("#gbox_Filter_Grid").hide();
                }
            };
            new CGrid().Init(thisObj.GridId, optionServerFilter, thisObj.optionClient);
        }
    }
    
}
