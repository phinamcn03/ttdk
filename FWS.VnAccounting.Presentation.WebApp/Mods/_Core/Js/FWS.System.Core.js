if (typeof FWS == 'undefined')
    FWS = {};
if (typeof FWS.System == 'undefined')
    FWS.System = {};


FWS.System.Core = {
    Session: {
        Language: function () { return 'vi-VN' },
        Culture: function () { return 'vn' },

    },
    BuildInputValue: function (opts) {
        var inputValue = "";
        for (var name in opts) {
            if (typeof (opts[name]) != "undefined" && opts[name] != "undefined")
                inputValue += name + "='" + opts[name] + "' ";
        }
        return inputValue;
    },
    UserID: function () {
        return $.cookie("FWS:ACCOUNTING:USER.ID");
    },
    SessionID: function () {
        return $.cookie("FWS:ACCOUNTING:USER.SESSION");
    },
    ClientKey: function () {
        return FWS_SERVER_CONFIG.ClientKey;
    },
    _loadXMLString: function (sXml) {
        var xDoc;
        if (window.DOMParser) {
            parser = new DOMParser();
            xDoc = parser.parseFromString(sXml, "text/xml");
        }
        else // Internet Explorer
        {
            xDoc = new ActiveXObject("Microsoft.XMLDOM");
            xDoc.async = false;
            xDoc.loadXML(sXml);
        }
        return xDoc;
    },
    _CreateAttr: function (xdoc, key, value) {
        newatt = xdoc.createAttribute(key);
        newatt.nodeValue = value;
        var inputValue = xdoc.getElementsByTagName('InputValue');
        inputValue[0].setAttributeNode(newatt);
        return xdoc;
    },
    _getXmlAsString: function (xmlDom) {
        return (typeof XMLSerializer !== "undefined") ?
           	(new window.XMLSerializer()).serializeToString(xmlDom) :
           	xmlDom.xml;
    },
    AttachMeta: function (sXml, obj) {
        /*nam.le - 2013-06-24 - attach meta to InputValue tag*/
        if (sXml.indexOf('undefined') != -1 && console) {
            console.log('warning: input data has "undefined" value. Please check your input data before sending it to server!');
        }
        sXml = '<root>' + sXml.replace('undefined', '') + '</root>';
        var oThis = this;
        var oUser = {
            'UserID': oThis.UserID(),
            'Session': oThis.SessionID()
        };

        $.extend(true, oUser, obj);
        var xDoc = oThis._loadXMLString(sXml);
        //var inputValue = xDoc.documentElement.getElementsByTagName('InputValue')[0];        
        $.each(oUser, function (key, value) {
            xDoc = oThis._CreateAttr(xDoc, key, value);
        });
        var sRet = oThis._getXmlAsString(xDoc.firstChild).replace(/(<root>|<\/root>)/g, '');
        return sRet;
    }
}