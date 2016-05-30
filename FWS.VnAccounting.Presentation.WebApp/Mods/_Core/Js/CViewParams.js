function CViewParams(options) {
    ObjViewParam = this;
    //hàm contructor
    this.Contructor = function () {
        this._params = [];
        this.ID = ObjViewParam._options.viewId;
    };
    ////begin class
    this._options = {
        url: "../Mods/_Core/Service/CoreService.asmx/FilterGetParams",
        viewId: "",
        extraParams: { sViewID: "0" },
        dockId: "#id",
        defaultPara: null,
        onComplete: function (viewId) { }
    };
    if (options)
        $.extend(this._options, options);
    this.Create = function (options, defaultData) {
        thisObj = this;
        if (options)
            $.extend(thisObj._options, options);
        thisObj.Contructor();
        FWS.System.IO.Ajax({
            url: thisObj._options.url,
            data: thisObj._options.extraParams,
            type: "POST",
            complete: function (retdata, stat) {
                if (stat == "success") {
                    retdata = $(retdata.responseText).text();
                    $('.paraGenerate').remove();
                    var json = eval(retdata);
                    $.each(json, function (i, item) {
                        var div = document.createElement('div');
                        $(div).attr('class', 'newrow paraGenerate');
                        $(div).append($.string.Format('<label>{0}</label>', this['label']));
                        $(thisObj._options.dockId).before($(div));
                        var control = {
                            dockId: thisObj._options.dockId,
                            container: $(div),
                            type: item['type'],
                            id: item['name'],
                            defaultValue: item['defaultvalue'],
                            value: undefined,
                            dcode: item['dcode'],
                            fcode: item['fcode']
                        };
                        //create html
                        if (typeof (defaultData) != 'undefined' && defaultData && defaultData.Controls) {
                            for (var i in defaultData.Controls) {
                                if (control.id == defaultData.Controls[i].id) {
                                    //vì nếu container có rồi thì sẽ bị error add 2 lần
                                    defaultData.Controls[i].container = control.container;
                                    //vì 1 số params có value(s): vd: account có acctCode, acctID, name,v..v..
                                    $.extend(control, defaultData.Controls[i]);
                                }
                            }
                        }
                        thisObj._AppendControls(control);
                    });
                    if (thisObj._options.onComplete) {
                        thisObj._options.onComplete(thisObj._options.viewId);
                    }
                }
            }
        });
        return this;
    };

    //public: return this._params[]
    this.GetViewParams = function () {
        var thisObj = this;
        $.each(thisObj._params, function (i) {
            thisObj._UpdateValueControl(this);
        });
        return thisObj._params;
    };

    //private: update value of 1 control
    this._UpdateValueControl = function (control) {
        switch (control.type) {
            case "0": //date
                control.value = $("#" + control.id).combobox('getValue');
                break;
            case "1": //object type
                control.value = $("#" + control.id).combobox('getValue');
                break;
            case "2": //object name
                control.value = $("#" + control.id).attr("v");
                control.code = $("#" + control.id).attr("c");
                control.name = $("#" + control.id).attr("n");
                control.phone = $("#" + control.id).attr("p");
                control.address = $("#" + control.id).attr("a");
                break;
            case "3": //account
                control.value = $("#" + control.id).attr("v");
                control.code = $("#" + control.id).attr("c");
                control.name = $("#" + control.id).attr("n");
                control.phone = $("#" + control.id).attr("p");
                control.address = $("#" + control.id).attr("a");
                break;
            case "4": //currency
                control.value = $("#" + control.id).datebox("getValue");
                break;
        }
        return control;
    };
    //Array of Controls
    /*
    var control = {
    id: "1",
    label: "",
    type: "1",
    defaultValue: "",
    value: "" or object
    }
    */
    //update this._params[]
    this._SetValueParam = function (obj) {
        thisObj = this;
        var item = null;

        $.each(thisObj._params, function () {
            if (this['id'] == obj.id) {
                item = this;
                this['value'] = obj.value;
                return item;
            }
        });
        if (item == null) {
            thisObj._params.push(obj);
        }
    };
    //get this._params[]
    this._GetValueParam = function (id) {
        var ret;
        $.each(thisObj._params, function () {
            if (this['id'] == id) {
                ret = this['value'];
                return ret;
            }
        });
        return ret;
    };
    //create html & update this._params[]
    this._AppendControls = function (control) {
        var thisObj = this;
        thisObj._SetValueParam(control);
        switch (control.type) {
            case '0': //date
                thisObj._CreateDateTime(control);
                //FWS.System.Control.Datebox.Date("#" + control.id, control.container, { value: control.value });
                break;
            case '1': //object type
                thisObj._CreateObjectType(control);
                //FWS.System.Control.Combobox.ObjectType("#" + control.id, control.container, false, { defaultData: control.value });
                break;
            case '2': //object name
                thisObj._CreateObjectName(control);
                break;
            case '3': //account
                thisObj._CreateDropDownList(control);
                break;
            case '4': //currency
                this._CreateCurrency(control);
                //FWS.System.Control.Combobox.Currency("#" + control.id, control.container, false, { defaultData: control.value });
                break;
        }
    };
    //
    //create each controls
    this._CreateDateTime = function (control) {
        control.container.append($.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" input_type="datetime" />', control.id));
        FWS.System.IO.Datebox("#" + control.id, { value: control.value });
    };
    this._CreateCurrency = function (control) {
        var jqId = $.string.Format('#{0}', control.id);
        var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
        control.container.append(strCur);
        var url = "../Mods/_Core/Service/CoreService.asmx/FilterDropDownList";
        FWS.System.IO.Combobox(jqId, url,
            {
                defaultData: control.value,
                data: { pType: 'currency' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    
                },
                onLoadSuccess: function () {
                    $(jqId).combobox("select", 17);
                }
            }
        );
    };
    this._CreateObjectName = function (control) {
        var jqId = $.string.Format('#{0}', control.id);
        var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
        control.container.append(strCur);
        var _url = "../Mods/ACore/Service/VoucherService.asmx/GetPersonAutoComplete";
        FWS.System.IO.Autocomplete(jqId, _url, {
            defaultData: control,
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: true,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format(" RefType='{0}' PersonType='{1}'", '2', '1');
                },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[1];
            },
            formatResult: function (data) {
                return data[0];
            },
            loadComplete: function (id, data) {
                var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
                $(jqId).attr("c", data.code);
                $(jqId).attr("n", data.name);
                $(jqId).attr("p", data.phone);
                $(jqId).attr("a", data.address);
                $(jqId).attr("v", data.value);
                $(jqId).val(data.code);
            }
        }).result(function (event, item) {
            $("#" + control.id).attr("c", item[0]);
            $("#" + control.id).attr("n", item[1]);
            $("#" + control.id).attr("p", item[2]);
            $("#" + control.id).attr("a", item[3]);
            //$("#" + control.id).attr("noname", item[4]);
            $("#" + control.id).attr("v", item[5]);
        });
    };
    this._CreateDropDownList = function (control) {
        var jqId = $.string.Format('#{0}', control.id);
        var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
        control.container.append(strCur);
        var _url = "../Mods/_Core/Service/CoreService.asmx/GetControlData";
        FWS.System.IO.Autocomplete(jqId, _url, {
            defaultData: control,
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: true,
            scrollHeight: 220,
            extraParams: {
                pType: control.type,
                pDataCode: control.dcode,
                pFilterCode: control.fcode
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[1];
            },
            formatResult: function (data) {
                return data[0];
            },
            loadComplete: function (id, data) {
                var jqId = (id.indexOf("#") != 0 ? "#" : "") + id;
                $(jqId).attr("c", data.code);
                $(jqId).attr("n", data.name);
                $(jqId).attr("p", data.phone);
                $(jqId).attr("a", data.address);
                $(jqId).attr("v", data.value);
                $(jqId).val(data.code);
            }
        }).result(function (event, item) {
            $("#" + control.id).attr("c", item[0]);
            $("#" + control.id).attr("n", item[1]);
            $("#" + control.id).attr("p", item[2]);
            $("#" + control.id).attr("a", item[3]);
            //$("#" + control.id).attr("noname", item[4]);
            $("#" + control.id).attr("v", item[5]);
        });
    };
    this._CreateObjectType = function (control) {
        var jqId = $.string.Format('#{0}', control.id);
        var strCur = $.string.Format('<input id="{0}" type="text" style="width: 90px !important;" class=" ParaDate" />', control.id);
        control.container.append(strCur);
        var url = "../Mods/ACore/Service/PaymentService.asmx/GetTemplate";
        FWS.System.IO.Combobox(jqId, url,
            {
                defaultData: control.value,
                data: { inputValue: 'CustomControl="Global/TemplateTime"' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                },
                onLoadSuccess: function () {
                    $(jqId).combobox("select", 17);
                }
            }
        );
    };
    //end create each controls

    ////end class
}