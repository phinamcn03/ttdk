//=================================================================================================
// Mod:     Grid
// Author:  KhanhNguyen
// Edit:    

//=================================================================================================
if (typeof VnAccounting == 'undefined')
    var VnAccounting = new Object();
var MasterParent = null;

function GetMasterParent() {
    if (MasterParent == null) {
        if (typeof VnAccounting.Server != 'undefined') {
            MasterParent = document
            return MasterParent;
        }
        var Parent = parent;
        while (true) {
            if (Parent == 'undefined' || ((typeof Parent.VnAccounting != 'undefined') && (typeof Parent.VnAccounting.Server != 'undefined'))) {
                MasterParent = Parent;
                return MasterParent;
            }
            Parent = Parent.parent;
        }
    }
    return MasterParent;
}

VnAccounting.Grid = {
    CustomFormatInt: function (cellvalue, options, rowObject) {
        var ret = "";
        if (cellvalue != null && cellvalue != '' || cellvalue == 0) {
            try {
                var temp = parseFloat(cellvalue, "n0", "en-US");
                //ret = $.formatter.number.format(temp, { format: "#,###", locale: FWS.System.Core.Session.Culture() });
                ret = $.format(temp, "n0", FWS.System.Core.Session.Language());
            }
            catch (err) {
                console.log(err);
                ret = "0";
            }
        }
        if (ret == "NaN")
            ret = "0";
        return ret;
    },
    Decimal: 0,
    GetExtend: function (rowObject, gid) {
        var Condition = "td[aria-describedby='" + gid + "_Extend']";
        return $(Condition, $(rowObject)).text();
    },
    CustomFormatDecimal: function (cellvalue, options, rowObject) {
        var ret = "";
        if (cellvalue != null && cellvalue != '' || cellvalue == 0) {
            try {
                var temp = parseFloat(cellvalue, "n0", "en-US");
                //ret = $.formatter.number.format(temp, { format: "#,###.00", locale: FWS.System.Core.Session.Culture() });
                ret = $.format(temp, "n2", FWS.System.Core.Session.Language());
            }
            catch (err) {
                console.log(err);
                ret = "...";
            }
        }
        if (ret == "NaN")
            ret = "...";
        return ret;
    },
    CustomFormatDate: function (cellvalue, options, rowObject) {
        var ret = cellvalue;
        var newFormat = "d/m/Y";
        if (cellvalue != null && cellvalue != '') {
           var op;
            if (typeof (options.colModel.formatoptions) != 'undefined') {
                op = options.colModel.formatoptions;
                ret = jQuery.format(new Date(cellvalue), op);
                }
            else
            ret = jQuery.format(new Date(cellvalue), "dd-MM-yyyy");
            if (ret.indexOf('NaN') >= 0)
                ret = cellvalue;
        }
        return ret;
    },
    CustomFormatDecimalScale: function (cellvalue, options, rowObject) {
        var digit = "n" + VnAccounting.Grid.Decimal;
        var scale = 1;
        if (cellvalue != null && cellvalue != '') {
            try {
                if (typeof (rowObject.Extend) != 'undefined')
                    ObjExtend = eval('(' + rowObject.Extend + ')');
                else {
                    var strExtend = $.trim(VnAccounting.Grid.GetExtend(rowObject, options.gid));
                    if (strExtend.length > 0)
                        ObjExtend = eval('(' + strExtend + ')');
                }
                if (typeof (ObjExtend) != 'undefined') {
                    if (typeof (ObjExtend.Decimal) != 'undefined')
                        digit = "n" + ObjExtend.Decimal;
                    if (typeof (ObjExtend.Scale) != 'undefined')
                        scale = ObjExtend.Scale;
                    var temp = $.parseFloat(cellvalue, digit, "en-US");
                    temp = temp * scale;
                    ret = $.format(temp, digit, iCookies.Culture());
                }
            }
            catch (err) {
                ret = "...";
            }
        }
        if (ret == "NaN" || ret == "0")
            ret = "...";
        return ret;
    },
    CustomFormatDateTime: function (cellvalue, options, rowObject) {
        var ret = cellvalue;
        var iParent = GetMasterParent();
        var hour = "";
        var newFormat = iParent.VnAccounting.Server.DateFormatJs;
        if (cellvalue != null && cellvalue != '') {
            ret = iParent.$.formatter.date.format(cellvalue, 'Y/m/d', newFormat);
            if (ret.indexOf('NaN') >= 0)
                ret = cellvalue;
            var start = cellvalue.indexOf(" ") + 1;
            if (start > 0) {
                hour = cellvalue.substring(cellvalue.indexOf(" ") + 1, cellvalue.length);
                if (hour.indexOf(".") != -1)
                    hour = hour.substring(0, hour.indexOf("."));
            }
        }
        return ret + " " + hour;
    },
    CheckIsNullZero: function (cellvalue, options) {
        var val = parseFloat(cellvalue);
        if (!isNaN(val)) {
            if (val == 0 && options.colModel.zeronull == "true")
                return true;
        }
        return false;
    },
    CustomFormatTime: function (cellvalue, options, rowObject) {
        var ret = cellvalue;
        if (cellvalue != null && cellvalue != '') {
            var start = cellvalue.indexOf(" ") + 1;
            if (start > 0)
                ret = cellvalue.substring(cellvalue.indexOf(" ") + 1, cellvalue.length);
        }
        return ret;
    }
}

//--------------------------------------------------------
//Mô tả: Cập nhật css cho 1 đối tượng jQuery, data là json
//--------------------------------------------------------
var GCss = {
    set: function ($obj, data) {
        for (i in data) {
            $obj.css(i, data[i]);
        }
    }
};
