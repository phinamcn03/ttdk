if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Accounts == 'undefined')
    Mods.Accounts = {};

Mods.Accounts.Login = {
    Init: function () {
        this.Event();
        this.GetLanguageList();
        this.GetClientGroupList();
    },
    DefaultInit: function (opts) {
        $("input[type='text']").val('');
        $("input[type='password']").val('');
        $("#LoginEntry-txtLoginName").focus();
    },
    Properties: {
        windowID: "#Login-Window"
    },
    Login: function () {
        var windowID = this.Properties.windowID;
        var userLogin = $("#LoginEntry-txtLoginName").val();
        var password = $("#LoginEntry-txtPassword").val();
        var languageID = $("#LoginEntry-cboLanguages").val();
        var clientGroupID = $("#LoginEntry-cboClientGroup").val();
        var inputValue = $.string.Format('<InputValue UserLogin="{0}" Password="{1}" LanguageID="{2}" ClientGroupID="{3}" />',
            userLogin, password, languageID, clientGroupID);
          FWS.System.IO.Ajax({
            url: '../Mods/Accounts/Service/LoginService.asmx/Login',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                if (data) {
                    data = eval("(" + data + ")");

                    var isSuccessfull = data.IsSuccessfull;
                    if (isSuccessfull) {
                        $.cookie("FWS:ACCOUNTING:USER.ID", data.ID);
                        $.cookie("FWS:ACCOUNTING:USER.NAME", data.LoginName);
                        $.cookie("FWS:ACCOUNTING:USER.FULLNAME", data.FullName);
                        $.cookie("FWS:ACCOUNTING:USER.SESSION", data.Session);
                        location.reload();
                    }
                    else {
                        $.messager.alert(':::: System Error ::::', data.Description);
                    }
                }
            }
        });
    },
    GetClientGroupList: function () {
        var inputValue = "<InputValue />";
        FWS.System.IO.Ajax({
            url: '../Mods/_Core/Service/CoreService.asmx/GetClientGroupList',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                data = $.findInXml(data);
                if (data) {
                    data = eval("(" + data + ")");
                    //console.log('data', data);
                    var ret = '';
                    if (data) {
                        for (var i in data) {
                            var item = data[i];
                            ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                        }
                    }
                    $("#LoginEntry-cboClientGroup").html(ret);
                }

            }
        });
    },
    GetLanguageList: function () {
        var inputValue = "<InputValue />";
        FWS.System.IO.Ajax({
            url: '../Mods/_Core/Service/CoreService.asmx/GetLanguageList',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                data = $.findInXml(data);
                if (data) {
                    data = eval("(" + data + ")");
                    var ret = '';
                    if (data) {
                        for (var i in data) {
                            var item = data[i];
                            ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                        }
                    }
                    $("#LoginEntry-cboLanguages").html(ret);
                }

            }
        });
    },
    Event: function () {
        var thisObj = this;
        var windowID = this.Properties.windowID;
        $("#LoginEntry-btnLogin").click(function (e) {
            thisObj.Login();
        });
        $("#LoginEntry-txtPassword,#LoginEntry-cboLanguages,#LoginEntry-cboClientGroup").bind('keydown', 'return', function (e) {
            thisObj.Login();
            e.stopPropagation();
            return false;
        });
    }
};
$(function () {
    Mods.Accounts.Login.Init();
});