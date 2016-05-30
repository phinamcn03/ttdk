$.CCore = {
    Service: {
        Get: function (pUrl, pOptions, pCallback) {
            if (typeof pOptions == "undefined") {
                return false;
            }
            var options = {
                RootName: "InputValue",
                LanguageID: $.CCore.Cookie.LanguageID()
            };
            if ($.isArray(pOptions)) {
                pOptions.push({
                    RootName: "InputValue",
                    LanguageID: $.CCore.Cookie.LanguageID()
                });
                options = pOptions;
            }
            else {
                $.extend(true, options, pOptions);
            }
            var inputValue = $.GetXmls(options);
            $.Ajax({
                url: pUrl,
                type: "POST",
                isUseServiceData: 1,
                data: {
                    inputValue: $.HtmlEncode(inputValue)
                },
                success: function (data, textStatus, XMLHttpRequest) {
                    if (data) {
                        data = $.FindInXml(data);
                        if (data) {
                            data = data.CSV2JSON2();
                        }
                    }
                    if (typeof pCallback == "function") {
                        pCallback(data);
                    }
                }
            });
        },
        GetResource: function (pOptions, pCallback) {
            this.Get('Core/CoreService.asmx/GetResource', pOptions, pCallback);
        },
        GetContextData: function (pOptions, pCallback) {
            this.Get('Core/CoreService.asmx/GetContextData', pOptions, pCallback);
        },
        ActionResource: function (pOptions, pCallback) {
            this.Get('Core/CoreService.asmx/ActionResource', pOptions, pCallback);
        },
        ExecuteAction: function (pOptions, pCallback) {
            this.Get('Core/CoreService.asmx/ExecuteAction', pOptions, pCallback);
        }
    },
    Cookie : {
        LanguageID: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:LANGUAGE.ID";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName) || "129";
            }
        },
        Culture: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:LANGUAGE.CULTURE";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName) || "vi-VN";
            }
        },
        Culture1: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:LANGUAGE.CULTURE1";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName) || "vi";
            }
        },
        Culture2: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:LANGUAGE.CULTURE2";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName) || "vn";
            }
        },
        Culture3: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:LANGUAGE.CULTURE3";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName) || "vi_VN";
            }
        },
        SessionID: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:USER.SESSION";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName);
            }
        },
        UserID: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:USER.ID";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName);
            }
        },
    
        UserFullName: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:USER.FULLNAME";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName);
            }
        },
        UserName: function (pValue) {
            var cookieName = "FWS:ACCOUNTING:USER.NAME";
            if (pValue) {
                $.SetCookie(cookieName, pValue);
            }
            else {
                return $.GetCookie(cookieName);
            }
        },
        ClientKey: function (pValue) {
            return FWS_SERVER_CONFIG.ClientKey;
        }
    }
};