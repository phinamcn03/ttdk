/*********************************************************************************************
** Jquery extend
*********************************************************************************************/
$.HtmlEncode = function (text) {
    var ret = "";
    if (typeof text == "string") {
        ret = text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    return ret;
};
$.HtmlDecode = function (text) {
    var ret = text;
    if (typeof text == "string") {
        ret = text
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, '\'')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/\\u0026amp;/g, '&')
            .replace(/\\u0026quot;/g, '"')
            .replace(/\\u0026#39;/g, '\'')
            .replace(/\\u0026lt;/g, '<')
            .replace(/\\u0026gt;/g, '>');
    }
    return ret;
};
$.FormatHTMLEscape = function (text) {
    var ret = text;
    if (text && typeof text == "string") {
        ret = text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    return ret;
};
$.GetURL = function (key, _default, pUrl) {
    _default = _default || "";
    var result = _default;
    if (typeof key == "undefined") {
        return result;
    }
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]").toLowerCase();
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var url = pUrl || location.search;
    if (url) {
        url = url.toLowerCase();
    }
    var queryString = regex.exec(url);
    var arrQueryOrigin = [];
    var urlOrigin = pUrl || location.search.substr(1);
    urlOrigin = urlOrigin.replace("?", "&");
    $.each(urlOrigin.split('&'), function (i, q) {
        var item = q.split('=');
        if (item.indexOf("http://") == -1 || item.indexOf("www."))
            arrQueryOrigin.push(item);

    });

    if (queryString == null) {
        return result;
    }
    else {
        result = queryString[1];
        for (var i in arrQueryOrigin) {
            var name = arrQueryOrigin[i][0];
            var value = arrQueryOrigin[i][1];
            var query = name + "=" + value;
            var qs = queryString[0].toLowerCase().replace(/\&|\?/g, "");
            if (query.toLowerCase() == qs) {
                result = value;
                break;
            }
        }
        return result;
    }
};
$.SetUrl = function (key, value, query) {
    String.prototype.trimEnd = function (c) {
        if (c)
            return this.replace(new RegExp(c.escapeRegExp() + "*$"), '');
        return this.replace(/\s+$/, '');
    }
    String.prototype.trimStart = function (c) {
        if (c)
            return this.replace(new RegExp("^" + c.escapeRegExp() + "*"), '');
        return this.replace(/^\s+/, '');
    }

    String.prototype.escapeRegExp = function () {
        return this.replace(/[.*+?^${}()|[\]\/\\]/g, "\\$0");
    };

    query = query || window.location.search;
    var q = query + "&";
    var re = new RegExp("[?|&]" + key + "=.*?&");
    if (!re.test(q)) {
        q += key + "=" + encodeURI(value);
    }

    else {
        q = q.replace(re, "&" + key + "=" + encodeURIComponent(value) + "&");
    }

    q = q.trimStart("&").trimEnd("&");
    var ret = q[0] == "?" ? q : q = "?" + q;
    return ret;
}
/*********************************************************************************************
** Get & Set cookies
*********************************************************************************************/
$.SetCookie = function (c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + '; path=/';
};

$.GetCookie = function (c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
};
$.GetExtension = function (fileName) {
    var re = /(?:\.([^.]+))?$/;
    return re.exec(fileName)[1];
};
$.GuidGenerator = function () {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()).toUpperCase();
};
$.RemoveHTMLTags = function (htmlString) {
    if (htmlString) {
        var mydiv = document.createElement("div");
        mydiv.innerHTML = htmlString;

        if (document.all) // IE Stuff
        {
            return mydiv.innerText;

        }
        else // Mozilla does not work with innerText
        {
            return mydiv.textContent;
        }
    }
};
/*********************************************************************************************
* jquery.ajax
*********************************************************************************************/
$.Ajax = function (options) {
    if (options) {
        if (options.isUseServiceData == 1 || options.isServiceData == 1) {
            var config = FWS_SERVER_CONFIG;
            var full_path = config.HostName + config.ServiceData + '/' + options.url;
            options.url = full_path;
            if (typeof options.data == "undefined") options.data = {};
            options.data.ClientKey = config.ClientKey;
        }
        return $.ajax(options);
    }
};

/*********************************************************************************************
** Get Attributes 
**    $('#elm').GetAttributes();  // Get all attributes
**    $('#elm').GetAttributes(['id', 'class']);  // Get ll attributes except id and class
*********************************************************************************************/
$.fn.GetAttributes = function (except) {
    var attributes = {};
    if (except) {
        except = $.map(except, function (item) {
            return item.toString().toLowerCase();
        });
    };
    this.each(function () {
        var attrs = $.map(this.attributes, function (item) {
            return item.name.toString().toLowerCase();
        });
        if (except) {
            attrs = $.grep(attrs, function (item, index) {
                return $.inArray(item, except) == -1;
            });
        }
        var handle = $(this);
        $.each(attrs, function (index, item) {
            attributes[item] = handle.attr(item);
        });
    });
    return attributes;
}
/*********************************************************************************************
** Remove Attributes 
**    $('#elm').removeAttributes(['id', 'class']);  // remove id and class attributes
**    $('#elm').removeAttributes(null, ['href']);  // remove all attributes except href
*********************************************************************************************/

