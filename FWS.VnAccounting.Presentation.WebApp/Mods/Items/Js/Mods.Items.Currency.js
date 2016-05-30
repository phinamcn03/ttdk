if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.Currency = {
    gridID: "#fws_grid",
    optionClient: '',
    GridUrl: '../Mods/Items/Service/CurrencyService.asmx/GetGrid',
    GridPager: 'fws_gridpage',

    Init: function () {
        this.LoadGrid();
        this.Event();
    },
    OptionsController: {
        template: 'Mods/Items/CurrencyEntry',
        data: "{a:'-', b:'--'}",
        id: "ItemEntry-Window",
        width: 500,
        height: 330,
        title: "Currency Entry",
        callbackComplete: function (opts) {
            Mods.Items.CurrencyEntry.DefaultInit(opts);
        }
    },
    Event: function () {
        var thisObj = this;
        $("#Currency-btnAddNew").click(function () {
            thisObj.LoadEntryNew();
        });
        $("#Currency-btnDelete").click(function () {
            var rowID = $(thisObj.gridID).jqGrid('getGridParam', 'selarrrow');
            if (rowID != "-1")
                thisObj.ExecuteDelete({ ID: rowID, Act: 'deletemulti' });
            else
                $.messager.alert('Xóa đơn vị', 'Xin chọn Tiền tê cần xóa');
        });
        $("#Currency-btnSearch").click(function () {
            thisObj.ExecuteSearch({
                Code: $("#Currency-txtCode").val(),
                Name: $("#Currency-txtName").val()
            });
        });
        $("#Currency-btnSearchAdvance").click(function () {
            console.log("btnSearchAdvance");
        });

        $("#fws_grid .ui-icon-trash").live("click", function () {
            var rowID = thisObj.GetSelectedRow();
            if (rowID != -1)
                thisObj.ExecuteDelete({ ID: rowID, Act: 'delete' });
            else
                $.messager.alert('Delete', 'Are you delete this?');
        });
        $("#fws_grid .ui-icon-pencil").live("click", function () {
            var rowID = $(this).attr('rowid');
            thisObj.LoadEntryEdit({ ID: rowID });
        });
    },
    GetSelectedRow: function () {
        var rowID = $("#fws_grid").jqGrid('getGridParam', 'selrow');
        return rowID || -1;
    },
    LoadEntry: function () {
        FWS.Web.CTemplateController.LoadPopup(this.OptionsController);
    },
    LoadEntryNew: function () {
        this.OptionsController.rowID = "0";
        this.LoadEntry();
    },
    LoadEntryEdit: function (opts) {
        this.OptionsController.rowID = opts.ID || "3";
        this.LoadEntry();
    },
    LoadEntrySearch: function () {
        this.OptionsController.rowID = "-1";
        this.LoadEntry();
    },
    ExecuteSearch: function (query) {
        var thisObj = this;
        $(this.GridId).clearGridData();
        var Code = $("#txtCurrencyCode").val();
        var Name = $("#txtCurrencyName").val();
        this.optionClient.extraParams.searchOption = $.string.Format(" Name='{0}' Code='{1}'", Name, Code);
        new CGrid().Request(this.gridID, this.optionClient);
    },
    ExecuteDelete: function (opts) {
        var thisObj = Mods.Items.Currency;
        var inputValue = $.string.Format('<InputValue UserID="{0}" ID="{1}" Action="{2}"/>', 1, opts.ID, opts.Act);
        $.messager.confirm('Delete', 'Bạn chắc sẽ xóa tiền tệ này?', function (r) {
            if (r) {
                FWS.System.IO.Ajax({
                    url: '../Mods/Items/Service/CurrencyService.asmx/UpdateCurrency',
                    type: 'POST',
                    data: { InputValue: inputValue },
                    success: function (data, textStatus, jqXHR) {
                        var Data = $(data).find("string").text();
                        Data = eval("(" + Data + ")");
                        if (opts.Act == 'delete')
                            $(thisObj.gridID).jqGrid('delRowData', Data.Result, Data, '');
                        else{
                            var arrID = Data.Result.split(',');
                                for(var i in arrID)
                                    $(thisObj.gridID).jqGrid('delRowData', arrID[i], Data, '');
                           }
                    }
                });
            }
        });
    },
    LoadGrid: function () {
        var thisObj = Mods.Items.Currency;
        var iPage = 1;
        var iNumRow = 50;
        this.optionClient = {
            gridUrl: thisObj.GridUrl,
            extraParams: {
                currPage: iPage,
                numberRowOfPage: iNumRow,
                searchOption: ''
            },
            pager: thisObj.GridPager,
            colModel: colModelStock,
            colNames: colNameStock,
            afterInsertRow: function (rowid, rowdata, rowelem) {
                var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                $(Mods.Items.Currency.gridID).jqGrid('setCell', rowid, "Action", actionHtml);
            },
            onSelectRow: function (rowid, status) {

            },
            loadComplete: function () {

            },
            gridComplete: function () {

            }
        }
        new CGrid().Init(thisObj.gridID, option, thisObj.optionClient);
    },
    Reload: function () {
        $(this.GridId).clearGridData();
        this.Load();
    },
    LoadRowData: function (dataRow) {
        if (typeof dataRow.Code != 'undefined') {
            dataRow.Action = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', dataRow.ID);
            $(Mods.Items.Currency.gridID).jqGrid('addRowData', dataRow.ID, dataRow, "last");
        }
    },
    GetGridData: function (gridID) {
        var thisObj = this;
        var inputValue = '';
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/CurrencyService.asmx/GetCurrencyList',
            type: 'POST',
            data: { InputValue: encodeURIComponent(inputValue) },
            success: function (data, textStatus, jqXHR) {
                try {
                    var _sdata = $(data).find('string').eq(0).text(), _adata = new Array();
                    _adata = _sdata.CSV2JSON();
                    $.each(_adata, function (index, item) {
                        thisObj.LoadRowData(item);
                    });
                } catch (e) { $.iLog(e); }
            }
        });
    },
    UpdateGrid: function (RowID, Act) {
        var thisObj = Mods.Items.Currency;
        var inputValue = $.string.Format('<InputValue ID="{0}" />', RowID);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/CurrencyService.asmx/GetCurrency',
            type: 'POST',
            data: { InputValue: inputValue }, //encodeURIComponent
            success: function (data, textStatus, jqXHR) {
                try {
                    data = $(data).find("string").text();
                    var Data = eval("(" + data + ")");
                    if (Act == 'Add')
                        $(thisObj.gridID).jqGrid('addRowData', Data.ID, Data, 'first');
                    else
                        $(thisObj.gridID).jqGrid('setRowData', Data.ID, Data, '');

                    $('#' + Data.ID).animate("highlight", { 'backgroundColor': '#FFF000' }, 2000, function () { });
                } catch (e) { $.iLog(e); }
            }
        });
    }

};
$(function () {
    Mods.Items.Currency.Init();
});
