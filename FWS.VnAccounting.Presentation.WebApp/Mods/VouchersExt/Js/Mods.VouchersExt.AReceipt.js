if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.AReceipt[INSTANT] = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServiceReceipt: '../Mods/VouchersExt/Service/Receipt.asmx',
    ServerOptions: Receipt_Instant['[INSTANT]'],
    RefType: 23,
    ID: "",
    Edit: 0,
    IsGetNewRefNo: 1,
    ControlIDs: {
        btnSave: "#[INSTANT]Receipt-btnSave",
        btnNew: "#[INSTANT]Receipt-btnNew",
        btnDel: "#[INSTANT]Receipt-btnDel",
        btnCancel: "#[INSTANT]Receipt-btnCancel",
        btnPrintAll: "#[INSTANT]Receipt-PrintAll",
        btnPrintPath: "#[INSTANT]Receipt-PrintPath",
        txtCodeHD: "#[INSTANT]Receipt-txtCodeHD",
        txtVendorCode: "#[INSTANT]Receipt-txtVendorCode",
        txtVendorName: "#[INSTANT]Receipt-txtVendorName",
        txtAddress: "#[INSTANT]Receipt-txtAddress",
        txtPerson: "#[INSTANT]Receipt-txtPerson",
        txtReceipt: "#[INSTANT]Receipt-txtReceipt",
        txtDate: "#[INSTANT]Receipt-txtDate",
        txtTypePayment: "#[INSTANT]Receipt-txtTypePayment",
        txtNote: "#[INSTANT]Receipt-txtNote",
        txtTodate: "#[INSTANT]Receipt-txtTodate",
        txtFromdate: "#[INSTANT]Receipt-txtFromdate",
        intant: "[INSTANT]",
        formID: "#[INSTANT]Receipt-Form"
    },
    Init: function () {
        this.CreateControl();

        this.SetDefault();

        this.Grid.Load();
        this.Event();
        // this.ShowInfo(105);
    },
    ClearInfo: function () {
        this.IsGetNewRefNo = 1;
        var windowID = this.ControlIDs.formID;
        this.ID = "";
        $(this.Grid.GridId).clearGridData();
        $(windowID).find("input:text").val('');
        // Neu goi Init se dang ky them Event
        //this.Init();

        //   this.CreateControl();
        // thisObj.ControlIDs.txtVendorCode.val("");
        this.SetDefault();
        this.Grid.Load();

        //  $("#CustomerEntry-chkCustomerActive").attr("checked", true);
    },
    GetRefNo: function () {
        var self = this;
        console.log("IsGetNewRefNo", self.IsGetNewRefNo);
        FWS.System.IO.Ajax({
            url: Mods.VouchersExt.AReceipt[INSTANT].ServiceUrl + '/GetNextRefNo',
            type: 'POST',
            data: { inputValue: $.string.Format(' RefType="{0}"', Mods.VouchersExt.AReceipt[INSTANT].RefType) },
            success: function (data, textStatus, jqXHR) {
                try {
                    console.log("IsGetNewRefNo-Success", self.IsGetNewRefNo);
                    if (self.IsGetNewRefNo == 0) return;

                    var data = $(data).find("string").eq(0).text();
                    data = eval('(' + data + ')');
                    if (data) {
                        $(Mods.VouchersExt.AReceipt[INSTANT].ControlIDs.txtReceipt).val(data.RefNo);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    GetDataContext: function (_data) {
        var thisObj = this;
        thisObj.AutoCompleteID(1, _data[0].ObjectID);
        var date = new Date(_data[0].RefDate);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtReceipt).val(_data[0].RefNo);
        $(thisObj.ControlIDs.txtTypePayment).combobox('setValue', _data[0].PayMethod);
        $(thisObj.ControlIDs.txtPerson).val(_data[0].ContactName);
        $(thisObj.ControlIDs.txtNote).val(_data[0].Description);
        thisObj.Grid.LoadDataEdit(thisObj.ID);
    },
    ShowInfo: function (_id) {
        var thisObj = this;
        this.IsGetNewRefNo = 0; //khong lay so bien lai moi
        Mods.VouchersExt.AReceipt[INSTANT].ID = _id;
        thisObj.ID = _id;
        console.log(Mods.VouchersExt.AReceipt[INSTANT].ID);

        Mods.VouchersExt.AReceipt[INSTANT].Edit = 1;
        var dis = false;
        console.log(Mods.VouchersExt.AReceipt[INSTANT].ID);
        if (Mods.VouchersExt.AReceipt[INSTANT].ID != "")
            dis = true;
        //FWS.System.IO.Datebox(thisObj.ControlIDs.txtDate, { disabled: dis });
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtFromdate, { disabled: dis });
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtTodate, { disabled: dis });
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='23' ID='{2}'/>", 129, FWS.System.Core.UserID(), _id);
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
                    if (data) {
                        thisObj.GetDataContext(data[1]);
                    }
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    ShowInfoCodeHD: function (_id, _reftype) {
        var thisObj = this;
        console.log("ID", _id);
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' Context='Receipt' RefType='{3}' PayStatus='0' RefNo='{2}'/>", 129, FWS.System.Core.UserID(), _id, _reftype);
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
                    if (data) {
                        thisObj.GetDataContextHD(data[1]);
                    }
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    GetDataContextHD: function (_data) {
        var thisObj = this;
        // thisObj.AutoCompleteID(1, _data[0].WarranterID);
        // var date = new Date(_data[0].RefDate);
        //    var sCustom = $.format(date, 'dd/MM/yyyy');
        //    $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        //  $(thisObj.ControlIDs.txtReceipt).val(_data[0].RefNo);
        //  $(thisObj.ControlIDs.txtTypePayment).combobox('setValue', _data[0].PayMethod);


        if ($(thisObj.ControlIDs.txtVendorName).val() == "") {
            $(thisObj.ControlIDs.txtVendorName).val(_data[0].WarranterName);
        }
        if ($(thisObj.ControlIDs.txtVendorCode).val() == "") {
            $(thisObj.ControlIDs.txtVendorCode).val(_data[0].WarranterCode);
            $(thisObj.ControlIDs.txtVendorCode).attr('cid', _data[0].WarranterID);

        }

        if ($(thisObj.ControlIDs.txtPerson).val() == "") {
            if (thisObj.ControlIDs.intant == "ATranfer") {
                $(thisObj.ControlIDs.txtPerson).val(_data[0].WarranterName);
                $(thisObj.ControlIDs.txtAddress).val(_data[0].WarranterAddress);
            }
            else if (thisObj.ControlIDs.intant == "ACash") {
                $(thisObj.ControlIDs.txtPerson).val(_data[0].AssetOwnerName);
                $(thisObj.ControlIDs.txtAddress).val(_data[0].AssetOwnerAddress);
            }
        }
        //npnam add
        // Ly do: Nếu nhập từ ma KHTX thì lý do ="Thông báo phí 1001598012/TT2-KT ngày 06/01/2014" xem ở hàm AutoCompleteCode
        // Nếu nhập từ số đơn thì lý do ="Sô đơn: SD1, SD2, SD3, ... tối đa 10 đơn
        // Đơn SD1, SD2 là các đơn có check trên lưới
        // Chưa xử lý được bỏ check thì xóa số đơn, thêm check thì thêm số đơn
        //$(thisObj.ControlIDs.txtNote).val(_data[0].Description);

        //   if ($(thisObj.ControlIDs.txtNote).val().indexOf("Số đơn:") == -1) {
        //         $(thisObj.ControlIDs.txtNote).val($.string.Format("Số đơn: {0}", _data[0].RefNo));
        //     }
        //    else {
        ///         $(thisObj.ControlIDs.txtNote).val($(thisObj.ControlIDs.txtNote).val() + "," + _data[0].RefNo);
        //    }
        // End add

        if (_data) {
            var optionGrid = {
                gridID: thisObj.Grid.GridId,
                data: _data
            }
            var myIDs = $(thisObj.Grid.GridId).jqGrid('getDataIDs');
            var isexits = 0;

            for (var i = 0; i < myIDs.length; i++) {

                if (myIDs[i] == _data[0].ID) {
                    isexits = 1;
                    return;
                }
            }
            thisObj.Grid.ShowGrid(optionGrid);
            // $(thisObj.GridId).footerData('set', { RefNo: 'Tổng:', Amount: thisObj.Grid.TotalAmount() });
            this.GetRefNoAll();
        };
    },
    GetRefNoAll: function () {
        var thisObj = this;

        if ($(thisObj.ControlIDs.txtNote).val().indexOf("Thông báo phí") != -1) {
            return;
        }
        var elRowIds = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        var arrRefNo = '';
        $.each(elRowIds, function (index, objId) {
            if (objId != '') {
                _RefNo = $(thisObj.Grid.GridId).jqGrid('getCell', objId, 'RefNo');
                arrRefNo += _RefNo + ", ";
            }
        });
        arrRefNo = arrRefNo.substring(0, arrRefNo.length - 2);
        $(thisObj.ControlIDs.txtNote).val("Số đơn: " + arrRefNo);
    },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $('#[INSTANT]ReceiptEntry-Content').parent().attr('id');
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.ClearInfo();
            //    thisObj.ExcuteAction("UPDATE", 'In Chung');
        });
        $(thisObj.ControlIDs.btnDel).click(function () {
            thisObj.ExcuteAction("CANCEL");
        });
        $(thisObj.ControlIDs.btnCancel).click(function () {
            thisObj.ExcuteAction("DELETE");
        });
        $(thisObj.ControlIDs.btnPrintAll).click(function () {
            thisObj.ExcuteAction("UPDATE", 'In Chung', 1);
            //if (thisObj.ID == "")
            //    thisObj.ID = 0;
            //  thisObj.Print({ ID: thisObj.ID, Type: 'In Chung' });
        });
        $(thisObj.ControlIDs.btnPrintPath).click(function () {
            thisObj.ExcuteAction("UPDATE", 'In Rieng', 1);
            // thisObj.Print({ ID: thisObj.ID, Type: 'In Rieng' });
        });
        $(thisObj.ControlIDs.btnSave).click(function () {
            thisObj.ExcuteAction("UPDATE");
            // thisObj.Print({ ID: thisObj.ID, Type: 'In Rieng' });
        });
        $("#[INSTANT]Receipt_Grid").on('click', '.ui-icon-pencil', function () {
            var rowID = $(this).attr('rowid');
            console.log("edit click",rowID);
            //thisObj.LoadEntryEdit({ ID: rowID });
            thisObj.ShowTransDetail(rowID);
        });
    },
    CreateControl: function () {
        var thisObj = this;
        thisObj.CreateAutocomplete();
    },
    SetDefault: function () {
        var thisObj = this;

        FWS.System.IO.Datebox(thisObj.ControlIDs.txtDate);
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtFromdate, {
            onSelect: function () {
                thisObj.Grid.LoadData();
            }
        });
        FWS.System.IO.Datebox(thisObj.ControlIDs.txtTodate, {
            onSelect: function () {
                thisObj.Grid.LoadData();
            }
        });
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.txtDate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtFromdate).datebox('setValue', sCustom);
        $(thisObj.ControlIDs.txtTodate).datebox('setValue', sCustom);
        if (this.IsGetNewRefNo == 1) thisObj.GetRefNo();


        // $(thisObj.ControlIDs.txtTypePayment).combobox('disable');
    },
    CreateAutocomplete: function () {
        var thisObj = this;
        var control1 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtVendorCode;
        var control2 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtVendorName;
        var control3 = thisObj.ControlIDs.formID + " " + thisObj.ControlIDs.txtCodeHD;
        Mods.VouchersExt.AReceipt[INSTANT].AutoCompleteCode(1, control1, "");
        Mods.VouchersExt.AReceipt[INSTANT].AutoCompleteName(1, control2, "");
        Mods.VouchersExt.AReceipt[INSTANT].AutoCompleteCodeHD(control3);
        var eml = Mods.VouchersExt.AReceipt[INSTANT].ControlIDs.txtTypePayment;
        //  var url = "../Mods/Inventory/Service/CStockService.asmx/GetAutoCompleteVendor";
        var url = thisObj.ServiceReceipt + "/GetContextData";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='PayMethod' />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: thisObj.ServerOptions.RefType,
                onSelect: function (record) {
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function () {
                    // console.log($(Mods.VouchersExt.Receipt.ControlIDs.txtTypePayment));
                    $(thisObj.ControlIDs.txtTypePayment).combobox('disable');
                }
            });
    },
    AutoCompleteCodeHD: function (control) {
        var thisObj = this;
        var serviceUrl = this.ServiceReceipt + "/GetContextDataAutoComplete";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='DonDK' Context='Receipt' Name='{2}' />", 129, FWS.System.Core.UserID(), $(thisObj.ControlIDs.txtCodeHD).val());
        FWS.System.IO.Autocomplete(control, serviceUrl, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.HtmlEncode($.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='DonDK' Context='Receipt' Name='{2}' />", 129, FWS.System.Core.UserID(), $(thisObj.ControlIDs.txtCodeHD).val())) },
                clientKey: FWS_SERVER_CONFIG.ClientKey
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                //  $(thisObj.ControlIDs.txtVendorName).val(data[2]);
                //  thisObj.ShowInfoCodeHD();
                return data[1];
            }
        }).result(function (event, item) {
            //  $(thisObj.ControlIDs.txtVendorName).val(item[2]);
            thisObj.ShowInfoCodeHD(item[1], item[4]);
            $(control).attr('cid', item[0]);
            return item[1];
        });

    },
    AutoCompleteID: function (type, id) {
        var thisObj = this;
        var serviceUrl = this.ServiceUrl + "/GetCustomerAutoComplete";
        FWS.System.IO.Ajax({
            url: serviceUrl,
            type: 'POST',
            data: { inputValue: function () { return $.string.Format("FilterCode='BANK' ID='{0}'", id) },
                typeRef: type
            },
            dataType: 'xml',
            success: function (data, textStatus, jqXHR) {
                try {

                    data = $(data).find("string").text();
                    data = data.split('|');
                    $(thisObj.ControlIDs.txtVendorCode).attr('cid', data[0]);
                    $(thisObj.ControlIDs.txtVendorCode).val(data[1]);
                    $(thisObj.ControlIDs.txtVendorName).val(data[2]);
                    thisObj.Grid.LoadData();
                    // thisObj.ShowGrid(optionGrid);
                    if ($.isFunction(options.success))
                        options.success();

                } catch (e) { $.iLog(e); }
            }
        });
    },
    AutoCompleteName: function (type, control, inputname) {
        var thisObj = this;
        var _url = this.ServiceUrl + "/GetCustomerAutoComplete";
        FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", "", $(thisObj.ControlIDs.txtVendorName).val()) },
                typeRef: type
            },
            formatItem: function (data, i, total) {
                return data[1] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                $(thisObj.ControlIDs.txtVendorCode).attr('cid', data[0]);
                $(thisObj.ControlIDs.txtVendorCode).val(data[1]);
                return data[2];
            }
        }).result(function (event, item) {

            //$(control).attr('cid', item[0]);
            //return item[2];
            $(control).attr('cid', item[0]);
            $(thisObj.ControlIDs.txtVendorCode).attr('cid', item[0]);

            $(thisObj.ControlIDs.txtVendorCode).val(item[1]);
            //npnam Add
            if ($(thisObj.ControlIDs.txtPerson).val() == "") {
                $(thisObj.ControlIDs.txtPerson).val(item[2]);
                $(thisObj.ControlIDs.txtAddress).val(item[3]);

            }

            if ($(thisObj.ControlIDs.txtNote).val() == "" || $(thisObj.ControlIDs.txtNote).val().indexOf("Thông báo phí") == 0) {
                $(thisObj.ControlIDs.txtNote).val($.string.Format("Thông báo phí {0}/TT2-KT ngày {1}", item[1], $.format(new Date(), 'dd/MM/yyyy')));

            }
            //end npnam Add

            $(thisObj.ControlIDs.txtVendorName).val(item[2]);

            thisObj.Grid.LoadData();
            //$(control).attr('cid', item[0]);


            return item[2];

        });
    },
    AutoCompleteCode: function (type, control, inputname) {
        var thisObj = this;
        var _url = this.ServiceUrl + "/GetCustomerAutoComplete";

        FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.ControlIDs.txtVendorCode).val(), "") },
                typeRef: type
            },
            formatItem: function (data, i, total) {
                return data[1] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                $(thisObj.ControlIDs.txtVendorName).val(data[2]);


                //  thisObj.Grid.LoadData();
                return data[1];
            }
        }).result(function (event, item) {
            $(control).attr('cid', item[0]);
            $(thisObj.ControlIDs.txtVendorName).val(item[2]);
            //npnam Add
            if ($(thisObj.ControlIDs.txtPerson).val() == "") {
                $(thisObj.ControlIDs.txtPerson).val(item[2]);
                $(thisObj.ControlIDs.txtAddress).val(item[3]);

            }

            if ($(thisObj.ControlIDs.txtNote).val() == "" || $(thisObj.ControlIDs.txtNote).val().indexOf("Thông báo phí") == 0) {
                $(thisObj.ControlIDs.txtNote).val($.string.Format("Thông báo phí {0}/TT2-KT ngày {1}", item[1], $.format(new Date(), 'dd/MM/yyyy')));

            }
            //end npnam Add

            $(thisObj.ControlIDs.txtVendorName).val(item[2]);

            thisObj.Grid.LoadData();
            //$(control).attr('cid', item[0]);


            return item[1];
        });
    },
    GetInputSave: function (action) {
        var thisObj = this;
        var sDate = $(thisObj.ControlIDs.txtDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var _date = $.format(dDate, 'MM/dd/yyyy');
        var _code = $(thisObj.ControlIDs.txtVendorCode).attr("cid");
        var _name = $(thisObj.ControlIDs.txtVendorName).val();
        var _address = $(thisObj.ControlIDs.txtAddress).val();
        var _person = $(thisObj.ControlIDs.txtPerson).val();
        var _receipt = $(thisObj.ControlIDs.txtReceipt).val();
        var _type = $(thisObj.ControlIDs.txtTypePayment).combobox('getValue');
        var _note = $(thisObj.ControlIDs.txtNote).val();
        var _amt = thisObj.Grid.TotalAmount();

        var _inputdetail = ''

        var elRowIds = $(thisObj.Grid.GridId).jqGrid('getGridParam', 'selarrrow');
        $.each(elRowIds, function (index, objId) {
            if (objId != '') {
                _id = $(thisObj.Grid.GridId).jqGrid('getCell', objId, 'ID');
                _inputdetail += $.string.Format("<RegisTrans ID='{0}' />", _id);
            }
        });
        //        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams RefNo='{2}' RefDate='{3}' Description='{4}' Function='Transaction_Asset'  ObjectID='{5}' ObjectName='{6}' ContactName='{7}'  RefType='23' PayMethod='{8}' Amount='{9}' Action='{10}' ID='{11}'>{12}</RequestParams>",
        //         129, FWS.System.Core.UserID(), _receipt, _date, _note, _code, _name, _person, _type, _amt, action, thisObj.ID, _inputdetail);
        //var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/> <RequestParams RefNo='{2}' RefDate='{3}' Description='{4}' Function='Transaction_Asset'  ObjectID='{5}' ObjectName='{6}' ContactName='{7}'  RefType='23' PayMethod='{8}' Amount='{9}' Action='{10}'>{11}</RequestParams>",
        // 129, FWS.System.Core.UserID(), _receipt, _date, _note, _code, _name, _person, _type, _amt, action, _inputdetail);

        // Tao Input Value dung class CXml de dam bao xml chuan : new CXml('RequestParams', obj, _inputdetail).getXml();
        var obj = {
            ID: Mods.VouchersExt.AReceipt[INSTANT].ID + "",
            RefNo: _receipt,
            RefDate: $.format(_date, "yyyy-MM-dd"),
            Description: _note,
            Function: "Transaction_Asset",
            ObjectID: _code,
            ObjectName: _name,
            ObjectAddress: _address,
            ContactName: _person,
            RefType: "23",
            PayMethod: _type,
            Amount: _amt + "",
            Action: action
        };

        var xml = $.string.Format("<InputValue LanguageID=\"{0}\" UserID=\"{1}\"/>", 129, FWS.System.Core.UserID()) + new CXml('RequestParams', obj, _inputdetail).getXml();

        //console.write(xml);
        return xml;
    },
    ExcuteAction: function (action, type, isPrint) {
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
                        thisObj.ID = objRet.Result;
                        // $.messager.alert('OK', objRet.Description);
                        if ((action == 'UPDATE' || action == 'INSERT' || action == 'CREATE') && isPrint == 1) {
                            thisObj.Print({ ID: thisObj.ID, Type: type });
                        }
                        else {
                            $.messager.alert('Thông báo', objRet.Description);
                        }
                        // Mods.VouchersExt.[INSTANT].Grid.Reload();
                    }
                    else {
                        $.messager.alert('Thông báo', objRet.Description);
                    }
                }
            }
        });
    },
    Print: function (_obj) {
        var _width = $(window).width() - 300;
        var _height = $(window).height() - 50;
        var obj = {
            filterXml: $.string.Format('<RequestParams ID="{0}" ViewID="31" ViewerID="15" Function="" Context="{1}"  />',
                _obj.ID, _obj.Type)
        };
        FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.report/ReportP',
            data: "{a:1}",
            id: "Report-Window",
            width: _width,
            height: _height,
            title: "Xem báo cáo",
            rowID: '',
            callbackComplete: function (opts) {
                Mods.CoreReport.ReportP.init(obj);
            }
        });
    },
    Grid: {
        GridUrl: '',
        GridId: '#[INSTANT]Receipt_Grid',
        GridPager: '[INSTANT]Receipt_GridPage',
        optionClient: "",
        Load: function () {
            var thisObj = this;
            thisObj.optionClient = {
                gridUrl: thisObj.GridUrl,
                extraParams: {
                    currPage: 1,
                    numberRowOfPage: 100,
                    inputValue: ""
                },
                pager: thisObj.GridPager,
                colNames: colName[INSTANT],
                colModel: colModel[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    //Neu la thong bao phi thi them nut edit
                      var actionHtml = $.string.Format('<span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                     $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                     var rowId = rowid;
                    $(thisObj.GridId).jqGrid('setSelection', rowId);
                },
                onSelectRow: function (rowid, status) {
                    //   console.log(rowid);
                    // console.log(status);
                    Mods.VouchersExt.AReceipt[INSTANT].GetRefNoAll();
                    $(thisObj.GridId).footerData('set', { RefNo: 'Tổng:', Amount: thisObj.TotalAmount() });

                },
                onSelectAll: function (aRowids, status) {
                    $(thisObj.GridId).footerData('set', { RefNo: 'Tổng:', Amount: thisObj.TotalAmount() });
                },
                loadComplete: function (data) {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                    //                    for (var i = 0; i < data.rows.length; i++) {
                    //                        var rowId = data.rows[i].ID;
                    //                        $(thisObj.GridId).jqGrid('setSelection', rowId);
                    //                    }
                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServer[INSTANT], thisObj.optionClient);
            // $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

        },
        TotalAmount: function () {
            var thisObj = this;
            var totalAMT = 0.0;
            var elRowIds = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');

            $.each(elRowIds, function (index, objId) {
                if (objId != '') {

                    _amt = $(thisObj.GridId).jqGrid('getCell', objId, 'Amount');

                    totalAMT += $.parseFloat(_amt, 'n', FWS_SERVER_CONFIG.Culture);
                    //  totalAMT = $.parseFloat(totalAMT, ',', FWS_SERVER_CONFIG.Culture);
                }
            });
            return totalAMT;
        },
        SelectAll: function () {
            //  jQuery('#grid').jqGrid('setSelection', '10259'); 
        },
        LoadDataEdit: function (_id) {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransactionDetail_Asset' RefType='23' ID='{2}'/>", 129, FWS.System.Core.UserID(), _id);
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
                        if (data) {
                            var optionGrid = {
                                gridID: thisObj.GridId,
                                data: data[1]
                            }
                        };
                        thisObj.ShowGrid(optionGrid);
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });

        },
        LoadData: function () {
            var thisObj = this;
            if (Mods.VouchersExt.AReceipt[INSTANT].Edit == 1)
                return;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            var sFDate = $(Mods.VouchersExt.AReceipt[INSTANT].ControlIDs.txtFromdate).datebox('getValue');
            var dFDate = $.parseDate(sFDate, 'dd/MM/yyyy'); //
            var _Fdate = $.format(dFDate, 'MM/dd/yyyy');
            var sTDate = $(Mods.VouchersExt.AReceipt[INSTANT].ControlIDs.txtTodate).datebox('getValue');
            var dTDate = $.parseDate(sTDate, 'dd/MM/yyyy'); //
            var _Tdate = $.format(dTDate, 'MM/dd/yyyy');
            //var objRequestParam = { Function: options.view.fData };
            var xml;
            xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams WarranterID='{2}' PayStatus='0' Function='GetTransaction_Asset' Context='Receipt' RefType='21' FromDate='{3}' ToDate='{4}' />", 129, FWS.System.Core.UserID(), $(Mods.VouchersExt.AReceipt[INSTANT].ControlIDs.txtVendorCode).attr("cid"), _Fdate, _Tdate);
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
                        if (data) {
                            var optionGrid = {
                                gridID: thisObj.GridId,
                                data: data[1]
                            }
                        };
                        thisObj.ShowGrid(optionGrid);
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });

        },
        ShowGrid: function (opts) {
            var thisObj = this;
            var dataGrid = opts.data;
            for (var i = 0; i < dataGrid.length; i++) {
                $(opts.gridID).jqGrid('addRowData', dataGrid[i].ID, dataGrid[i]);
            }
        },
        Reload: function () {
            $(this.GridId).clearGridData();
            this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var gridID = this.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format("Code='{0}' Name ='{1}'", opts.Code, opts.Name);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, this.optionClient);
        }
    },
    ShowTransDetail: function (rowID)
    {
        var thisObj = this;
        thisObj.row
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;
        console.log("Show TransDetail");
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/VouchersExt/ucReceiptTransDetail',
            data: "{a:1}",
            id: "ReceiptDetail-Window",
            width: _width,
            height: _height,
            title: "Chi tiet",
            rowID: rowID,
            callbackComplete: function (opts) {
                _parent.Mods.VouchersExt.ReceiptTransDetail.init(rowID)
                //_parent.Mods.CoreReport.ReportP.init(obj);
            }
        });
    }
};
$(function () {
    Mods.VouchersExt.AReceipt[INSTANT].Init();
  //  this.Event();
});
