if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Inventory == 'undefined')
    Mods.Inventory = {};
var NumRow = 1;
var Precision = 0;
var Groupseparator = ',';
Mods.Inventory.TranferStockEntry = {
    ServiceUrl: '../Mods/Inventory/Service/TranferStockService.asmx',
    ServiceCoreUrl: '../Mods/Inventory/Service/CStockService.asmx',
    Init: function () {
        this.DefinationList.Init();
        this.Event();
        this.Grid.Load({ ID: 0 });
    },
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
        formID: "#TranferStockEntryInventory-Form",
        ctype: '#TranferStockEntry-cbType',
        cobject: "#TranferStockEntry-txtObjectName",
        cdesc: "#TranferStockEntry-txtDescription",
        ctradeDate: "#TranferStockEntry-txtTranferDate",
        crefNo: "#TranferStockEntry-txtTranferNo",
        refID: "#TranferStockEntry-txtReferenceID",
        toStock: "#TranferStockEntry-cbToStock",
        fromStock: "#TranferStockEntry-cbFromStock",

        btnBack: "#TranferStockEntry-btnBack",
        btnPost: "#TranferStockEntry-btnPost",
        btnUnPost: "#TranferStockEntry-btnUnPost",
        btnSave: "#TranferStockEntry-btnSave",
        btnNew: "#TranferStockEntry-btnAddNew",
        btnClear: "#TranferStockEntry-btnClear"
    },
    DefaultInit: function (opts) {
        var windowID = opts.id;
        var rowID = opts.rowID;
        var parentOptions = opts.parentOptions;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.Properties.posted = 0;
        this.Properties.parentOptions = parentOptions;
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
        parentOptions: null
    },
    ClearInfo: function (element) {
        $("#" + element).find("input:text").val('');
    },
    LoadNew: function () {
        this.DefinationList.Init();
        this.SetDafaultValue();
        this.EnableForm(this.Properties.windowID)
        this.Grid.ReloadGrid();
    },
    SetDafaultValue: function () {
        var thisObj = this;
        //$('#InwardStockEntry-cbType').combobox("select", 2);
        FWS.System.IO.Datebox(thisObj.ControlIDs.ctradeDate);
        var date = new Date(FWS_SERVER_CONFIG.Date);
        var sCustom = $.format(date, 'dd/MM/yyyy');
        $(thisObj.ControlIDs.ctradeDate).datebox('setValue', sCustom);
        this.DefinationList.SetValueField();
    },
    SetFormatType: function () {
        var thisObj = this;
        $(thisObj.Grid.GridView + " #gs_Quantity").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_OutwardPrice").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_Price").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
        $(thisObj.Grid.GridView + " #gs_TotalAmount").attr('precision', Precision).attr('groupseparator', Groupseparator).addClass('easyui-numberbox');
    },
    Event: function () {
        var thisObj = this;
        $("#TranferStockEntry-btnSave").click(function () {
            if (thisObj.Properties.posted == 0)
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

        $("#TranferStockEntry-btnCancel").click(function () {
        });

    },
    Post: function () {
        var thisObj = this;
        //            <InputValue>
        //<Master Name=""/>
        //<Detail ItemID="" Name="" Action=""/>
        //<Detail ItemID="" Name="" Action="" />
        //</InputValue>
        var input = $.string.Format('<InputValue ID="{0}" RefType="{1}" Action="POST"/>', thisObj.Properties.rowID, 9);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {

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
        var input = $.string.Format('<InputValue ID="{0}" RefType="{1}" Action="UnPost"/>', thisObj.Properties.rowID, 9);
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.IsSuccessfull == "True") {
                        thisObj.Properties.posted = 0;
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        thisObj.EnableForm(thisObj.Properties.windowID);
                        //  var parentOptions = thisObj.Properties.parentOptions;
                        //  if (parentOptions) {
                        //      var parentIns = parentOptions.template.split("/")[2];
                        //      var jsParent = eval("Mods.Inventory.CoreStock" + parentIns);
                        //     jsParent.Grid.RefreshCurrentPage();
                        //  }
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Description);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    },
    Back: function () {
        var parentOptions = this.Properties.parentOptions;
        if (parentOptions) {
            FWS.Web.CTemplateController.LoadContent(parentOptions);
            var parentIns = parentOptions.template.split("/")[2];
            var jsParent = eval("Mods.Inventory.TranferStock");
            jsParent.Grid.RefreshCurrentPage();
        }
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadContent(this.OptionsController);
    },
    LoadEntryNew: function () {
        thisObj = this;
        this.OptionsController.rowID = "0"
        $control = $(thisObj.Grid.GridView + " #gs_Quantity");
        if ($control.length > 0)
            $control.val('');
        $control = $(thisObj.Grid.GridView + " #gs_Price");
        if ($control.length > 0)
            this.LoadEntry();
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            this.DefinationList.GetInwardStock(opts);
            var _inputValue = $.string.Format('ID="{0}" RefType="{1}"', opts.ID, 9);
            this.Grid.optionClient.extraParams.inputValue = _inputValue;
            this.Grid.RefreshCurrentPage();
            //this.Grid.Load(opts);
        }
    },
    SetInfo: function (data) {
        var thisObj = this;
        this.Properties.posted = data.IsPosted;
        $(thisObj.ControlIDs.ctype).combobox('select', data.ObjectType);
        $(thisObj.ControlIDs.toStock).combobox('setValue', data.InwardStock);
        $(thisObj.ControlIDs.fromStock).combobox('setValue', data.OutwardStock);
        $(thisObj.ControlIDs.crefNo).val(data.RefNo);
        $(thisObj.ControlIDs.refID).val(data.ReferenceID);
        $(thisObj.ControlIDs.cdesc).val(data.Description);
        this.DefinationList.GetObjectName({ ID: data.ObjectID, Type: data.ObjectType });
        var _date = jQuery.format(new Date(data.RefDate.substring(0, 10)), "dd/MM/yyyy");
        $(thisObj.ControlIDs.ctradeDate).datebox("setValue", _date);
        if (data.IsPosted ==1)
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
        $(thisObj.Grid.GridView + " #gs_Unit, " + thisObj.Grid.GridView + " #gs_TotalAmount").attr('readonly', "readonly");
        $(thisObj.ControlIDs.btnSave).click(function () {
            return false;
        });
    },
    GetInfo: function () {
        var sDate = $(this.ControlIDs.ctradeDate).datebox('getValue');
        var dDate = $.parseDate(sDate, 'dd/MM/yyyy'); //
        var IDate = $.format(dDate, 'MM/dd/yyyy');

        var _idObjectName = "#TranferStockEntry-txtObjectName" + $(this.ControlIDs.ctype).combobox('getValue');
        var options = {
            ID: this.Properties.rowID || "0",
            FromStock: $(this.ControlIDs.fromStock).combobox('getValue'),
            ToStock: $(this.ControlIDs.toStock).combobox('getValue'),
            InNo: $(this.ControlIDs.crefNo).val(),
            refID: $(this.ControlIDs.refID).val(),
            ObjectType: $(this.ControlIDs.ctype).combobox('getValue'),
            ObjectID: $(_idObjectName).attr("cid"),
            ObjectName: $(_idObjectName).val(),
            InDate: IDate,
            InDesc: $("#TranferStockEntry-txtDescription").val(),
            Amount: 0,
            ClientID: 1,
            RefType: 9
        };
        return options;
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
        var inputMaster = $.string.Format('<InputValue ID="{0}" RefDate="{1}" ObjectID="{2}" ObjectName="{3}" ObjectType="{4}" RefType="{5}" RefNo="{6}" InwardStockID="{7}" OutwardStockID="{8}" Description="{9}" Amount="{10}" ReferenceID="{11}" Action="{12}"/>',
                                   options.ID, options.InDate, options.ObjectID, options.ObjectName, options.ObjectType, options.RefType, options.InNo, options.ToStock, options.FromStock, options.InDesc, 100, options.refID, action);
        var inputDetail = "\n";
        var ids = $(thisObj.Grid.GridId).getDataIDs();
        for (var i = 0; i < ids.length; i++) {
            var obj = $(thisObj.Grid.GridId).getRowData(ids[i]);
         //   if (obj.ActionRow != "")
                inputDetail += $.string.Format('<Detail ID="{0}" ItemID="{1}" Quantity="{2}" Price="{3}" OutwardPrice="{4}" TotalAmount="{5}" Description="{6}" Action="{7}" UnitID="{8}"/>',
                                                    obj.ID, obj.ItemID, thisObj.FormatUS(obj.Quantity), thisObj.FormatUS(obj.Price), thisObj.FormatUS(obj.OutwardPrice), thisObj.FormatUS(obj.TotalAmount), obj.Description, obj.ActionRow, obj.UnitID);
        }
        input = $.string.Format('{0} {1}', inputMaster, inputDetail);

        return input
    },
    Update: function () {
        var thisObj = this;
        var input = thisObj.GetInputValue();
        FWS.System.IO.Ajax({
            url: thisObj.ServiceUrl + '/Update',
            type: 'POST',
            data: { InputValue: input },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");

                    if (data.IsSuccessfull == "True") {
                        thisObj.Properties.rowID = data.Result
                        $.messager.alert(thisObj.ObjMesseage.TransTitle, data.Description);
                        // Mods.Inventory.InwardStockEntry.Back();
                        // Mods.Inventory.InwardStockEntry.Grid.RefreshCurrentPage();
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
        GridId: '#TranferStockEntry_Grid',
        GridPager: 'TranferStockEntry_Gridpage',
        GridView: '#gview_TranferStockEntry_Grid',
        iDRowEdit: 0,
        iPage: 1,
        iNumRow: 12,
        optionClient: null,
        Load: function (opts) {
            thisObj = this, tranfStock = Mods.Inventory.TranferStockEntry;
            var _inputValue = $.string.Format('ID="{0}" RefType="{1}"', opts.ID, 9);
            thisObj.optionClient = {
                gridUrl: tranfStock.ServiceCoreUrl + "/GetInwardStockGridEntry",
                pager: thisObj.GridPager,
                extraParams: {
                    currPage: thisObj.iPage,
                    numberRowOfPage: thisObj.iNumRow,
                    inputValue: _inputValue,
                    refType: 9
                },
                colNames: colNameTranferStockEntry,
                colModel: colModelTranferStockEntry,
                afterInsertRow: function (rowid, rowdata, rowelem) {
                    var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                    $(tranfStock.Grid.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
                    $(tranfStock.Grid.GridId).jqGrid('setCell', rowid, "TotalAmount", rowdata.Quantity * rowdata.Price);
                },
                ondblClickRow: function (rowid) {
                    var rowID = rowid
                    tranfStock.Grid.SetInfoGrid(rowID);
                    //Mods.Inventory.InwardStockEntry.LoadEntryEdit({ ID: rowID });
                },
                onSelectRow: function (rowId) {
                    //                    var cbIsChecked = ($("#jqg_InwardStock_Grid_" + rowId).is(':checked'));
                    //                    if (cbIsChecked == false) {
                    //                        $("#" + rowId).removeClass("DeleteClass");
                    //                    }
                    //                    else {
                    //                        Mods.Inventory.InwardStock.CheckDeleteRow({ ID: rowId });
                    //                    }
                },
                gridComplete: function () {
                    $(tranfStock.Grid.GridView + " #gs_ItemCode").attr("tabindex", '20');

                    $(tranfStock.Grid.GridView + " #gs_ItemName").attr("tabindex", '21');
                    $(tranfStock.Grid.GridView + " #gs_Description").attr("tabindex", '22');
                    $(tranfStock.Grid.GridView + " #gs_Quantity").attr("tabindex", '23');

                    $(tranfStock.Grid.GridView + " #gs_Price").attr("tabindex", '24');
                    $(tranfStock.Grid.GridId).footerData('set', { Action: 'Tổng:', TotalAmount: tranfStock.Grid.TotalAmount() });
                    $(tranfStock.Grid.GridId).find(".ui-icon-trash").unbind("click");
                    $(tranfStock.Grid.GridId).find(".ui-icon-pencil").unbind("click");
                    $(tranfStock.Grid.GridId + " .ui-icon-trash").live("click", function () {
                        var rowID = $(this).attr('rowid');
                        tranfStock.Grid.Delete(rowID);

                    });
                    $(tranfStock.Grid.GridId + " .ui-icon-pencil").live("click", function () {
                        var rowID = $(this).attr('rowid');
                        tranfStock.Grid.SetInfoGrid(rowID);
                        // thisObj.LoadEntryEdit({ ID: rowID });
                    });
                }
            };

            new CGrid().Init(thisObj.GridId, TranferStockEntryOption, thisObj.optionClient);
            $(tranfStock.Grid.GridId).jqGrid('filterToolbar', { autosearch: false, searchOnEnter: false, enableClear: true });
            tranfStock.Grid.CreateAutocompleteGrid();
            tranfStock.SetFormatType();
            tranfStock.Grid.HotKey();

        },
        SetInfoGrid: function (idRow) {
            var obj = $(this.GridId).getRowData(idRow),
            coreStock = Mods.Inventory.TranferStockEntry;
            var objThis = this;
            if (obj.ActionRow != "DELETE") {
                this.iDRowEdit = idRow;
                $(objThis.GridView + " #gs_ID").val(obj.ID);
                $(objThis.GridView + " #gs_ItemID").val(obj.ItemID);
                $(objThis.GridView + " #gs_ItemCode").val(obj.ItemCode);
                $(objThis.GridView + " #gs_ItemName").val(obj.ItemName);
                // $(objThis.GridView + " #gs_InwardName").attr("IDValue", obj.InwardID);
                $(objThis.GridView + " #gs_Unit").val(obj.Unit);
                $(objThis.GridView + " #gs_UnitID").val(obj.UnitID);
                $(objThis.GridView + " #gs_Quantity").numberbox('setValue', coreStock.FormatUS(obj.Quantity));
                $(objThis.GridView + " #gs_OutwardPrice").numberbox('setValue', coreStock.FormatUS(obj.OutwardPrice));
                $(objThis.GridView + " #gs_Price").numberbox('setValue', coreStock.FormatUS(obj.Price));
                $(objThis.GridView + " #gs_TotalAmount").numberbox('setValue', coreStock.FormatUS(obj.TotalAmount));
                $(objThis.GridView + " #gs_Description").val(obj.Description);
            }
        },
        ReloadGrid: function () {
            $(this.GridId).clearGridData();
            // this.Load();
        },
        RefreshCurrentPage: function () {
            $(this.GridId).clearGridData();
            new CGrid().Request(this.GridId, this.optionClient);
        },
        Search: function (opts) {
            var thisObj = this;
            var gridID = thisObj.GridId;
            $(gridID).clearGridData();
            var inputValue = $.string.Format('FromDate="{0}" ToDate ="{1}"', opts.FromDate, opts.ToDate);
            this.optionClient.extraParams.currPage = 1;
            this.optionClient.extraParams.inputValue = inputValue;
            new CGrid().Request(gridID, thisObj.optionClient);
        },
        GetSelectedRow: function () {
            thisObj = this;
            var rowID = $(thisObj.GridId).jqGrid('getGridParam', 'selarrrow');
            return rowID || -1;
        },
        TotalAmount: function () {
            var totalAMT = 0.0;
            var thisObj = this;
            var objData = $(thisObj.GridId).jqGrid('getRowData');
            $.each(objData, function (index, objRow) {
                if (objRow.ID != '') {
                    if (objRow.ActionRow != "DELETE")
                        totalAMT += $.parseFloat(objRow.TotalAmount, 'n', 'vi-VN');
                }
            });
            return totalAMT;
        },
        HotKey: function () {
            var objThis = this;
            $("input[type=text]").focus(function () { $(this).select(); });
            //  $("#gs_Unit").attr('readonly', 'readonly');
            $(objThis.GridView + " #gs_Quantity").keyup(function (e) {
                //  var _quantity = $(this).val();
                var _quantity = $(objThis.GridView + " #gs_Quantity").val();
                var _price = $(objThis.GridView + " #gs_Price").val();

                //   if (_quantity == "") {
                //       $(this).focus();
                //       return;
                //   }
                if (!isNaN(_price)) {
                    $(objThis.GridView + " #gs_TotalAmount").numberbox('setValue', (_quantity * _price));
                }
            });
            $(objThis.GridView + " #gs_Price").keyup(function (e) {
                var _price = $(this).val();
                var _quantity = $(objThis.GridView + " #gs_Quantity").numberbox('getValue');

                //  if (_price == "") {
                //      $(this).focus();
                //      return;
                //  }
                if (!isNaN(_price)) {
                    $(objThis.GridView + " #gs_TotalAmount").numberbox('setValue', (_quantity * _price));
                    $(objThis.GridView + " #gs_Price").numberbox('setValue', _price);
                }
            });
            $(objThis.GridView + " #gs_TotalAmount, " + objThis.GridView + " #gs_Unit, " + objThis.GridView + " #gs_OutwardPrice").attr('readonly', 'readonly');
            $('input[id^="gs_"]').bind('keydown', 'return', function (evt) {
                var _controlid = $(this).attr("id");
                if (_controlid == 'gs_Price' || _controlid == 'gs_Description' || _controlid == 'gs_Quantity') {
                    objThis.InsertRow();
                }
                else if (_controlid == 'gs_ItemCode')
                    $(objThis.GridId + " #gs_Description").focus();
            });
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
            $(thisObj.GridId).footerData('set', { Action: 'T?ng:', TotalAmount: thisObj.TotalAmount() });

        },
        InsertRow: function () {
            var objThis = Mods.Inventory.TranferStockEntry.Grid;
            // tranfStock =  Mods.Inventory.TranferStockEntry
            $(objThis.GridView + " #gs_ItemCode").focus();

            var dataRow = {};
            var Quantity = ""//$("#gs_Quantity").numberbox('getValue');
            dataRow.ItemID = $(objThis.GridView + " #gs_ItemID").val();
            dataRow.ItemName = $(objThis.GridView + " #gs_ItemName").val();
            dataRow.ItemCode = $(objThis.GridView + " #gs_ItemCode").val();
            dataRow.Description = $(objThis.GridView + " #gs_Description").val();
            if (dataRow.ItemID == '') {
                $("#gs_ItemCode").focus();
                return;
            }
            dataRow.Unit = $(objThis.GridView + " #gs_Unit").val();
            dataRow.UnitID = $(objThis.GridView + " #gs_UnitID").val();
            if (Quantity == "") {
                Quantity = $(objThis.GridView + " #gs_Quantity").numberbox('getValue');
            }
            dataRow.Quantity = Quantity;
            dataRow.OutwardPrice = $(objThis.GridView + " #gs_OutwardPrice").numberbox('getValue');
            dataRow.Price = $(objThis.GridView + " #gs_Price").numberbox('getValue');
            dataRow.TotalAmount = $(objThis.GridView + " #gs_TotalAmount").numberbox('getValue');
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
            $('input[id^="gs_"]').val('').removeAttr('IDValue');
            $(objThis.GridView + " gs_ItemCode").focus();
        },
        CreateAutocompleteGrid: function () {
            var gridObj = this;
            var url = "../Mods/AP/Service/ServiceCoreUrl.asmx/";

            var _ac1 = FWS.System.IO.Autocomplete("#gs_ItemCode", Mods.Inventory.TranferStockEntry.ServiceCoreUrl + "/GetProdutAutoComplete", {
                width: 378,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}'  StockID='{2}' Context='{3}'", $("#gs_ItemCode").val(), '', $(Mods.Inventory.TranferStockEntry.ControlIDs.fromStock).combobox('getValue'), 'stock') },
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
                    $(gridObj.GridView + " #gs_ItemCode").val(item[0]);
                    $(gridObj.GridView + " #gs_ItemName").val(item[1]);
                    $(gridObj.GridView + " #gs_ItemName").attr("IDValue", item[2]);
                    $(gridObj.GridView + " #gs_ItemID").val(item[2]);
                    $(gridObj.GridView + " #gs_Unit").val(item[3]);
                    $(gridObj.GridView + " #gs_UnitID").val(item[7]);
                    $(gridObj.GridView + " #gs_OutwardPrice").numberbox('setValue', item[12]);
                    $(gridObj.GridView + " #gs_Price").numberbox('setValue', item[12]);
                    $(gridObj.GridView + " #gs_Quantity").numberbox('setValue', '');

                }
                else {
                    $(gridObj.GridView + " #gs_ItemCode").val('');
                    $(gridObj.GridView + " #gs_ItemName").val('');
                    $(gridObj.GridView + " #gs_ItemName").attr("IDValue", '');
                    $(gridObj.GridView + " #gs_ItemID").val('');
                    $(gridObj.GridView + " #gs_Unit").val('');
                    $(gridObj.GridView + " #gs_UnitID").val('');
                    $(gridObj.GridView + " #gs_OutwardPrice").numberbox('setValue', '');
                    $(gridObj.GridView + " #gs_Price").numberbox('setValue', '');
                }
            });
            var _name = FWS.System.IO.Autocomplete("#gs_ItemName", Mods.Inventory.TranferStockEntry.ServiceCoreUrl + "/GetProdutAutoComplete", {
                width: 378,
                cacheLength: 12,
                minChars: 1,
                max: 10,
                delay: 500,
                autoFill: false,
                mustMatch: false,
                scrollHeight: 220,
                extraParams: {
                    inputValue: function () { return $.string.Format("Code='{0}' Name ='{1}' StockID='{2}' Context='{3}'", '', $("#gs_ItemName").val(), $(Mods.Inventory.TranferStockEntry.ControlIDs.fromStock).combobox('getValue'), 'stock') },
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
                    $(gridObj.GridView + " #gs_ItemCode").val(item[0]);
                    $(gridObj.GridView + " #gs_ItemName").val(item[1]);
                    $(gridObj.GridView + " #gs_ItemName").attr("IDValue", item[2]);
                    $(gridObj.GridView + " #gs_ItemID").val(item[2]);
                    $(gridObj.GridView + " #gs_Unit").val(item[3]);
                    $(gridObj.GridView + " #gs_UnitID").val(item[7]);
                    $(gridObj.GridView + " #gs_OutwardPrice").numberbox('setValue', item[12]);
                    $(gridObj.GridView + " #gs_Price").numberbox('setValue', item[12]);
                    $(gridObj.GridView + " #gs_Quantity").numberbox('setValue', '');

                }
                else {
                    $(gridObj.GridView + " #gs_ItemCode").val('');
                    $(gridObj.GridView + " #gs_ItemName").val('');
                    $(gridObj.GridView + " #gs_ItemName").attr("IDValue", '');
                    $(gridObj.GridView + " #gs_Unit").val('');
                    $(gridObj.GridView + " #gs_ItemID").val('');
                    $(gridObj.GridView + " #gs_UnitID").val('');
                    $(gridObj.GridView + " #gs_OutwardPrice").numberbox('setValue', '');
                    $(gridObj.GridView + " #gs_Price").numberbox('setValue', '');
                }

            });
        }
    },
    AutoComplete: function (type, control) {
        var _url = this.ServiceCoreUrl + "/GetDataAutoComplete";
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
        var _id = "TranferStockEntry-txtObjectName" + opts.value;
        var _input = document.createElement('input');
        _input.setAttribute('type', 'text');
        _input.setAttribute('id', _id);
        _input.setAttribute('style', 'width: 250px;');
        // _input.setAttribute('class', 'easyui-validatebox validatebox-text validatebox-invalid');
        //_input.setAttribute('required', 'true');
        _parent.html(_input);
        Mods.Inventory.TranferStockEntry.AutoComplete(opts.value, thisObj.ControlIDs.formID + " #" + _id);
    },
    DefinationList: {
        ObjectType: null,
        Init: function () {
            var thisObj = this;
            thisObj.GetObjectType();
            thisObj.GetStocks();
            // thisObj.SetValueField();
        },
        GetInwardStock: function (opts) {
            var objMain = Mods.Inventory.TranferStockEntry;
            FWS.System.IO.Ajax({
                url: objMain.ServiceCoreUrl + '/GetInwardStock',
                type: 'POST',
                data: { inputValue: $.string.Format('<InputValue ID="{0}" RefType="{1}" />', opts.ID, 9), refType: 9 },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            console.log(data);
                            objMain.SetInfo(data);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetStocks: function () {
            var thisObj = this;
            tranfObjEntry = Mods.Inventory.TranferStockEntry;
            FWS.System.IO.Combobox(tranfObjEntry.ControlIDs.fromStock, Mods.Inventory.TranferStockEntry.ServiceUrl + '/GetStockList',
            {
                data: { inputValue: '<InputValue/>' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    // thisObj.OnChange(record);
                },
                onLoadSuccess: function () {
                    $(tranfObjEntry.ControlIDs.fromStock).combobox("select", 1);

                }
            }
        );
            FWS.System.IO.Combobox(tranfObjEntry.ControlIDs.toStock, Mods.Inventory.TranferStockEntry.ServiceUrl + '/GetStockList',
            {
                data: { inputValue: '<InputValue/>' },
                valueField: 'value',
                textField: 'text',
                onSelect: function (record) {
                    // thisObj.OnChange(record);
                },
                onLoadSuccess: function () {
                    $(tranfObjEntry.ControlIDs.toStock).combobox("select", 1);

                }
            }
        );
        },
        SetValueField: function () {
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: Mods.Inventory.TranferStockEntry.ServiceCoreUrl + "/GetNextRefNo",
                type: 'POST',
                data: { inputValue: ' RefType="9"' },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {
                            $("#TranferStockEntry-txtTranferNo").val(data.RefNo);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        },
        GetObjectType: function () {
            var thisObj = this;
            defaultData = 3;
            FWS.System.IO.Combobox(Mods.Inventory.TranferStockEntry.ControlIDs.ctype, Mods.Inventory.TranferStockEntry.ServiceCoreUrl + '/GetIntDefinationList',
            {
                data: { inputValue: 'ObjectType' },
                valueField: 'value',
                textField: 'text',
                defaultData: defaultData,
                onSelect: function (record) {
                    Mods.Inventory.TranferStockEntry.OnChange(record);
                },
                onLoadSuccess: function () {

                }
            });
        },
        GetObjectName: function (opts) {

            FWS.System.IO.Ajax({
                url: Mods.Inventory.TranferStockEntry.ServiceCoreUrl + '/GetObjectName',
                type: 'POST',
                data: { inputValue: 'ID="' + opts.ID + '"', inputType: opts.Type },
                success: function (data, textStatus, jqXHR) {
                    try {
                        var data = $(data).find("string").eq(0).text();
                        data = eval('(' + data + ')');
                        if (data) {

                            $("#TranferStockEntry-txtObjectName" + $('#TranferStockEntry-cbType').combobox('getValue')).val(data.Name);
                            $("#TranferStockEntry-txtObjectName" + $('#TranferStockEntry-cbType').combobox('getValue')).attr('cid', data.ID);
                        }
                    } catch (e) { $.iLog(e); }
                }
            });
        }
    }
};
$(function () {
    Mods.Inventory.TranferStockEntry.Init();
});