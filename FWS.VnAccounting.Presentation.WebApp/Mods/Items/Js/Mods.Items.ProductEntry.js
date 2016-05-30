if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};


Mods.Items.ProductEntry = {
    GridID: '#Vendor_Grid',
    urlService: '../Mods/Items/Service/ProductService.asmx',
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;

        this.Properties.rowID = rowID;
        this.Properties.windowID = windowID;
        this.ClearInfo();
        switch (rowID) {
            case "-1":
                $("#ItemEntry-btnAddNew,#ItemEntry-btnCancel").hide();
                $("#ItemEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#ItemEntry-btnAddNew,#ItemEntry-btnCancel").show();
                $("#ItemEntry-btnSearch").hide();
                break;
            default:
                $("#ItemEntry-btnAddNew,#ItemEntry-btnCancel").show();
                $("#ItemEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }

        Mods.Items.ProductEntry.ShowItemActivePrinciple();
        Mods.Items.ProductEntry.ShowTonKho();

        FWS.System.IO.Ajax({
            url: "../Mods/Items/Service/VendorService.asmx/GetList",
            data: { InputValue: '<InputValue />' },
            success: function (data) {
                if ($(data).find("string").length) {
                    data = $(data).find("string:eq(0)").text();
                }

                //data for selecting NCC
                var objData = eval(data);
                var selectData = "";
                for (var i = 0; i < objData.length; i++) {
                    if (i > 0)
                        selectData += ";";
                    selectData += objData[i].ID + ":" + objData[i].Name;
                }

                Mods.Items.ProductEntry.ShowVendor(objData, selectData);
            }
        });

        if (typeof opts.colName != 'undefined') {
            var index = $('#item-tabs a[href="' + opts.colName + '"]').parent().index();
            $('#item-tabs ul li.active').removeClass('active'); ;
            $('#item-tabs div.item-tab').hide();
            $(opts.colName).show();
            $('#item-tabs ul li a[href="' + opts.colName + '"]').parent().addClass('active');
        }
        else {
            //select first tab            
            $('#item-tabs ul li.active').removeClass('active');
            $('#item-tabs div.item-tab').hide();
            $('#item-tabs div.item-tab:first').show();
            $('#item-tabs ul li:first').addClass('active');
        }
    },
    Properties: { rowID: '0', windowID: '', firstLoaded: true },
    Event: function () {
        var windowID = "#" + $('#ItemEntry-Content').parent().attr('id');
        $("#ItemEntry-btnAddNew").click(function () {
            Mods.Items.ProductEntry.Update();
            $(windowID).window('close');
        });
        $("#ItemEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#ItemEntry-btnSearch").click(function () {
            Mods.Items.ProductEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#ItemEntry-txtCode").val(),
            Name: $("#ItemEntry-txtName").val(),
            UnitID: $("#ItemEntry-cboUnit").val(),
            GroupID: $("#ItemEntry-cboGroup").val(),
            TaxID: $("#ItemEntry-cboTax").val(),
            ItemTypeID: $("#ItemEntry-cboType").val(),
            ManufactureID: $("#ItemEntry-cboManufacture").val(),
            MadeInCountryID: $("#ItemEntry-cboMadeIn").val(),
            CostMethodID: $("#ItemEntry-cboCostMethod").val(),
            Price: $("#ItemEntry-txtPrice").val(),
            Description: $("#ItemEntry-txtDesc").val(),

            BYTGroupID: $("#ItemEntry-cboBYTGroup").val(),
            Concentration: $("#ItemEntry-txtDbc").val(),
            ActivePrincipleID: $("#ItemEntry-cboActivePrinciple").val(),
            ProprietaryID: $("#ItemEntry-cboProprietaryName").val(),
            HealthInsurancePercent: $("#ItemEntry-txtHealthInsurancePercent").val(),
            UsingNote: $("#ItemEntry-txtUsingNote").val(),

            ItemPacks: [
                {
                    EvenUnitID: $.string.Format('{0}', $("#ItemEntry-Pack1EvenUnit").val()),
                    Quantity: $.string.Format('{0}', $("#ItemEntry-Pack1Quantity").val()),
                    OddUnitID: $.string.Format('{0}', $("#ItemEntry-Pack1OddUnit").val())
                }
                ,
                {
                    EvenUnitID: $.string.Format('{0}', $("#ItemEntry-Pack2EvenUnit").val()),
                    Quantity: $.string.Format('{0}', $("#ItemEntry-Pack2Quantity").val()),
                    OddUnitID: $.string.Format('{0}', $("#ItemEntry-Pack2OddUnit").val())
                }
                , {
                    EvenUnitID: $.string.Format('{0}', $("#ItemEntry-Pack3EvenUnit").val()),
                    Quantity: $.string.Format('{0}', $("#ItemEntry-Pack3Quantity").val()),
                    OddUnitID: $.string.Format('{0}', $("#ItemEntry-Pack3OddUnit").val())
                }
            ]
        };

        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
        $("#ItemEntry-chkActive").attr("checked", true);
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.Product.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}"/>', FWS.System.Core.UserID(), opts.ID);
            this.Properties.rowID = opts.ID;
            var thisObj = this;
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/ProductService.asmx/GetInventoryList',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");

                    $("#ItemEntry-txtCode").val(data.Code);
                    $("#ItemEntry-txtName").val(data.Name);
                    $("#ItemEntry-cboGroup").val(data.GroupID);
                    $("#ItemEntry-cboBYTGroup").val(data.BYTGroupID);
                    $("#ItemEntry-cboUnit").val(data.UnitID);
                    $("#ItemEntry-txtDbc").val(data.Concentration);
                    $("#ItemEntry-cboTax").val(data.TaxID);
                    $("#ItemEntry-cboActivePrinciple").val(data.ActivePrincipleID);
                    $("#ItemEntry-cboCostMethod").val(data.CostMethod);
                    $("#ItemEntry-cboType").val(data.ItemTypeID);

                    $("#ItemEntry-cboManufacture").val(data.ManufactureID);
                    $("#ItemEntry-txtUsingNote").val(data.UsingNote);
                    $("#ItemEntry-cboMadeIn").val(data.MadeInCountryID);
                    $("#ItemEntry-cboProprietaryName").val(data.ProprietaryID),
                    $("#ItemEntry-txtHealthInsurancePercent").val(data.HealthInsurancePercent);
                    $("#ItemEntry-txtPrice").val(data.SalePrice);
                    $("#ItemEntry-txtDesc").val(data.Description);
                    //$("#ItemEntry-chkActive").attr("checked", data.Active == "True" ? true : false);

                    $("#ItemEntry-Pack1EvenUnit").val(data.Pack1EvenUnitID);
                    $("#ItemEntry-Pack1Quantity").val(data.Pack1Quantity);
                    $("#ItemEntry-Pack1OddUnit").val(data.Pack1OddUnitID);

                    $("#ItemEntry-Pack2EvenUnit").val(data.Pack2EvenUnitID);
                    $("#ItemEntry-Pack2Quantity").val(data.Pack2Quantity);
                    $("#ItemEntry-Pack2OddUnit").val(data.Pack2OddUnitID);
                    $("#ItemEntry-Pack3EvenUnit").val(data.Pack3EvenUnitID);
                    $("#ItemEntry-Pack3Quantity").val(data.Pack3Quantity);
                    $("#ItemEntry-Pack3OddUnit").val(data.Pack3OddUnitID);
                }
            });

            Mods.Items.ProductEntry.ShowItemActivePrinciple();
            Mods.Items.ProductEntry.ShowTonKho();
        }
    },
    Update: function (opts) {
        opts = opts || Mods.Items.ProductEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: "",
            Desc: "",
            Active: ""
        };
        $.extend(true, options, opts);
        var action;
        if (options.ID == 0)
            action = "INSERT";
        else
            action = "UPDATE";

        var inputValue = $.string.Format('<InputValue ID="{0}" Code="{1}" Name="{2}" UnitID="{3}" GroupID="{4}" TaxID="{5}"'
        + ' ItemTypeID="{6}" ManufactureID="{7}" MadeInCountryID="{8}" CostMethod="{9}" SalePrice="{10}" '
        + ' Description="{11}" BYTGroupID="{12}"  Concentration="{13}" ActivePrincipleID="{14}" ProprietaryID="{15}"'
        + ' HealthInsurancePercent="{16}" UsingNote="{17}" Action="{18}"/>'
        , options.ID, options.Code, options.Name, options.UnitID, options.GroupID, options.TaxID, options.ItemTypeID, options.ManufactureID
        , options.MadeInCountryID, options.CostMethodID, options.Price, options.Description, options.BYTGroupID, options.Concentration
        , options.ActivePrincipleID, options.ProprietaryID, options.HealthInsurancePercent, options.UsingNote, action);

        for (var index = 0; index < options.ItemPacks.length; index++) {
            var itemPack = options.ItemPacks[index];
            var sPack = $.string.Format(' <ItemPack Index="{0}" EvenUnitID="{1}" Quantity="{2}"  OddUnitID="{3}" />',
                index + 1, itemPack.EvenUnitID, itemPack.Quantity, itemPack.OddUnitID);
            inputValue += sPack;
        }
        inputValue = FWS.System.Core.AttachMeta(inputValue, {});
        //ID: this.Properties.rowID || "0",
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ProductService.asmx/UpdateInventoryProduct',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        Mods.Items.Product.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }

            }
        });

        var inputValue2 = $.string.Format('<RequestParams ItemID="{0}" Function="Vendor_Items" Action="UPDATE">', options.ID);

        var gridIds = $(Mods.Items.ProductEntry.GridID).getDataIDs();
        for (var i = 0; i < gridIds.length; i++) {
            inputValue2 += $.string.Format('<Vendor ID="{0}"/>', gridIds[i]);
        }
        inputValue2 += '</RequestParams>';

        FWS.System.IO.Ajax({
            url: FWS.Web.Core.URL.ExecuteAction,
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue2) },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        Mods.Items.Product.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }

            }
        });
    },
    ShowUnit: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/UnitService.asmx/GetGrid',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: "" },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");

                data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#ItemEntry-cboUnit").html(ret);
                ret = "<option value='0' code='...'>...</option>" + ret;
                $("#ItemEntry-Pack1OddUnit").html(ret);
                $("#ItemEntry-Pack2OddUnit").html(ret);
                $("#ItemEntry-Pack3OddUnit").html(ret);
                $("#ItemEntry-Pack1EvenUnit").html(ret);
                $("#ItemEntry-Pack2EvenUnit").html(ret);
                $("#ItemEntry-Pack3EvenUnit").html(ret);
            }
        });
    },
    ShowItemGroup: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ProductService.asmx/GetInventoryProductGroupLists',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: "" },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");

                data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#ItemEntry-cboGroup").html(ret);
            }
        });
    },
    ShowTax: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/TaxService.asmx/GetGrid',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: '' },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");

                data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#ItemEntry-cboTax").html(ret);
            }
        });
    },
    ShowMethods: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ProductService.asmx/GetInventoryMethods',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: '' },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");

                data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#ItemEntry-cboCostMethod").html(ret);
            }
        });
    },
    ShowItemType: function () {
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/ProductService.asmx/GetInventoryItemTypeList',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: '' },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");

                data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#ItemEntry-cboType").html(ret);
            }
        });
    },
    ShowBYTGroup: function () {
        this._ShowComboData('ItemEntry-cboBYTGroup', 23);
    },
    ShowProprietaryName: function () {
        this._ShowComboData('ItemEntry-cboProprietaryName', 14);
    },
    ShowManufacture: function () {
        this._ShowComboData('ItemEntry-cboManufacture', 11);
    },
    ShowMadeIn: function () {
        this._ShowComboData('ItemEntry-cboMadeIn', 24);
    },
    ShowActivePrinciple: function () {
        this._ShowComboData('ItemEntry-cboActivePrinciple', 12);
    },
    _ShowComboData: function (cboId, type) {
        var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' />", 129, type);
        //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 11);
        //xml += $.string.Format("<RequestParams Function='GetResource' Type='{0}' />", 24);
        var inputValue = FWS.System.Core.AttachMeta(xml, {});
        FWS.System.IO.Ajax({
            url: FWS.Web.Core.URL.ContextData,
            //url: 'http://localhost:10616/Core/CoreService.asmx',
            type: 'POST',
            data: { ClientKey: FWS_SERVER_CONFIG.ClientKey, InputValue: $.HtmlEncode(inputValue) },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                var obj = data.CSV2JSON2();

                var ret = "";
                var objOK = obj[0][0];
                if (objOK.Code == "OK") {
                    var objData = obj[1];
                    for (i in objData) {
                        var item = objData[i];
                        ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                    }
                }
                $("#" + cboId).html(ret);
            }
        });
    },
    //hoat chat
    ShowItemActivePrinciple: function () {
        //var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ID='{1}' Function='GetItems' Context='SameActivePrinciple' />", 129, this.Properties.rowID || "0");
        //<RequestParams ID="[ItemID]" Function="GetItems" Context="SameActivePrinciple" />
        //FWS_SERVER_CONFIG 
        var colModel_ActivePrinciple = [{ order: 9, name: 'Action', index: '', sorttype: 'string', align: 'center', width: 50, frozen: false, fixed: true, hidden: true }, { order: 10, name: 'ID', index: 'ID', sorttype: 'int', align: 'center', width: 1, hidden: true, frozen: true, fixed: true }, { order: 20, name: 'Code', index: 'Code', sorttype: 'string', align: 'center', width: 80, frozen: true, fixed: true }, { order: 30, name: 'Name', index: 'Name', sorttype: 'string', align: 'left', width: 180, classes: 'BR2', frozen: true, fixed: true }, { order: 50, name: 'UnitName', index: 'UnitName', sorttype: 'string', align: 'left', width: 240, frozen: false, fixed: true }, { order: 10, name: 'Price', index: 'Price', sorttype: 'int', align: 'center', width: 100, hidden: false, frozen: true, fixed: true }, { order: 60, name: 'CreatedByName', index: 'CreatedByName', sorttype: 'string', align: 'center', width: 100, frozen: false, fixed: true, hidden: true }, { order: 61, name: 'LastUpdatedByName', index: 'LastUpdatedByName', sorttype: 'string', align: 'center', width: 100, frozen: false, fixed: true, hidden: true}];
        var colName_ActivePrinciple = ['T.tác', 'ID', 'Mã', 'Tên Thuốc', 'Đơn vị', 'Giá bán', 'Người tạo', 'Người sửa'];
        var option_ActivePrinciple = { _emptyField: '', datatype: 'VnAccounting.Grid.Request', GridType: '0', mtype: 'POST', height: 'auto', width: 'auto', multiselect: false, caption: '', rowNum: 1000, rownumbers: true, rownumWidth: 35, fixedcolumn: 4, altRows: true, altclass: "myAltRowClass" }; if (typeof Simple_Instant == 'undefined') Simple_Instant = {}; Simple_Instant['ActivePrinciple'] = { Instant: 'ActivePrinciple', RefType: '12', GridID: '43' };
        var myObj = this;
        var apGrid = {
            GridID: "#ActivePrinciple_Grid",
            GridUrl: FWS.Web.Core.URL.ContextData,
            GridPager: 'ActivePrinciple_GridPage',
            iPage: 1,
            iNumRow: 16,
            optionClient: {},
            formatSearch: ' Code="{0}" Name="{1}" ',
            LoadGrid: function () {
                var thisObj = this;
                var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ID='{1}' Function='GetItems' Context='SameActivePrinciple' />", 129, myObj.Properties.rowID || "0");

                var inputValue = FWS.System.Core.AttachMeta(xml, {});

                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colName_ActivePrinciple,
                    colModel: colModel_ActivePrinciple,
                    extraParams: {
                        ClientKey: FWS_SERVER_CONFIG.ClientKey,
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: inputValue
                    },
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        //var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowelem.IDKey);
                        //$(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                new CGrid().Init(thisObj.GridID, option_ActivePrinciple, thisObj.optionClient);
            },
            Reload: function () {
                var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ID='{1}' Function='GetItems' Context='SameActivePrinciple' />", 129, myObj.Properties.rowID || "0");

                var inputValue = FWS.System.Core.AttachMeta(xml, {});
                var thisObj = this;
                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colName_ActivePrinciple,
                    colModel: colModel_ActivePrinciple,
                    extraParams: {
                        ClientKey: FWS_SERVER_CONFIG.ClientKey,
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: inputValue
                    },
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        //var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowelem.IDKey);
                        //$(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                $(thisObj.GridID).clearGridData();
                new CGrid().Request(thisObj.GridID, thisObj.optionClient);
            }
        };

        if (this.Properties.rowID != '0' && this.Properties.firstLoaded == false)
            apGrid.Reload();
        else {
            apGrid.LoadGrid();
        }
    },

    ShowTonKho: function () {
        var colModel_ActivePrinciple = [{ order: 9, name: 'Action', index: '', sorttype: 'string', align: 'center', width: 50, frozen: false, fixed: true, hidden: true }
            , { order: 10, name: 'ID', index: 'ID', sorttype: 'int', align: 'center', width: 1, hidden: true, frozen: true, fixed: true }
            , { order: 20, name: 'Idx', index: 'Idx', sorttype: 'int', align: 'center', width: 80, frozen: true, fixed: true }
            , { order: 30, name: 'UnitName', index: 'UnitName', sorttype: 'string', align: 'left', width: 100, classes: '', frozen: true, fixed: true }
            , { order: 50, name: 'SerialNo', index: 'SerialNo', sorttype: 'string', align: 'left', width: 100, frozen: false, fixed: true }
            , { order: 60, name: 'ExpDate', index: 'ExpDate', sorttype: 'string', align: 'center', width: 100, frozen: false, fixed: true, hidden: false }
            , { order: 61, name: 'StockName', index: 'StockName', sorttype: 'string', align: 'center', width: 100, frozen: false, fixed: true, hidden: false }
            , { order: 62, name: 'BalanceQuantity', index: 'BalanceQuantity', sorttype: 'int', align: 'center', width: 80, frozen: true, fixed: true}];

        var colName_ActivePrinciple = ['T.tác', 'ID', 'Số thứ tự', 'Đơn vị', 'Số lô', 'Hạn SD', 'Kho', 'Số lượng'];
        var option_ActivePrinciple = { _emptyField: '', datatype: 'VnAccounting.Grid.Request', GridType: '0', mtype: 'POST', height: 'auto', width: 'auto', multiselect: false, caption: '', rowNum: 1000, rownumbers: true, rownumWidth: 35, fixedcolumn: 4, altRows: true, altclass: "myAltRowClass" };

        var apGrid = {
            GridID: "#TonKho_Grid",
            GridUrl: FWS.Web.Core.URL.ContextData,
            GridPager: 'TonKho_GridPage',
            iPage: 1,
            iNumRow: 16,
            optionClient: {},
            formatSearch: ' Code="{0}" Name="{1}" ',
            LoadGrid: function () {
                var thisObj = this;

                var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='InventoryInStock_Detail' ItemID='{1}' />", 129, Mods.Items.ProductEntry.Properties.rowID || "0");

                var inputValue = FWS.System.Core.AttachMeta(xml, {});

                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colName_ActivePrinciple,
                    colModel: colModel_ActivePrinciple,
                    extraParams: {
                        ClientKey: FWS_SERVER_CONFIG.ClientKey,
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: inputValue
                    },
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        //var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowelem.IDKey);
                        //$(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                new CGrid().Init(thisObj.GridID, option_ActivePrinciple, thisObj.optionClient);
            },
            Reload: function () {
                var thisObj = this;

                $(thisObj.GridID).clearGridData();
                new CGrid().Request(thisObj.GridID, thisObj.optionClient);
            }
        };

        apGrid.LoadGrid();
    },

    ShowVendor: function (objData, data) {
        
        var myFormatter = function (cellvalue, options, rowObject) {
            return cellvalue + '';
        };
        //var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ID='{1}' Function='GetItems' Context='SameActivePrinciple' />", 129, this.Properties.rowID || "0");
        //<RequestParams ID="[ItemID]" Function="GetItems" Context="SameActivePrinciple" />
        //FWS_SERVER_CONFIG 
        var colModel = [{ order: 10, name: 'ID', index: 'ID', key: true, sorttype: 'int', align: 'center', width: 0, editable: true, hidden: true, frozen: true, fixed: true }
        //, { order: 20, name: 'STT', index: 'STT', sorttype: 'int', align: 'center', width: 80, frozen: true, fixed: false }
            , { order: 20, name: 'Code', index: 'Code', sorttype: 'string', align: 'center', width: 0, hidden: true, frozen: true, fixed: true }
            , { order: 30, name: 'Name', index: 'Name', sorttype: 'string', editable: true, edittype: 'select',
                editoptions: { value: data,
                    editurl: 'clientArray',
                    dataInit: function (el) {
                        $(el).attr('style', 'background-color:yellow;');
                        $('#sData').click(function (e) {
                            //console.log('clicked save button');
                        });
                    },
                    dataEvents: [
                        {
                            type: 'change',
                            fn: function (e) {
                                //console.log(objData);
                                var thisID = $(e.target).val();

                                var address = '', phone = '';

                                for (var i = 0; i < objData.length; i++) {
                                    //console.log(thisID + " : " + objData[i].Address);
                                    if (objData[i].ID == thisID) {
                                        address = objData[i].Address;
                                        phone = objData[i].Phone;
                                        break;
                                    };
                                };
                                $($('input#Address')[0]).val(address);
                                $($('input#Phone')[0]).val(phone);
                            }
                        }
                    ]

                },
                formatter: myFormatter, align: 'left', width: 120, frozen: true, fixed: true
            }
            , { order: 50, name: 'Address', index: 'Address', sorttype: 'string', editable: true, editoptions: { readonly: true }, align: 'left', width: 268, frozen: false, fixed: true }
            , { order: 50, name: 'Phone', index: 'Phone', sorttype: 'string', editable: true, editoptions: { readonly: true }, align: 'left', width: 120, frozen: false, fixed: true }
            , { order: 60, name: 'CreatedByName', index: 'CreatedByName', sorttype: 'string', align: 'center', width: 1, frozen: false, fixed: true, hidden: true }
            , { order: 61, name: 'LastUpdatedByName', index: 'LastUpdatedByName', sorttype: 'string', align: 'center', width: 1, frozen: false, fixed: true, hidden: true }
            , { order: 9, name: 'Action', index: '', sorttype: 'string', align: 'center', width: 50, frozen: true, fixed: true, hidden: false}];
        var colName = ['ID', 'Mã', 'Tên NCC', 'Địa chỉ', 'SĐT', 'Người tạo', 'Người sửa', 'T.tác'];
        var option = { _emptyField: '', datatype: 'VnAccounting.Grid.Request', GridType: '0', mtype: 'POST', height: 'auto', width: 'auto', multiselect: false, caption: '', rowNum: 1000, rownumbers: true, rownumWidth: 35, fixedcolumn: 4, altRows: true, altclass: "myAltRowClass" };
        var myObj = this;
        var apGrid = {
            GridID: "#Vendor_Grid",
            GridUrl: FWS.Web.Core.URL.ContextData + "?showVendorList",
            GridPager: 'ShowVendor_GridPage',
            iPage: 1,
            iNumRow: 16,
            optionClient: {},
            formatSearch: ' Code="{0}" Name="{1}" ',
            LoadGrid: function () {
                var thisObj = this;
                var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ItemID='{1}' Function='VendorList' />", 129, myObj.Properties.rowID || "0");

                var inputValue = FWS.System.Core.AttachMeta(xml, {});

                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colName,
                    colModel: colModel,
                    editurl: '',
                    closeAfterAdd: true,
                    closeAfterEdit: true,
                    extraParams: {
                        ClientKey: FWS_SERVER_CONFIG.ClientKey,
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: inputValue
                    },
                    edit: {
                        addCaption: "Them NCC",
                        editCaption: "Edit Record",
                        bSubmit: "Luu",
                        bCancel: "Dong",
                        bClose: "Close",
                        saveData: "Data has been changed! Save changes?",
                        bYes: "Yes",
                        bNo: "No",
                        bExit: "Cancel"
                    },
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div>', rowelem.ID);
                        $(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    }
                };
                new CGrid().Init(thisObj.GridID, option, thisObj.optionClient);

                $(Mods.Items.ProductEntry.GridID + " .ui-icon-trash").live("click", function () {
                    var con = confirm('Xóa NCC này?');
                    if (!con)
                        return false;
                    var id = GetSelectedRow();
                    //console.log('deleting row: ' + id);
                    $(Mods.Items.ProductEntry.GridID).delRowData(id);
                });
            },
            Reload: function () {
                var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams ItemID='{1}' Function='VendorList'/>", 129, myObj.Properties.rowID || "0");

                var inputValue = FWS.System.Core.AttachMeta(xml, {});
                var thisObj = this;
                thisObj.optionClient = {
                    gridUrl: thisObj.GridUrl,
                    pager: thisObj.GridPager,
                    colNames: colName,
                    colModel: colModel,
                    editurl: 'clientArray',
                    extraParams: {
                        ClientKey: FWS_SERVER_CONFIG.ClientKey,
                        currPage: thisObj.iPage,
                        numberRowOfPage: thisObj.iNumRow,
                        inputValue: inputValue
                    },
                    closeAfterAdd: true,
                    closeAfterEdit: true,
                    afterInsertRow: function (rowid, rowdata, rowelem) {
                        var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div>', rowelem.ID);
                        $(thisObj.GridID).jqGrid('setCell', rowid, "Action", actionHtml);
                    },
                    edit: {
                        addCaption: "Them NCC",
                        editCaption: "Edit Record",
                        bSubmit: "Luu",
                        bCancel: "Dong",
                        bClose: "Close",
                        saveData: "Data has been changed! Save changes?",
                        bYes: "Yes",
                        bNo: "No",
                        bExit: "Cancel"
                    }
                };
                $(thisObj.GridID).clearGridData();
                new CGrid().Request(thisObj.GridID, thisObj.optionClient);
            },
            GetSelectedRow: function () {
                var rowID = $(apGrid.GridID).jqGrid('getGridParam', 'selrow');
                return rowID || -1;
            }
        };

        function GetSelectedRow() {
            var rowID = $(Mods.Items.ProductEntry.GridID).jqGrid('getGridParam', 'selrow');
            return rowID || -1;
        }

        if (this.Properties.rowID != '0' && this.Properties.firstLoaded == false) {
            //console.log('Vendor_grid Reload..' + this.Properties.rowID);
            apGrid.Reload();
        }
        else {
            apGrid.LoadGrid();
            this.Properties.firstLoaded = false;
        }

        $('#btnAddNewVendor').click(function () {
            var parameters =
            {
                rowID: "", jqModal: false, reloadAfterSubmit: false, savekey: [true, 13],
                //initdata: { ID: '1', STT: 1, Code: '1', Name: 'name1', Address: 'address1', Phone: 'Phone1', LastCreatedByName: '', LastUpdatedByName: '', Action: '' },
                position: "first",
                useDefValues: false,
                useFormatter: false,
                width: 500,
                closeAfterAdd: true,
                closeAfterEdit: true,
                aftersavefunc: function (data) { alert(data); },
                addRowParams: { extraparam: {} },
                onclickSubmit: function (options, postdata) {
                    this.processing = true;
                    var _name = "";
                    for (var i = 0; i < objData.length; i++) {
                        //console.log(thisID + " : " + objData[i].Address);
                        if (objData[i].ID == postdata.Name) {
                            _name = objData[i].Name;
                            break;
                        };
                    };

                    var datarow = { ID: postdata.Name, Name: _name, Address: postdata.Address, Phone: postdata.Phone };
                    var GridIds = $(Mods.Items.ProductEntry.GridID).getDataIDs();

                    var last4sel = 0;
                    if (GridIds.length > 0) {
                        if (jQuery.inArray(postdata.Name, GridIds) != -1) {
                            alert('NCC đã có trong danh sách!');
                            return {};
                        }
                        var last = GridIds[GridIds.length - 1];
                        last4sel = parseInt(last) + 1;
                    }

                    var su = $(Mods.Items.ProductEntry.GridID).addRowData(last4sel, datarow, "last");
                    $("#cData").trigger('click'); //close edit window                   

                    return {};
                }
            };

            $(Mods.Items.ProductEntry.GridID).jqGrid('editGridRow', 'new', parameters);
        });
    }
};
$(function () {
    /* Event */    
    Mods.Items.ProductEntry.Event();
    Mods.Items.ProductEntry.ShowItemGroup();
    Mods.Items.ProductEntry.ShowUnit();
    Mods.Items.ProductEntry.ShowTax();
    Mods.Items.ProductEntry.ShowMethods();
    Mods.Items.ProductEntry.ShowItemType();
    Mods.Items.ProductEntry.ShowBYTGroup();
    Mods.Items.ProductEntry.ShowProprietaryName();
    Mods.Items.ProductEntry.ShowManufacture();
    Mods.Items.ProductEntry.ShowMadeIn();
    Mods.Items.ProductEntry.ShowActivePrinciple();
   
    $('#item-tabs div.item-tab').hide();
    $('#item-tabs div:first').show();
    $('#item-tabs ul li:first').addClass('active');
    $('#item-tabs ul li a').live('click', function () {   
        $('#item-tabs ul li').removeClass('active');
        $(this).parent().addClass('active');
        var currentTab = $(this).attr('href');
        $('#item-tabs div.item-tab').hide();

        $(currentTab).show();
        return false;
    });

    //Mods.Items.ProductEntry.BindTab();
});