$.fn.RemoveAttributes = function (only, except) {
    if (only) {
        only = $.map(only, function (item) {
            return item.toString().toLowerCase();
        });
    };
    if (except) {
        except = $.map(except, function (item) {
            return item.toString().toLowerCase();
        });
        if (only) {
            only = $.grep(only, function (item, index) {
                return $.inArray(item, except) == -1;
            });
        };
    };
    return this.each(function () {
        var attributes;
        if (!only) {
            attributes = $.map(this.attributes, function (item) {
                return item.name.toString().toLowerCase();
            });
            if (except) {
                attributes = $.grep(attributes, function (item, index) {
                    return $.inArray(item, except) == -1;
                });
            };
        } else {
            attributes = only;
        }
        var handle = $(this);
        $.each(attributes, function (index, item) {
            handle.removeAttr(item);
        });
    });
};
/********************************************
var result = $.string.Format("Hello, {0}.", "world");
//result -> "Hello, world."
*********************************************/
$.string = {
    Format: function (text) {
        //check if there are two arguments in the arguments list
        if (arguments.length <= 1) {
            //if there are not 2 or more arguments there's nothing to replace
            //just return the text
            return text;
        }
        //decrement to move to the second argument in the array
        var tokenCount = arguments.length - 2;
        for (var token = 0; token <= tokenCount; ++token) {
            //iterate through the tokens and replace their placeholders from the text in order
            var reg = new RegExp("\\{" + token + "\\}", "gi");
            var value = arguments[token + 1];
            text = text.replace(reg, value);

        }
        return text;
    },
    IsNullOrEmpty: function (text) {
        if (typeof text == "undefined")
            return true;
        var value = $.trim(text);
        if (value.length == 0)
            return true
        return false;
    },
    Compare: function (strA, strB, ignoreCase) {
        if (typeof ignoreCase == "undefined")
            ignoreCase = false;
        if (typeof strA != "undefined" && typeof strB != "undefined" && typeof strA == "string" && typeof strB == "string") {
            if (ignoreCase) {
                strA = strA.toLowerCase();
                strB = strB.toLowerCase();
            }
            return strA === strB;
        }
        return false;
    }
};
$.GetXmls = function (pOptions) {
    var ret = '';
    var rootName = 'InputValue';
    if (pOptions) {
        if ($.isArray(pOptions)) {
            $.each(pOptions, function (index, item) {
                if (item.RootName) {
                    rootName = item.RootName;
                    item.RootName = '';
                }
                var attributes = '', attributes_nested = '';
                $.each(item, function (key, value) {
                    if (typeof value == 'object' && key == 'InputNested') {
                        attributes_nested = $.GetXmls(value);
                    }
                    else if (value.toString().length) {
                        attributes += $.string.Format('{0}="{1}" ', key, value);
                    }

                });
                ret += $.string.Format('<{0} {1}>{2}</{0}>', rootName, attributes, attributes_nested);
            });
        }
        else {
            if (pOptions.RootName) {
                rootName = pOptions.RootName;
                pOptions.RootName = '';
            }
            var attributes = '';
            $.each(pOptions, function (key, value) {
                value = $.trim(value);
                if (value.toString().length)
                    attributes += $.string.Format('{0}="{1}" ', key, value);
            });
            ret += $.string.Format('<{0} {1}></{0}>', rootName, attributes);
        }
    }
    return ret;
};
$.FindInXml = function (xmlData, tagName) {
    tagName = tagName || "string";
    try {
        var ret = xmlData;
        if ($.browser.msie && $.browser.version < 10) {
            ret = xmlData.documentElement.childNodes[0].text;
        }
        else {
            ret = $(xmlData).find(tagName).text();
        }
        return ret;
    } catch (e) {
        console.log(":::FindInXml:::catch", e.message);
        return "";
    }

};
$.callFrameFunction = function (frame, methodName, methodParam, count, callback) {
    count = count || 0;
    if (frame && methodName) {
        if (typeof frame == "string" && (frame.indexOf("#") == -1 && frame.indexOf(".") == -1)) {
            frame = "#" + frame;
        }
        var iframe = function (obj) {
            var iFrame = $(obj)[0];
            var iFrameWindow = iFrame.contentWindow ? iFrame.contentWindow : iFrame.contentDocument.defaultView;
            return iFrameWindow;
        };
        var fr = iframe(frame);
        if (typeof fr != "undefined" && fr) {
            var method = "fr." + methodName;
            var fn = eval(method);
            if ($.isFunction(fn)) {
                if ($.isFunction(callback)) {
                    callback();
                }
                fn(methodParam);
                return;
            }
            count++;
            if (count >= 50) {
                if ($.isFunction(callback)) {
                    callback();
                }
                return false;
            }
            window.setTimeout(function () {
                $.callFrameFunction(frame, methodName, methodParam, count);
            }, 500);
        }
    }
};

(function ($) {
    var ua = navigator.userAgent.toLowerCase(),
        match,
    // Useragent RegExp
        rbrowsers = [
            /(chrome)[ \/]([\w.]+)/,
            /(safari)[ \/]([\w.]+)/,
            /(opera)(?:.*version)?[ \/]([\w.]+)/,
            /(msie) ([\w.]+)/,
            /(mozilla)(?:.*? rv:([\w.]+))?/
        ],
        i = rbrowsers.length;

    $.browser = {};
    while (i--) {
        if ((match = rbrowsers[i].exec(ua)) && match[1]) {
            $.browser[match[1]] = true;
            $.browser.version = match[2] || "0";
            break;
        }
    }

})(window.jQuery || window);