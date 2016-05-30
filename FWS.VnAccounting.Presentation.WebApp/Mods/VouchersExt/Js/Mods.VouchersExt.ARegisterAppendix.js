if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.VouchersExt == 'undefined')
    Mods.VouchersExt = {};

Mods.VouchersExt.ARegisterAppendix[INSTANT] = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServiceAppendix: '../Mods/VouchersExt/Service/Appendix.asmx',
    RefType: 21,
    DataPersonSend: [],
    ServerOptions:[],
    ControlIDs: {
        MainTab: "#[INSTANT]RegisterAppendix-MainTab",
        btnAddNew: "#[INSTANT]RegisterAppendix-btnAddNew",
        btnClear: "#[INSTANT]RegisterAppendix-btnClear",
        txtRefDate: "#[INSTANT]RegisterAppendix-txtRefDate",
        txtRefNo: "#[INSTANT]RegisterAppendix-txtRefNo",
        txtSoTB: "#[INSTANT]RegisterAppendix-txtSoTB",
        OldRefNo: "#[INSTANT]RegisterAppendix-OldRefNo",
        ObjectID: "#[INSTANT]RegisterAppendix-ObjectID",
        ObjectName: "#[INSTANT]RegisterAppendix-ObjectName",
        btnAll: "#[INSTANT]RegisterAppendix-btnAll",
        btnPrivate: "#[INSTANT]RegisterAppendix-btnPrivate",
        btnGCN: "#[INSTANT]RegisterAppendix-btnGCN",
        Address: "#[INSTANT]RegisterAppendix-Address",
        txtType: "#[INSTANT]RegisterAppendix-txtType",
        txtRegisType: "#[INSTANT]RegisterAppendix-txtRegisType",
        txtDateRecieve: "#[INSTANT]RegisterAppendix-txtDateRecieve",
        txthh: "#[INSTANT]RegisterAppendix-txthh",
        txtmm: "#[INSTANT]RegisterAppendix-txtmm",
        txtdd: "#[INSTANT]RegisterAppendix-txtdd",
        txtmonth: "#[INSTANT]RegisterAppendix-txtmonth",
        txtyyyy: "#[INSTANT]RegisterAppendix-txtyyyy",
        txtNumPage: "#[INSTANT]RegisterAppendix-txtNumPage",
        txtPersonCode: "#[INSTANT]RegisterAppendix-txtPersonCode",
        txtSend: "#[INSTANT]RegisterAppendix-txtSend",
        txtAddressSend: "#[INSTANT]RegisterAppendix-txtAddressSend",
        Content: "#[INSTANT]RegisterAppendix-Content"
    },
        DefaultInit: function (opts) {
        this.ClearInfo();
           var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.Properties.ID = opts.ID;
        console.log(":::::::::::::::",opts);
        
         switch (rowID) {
            case "-1":
              //  $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").hide();
               // $("#AppendixEntry-btnSearch").show();
               // this.ShowSearch();
                break;
            case "0":
              //  $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").show();
              //  $("#AppendixEntry-btnSearch").hide();
                // this.Init();

                this.LoadDefault();
                break;
            default:
              //  $("#AppendixEntry-btnAddNew,#AppendixEntry-btnCancel").show();
             //   $("#AppendixEntry-btnSearch").hide();
                //  this.Init();
                this.LoadData(opts);
                break;
        }

    },
    Init: function () {
        var thisObj = this;
        thisObj.CreateControl();
        thisObj.Event();
        thisObj.GridColateral.Load();
        thisObj.GridReColateral.Load();
        thisObj.GridProperty.Load();
     },
    Event: function () {
        var thisObj = this;
        var windowID = "#" + $(thisObj.ControlIDs.Content).parent().attr('id');

        $(thisObj.ControlIDs.btnAddNew).off('click');
        $(thisObj.ControlIDs.btnAddNew).on('click', function () {
          if (thisObj.Properties.ID != 0)
            thisObj.ExcuteAction("INSERT", 0);
            else
            thisObj.ExcuteAction("UPDATE", 0);
        });
         $(thisObj.ControlIDs.btnClear).off('click');
        $(thisObj.ControlIDs.btnClear).on('click', function () {
          thisObj.ClearInfo();
        });
           $(thisObj.ControlIDs.btnAll).off('click');
        $(thisObj.ControlIDs.btnAll).on('click', function () {
              var obj = {
            filterXml: $.string.Format('<RequestParams RegisTransRefNo="{0}" ViewID="35" ViewerID="13" Function="" Context="COMBINE" />',
                $(thisObj.ControlIDs.txtRefNo).val())
        };
        thisObj.Print(obj);
        });
             $(thisObj.ControlIDs.btnPrivate).off('click');
        $(thisObj.ControlIDs.btnPrivate).on('click', function () {
              var obj = {
             filterXml: $.string.Format('<RequestParams  RegisTransRefNo="{0}" ViewID="35" ViewerID="13" />',
                $(thisObj.ControlIDs.txtRefNo).val())
        };
        thisObj.Print(obj);
        });
             $(thisObj.ControlIDs.btnGCN).off('click');
        $(thisObj.ControlIDs.btnGCN).on('click', function () {
              var obj = {
            filterXml: $.string.Format('<RequestParams RefNo="{0}" ViewID="38" ViewerID="18" />',
                $(thisObj.ControlIDs.txtRefNo).val())
        };
        thisObj.Print(obj);
        });
            
    },
    CreateControl: function () {
        var thisObj = this;
        var demo = new CTabs({ fit: false });
        demo.Init(thisObj.ControlIDs.MainTab);
        thisObj.CreateKHTX();
        thisObj.GetSendTo();
        FWS.System.IO.DateTimebox(thisObj.ControlIDs.txtRefDate);
        var date = new Date(FWS_SERVER_CONFIG.DateTime);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');
        $(thisObj.ControlIDs.txtRefDate).datebox('setValue', sCustom);

        //FWS.System.IO.DateTimebox(thisObj.ControlIDs.txtDateRecieve);
       // var date = new Date(FWS_SERVER_CONFIG.DateTime);
      //  var sCustom = $.format(date, 'dd/MM/yyyy hh:mm');
       // $(thisObj.ControlIDs.txtDateRecieve).datebox('setValue', sCustom);
            var date = new Date(FWS_SERVER_CONFIG.DateTime);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');
       thisObj.SetReceiveDate(sCustom);
        $(thisObj.ControlIDs.txtNumPage).numberspinner({
    min: 1,
    max: 1000,
    editable: true
});

    var eml = thisObj.ControlIDs.txtType;
    var url = "../Mods/VouchersExt/Service/Appendix.asmx" + "/GetContextData";
    var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='AssetType' />", 129, FWS.System.Core.UserID());
    FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: 1,
                onSelect: function (record) {
                    $(eml).attr("TextValue", record.text);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function (r) {

                    // $(thisObj.GridView + " #gs_Type").combobox('setValue', 1);
                    // console.log(r);
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });

        var eml = thisObj.ControlIDs.txtRegisType;
        var url = "../Mods/VouchersExt/Service/Appendix.asmx" + "/GetContextData";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='VoucherActionType' />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: 93,
                onSelect: function (record) {
                    $(eml).attr("TextValue", record.text);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function (r) {

                    // $(thisObj.GridView + " #gs_Type").combobox('setValue', 1);
                    // console.log(r);
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    SetReceiveDate: function(_date){
    var thisObj = this;
        var sCustom = _date;
        if ( _date=="") return;
           $(thisObj.ControlIDs.txtdd).val(sCustom.substring(0,2));
          $(thisObj.ControlIDs.txtmonth).val(sCustom.substring(3,5));
           $(thisObj.ControlIDs.txtyyyy).val(sCustom.substring(6,10));
        $(thisObj.ControlIDs.txthh).val(sCustom.split(" ")[1].substring(0,2));
        $(thisObj.ControlIDs.txtmm).val(sCustom.split(":")[1].substring(0,2));
      
    },
    GetReceiveDate: function(){
    var thisObj = this;
     var date = new Date(FWS_SERVER_CONFIG.DateTime);
     var _date = $.string.Format("{0}/{1}/{2} {3}:{4}",$(thisObj.ControlIDs.txtmonth).val(),$(thisObj.ControlIDs.txtdd).val(),$(thisObj.ControlIDs.txtyyyy).val(),$(thisObj.ControlIDs.txthh).val(),$(thisObj.ControlIDs.txtmm).val());
     return _date;
    },
    LoadDefault: function () {
        var thisObj = this;
        //  thisObj.GetRefNo();
        //  var date = new Date(FWS_SERVER_CONFIG.Date);
        //  var sCustom = $.format(date, 'dd/MM/yyyy');
        //   $(thisObj.ControlIDs.txtDateMsg).datebox('setValue', sCustom);
        //  $(thisObj.ControlIDs.txtCollType).combobox('setValue', 0);
        ///  $(thisObj.ControlIDs.txtSendTo).combobox('setValue', 292);
    },
    ClearInfo: function () {
    var thisObj = this;
        var windowID = this.ControlIDs.Content;
        $(windowID).find("input:text").val('');
         $(thisObj.GridColateral.GridId).clearGridData();
         $(thisObj.GridReColateral.GridId).clearGridData();
        $(thisObj.GridProperty.GridId).clearGridData();
          var date = new Date(FWS_SERVER_CONFIG.DateTime);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');
        $(thisObj.ControlIDs.txtRefDate).datebox('setValue', sCustom);
        var date = new Date(FWS_SERVER_CONFIG.DateTime);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');

        thisObj.Properties.ID =0;
        thisObj.SetReceiveDate(sCustom);
       // $(thisObj.ControlIDs.txtType).combobox('setValue', 0);
        $(thisObj.ControlIDs.txtNumPage).numberspinner('setValue', 2);
        // this.LoadDefault();
    },

    Properties: {
        windowID: "",
        ID: "0"
    },
    LoadData:function(opts){
        var opts = opts;
        var thisObj = this;
        var sInputValue = '';
        if (opts && opts.rowID) {
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' Context='Edit' RefType='21' RefNo ='{2}' ID='{3}'/>", 129, FWS.System.Core.UserID(), opts.rowID,opts.ID);
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
                        thisObj.ShowInfo(data[1]);
                        if ($.isFunction(options.success))
                            options.success();

                    } catch (e) { $.iLog(e); }
                }
            });
        }
        thisObj.GridColateral.LoadData(opts.rowID);
        thisObj.GridReColateral.LoadData(opts.rowID);
        thisObj.GridProperty.LoadData(opts.rowID);
    },
     ShowInfo: function(_data) {
        var thisObj = this;
        console.log("ShowInfo", _data);
        var date = new Date(_data[0].RefDate);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');
         try {

             $(thisObj.ControlIDs.txtRefDate).datebox('setValue', sCustom);
         } catch(ex) {
         }

         $(thisObj.ControlIDs.txtRefNo).val(_data[0].RefNo);
        $(thisObj.ControlIDs.txtSoTB).val(_data[0].RefNoTB);
        $(thisObj.ControlIDs.OldRefNo).val(_data[0].OldRefNo);
        $(thisObj.ControlIDs.ObjectID).val(_data[0].WarranterCode);
        $(thisObj.ControlIDs.ObjectID).attr("TextValue", _data[0].WarranterID);
        $(thisObj.ControlIDs.ObjectName).val(_data[0].WarranterName);
        $(thisObj.ControlIDs.Address).val(_data[0].WarranterAddress);
        $(thisObj.ControlIDs.txtSend).val(_data[0].ObjectName);
        $(thisObj.ControlIDs.txtAddressSend).val(_data[0].ObjectAddress);
        $(thisObj.ControlIDs.txtSend).combobox('setValue', _data[0].ObjectID);
      
       $(thisObj.ControlIDs.txtType).combobox('setValue', _data[0].AssetType);
       //Neu la TBGT
       if(_data[0].RefType ==22) _data[0].Type = 104;

       $(thisObj.ControlIDs.txtRegisType).combobox('setValue', _data[0].Type); //npn Add
       var date = new Date(_data[0].ReceiveDateTime);
        var sCustom = $.format(date, 'dd/MM/yyyy HH:mm');
       thisObj.SetReceiveDate(sCustom);
       $(thisObj.ControlIDs.txtNumPage).numberspinner('setValue', _data[0].NumPagesAttachment);
       $(thisObj.ControlIDs.txtPersonCode).val(_data[0].AssetPersonalCode);
   //     $(thisObj.ControlIDs.txtSendTo).combobox('setValue', _data[0].ObjectID);
   //     $(thisObj.ControlIDs.txtObjectAddress).combobox('setValue', _data[0].ObjectAddress);

    },
      GetSendTo: function () {
        var thisObj = this;
        var eml = thisObj.ControlIDs.txtSend;
        var url = thisObj.ServiceAppendix + "/GetContextPerson";
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetPerson' FilterCode='CQCN'  />", 129, FWS.System.Core.UserID());
        FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'id',
                textField: 'text',
                defaultData: '',
                onSelect: function (record) {
                 //   $(thisObj.ControlIDs.txtObjectAddress).val(record.value);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onChange: function (record, item) {
                    for (var i = 0; i < thisObj.DataPersonSend.length; i++) {
                    if (thisObj.DataPersonSend[i].id ==record)
                        $(thisObj.ControlIDs.txtAddressSend).val(thisObj.DataPersonSend[i].value);
                    }
                },
                onLoadSuccess: function (record) {
                    thisObj.DataPersonSend = record;
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
    },
    CreateKHTX: function () {
        var thisObj = this;
        var _url = thisObj.ServiceUrl + "/GetCustomerAutoComplete";
        var _ac1 = FWS.System.IO.Autocomplete(thisObj.ControlIDs.ObjectID, _url, {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.ControlIDs.ObjectID).val(), "") },
                typeRef: 1
            },
            formatItem: function (data, i, total) {
                if (data.length > 0)
                    return data[1] + " - " + data[2];
                return '';
            },
            formatResult: function (data) {
                if (data.length > 0)
                    return data[1];
                return "";
            }
        }).result(function (event, item) {
            if (item.length > 0) {
                $(thisObj.ControlIDs.ObjectName).val(item[2]);
                $(thisObj.ControlIDs.Address).val(item[3]);
                 $(thisObj.ControlIDs.ObjectID).attr("TextValue", item[0]);
            }
            else {
                $(thisObj.ControlIDs.ObjectName).val("");
                $(thisObj.ControlIDs.Address).val("");
                 $(thisObj.ControlIDs.ObjectID).attr("TextValue","");
            }
        });
    },
    CreateInput: function (action) {
          
        var thisObj = this;
        var str = '<RequestParams ID="{0}" RefNo="{1}" RefDate="{2}" RegisTransRefNo="{3}" Description="{4}" Function="Transaction_Asset"';
        str += ' ObjectID="{5}" ObjectName="{6}" RefType="21" OldRefNo="{7}" AssetType="{8}" AssetLicenseNumber="{9}" AssetNumberPlate="{10}"';
        str += ' ReceiveDateTime="{11}" NumPagesAttachment="{12}" AssetPersonalCode="{13}" TypeCode="{14}" Action="{15}" WarranterCode="{16}" WarranterName="{17}" WarranterAddress="{18}" ObjectAddress="{19}" WarranterID="{20}" Type="{21}" SoTB="{22}" >';
        _typecode=CRegisterAppendix_Instant.[INSTANT].Instant;
        var sDate = $(thisObj.ControlIDs.txtRefDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy HH:mm'); //
        var _date = $.format(dDate, 'MM/dd/yyyy HH:mm');
        var _tNo = $(thisObj.ControlIDs.txtRefNo).val();
         var _tSoTB = $(thisObj.ControlIDs.txtSoTB).val();
        var _tNoOld = $(thisObj.ControlIDs.OldRefNo).val();
        var _tObjID = $(thisObj.ControlIDs.ObjectID).attr("TextValue");
        if(_tObjID == undefined) _tObjID ='';
        var _tObjCode = $(thisObj.ControlIDs.ObjectID).val();
        var _tObjName = ''; // $(thisObj.ControlIDs.ObjectName).val();
        var _txtObjectAddress = $(thisObj.ControlIDs.Address).val();
        var _dateRec = thisObj.GetReceiveDate();
        var _numpages=$(thisObj.ControlIDs.txtNumPage).val();
        var _perCode=$(thisObj.ControlIDs.txtPersonCode).val();
        console.log("_perCode");
        var _typeAsset = $(thisObj.ControlIDs.txtType).combobox('getValue');
        console.log("_typeAsset");
        var _typeRegis = $(thisObj.ControlIDs.txtRegisType).combobox('getValue');
        console.log("_typeRegis",$(thisObj.ControlIDs.txtSend));
        var _txtSendCode ="";
        
        _txtSendCode = $(thisObj.ControlIDs.txtSend).val();
        
         //var _txtSendCode = $(thisObj.ControlIDs.txtSend).combobox('getValue');
         console.log("_txtSendCode");
        var _txtSendName ="";
        var _txtSendAddress = $(thisObj.ControlIDs.txtAddressSend).val();
        var req = $.string.Format(str, thisObj.Properties.ID, _tNo, _date, '', '', _txtSendCode, _txtSendName, _tNoOld, _typeAsset, '', '',_dateRec,_numpages,_perCode,_typecode, action,_tObjCode,_tObjName,_txtObjectAddress,_txtSendAddress,_tObjID,_typeRegis,_tSoTB);

        //<RequestParams ID='{2}' RefNo='{3}' RefDate='{4}' RegisTransRefNo='{5}' Description='{6}' Function="Transaction_Asset" ObjectID='{7}' ObjectName='{8}' RefType='{9}' OldRefNo='{10}' AssetType='{11}' AssetLicenseNumber='{12}' AssetNumberPlate='{13}' Action='{14}' Type='{15}'/>
        var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/>{2}{3}{4}{5}</RequestParams>",
         129, FWS.System.Core.UserID(), req, thisObj.GridColateral.InputString(), thisObj.GridReColateral.InputString(), thisObj.GridProperty.InputString());
       
       xml =xml.replace("&","-");
     //  console.log(xml);
        return xml;
    },
    ExcuteAction: function (action, id) {
        var thisObj = this;
        var inputValue = thisObj.CreateInput(action);
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
                        thisObj.Properties.ID = objRet.Result;
                    }
                    else {
                        $.messager.alert('EDITABLE', objRet.Description);
                    }
                }
            }
        });
    },
     Print: function (obj) {
        var _parent = parent;
        var _width = $(_parent.window).width() - 300;
        var _height = $(_parent.window).height() - 50;
        _parent.FWS.Web.CTemplateController.LoadPopup({
            template: 'Mods/_Core.report/ReportP',
            data: "{a:1}",
            id: "Report-Window",
            width: _width,
            height: _height,
            title: "Xem báo cáo",
            rowID: '',
            callbackComplete: function (opts) {
                _parent.Mods.CoreReport.ReportP.init(obj);
            }
        });
    },
    GridColateral: {
        GridUrl: '',
        GridId: '#[INSTANT]RegisterAppendix_GridColateral',
        GridPager: '[INSTANT]RegisterAppendix_GridColateralPage',
        GridView: "#gview_[INSTANT]RegisterAppendix_GridColateral",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameCollateral[INSTANT],
                colModel: colModelCollateral[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                     thisObj.SetInfoGrid(rowID);
                    //  alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerCollateral[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.HotKey();
            //  thisObj.LoadData();
        },
        HotKey: function () {
            var objThis = this;
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_ObjectName' || _controlid == 'gs_ObjectIDCardNumber' || _controlid == 'gs_ObjectAddress')
                {
                if ($(objThis.GridView + " #gs_ObjectName").val() == '') {
                        $(objThis.GridView + " #gs_ObjectName").focus();
                        return;
                    }
                  objThis.InsertRow();
               } else if (_controlid == 'gs_ObjectName')
                    $(objThis.GridView + " #gs_ObjectName").focus();
            });
            $(objThis.GridView).find(".ui-icon-trash").unbind("click");
            
            $(objThis.GridView + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.Delete(rowID);
            });
            $(objThis.GridView).find(".ui-icon-pencil").unbind("click");
             $(objThis.GridView + " .ui-icon-pencil").live("click", function () {
           
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};
            dataRow.ObjectName = $(objThis.GridView + " #gs_ObjectName").val();
            dataRow.ObjectIDCardNumber = $(objThis.GridView + " #gs_ObjectIDCardNumber").val();
            dataRow.ObjectAddress = $(objThis.GridView + " #gs_ObjectAddress").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1;
                dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_ObjectName").focus();
            }
            else {
                dataRow.ID = this.iDRowEdit;
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_ObjectName").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow);
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
            $(objThis.GridView + " #gs_ObjectName").val(obj.ObjectName);
            $(objThis.GridView + " #gs_ObjectIDCardNumber").val(obj.ObjectIDCardNumber);
            $(objThis.GridView + " #gs_ObjectAddress").val(obj.ObjectAddress);


        },
         LoadData: function (_id) {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{2}' Context='AssetOwnerList'/>", 129, FWS.System.Core.UserID(),_id);
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
            dataGrid[i].Action=$.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>',dataGrid[i].ID);
                $(opts.gridID).jqGrid('addRowData', dataGrid[i].ID, dataGrid[i]);
            }
        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                input += $.string.Format('<AssetOwnner Code="{0}" Name="{1}" Address="{2}" IDCardNumber="{3}"/>',
                                            obj.ID, $.HtmlEncode(obj.ObjectName), $.HtmlEncode(obj.ObjectAddress), $.HtmlEncode(obj.ObjectIDCardNumber));
            }
            return input;
        }
    },
    GridReColateral: {
        GridUrl: '',
        GridId: '#[INSTANT]RegisterAppendix_GridReColateral',
        GridPager: '[INSTANT]RegisterAppendix_GridReColateralPage',
        GridView: "#gview_[INSTANT]RegisterAppendix_GridReColateral",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameReCollateral[INSTANT],
                colModel: colModelReCollateral[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid;
                    thisObj.SetInfoGrid(rowID);
                     console.log("ondblClickRow",rowid,rowID);
                    //  alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerReCollateral[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

            thisObj.HotKey();
            thisObj.CreateControl();
            //  thisObj.LoadData();
        },
        CreateControl: function () {
            var thisObj = this;
            var _url = Mods.VouchersExt.ARegisterAppendix[INSTANT].ServiceUrl + "/GetCustomerAutoComplete";
            var _ac1 = FWS.System.IO.Autocomplete(thisObj.GridView + " #gs_Code", _url, {
                width: 378,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () { return $.string.Format("FilterCode='BANK' Code='{0}' Name ='{1}'", $(thisObj.GridView + " #gs_Code").val(), "") },
                    typeRef: 1
                },
                formatItem: function (data, i, total) {
                    if (data.length > 0)
                        return data[1] + " - " + data[2];
                    return '';
                },
                formatResult: function (data) {
                    if (data.length > 0)
                        return data[1];
                    return "";
                }
            }).result(function (event, item) {
                if (item.length > 0) {
                    $(thisObj.GridView + " #gs_Name").val(item[2]);
                    $(thisObj.GridView + " #gs_Address").val(item[3]);
                    $(thisObj.GridView + " #gs_ID").val(item[0]);
                }
                else {
                    $(thisObj.GridView + " #gs_Name").val("");
                    $(thisObj.GridView + " #gs_Address").val("");
                     $(thisObj.GridView + " #gs_ID").val("");
                }
            });
        },
        HotKey: function () {
            var objThis = this;
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Name' || _controlid == 'gs_Code' || _controlid == 'gs_Address') {
                    if ($(objThis.GridView + " #gs_Name").val() == '') {
                        $(objThis.GridView + " #gs_Code").focus();
                        return;
                    }
                    objThis.InsertRow();
                } else if (_controlid == 'gs_Name')
                    $(objThis.GridView + " #gs_Name").focus();
            });
            $(objThis.GridId).find(".ui-icon-trash").unbind("click");
            $(objThis.GridId).find(".ui-icon-pencil").unbind("click");
            $(objThis.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.Delete(rowID);
            });
            $(objThis.GridId + " .ui-icon-pencil").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};
            dataRow.ID = $(objThis.GridView + " #gs_ID").val();
            dataRow.Name = $(objThis.GridView + " #gs_Name").val();

            dataRow.Code = $(objThis.GridView + " #gs_Code").val();
            dataRow.Address = $(objThis.GridView + " #gs_Address").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1;
               // dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_Name").focus();
            }
            else {
               // dataRow.ID = this.iDRowEdit;
                $(objThis.GridId).jqGrid('setRowData', objThis.iDRowEdit, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_Name").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            console.log("SetInfoGrid",idRow);
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow);
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
            $(objThis.GridView + " #gs_Name").val(obj.Name);
            $(objThis.GridView + " #gs_Code").val(obj.Code);
            $(objThis.GridView + " #gs_Address").val(obj.Address);
        },
         LoadData: function (_id) {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{2}' Context='WarranterList'/>", 129, FWS.System.Core.UserID(),_id);
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
             var dataRow = {};
             //dataRow.ID =dataGrid[i].ObjectID;
             dataRow.ID =dataGrid[i].ID;
             dataRow.ObjectID =dataGrid[i].ObjectID;
             dataRow.Code =dataGrid[i].ObjectCode;
             dataRow.Name =dataGrid[i].ObjectName;
             dataRow.Address =dataGrid[i].ObjectAddress;
            dataRow.Action=$.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(opts.gridID).jqGrid('addRowData', dataRow.ID, dataRow);
            }
        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                var objectID ="";
                if(obj.ObjectID) objectID = obj.ObjectID;
                  
                input += $.string.Format('<Warranter ID="{0}" Code="{1}" Name="{2}" Address="{3}"/>',
                                            objectID, $.HtmlEncode(obj.Code), $.HtmlEncode(obj.Name), $.HtmlEncode(obj.Address));
            }
            console.log("InputString",input);
            return input;
        }
    },
    GridProperty: {
        GridUrl: '',
        GridId: '#[INSTANT]RegisterAppendix_GridProperty',
        GridPager: '[INSTANT]RegisterAppendix_GridPropertyPage',
        GridView: "#gview_[INSTANT]RegisterAppendix_GridProperty",
        iDRowEdit: 0,
        numRow: 0,
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
                colNames: colNameProperty[INSTANT],
                colModel: colModelProperty[INSTANT],
                aHeight: 234,
                afterInsertRow: function (rowid, rowdata, rowelem) {

                    //   var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;" title="xóa"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;" title="sửa"></span>/<span class="ui-icon ui-icon-print" rowid="{0}" style="display:inline-block;" title="In"></span>/<span class="ui-icon ui-icon-document" rowid="{0}" style="display:inline-block;" title="báo cáo"></span>', rowelem.RefNo);
                    //  $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);

                },
                onSelectRow: function (rowid, status) {

                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid;
                    thisObj.SetInfoGrid(rowID);
                    //  alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                loadComplete: function () {
                    $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});

                },
                gridComplete: function () {

                }
            };
            new CGrid().Init(thisObj.GridId, optionServerProperty[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });

            thisObj.HotKey();
           // thisObj.CreateControl();
            //  thisObj.LoadData();
        },
        CreateControl: function () {
            var thisObj = this;
            var eml = thisObj.GridView + " #gs_Type";
            var url = "../Mods/VouchersExt/Service/Appendix.asmx" + "/GetContextData";
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='FilterParaData' ListFunction='AssetType' />", 129, FWS.System.Core.UserID());
            FWS.System.IO.Combobox(eml, url,
            {
                data: { clientKey: FWS_SERVER_CONFIG.ClientKey,
                    inputValue: $.HtmlEncode(xml)
                },
                valueField: 'value',
                textField: 'text',
                defaultData: 1,
                onSelect: function (record) {
                    $(thisObj.GridView + " #gs_Type").attr("TextValue", record.text);
                    // Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function (r) {

                    // $(thisObj.GridView + " #gs_Type").combobox('setValue', 1);
                    // console.log(r);
                    // console.log($(Mods.Items.Receipt.ControlIDs.txtTypePayment));
                }
            });
        },
        HotKey: function () {
            var objThis = this;
               $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_LicenseNumber' || _controlid == 'gs_NumberPlate' || _controlid == 'gs_Description')
                {
                    if ($(objThis.GridView + " #gs_LicenseNumber").val() == ''
						&& $(objThis.GridView + " #gs_NumberPlate").val() == ''
						&& $(objThis.GridView + " #gs_Description").val() == '') {
						
						if($(objThis.GridView + " #gs_Description").val() == '')
						{
							$(objThis.GridView + " #gs_Description").focus();
						}
						if($(objThis.GridView + " #gs_NumberPlate").val() == '')
						{
							$(objThis.GridView + " #gs_NumberPlate").focus();
						}
						if($(objThis.GridView + " #gs_LicenseNumber").val() == '')
						{
							$(objThis.GridView + " #gs_LicenseNumber").focus();
						}
                        return;
                    }
                    objThis.InsertRow();
                }
                else if (_controlid == 'gs_LicenseNumber')
                    $(objThis.GridView + " #gs_LicenseNumber").focus();
            });
            $(objThis.GridId).find(".ui-icon-trash").unbind("click");
            $(objThis.GridId).find(".ui-icon-pencil").unbind("click");
            $(objThis.GridId + " .ui-icon-trash").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.Delete(rowID);
            });
            $(objThis.GridId + " .ui-icon-pencil").live("click", function () {
                var rowID = $(this).attr('rowid');
                objThis.SetInfoGrid(rowID);
                //thisObj.LoadEntryEdit({ ID: rowID });
            });
        },
        InsertRow: function () {
            var objThis = this;
            var dataRow = {};

           // dataRow.TypeID = $(objThis.GridView + " #gs_Type").combobox('getValue');
          //  dataRow.Type = $(objThis.GridView + " #gs_Type").attr("TextValue");
            //  dataRow.Type = $(objThis.GridView + " #gs_Type").attr("IDValue"); ;
            dataRow.LicenseNumber = $(objThis.GridView + " #gs_LicenseNumber").val();
            dataRow.NumberPlate = $(objThis.GridView + " #gs_NumberPlate").val();
            dataRow.Description = $(objThis.GridView + " #gs_Description").val();
            if (this.iDRowEdit == 0) {
                objThis.numRow = objThis.numRow + 1;
                dataRow.ID = objThis.numRow;
                //  dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
                $(objThis.GridView + " #gs_Type").focus();
            }
            else {
                dataRow.ID = this.iDRowEdit
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
                $(objThis.GridView + " #gs_LicenseNumber").focus();
            }
            $(objThis.GridView).find("input:text").val('');
        },
        Delete: function (rowid) {
            var thisObj = this;
            $(thisObj.GridId).jqGrid('delRowData', rowid);

        },
        SetInfoGrid: function (idRow) {
            var objThis = this;
            var obj = $(this.GridId).getRowData(idRow);
            this.iDRowEdit = idRow;
            $(objThis.GridView + " #gs_ID").val(obj.ID);
          //  $(objThis.GridView + " #gs_Type").combobox('setValue', obj.TypeID);
            //  $(objThis.GridView + " #gs_Type").val(obj.Type);
          //  $(objThis.GridView + " #gs_TypeID").val(obj.TypeID);
            $(objThis.GridView + " #gs_LicenseNumber").val(obj.LicenseNumber);
            $(objThis.GridView + " #gs_NumberPlate").val(obj.NumberPlate);
            $(objThis.GridView + " #gs_Description").val(obj.Description);
        },
         LoadData: function (_id) {
            var thisObj = this;
            $(thisObj.GridId).clearGridData();
            var sInputValue = '';
            //var objRequestParam = { Function: options.view.fData };
            var xml = $.string.Format("<InputValue LanguageID='{0}' UserID='{1}'/><RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{2}' Context='AssetsList'/>", 129, FWS.System.Core.UserID(),_id);
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
             var dataRow = {};
             dataRow.ID=dataGrid[i].ID;
             dataRow.LicenseNumber=dataGrid[i].AssetLicenseNumber;
             dataRow.NumberPlate=dataGrid[i].AssetNumberPlate;
             dataRow.Description=dataGrid[i].Description;
                  dataRow.Action=$.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>',dataGrid[i].ID);
                $(opts.gridID).jqGrid('addRowData', dataRow.ID, dataRow);
            }
        },
        InputString: function () {
            var thisObj = this;
            var input = '';
            var ids = $(thisObj.GridId).getDataIDs();
            for (var i = 0; i < ids.length; i++) {
                var obj = $(thisObj.GridId).getRowData(ids[i]);
                input += $.string.Format('<Asset LicenseNumber="{0}" NumberPlate="{1}" Description="{2}"/>',
                                             obj.LicenseNumber, obj.NumberPlate, obj.Description);
            }
            return input;
            
        }
    }
};
$(function () {
    Mods.VouchersExt.ARegisterAppendix[INSTANT] .Init();
});
(function ($) {
    $.fn.combobox.defaults.filter = function(q,row){
       var opts = $(this).combobox('options');
       return row[opts.textField].toUpperCase().indexOf(q.toUpperCase()) >= 0;
      // return row[opts.textField].toUpperCase().indexOf(q.toUpperCase()) == 0;
};
})(jQuery);