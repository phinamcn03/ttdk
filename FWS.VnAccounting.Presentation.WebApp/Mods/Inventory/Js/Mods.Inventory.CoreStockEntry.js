if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
var NumRow = 1;
var Precision = 0;
var Groupseparator = ',';
Mods.Inventory.CoreStock[INSTANT] = {
    ServiceUrl: '../Mods/Inventory/Service/CStockService.asmx',
    ServerOptions: CoreStock_Instant['[INSTANT]'],
    ObjMesseage: {
        SaveTitle: 'Lưu đơn đặt hàng',
        SaveConfirm: 'Bạn muốn lưa đơn đặt hàng này?',
        TransTitle: 'Result order Purchase',
        TransConfirm: 'Succesful!',
        TransFail: 'Create fail!!!',
        DeleteTitle: 'Xóa khách hàng',
        DeleteConfirm: 'Bạn có chắc muốn xóa Khách hàng này?',
        Posted: 'Chung tu da duoc Post! Thuc hien khong thanh cong',
        PostTransTitle: 'Post Payment',
        PostTransConfirm: 'Ban co muon post don hang nay!',
        UnPostTransTitle: 'Unpost payment',
        UnPostTransConfirm: 'Ban co muon unpost don hang nay!'
    },
    ControlIDs: {
        ctype: '#[INSTANT]-cbType',
        cobject: "#[INSTANT]-txtObjectName",
        cdesc: "#[INSTANT]-txtDescription",
        cinwardNo: "#[INSTANT]-txtInwardNo",
        ctradeDate: "#[INSTANT]-txtInwardDate",
        cref: "#[INSTANT]-txtReferenceID",
        account: "#[INSTANT]-txtAccount",
        refID: "#[INSTANT]-txtReferenceID",
        cbStock: "#[INSTANT]-cbStock",

        btnSave: "#[INSTANT]-btnSave",
        btnNew: "#[INSTANT]-btnAddNew",
        btnClear: "#[INSTANT]-btnClear",
        btnSave: "#[INSTANT]-btnSave",
        btnBack: "#[INSTANT]-btnBack",
        btnPost: "#[INSTANT]-btnPost",
        btnUnPost: "#[INSTANT]-btnUnPost",
        formID: "#[INSTANT]Inventory-Form"
    },
    Init: function () {
        this.DefinationList.Init();
        this.Event();
        this.Grid.Load({ ID: 0 });
    },
    DefaultInit: function (opts) {
        var windowID = opts.id;
        var rowID = opts.rowID;
        var parentOptions = opts.parentOptions;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.Properties.parentOptions = parentOptions;
        this.Properties.posted = "False";
        this.ClearInfo(windowID);
        switch (rowID) {
            case "-1":
                this.ShowSearch();
                break;
            case "0":
                this.LoadNew();
                break;
            default:

                this.ShowInfo({ ID: rowID });
                break;
        }
    },

    Properties: {
        windowID: "",
        rowID: "0",
        posted: 'False',
        parentOptions: null
    },
    Back: function () {
        var parentOptions = this.Properties.parentOptions;
        if (parentOptions) {
            FWS.Web.CTemplateController.LoadContent(parentOptions);
            var parentIns = parentOptions.template.split("/")[2];
            var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
            jsParent.Grid.RefreshCurrentPage();
        }
    },
    LoadNew: function () {
        this.DefinationList.Init();
        this.SetDafaultValue();
        this.Grid.ReloadGrid();
        this.EnableForm(this.Properties.windowID)
    },
    SetDafaultValue: function () {
        var thisObj = this;
        //$('#InwardStockEntry-cbType').combobox("select", 2);
        FWS.System.IO.Datebox(thisObj.ControlIDs.ctradeDate);
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.ctradeDate).datebox('setValue', sCustom);
        this.DefinationList.GetRefNo();
    },
    SetFormatType: function () {
        var thisObj = this;
        $(thisObj.Grid.GridView + " #gs_Quantity").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_Price").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_Amount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_OutwardAmount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');

    },
    Event: function () {
        var thisObj = this;
        //var windowID = "#" + $('#InwardStockEntry-Content').parent().attr('id');
        $(thisObj.ControlIDs.btnSave).click(function () {
            var validate = $(thisObj.ControlIDs.formID).form('validate');
            if (validate)
                if (thisObj.Properties.posted == "False")
                    thisObj.Update();
                else
                    $.messager.alert('Stock', thisObj.ObjMesseage.Posted);
            // thisObj.Back();
        });
        $(thisObj.ControlIDs.btnPost).click(function () {
            thisObj.Post();
        });
        $(thisObj.ControlIDs.btnUnPost).click(function () {
            thisObj.UnPost();
        });

        $(thisObj.ControlIDs.btnBack).click(function () {
            thisObj.Back();

        });
        $(thisObj.ControlIDs.btnClear).click(function () {
            //$(windowID).window('close');
            thisObj.Back();
        });
        $(thisObj.ControlIDs.btnNew).click(function () {
            thisObj.LoadEntryNew();
        });
        $(thisObj.Grid.GridId).find(".ui-icon-trash").unbind("click");
        $(thisObj.Grid.GridId).find(".ui-icon-pencil").unbind("click");
        $(thisObj.Grid.GridId + " .ui-icon-trash").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.Delete(rowID);
        });
        $(thisObj.Grid.GridId + " .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.Grid.SetInfoGrid(rowID);
            //thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    CreateAutocompleteGrid: function () {
        var url = "../Mods/AP/Service/PurchaseOrderService.asmx/";
        var thisObj = this;
        disabled = false;
        if (thisObj.ServerOptions.RefType == 8)
            disabled = true;
        FWS.System.IO.Datebox(thisObj.Grid.GridView + " #gs_ExpireDate", { disabled: disabled });

        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', sCustom);

        var _ac1 = FWS.System.IO.Autocomplete(thisObj.Grid.GridView + " #gs_InwardNo", this.ServiceUrl + "/GetProdutAutoComplete", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}' StockID='{2}' RefType ='{3}' Context='{4}'", $(thisObj.Grid.GridView + " #gs_InwardNo").val(), '', $(thisObj.ControlIDs.cbStock).combobox('getValue'), thisObj.ServerOptions.RefType, "stock") },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (data.length > 0)
                    return data[0] + " - " + data[1];
                return '';
            },
            formatResult: function (data) {
                if (data.length > 0)
                    return data[0]
                return "";
            }
        }).result(function (event, item) {
            if (item.length > 0) {
                $(thisObj.Grid.GridView + " #gs_InwardCode").val(item[0]);
                $(thisObj.Grid.GridView + " #gs_InwardName").val(item[1]);
                $(thisObj.Grid.GridView + " #gs_InwardName").attr("IDValue", item[2]);
                $(thisObj.Grid.GridView + " #gs_Unit").val(item[3]);
                $(thisObj.Grid.GridView + " #gs_Unit").attr("IDValue", item[7]);
                $(thisObj.Grid.GridView + " #gs_CreditAmount").val(item[4]);
                $(thisObj.Grid.GridView + " #gs_DebitAmount").val(item[5]);
                $(thisObj.Grid.GridView + " #gs_DebitAmount").attr("IDValue", item[8]);
                $(thisObj.Grid.GridView + " #gs_CreditAmount").attr("IDValue", item[9]);
                $(thisObj.Grid.GridView + " #gs_SerialNo").val(item[10]);
                $(thisObj.Grid.GridView + " #gs_Quantity").numberbox('setValue', "");
                if (thisObj.ServerOptions.RefType == 7) {
                    $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', item[11]);
                    $(thisObj.Grid.GridView + " #gs_Price").numberbox('setValue', item[11]);
                }
                else {
                    $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', item[12]);
                    $(thisObj.Grid.GridView + " #gs_Price").numberbox('setValue', item[6]);
                }
                if (item[13] == '')
                    $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', '');
                else {
                    var _date = jQuery.format(new Date(item[13].substring(0, item[13].lastIndexOf("/") + 5)), "dd/MM/yyyy");
                    $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', _date);
                }
            }
            else {
                $(thisObj.Grid.GridView + " #gs_InwardCode").val('');
                $(thisObj.Grid.GridView + " #gs_InwardName").val('');
                $(thisObj.Grid.GridView + " #gs_InwardName").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_Unit").val('');
                $(thisObj.Grid.GridView + " #gs_Unit").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_CreditAmount").val('');
                $(thisObj.Grid.GridView + " #gs_DebitAmount").val('');
                $(thisObj.Grid.GridView + " #gs_DebitAmount").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_CreditAmount").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_SerialNo").val("");
                $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', "");
                $(thisObj.Grid.GridView + " #gs_Price").val("");
                $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', "");

            }

        });
        var _name = FWS.System.IO.Autocomplete(thisObj.Grid.GridView + " #gs_InwardName", this.ServiceUrl + "/GetProdutAutoComplete", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}' StockID='{2}' RefType ='{3}' Context='{4}'", "", $(thisObj.Grid.GridView + " #gs_InwardName").val(), $(thisObj.ControlIDs.cbStock).combobox('getValue'), thisObj.ServerOptions.RefType, "stock") },
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                if (data.length > 0)
                    return data[1];
                return '';
            },
            formatResult: function (data) {
                if (data.length > 0)
                    return data[1]
                return "";
            }
        }).result(function (event, item) {
            if (item.length > 0) {
                $(thisObj.Grid.GridView + " #gs_InwardCode").val(item[0]);
                $(thisObj.Grid.GridView + " #gs_InwardNo").val(item[0]);
                $(thisObj.Grid.GridView + " #gs_InwardName").val(item[1]);
                $(thisObj.Grid.GridView + " #gs_InwardName").attr("IDValue", item[2]);
                $(thisObj.Grid.GridView + " #gs_Unit").val(item[3]);
                $(thisObj.Grid.GridView + " #gs_Unit").attr("IDValue", item[7]);
                $(thisObj.Grid.GridView + " #gs_CreditAmount").val(item[4]);
                $(thisObj.Grid.GridView + " #gs_DebitAmount").val(item[5]);
                $(thisObj.Grid.GridView + " #gs_DebitAmount").attr("IDValue", item[8]);
                $(thisObj.Grid.GridView + " #gs_CreditAmount").attr("IDValue", item[9]);
                $(thisObj.Grid.GridView + " #gs_SerialNo").val(item[5]);
                $(thisObj.Grid.GridView + " #gs_SerialNo").val(item[10]);
                $(thisObj.Grid.GridView + " #gs_Quantity").numberbox('setValue', "");
                if (thisObj.ServerOptions.RefType == 7) {
                    $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', item[11]);
                    $(thisObj.Grid.GridView + " #gs_Price").numberbox('setValue', item[11]);
                }
                else {
                    $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', item[12]);
                    $(thisObj.Grid.GridView + " #gs_Price").numberbox('setValue', item[6]);
                }
                if (item[13] == '')
                    $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', '');
                else {
                    var _date = jQuery.format(new Date(item[13].substring(0, item[13].lastIndexOf("/") + 5)), "dd/MM/yyyy");
                    $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', _date);
                }

            }
            else {
                $(thisObj.Grid.GridView + " #gs_InwardCode").val('');
                $(thisObj.Grid.GridView + " #gs_InwardName").val('');
                $(thisObj.Grid.GridView + " #gs_InwardName").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_Unit").val('');
                $(thisObj.Grid.GridView + " #gs_Unit").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_CreditAmount").val('');
                $(thisObj.Grid.GridView + " #gs_DebitAmount").val('');
                $(thisObj.Grid.GridView + " #gs_DebitAmount").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_CreditAmount").attr("IDValue", '');
                $(thisObj.Grid.GridView + " #gs_SerialNo").val("");
                $(thisObj.Grid.GridView + " #gs_OutwardAmount").numberbox('setValue', "");
                $(thisObj.Grid.GridView + " #gs_Price").val("");
                $(thisObj.Grid.GridView + " #gs_ExpireDate").datebox('setValue', "");

            }

        });
        var _ac2 = FWS.System.IO.Autocomplete(thisObj.Grid.GridView + " #gs_DebitAmount", url + "GetAccountList", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue FilterCode="InventoryDebit" UserID="{0}" Code="{1}"/>', "1", $(thisObj.Grid.GridView + " #gs_DebitAmount").val())
                }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $(thisObj.Grid.GridView + " #gs_DebitAmount").val(item[2]).attr('IDValue', item[0]);
        });

        var _ac3 = FWS.System.IO.Autocomplete(thisObj.Grid.GridView + " #gs_CreditAmount", url + "GetAccountList", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () {
                    return $.string.Format('<InputValue FilterCode="InventoryCredit" UserID="{0}" Code="{1}"/>', "1", $(thisObj.Grid.GridView + " #gs_CreditAmount").val())
                }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $(thisObj.Grid.GridView + " #gs_CreditAmount").val(item[2]).attr('IDValue', item[0]);
        });
        var _stock = FWS.System.IO.Autocomplete(thisObj.Grid.GridView + " #gs_StockName", this.ServiceUrl + "/GetAutoStocks", {
            width: 378,
            cacheLength: 12,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputValue: function () { return $.string.Format('<InputValue UserID="{0}" Code="{1}"/>', "1", $(thisObj.Grid.GridView + " #gs_StockName").val()) }
            },
            formatItem: function (data, i, total) {
                return data[2];
            },
            formatResult: function (data) {
                return data[2];
            }
        }).result(function (event, item) {
            $(thisObj.Grid.GridView + " #gs_StockName").val(item[2]).attr('IDValue', item[0]);
        });
    },
    GetInfo: function () {
        var thisObj = this;
        var _idObjectName = "[INSTANT]-txtObjectName" + $(thisObj.ControlIDs.ctype).combobox('getValue');
        var sDate = $(thisObj.ControlIDs.ctradeDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var IDate = $.format(dDate, 'MM/dd/yyyy');
        var objFooter = $(this.Grid.GridId).footerData('get');
        var options = {
            ID: this.Properties.rowID || "0",
            Type: $(thisObj.ControlIDs.ctype).combobox('getValue'),
            InNo: $(thisObj.ControlIDs.cinwardNo).val(),
            Name: ($("#" + _idObjectName).attr("cid")) ? $("#" + _idObjectName).attr("cid") : '',
            OjName: $("#" + _idObjectName).val(),
            Stock: $(thisObj.ControlIDs.cbStock).combobox('getValue'),
            InDate: IDate,
            InDesc: $(thisObj.ControlIDs.cdesc).val(),
            Posted: 1,
            Amount: objFooter.Amount,
            ClientID: 1,
            InRef: $(thisObj.ControlIDs.cref).val(),
            RefType: thisObj.ServerOptions.RefType
        };
        return options;
    },
    SetInfo: function (data) {
        var thisObj = this;
        this.Properties.posted = data.Posted;
        $(thisObj.ControlIDs.ctype).combobox('select', data.ObjectType);
        $(thisObj.ControlIDs.cinwardNo).val(data.Code);
        $(thisObj.ControlIDs.cref).val(data.RefID);
        $(thisObj.ControlIDs.cdesc).val(data.Description);
        $(thisObj.ControlIDs.cbStock).combobox('select', data.StockID);
        this.DefinationList.GetObjectName({ ID: data.ObjectID, Type: data.ObjectType });
        var _date = jQuery.format(new Date(data.VoucherDate.substring(0, 10)), "dd/MM/yyyy");
        $(thisObj.ControlIDs.ctradeDate).datebox("setValue", _date);
        if (data.Posted == "True")
            thisObj.DisableForm(thisObj.Properties.windowID);
        else
            thisObj.EnableForm(thisObj.Properties.windowID);
        //  $(thisObj.ControlIDs.cdesc).attr('readonly', 'readonly');
        //  $(thisObj.ControlIDs.ctradeDate).attr('readonly', 'readonly');
    },
    DisableForm: function (element) {
        var thisObj = this;
        $(thisObj.ControlIDs.btnUnPost).css("display", "")
        $(thisObj.ControlIDs.btnPost).css("display", "none")
        $("#" + element + ' :input').attr('readonly', 'readonly');
        $(thisObj.ControlIDs.btnSave).click(function () {
            return false;
        });
    },
    EnableForm: function (element) {
        var thisObj = this;
        $(thisObj.ControlIDs.btnUnPost).css("display", "none")
        $(thisObj.ControlIDs.btnPost).css("display", "")
        $(thisObj.ControlIDs.btnUnPost).removeAttr('readonly')
        $("#" + element + ' :input').removeAttr('readonly');
        $(thisObj.Grid.GridView + " #gs_Unit, " + thisObj.Grid.GridView + " #gs_OutwardAmount, " + thisObj.Grid.GridView + " #gs_Amount").attr('readonly', "readonly");
        if (thisObj.ServerOptions.RefType == 8)
            $(thisObj.Grid.GridView + " #gs_SerialNo, " + thisObj.Grid.GridView + " #gs_ExpireDate").attr('readonly', "readonly");

        $(thisObj.ControlIDs.btnSave).click(function () {
            return false;
        });

    },
    ClearInfo: function (element) {
        $("#" + element).find("input:text").val('');
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.Grid.iDRowEdit = 0;
        var thisObj = this;
        var $control = $(thisObj.Grid.GridView + " #gs_ID");
        if ($control.length > 0)
            $control.val('');
        $control = $(thisObj.Grid.GridView + " #gs_InwardName");
        if ($control.length > 0)
            $control.val('').attr("IDValue", '');
        $control = $(thisObj.Grid.GridView + " #gs_Unit");
        if ($control.length > 0)
            $control.val('').attr("IDValue", '');
        $control = $(thisObj.Grid.GridView + " #gs_CreditAmount");
        if ($control.length > 0)
            $control.val('').attr("IDValue", '');
        $control = $(thisObj.Grid.GridView + " #gs_DebitAmount");
        if ($control.length > 0)
            $control.val('').attr("IDValue", '');
        $control = $(thisObj.Grid.GridView + " #gs_Quantity");
        if ($control.length > 0)
            $control.val('');
        $control = $(thisObj.Grid.GridView + " #gs_Price");
        if ($control.length > 0)
            $control.val('');
        $control = $(thisObj.Grid.GridView + " #gs_InwardNo");
        if ($control.length > 0)
            $control.val('').focus();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID;
        this.LoadEntry();
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        var thisObj = this;
        thisObj.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            this.DefinationList.GetInwardStock(opts);
            var _inputValue = $.string.Format('ID="{0}" RefType="{1}"', opts.ID, this.ServerOptions.RefType);
            this.Grid.optionClient.extraParams.inputValue = _inputValue;
            this.Grid.RefreshCurrentPage();
            //this.Grid.Load(opts);
        }
    },
    GetInputValue: function (opts) {
        var thisObj = this;
        var input
        opts = opts || thisObj.GetInfo();
        var options = {
            ID: ""
        };
        $.extend(true, options, opts);
        var rowID = this.Properties.rowID;
        var action = rowID == "0" ? "INSERT" : "UPDATE";
        var inputMaster = $.string.Format('<Master UserID="1" Action="{0}" ID="{1}" ObjectID="{2}" ObjectType="{3}" Description="{4}" VoucherDate="{5}" RefType="{6}" Code ="{7}" Amount="{8}" RefID="{9}" ClientID="{10}" ObjectName="{11}" StockID ="{12}"/>',
                                   action, options.ID, options.Name, options.Type, options.InDesc, options.InDate, options.RefType, options.InNo, thisObj.FormatUS(options.Amount), options.InRef, options.ClientID, options.OjName, options.Stock);
        var inputDetail = "\n";
        var ids = $(thisObj.Grid.GridId).getDataIDs();
        for (var i = 0; i < ids.length; i++) {
            var obj = $(thisObj.Grid.GridId).getRowData(ids[i]);
            var IDate = ""
            var dDate = $.parseDate(obj.ExpireDate, 'dd/MM/yyyy'); //
            if (obj.ExpireDate != "")
                IDate = $.format(dDate, 'MM/dd/yyyy');
            // if (obj.ActionRow != "")
            inputDetail += $.string.Format('<Detail Action="{0}" ID="{1}" MasterID="{2}" StockID="{3}" ItemID="{4}" Quantity="{5}" Price="{6}" Amount="{7}" ExpDate="{8}" SerialNo="{9}" CreditAccount ="{10}" DebitAccount="{11}" Description="{12}" UnitID="{13}" />',
                                                     obj.ActionRow, obj.ID, '', obj.StockID, obj.ItemID, thisObj.FormatUS(obj.Quantity), thisObj.FormatUS(obj.Price), thisObj.FormatUS(obj.Amount), IDate, obj.SerialNo, obj.CreditAmountID, obj.DebitAmountID, "", obj.UnitID);
        }
        input = $.string.Format('<InputValue>{0} {1}</InputValue>', inputMaster, inputDetail);
        console.log(input);
        return input
    },
    Update: function () {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = thisObj.GetInputValue();
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/UpdateCoreStock',
            type: 'POST',
            data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        thisObj.Properties.rowID = data.Result
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        //  thisObj.ClearForm();
                        // thisObj.LoadNew();
                        // thisObj.Back();
                        //  var parentOptions = thisObj.Properties.parentOptions;
                        //  if (parentOptions) {
                        //       var parentIns = parentOptions.template.split("/")[2];
                        //       var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
                        //       jsParent.Grid.RefreshCurrentPage();
                        //  }
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    ClearForm: function () {
        $(this.ControlIDs.formID + ' input').val('').removeAttr('IDValue');
        this.UpdateID = null;
        this.Grid.Clear();
    },
    Post: function () {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = $.string.Format('<InputValue TransID="{0}"/>', thisObj.Properties.rowID);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/PostCoreStock',
            type: 'POST',
            data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        thisObj.Properties.posted = "True";
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        thisObj.DisableForm(thisObj.Properties.windowID);
                        //  thisObj.Back();
                        //  var parentOptions = thisObj.Properties.parentOptions;
                        //  if (parentOptions) {
                        //       var parentIns = parentOptions.template.split("/")[2];
                        //       var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
                        //        jsParent.Grid.RefreshCurrentPage();
                        //   }
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    UnPost: function () {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = $.string.Format('<InputValue TransID="{0}"/>', thisObj.Properties.rowID);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/UnPostCoreStock',
            type: 'POST',
            data: { InputValue: input, refType: thisObj.ServerOptions.RefType },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        thisObj.Properties.posted = "False";
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        thisObj.EnableForm(thisObj.Properties.windowID);
                        //  thisObj.Back();
                        //  var parentOptions = thisObj.Properties.parentOptions;
                        //   if (parentOptions) {
                        //       var parentIns = parentOptions.template.split("/")[2];
                        //       var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
                        //       jsParent.Grid.RefreshCurrentPage();
                        //   }
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    FormatUS: function (val) {
        return $.parseFloat(val, 'n', FWS_SERVER_CONFIG.Culture);
    },
    Grid: {
        GridId: '#[INSTANT]_Grid',
        GridView: '#gview_[INSTANT]_Grid',
        GridPager: '[INSTANT]_Gridpage',
        iDRowEdit: 0,
        iPage: 1,
        iNumRow: 12,
        optionClient: "",
        IsLoad: false,
        Load: function (opts) {
            var thisObj = this, coreStock = Mods.Inventory.CoreStock[INSTANT];
            var _inputValue = $.string.Format('ID="{0}" RefType="{1}"', opts.ID, coreStock.ServerOptions.RefType);
            $.each(colModelInvent_[INSTANT], function (index, item) {
                item.frozen = false;
            });

            thisObj.optionClient = {
                gridUrl: coreStock.ServiceUrl + "/GetInwardStockGridEntry",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: _inputValue,
                    refType: coreStock.ServerOptions.RefType
                },
                colNames: colNameInvent_[INSTANT],
                colModel: colModelInvent_[INSTANT],
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    coreStock.Grid.SetInfoGrid(rowID);
                    //  alert("click");
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                gridComplete: function () {
                    thisObj.IsLoad = true;
                    $(thisObj.GridView + " #gs_InwardNo").attr("tabindex", '20');
                    $(thisObj.GridView + " #gs_InwardName").attr("tabindex", '21');

                    if (Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType == 7) {
                        $(thisObj.GridView + " #gs_SerialNo").attr("tabindex", '22');
                        $(thisObj.GridView + " #gs_ExpireDate").attr("tabindex", '23');
                        $(thisObj.GridView + " #gs_Quantity").attr("tabindex", '24');
                        $(thisObj.GridView + " #gs_Price").attr("tabindex", '25');
                    }
                    else {
                        $(thisObj.GridView + " #gs_Quantity").attr("tabindex", '22');
                        $(thisObj.GridView + " #gs_Price").attr("tabindex", '23');
                    }
                    $(thisObj.GridId).footerData('set', { Action: 'Tổng:', Amount: thisObj.TotalAmount() });
                    $(thisObj.GridView + " #gs_Unit, " + thisObj.GridView + " #gs_OutwardAmount, " + thisObj.GridView + " #gs_Amount").attr('readonly', "readonly");

                },
                onSelectRow: function (rowId) {
                    var cbIsChecked = ($("#jqg_[INSTANT]_Grid_" + rowId).is(':checked'));
                    if (cbIsChecked == false)
                        $("#" + rowId).removeClass("DeleteClass");
                }
            };
            ///var sum = grid.jqGrid('getCol', 'Amount', false, 'sum');
            new CGrid().Init(thisObj.GridId, optionInvent_[INSTANT], thisObj.optionClient);
            $(thisObj.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            thisObj.HotKey();
            coreStock.CreateAutocompleteGrid();
            coreStock.SetFormatType();
            //   $(thisObj.GridView + " #gs_Quantity").val(1);
            //   $(thisObj.GridView + " #gs_Price").val(1);
        },
        Clear: function () {
            var thisObj = this;
            $(thisObj.GridId).jqGrid("clearGridData");
            $(thisObj.GridView + " #gs_Quantity").numberbox('setValue', 1);
        },
        TotalAmount: function () {
            var totalAMT = 0.0;
            var thisObj = this;
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '') {
                    if (objRow.ActionRow != "DELETE")
                        totalAMT += $.parseFloat(objRow.Amount, 'n', 'vi-VN');
                }
            });
            return totalAMT;
        },
        HotKey: function () {
            var objThis = this;
            $("input[type=text]").focus(function () { $(this).select(); });
            $(objThis.GridView + " #gs_Quantity").keyup(function (e) {
                var _quantity = $(this).val();
                $(objThis.GridView + " #gs_Quantity").numberbox('setValue', _quantity);
                //  var _quantity = $(objThis.GridView + " #gs_Quantity").val();
                var _price = $(objThis.GridView + " #gs_Price").numberbox('getValue');

                // if (_quantity == "") {
                //       $(this).focus();
                //       return;
                //    }             
                if (!isNaN(_price)) {
                    $(objThis.GridView + " #gs_Amount").numberbox('setValue', (_quantity * _price));
                }
            });
            $(objThis.GridView + " #gs_Price").keyup(function (e) {
                var _price = $(this).val();
                var _quantity = $(objThis.GridView + " #gs_Quantity").numberbox('getValue');

                // if (_price == "") {
                //     $(this).focus();
                //      return;
                //  }
                if (!isNaN(_price)) {
                    $(objThis.GridView + " #gs_Amount").numberbox('setValue', (_quantity * _price));
                    $(objThis.GridView + " #gs_Price").numberbox('setValue', _price);
                }
            });
            $(objThis.GridView + ' input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Price' || _controlid == 'gs_InwardNo' || _controlid == 'gs_SerialNo' || _controlid == 'gs_ExpireDate' || _controlid == 'gs_Quantity')
                    objThis.InsertRow();
                else if (_controlid == 'gs_ItemCode')
                    $(objThis.GridView + " #gs_Quantity").focus();
            });
            $(objThis.GridView + " #gs_Unit, " + objThis.GridView + " #gs_OutwardAmount, " + objThis.GridView + " #gs_Amount").attr('readonly', "readonly");

            if (Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType == 8)
                $(objThis.GridView + " #gs_SerialNo, " + objThis.GridView + " #gs_ExpireDate").attr('readonly', "readonly");

        },
        InsertRow: function () {
            // $("#gs_ItemCode").focus();
            var objThis = this;
            coreStock = Mods.Inventory.CoreStock[INSTANT];
            var Quantity = $(objThis.GridView + " #gs_Quantity").numberbox('getValue');
            var Price = $(objThis.GridView + " #gs_Price").numberbox('getValue');

            var Amount = $(objThis.GridView + " #gs_Amount").numberbox('getValue');

            var dataRow = {};
            dataRow.ItemID = $(objThis.GridView + " #gs_InwardName").attr("IDValue");
            dataRow.InwardName = $(objThis.GridView + " #gs_InwardName").val();
            dataRow.InwardNo = $(objThis.GridView + " #gs_InwardNo").val();
            if (dataRow.ItemID == '') {
                $(objThis.GridView + " #gs_ItemCode").focus();
                return;
            }
            dataRow.StockID = $(objThis.GridView + " #gs_StockName").attr("IDValue");
            dataRow.StockName = $(objThis.GridView + " #gs_StockName").val()
            // if (dataRow.StockName == '') {
            //     $(objThis.GridView + " #gs_StockName").focus();
            //     return;
            // }
            dataRow.Unit = $(objThis.GridView + " #gs_Unit").val();
            dataRow.UnitID = $(objThis.GridView + " #gs_Unit").attr("idvalue");
            dataRow.DebitAmount = $(objThis.GridView + " #gs_DebitAmount").val();
            dataRow.DebitAmountID = $(objThis.GridView + " #gs_DebitAmount").attr("IDValue");
            dataRow.CreditAmount = $(objThis.GridView + " #gs_CreditAmount").val();
            dataRow.CreditAmountID = $(objThis.GridView + " #gs_CreditAmount").attr("IDValue");
            dataRow.SerialNo = $(objThis.GridView + " #gs_SerialNo").val();
            dataRow.OutwardAmount = $(objThis.GridView + " #gs_OutwardAmount").numberbox('getValue');
            dataRow.ExpireDate = $(objThis.GridView + " #gs_ExpireDate").datebox("getValue");
            if (Price == "") {
                Price = $(objThis.GridView + " #gs_Price").val();
            }
            dataRow.Price = Price;
            if (Quantity == "") {
                Quantity = $(objThis.GridView + " #gs_Quantity").val();
            }
            dataRow.Quantity = Quantity;
            dataRow.Amount = Amount;
            if (dataRow.Amount == "") {
                $(objThis.GridView + " #gs_Amount").focus();
                return;
            }
            if (this.iDRowEdit == 0) {
                dataRow.ID = NumRow++;
                dataRow.ActionRow = "INSERT";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('addRowData', dataRow.ID, dataRow, 'first'); //new_row
            }
            else {

                dataRow.ID = this.iDRowEdit;
                var actionRow = $(this.GridId).getCell(dataRow.ID, 'ActionRow');
                if (actionRow == "INSERT")
                    dataRow.ActionRow = "INSERT";
                else
                    dataRow.ActionRow = "UPDATE";
                dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
                $(objThis.GridId).jqGrid('setRowData', dataRow.ID, dataRow, '');
                this.iDRowEdit = 0;
            }
            $(objThis.GridId).footerData('set', { Action: 'Tổng:', Amount: objThis.TotalAmount() });
            $(objThis.GridView + ' input[id^="gs_"]').val('').removeAttr('IDValue');
            $(objThis.GridView + " #gs_InwardName").focus();
            return;
        },
        ReloadGrid: function () {
            $(this.GridId).clearGridData();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        AddRow: function (obj) {
            var _id = $(this.GridId).getDataIDs().length;
            $(this.GridId).jqGrid('addRowData', _id, obj, "last");
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var options = {
                ID: "",
                FromDate: "",
                ToDate: ""
            };
            $.extend(true, options, opts);
            var inputValue = $.string.Format('ID="{0}" FromDate="{0}" ToDate ="{1}"', options.ID, options.FromDate, options.ToDate);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        },
        Delete: function (rowid) {
            var thisObj = this;
            if ($(thisObj.GridId + " tr[id='" + rowid + "']").hasClass("DeleteClass")) {
                $(thisObj.GridId + " tr[id='" + rowid + "']").removeClass("DeleteClass");
                $(thisObj.GridId).setCell(rowid, 'ActionRow', ' ', '');
            }
            else {
                $(thisObj.GridId + " tr[id='" + rowid + "']").addClass("DeleteClass");
                $(thisObj.GridId).setCell(rowid, 'ActionRow', 'DELETE', '');
            }
            $(thisObj.GridId).footerData('set', { Action: 'Tổng:', Amount: thisObj.TotalAmount() });

        },
        SetInfoGrid: function (idRow) {
            var obj = $(this.GridId).getRowData(idRow),
            coreStock = Mods.Inventory.CoreStock[INSTANT];
            var objThis = this;
            if (obj.ActionRow != "DELETE") {
                this.iDRowEdit = idRow;
                $(objThis.GridView + " #gs_ID").val(obj.ID);
                $(objThis.GridView + " #gs_InwardNo").val(obj.InwardNo);
                $(objThis.GridView + " #gs_InwardName").val(obj.InwardName);
                $(objThis.GridView + " #gs_InwardName").attr("IDValue", obj.InwardID);
                $(objThis.GridView + " #gs_StockName").val(obj.StockName);
                $(objThis.GridView + " #gs_StockName").attr("IDValue", obj.StockID);
                $(objThis.GridView + " #gs_Unit").val(obj.Unit);
                $(objThis.GridView + " #gs_Unit").attr("IDValue", obj.UnitID);
                $(objThis.GridView + " #gs_SerialNo").val(obj.SerialNo);
                $(objThis.GridView + " #gs_ExpireDate").datebox('setValue', obj.ExpireDate);

                $(objThis.GridView + " #gs_CreditAmount").val(obj.CreditAmount);
                $(objThis.GridView + " #gs_DebitAmount").val(obj.DebitAmount);
                $(objThis.GridView + " #gs_DebitAmount").attr("IDValue", obj.DebitAmountID);
                $(objThis.GridView + " #gs_CreditAmount").attr("IDValue", obj.CreditAmountID);
                // $(grid.GridView + " #gs_Quantity").numberbox('setValue', thisObj.FormatUS(objRow.Quantity));
                $(objThis.GridView + " #gs_Quantity").numberbox('setValue', coreStock.FormatUS(obj.Quantity));
                $(objThis.GridView + " #gs_OutwardAmount").numberbox('setValue', coreStock.FormatUS(obj.OutwardAmount));

                $(objThis.GridView + " #gs_Price").numberbox('setValue', coreStock.FormatUS(obj.Price));
                $(objThis.GridView + " #gs_Amount").numberbox('setValue', coreStock.FormatUS(obj.Amount));
            }
        }
    },
    AutoComplete: function (type, control) {
        var _url = this.ServiceUrl + "/GetDataAutoComplete";
        FWS.System.IO.Autocomplete(control, _url, {
            width: 378,
            minChars: 1,
            max: 10,
            delay: 500,
            autoFill: false,
            mustMatch: false,
            scrollHeight: 220,
            extraParams: {
                inputType: type,
                currPage: 1,
                numberRowOfPage: 50
            },
            formatItem: function (data, i, total) {
                return data[0] + " - " + data[2];
            },
            formatResult: function (data) {
                $(control).attr('cid', data[0]);
                return data[2];
            }
        }).result(function (event, item) {

            $(control).attr('cid', item[0]);
            return item[2];
        });
    },
    OnChange: function (opts) {
        var thisObj = this,
            _parent = $(thisObj.ControlIDs.formID + " .cObjectName");
        _parent.html('');
        var _id = "[INSTANT]-txtObjectName" + opts.value;
        var _input = document.createElement('input');
        _input.setAttribute('type', 'text');
        _input.setAttribute('id', _id);
        _input.setAttribute('style', 'width: 250px;');
        _parent.html(_input);
        Mods.Inventory.CoreStock[INSTANT].AutoComplete(opts.value, thisObj.ControlIDs.formID + " #" + _id);
    },
    DefinationList: {
        ObjectType: null,
        Init: function () {
            var thisObj = this;
            thisObj.GetObjectType();
        },
        IsFirst: true,
        GetObjectType: function () {
            var thisObj = this;
            if (Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType == 7)
                defaultData = 2;
            if (Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType == 8)
                defaultData = 1;
            FWS.System.IO.Combobox(Mods.Inventory.CoreStock[INSTANT].ControlIDs.ctype, Mods.Inventory.CoreStock[INSTANT].ServiceUrl + '/GetIntDefinationList',
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                defaultData: defaultData,
                onSelect: function (record) {
                    Mods.Inventory.CoreStock[INSTANT].OnChange(record);
                },
                onLoadSuccess: function () {
                }
            });
            FWS.System.IO.Combobox(Mods.Inventory.CoreStock[INSTANT].ControlIDs.cbStock, Mods.Inventory.CoreStock[INSTANT].ServiceUrl + '/GetStockList',
            {
                data: { inputValue: '<InputValue/>' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    // thisObj.OnChange(record);
                },
                onLoadSuccess: function () {
                    $(Mods.Inventory.CoreStock[INSTANT].ControlIDs.cbStock).combobox("setValue", 13);
                }
            });
        },
        GetRefNo: function () {
            FWS.System.IO.Ajax({
                url: Mods.Inventory.CoreStock[INSTANT].ServiceUrl + '/GetNextRefNo',
                type: 'POST',
                data: { inputValue: $.string.Format(' RefType="{0}"', Mods.Inventory.CoreStock[INSTANT].ServerOptions.RefType) },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $(Mods.Inventory.CoreStock[INSTANT].ControlIDs.cinwardNo).val(data.RefNo);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetInwardStock: function (opts) {
            var objMain = Mods.Inventory.CoreStock[INSTANT];
            FWS.System.IO.Ajax({
                url: objMain.ServiceUrl + '/GetInwardStock',
                type: 'POST',
                data: { inputValue: $.string.Format('<InputValue ID="{0}" RefType="{1}" />', opts.ID, objMain.ServerOptions.RefType), refType: objMain.ServerOptions.RefType },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            objMain.SetInfo(data);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetObjectName: function (opts) {
            FWS.System.IO.Ajax({
                url: Mods.Inventory.CoreStock[INSTANT].ServiceUrl + '/GetObjectName',
                type: 'POST',
                data: { inputValue: 'ID="' + opts.ID + '"', inputType: opts.Type },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $("#[INSTANT]-txtObjectName" + $('#[INSTANT]-cbType').combobox('getValue')).val(data.Name);
                            $("#[INSTANT]-txtObjectName" + $('#[INSTANT]-cbType').combobox('getValue')).attr('cid', data.ID);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        }
    }
};
$(function () {
    Mods.Inventory.CoreStock[INSTANT].Init();
});