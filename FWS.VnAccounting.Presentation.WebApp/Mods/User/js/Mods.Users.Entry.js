if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Users == 'undefined')
    Mods.Users = {};
Mods.Users.Entry = {
    ControlIDs: {
        cboRole: "#UserEntry-Role",
        txtFullName: "#UserEntry-txtFullName",
        txtUserName: "#UserEntry-txtUserName",
        txtPass: "#UserEntry-txtPass",
        txtPass2: "#UserEntry-txtPass2",
        txtStatus: "#UserEntry-txtStatus",
        cbChangePass: "#UserEntry-cbChangePass",
        btnAdd: "#UserEntry-btnAdd",
        btnDelete: "#UserEntry-btnDelete",
        formID: "#UserEntry-Form",
        Content: "#UserEntry-Content"
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#UserEntry-btnAdd,#UserEntry-btnCancel").hide();
                $("#UserEntry-btnSearch").show();
                break;
            case "0":
                $("#UserEntry-btnAdd,#UserEntry-btnDelete").show();
                $("#UserEntry-btnSearch").hide();
                // this.Init();
                $(this.ControlIDs.txtPass).val("");
                $(this.ControlIDs.txtPass2).val("");
                $(this.ControlIDs.txtPass).removeAttr("readonly");
                $(this.ControlIDs.txtPass2).removeAttr("readonly");
                $(this.ControlIDs.cbChangePass).parent().hide();
                //   this.LoadDefault();
                break;
            default:
                $("#UserEntry-btnAdd,#UserEntry-btnDelete").show();
                $("#UserEntry-btnSearch").hide
                $(this.ControlIDs.txtPass).val("123");
                $(this.ControlIDs.txtPass2).val("123");
                $(this.ControlIDs.txtPass).attr("readonly", "readonly");
                $(this.ControlIDs.txtPass2).attr("readonly", "readonly");
                $(this.ControlIDs.cbChangePass).attr("checked", false);
                $(this.ControlIDs.cbChangePass).parent().show();
                //  this.Init();
                this.LoadData(opts);
                break;
        }

    },
    Init: function () {
        this.Event();
        console.log("Init Role");
        this.GroupUser();
        //this.GetAssetType();
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $(thisObj.ControlIDs.Content).parent().attr('id');
        $(thisObj.ControlIDs.btnAdd).off('click');
        $(thisObj.ControlIDs.btnAdd).on('click', function () {
            var validate = $(thisObj.ControlIDs.formID).form('validate');
            if (validate) {
                if (thisObj.Properties.rowID == 0)
                    thisObj.ExcuteAction("INSERT");
                else {
                    thisObj.ExcuteAction("UPDATE");
                    $(windowID).window('close');
                }
            }
        });
        $(thisObj.ControlIDs.btnDelete).click(function () {
            // thisObj.ClearInfo();
            $(windowID).window('close');
        });
        $(thisObj.ControlIDs.cbChangePass).change(function () {
            if ($(this).attr('checked')) {
                $(thisObj.ControlIDs.txtPass).val("");
                $(thisObj.ControlIDs.txtPass2).val("");
                $(thisObj.ControlIDs.txtPass).removeAttr("readonly");
                $(thisObj.ControlIDs.txtPass2).removeAttr("readonly");
            } else {
                $(thisObj.ControlIDs.txtPass).val("123");
                $(thisObj.ControlIDs.txtPass2).val("123");
                $(thisObj.ControlIDs.txtPass).attr("readonly", "readonly");
                $(thisObj.ControlIDs.txtPass2).attr("readonly", "readonly");
            }
        });

    },
    GroupUser: function () {
        var eml = Mods.Users.Entry.ControlIDs.cboRole;
        var url = '../Mods/Accounts/Service/RoleService.asmx/GetListGroup';
        FWS.System.IO.Combobox(eml, url,
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                },
                onLoadSuccess: function () {
                    //$(thisObj.ControlIDs.txtTypePayment).combobox('disable');
                }
            });
    },
    GetAssetType: function () {
        var thisObj = this;
        var eml = Mods.Users.Entry.ControlIDs.cboRole;
        var url = "../Mods/VouchersExt/Service/Appendix.asmx" + "/GetContextData";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='UserType' />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: '',
                onSelect: function (record) {
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function () {
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        // this.LoadDefault();
    },
    ShowInfo: function (_data) {
        var thisObj = this;
        $(thisObj.ControlIDs.txtFullName).val(_data[0].FullName);
        $(thisObj.ControlIDs.txtUserName).val(_data[0].LoginName);

        var status = true;
        if (_data[0].Status == 1) status = false;
        $(thisObj.ControlIDs.txtStatus).attr("checked", status);
        $(thisObj.ControlIDs.cboRole).combobox("setValue", _data[0].Type);
        // $(thisObj.ControlIDs.txtStatus).attr("checked", true);
        // $(thisObj.ControlIDs.txtCollType).combobox('setValue', _data[0].AssetType);
    },
    LoadData: function (opts) {
        var opts = opts;
        var thisObj = this;
        var sInputValue = '';
        if (opts && opts.rowID) {
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetUserList' ID ='{2}'/>", 129, FWS.System.Core.UserID(), opts.rowID);
            var reqPara = { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(xml) };
            var serviceUrl = FWS.Web.Core.URL.ContextData;
            FWS.System.IO.Ajax({
                url: serviceUrl,
                type: 'POST',
                data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: xml },
                dataType: 'xml',
                success: function (data, textStatus, jqXHR) {
                    try {
                        data = $.FindInXml(data);
                        data = data.CSV2JSON2();
                        thisObj.ShowInfo(data[1])
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });
        }
    },
    GetInputSave: function (action) {
        var thisObj = this;
        var _fullName = $(thisObj.ControlIDs.txtFullName).val();
        var _username = $(thisObj.ControlIDs.txtUserName).val();
        var _type = $(thisObj.ControlIDs.cboRole).combobox('getValue');
        var _pass = $(thisObj.ControlIDs.txtPass).val();
        //  var _status = $(thisObj.ControlIDs.txtStatus).value;
        var _status = !$(thisObj.ControlIDs.txtStatus).is(':checked') & 1;
        //_status = status 
        var _isPass = $(thisObj.ControlIDs.cbChangePass).is(':checked') & 1;
        // <RequestParams Function="UserList" Action="INSERT|UPDATE|DELETE|ACTIVE|DEACTIVE"   ID="1"  LoginName="" Password=""  FullName="" Type="1"/>
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams ID='{2}' LoginName='{3}' Password='{4}' FullName='{5}' Type='{6}' Function='UserList' Action='{7}' Status ='{8}' IsChangePassword='{9}'/>",
         129, FWS.System.Core.UserID(), thisObj.Properties.rowID, _username, _pass, _fullName, _type, action, _status, _isPass);
        return xml;
    },
    ExcuteAction: function (action) {
        var thisObj = this;
        var inputValue = thisObj.GetInputSave(action);
        FWS.System.IO.Ajax({
            //url: '../Mods/ACore/Service/GroupBaseService.asmx/UpdateTransaction',
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey,
                inputValue: $.HtmlEncode(inputValue),
                instant: '[INSTANT]'
            },
            success: function (data, textStatus, jqXHR) {
                var data = $(data).find("string").eq(0).text();

                //data = eval("(" + data + ")");
                if (data && typeof data === "string") {
                    var objRet = FWS.Web.Core.ToActionJSON(data);
                    //console.log(objRet);
                    if (objRet.Code == "OK") {
                        $.messager.alert('OK', objRet.Description);
                        // Mods.Items.[INSTANT].Grid.Reload();
                        thisObj.ClearInfo();
                    }
                    else {
                        $.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    }
};
$(function () {
    Mods.Users.Entry.Init();
    $.extend($.fn.validatebox.defaults.rules, {
        pwd: {
            validator: function (v) { return true },
            message: "..."
        },
        same: { // 
            validator: function (v, param) { // param: [dom_id]
                return v.length == 0 || v == document.getElementById(param[0]).value;
            },
            message: "Enter not the same password"
        }
    });
});