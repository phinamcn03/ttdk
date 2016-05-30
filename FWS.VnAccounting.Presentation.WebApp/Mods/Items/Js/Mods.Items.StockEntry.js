if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Items == 'undefined')
    Mods.Items = {};

Mods.Items.StockEntry = {
    DefaultInit: function (opts) {
        var windowID = "#" + opts.id;
        var rowID = opts.rowID;
        this.Properties.windowID = windowID;
        this.Properties.rowID = rowID;
        this.ClearInfo();

        switch (rowID) {
            case "-1":
                $("#StockEntry-btnAddNew,#StockEntry-btnCancel").hide();
                $("#StockEntry-btnSearch").show();
                this.ShowSearch();
                break;
            case "0":
                $("#StockEntry-btnAddNew,#StockEntry-btnCancel").show();
                $("#StockEntry-btnSearch").hide();
                break;
            default:
                $("#StockEntry-btnAddNew,#StockEntry-btnCancel").show();
                $("#StockEntry-btnSearch").hide();
                this.ShowInfo({ ID: rowID });
                break;
        }
        $("#StockEntry-txtCode").focus();
    },
    Properties: {
        windowID: "",
        rowID: "0"
    },
    Event: function () {
        var windowID = "#" + $('#StockEntry-Content').parent().attr('id');
        $("#StockEntry-btnAddNew").click(function () {
            Mods.Items.StockEntry.Update();
            $(windowID).window('close');
        });
        $("#StockEntry-btnCancel").click(function () {
            $(windowID).window('close');
        });
        $("#StockEntry-btnSearch").click(function () {
            Mods.Items.StockEntry.ExecuteSearch();
            $(windowID).window('close');
        });
    },
    GetInfo: function () {
        var options = {
            ID: this.Properties.rowID || "0",
            Code: $("#StockEntry-txtCode").val(),
            Name: $("#StockEntry-txtName").val(),
            ParentID: $("#StockEntry-cbParent").val(),
            Description: $("#StockEntry-txtDescription").val()
        };
        return options;
    },
    ClearInfo: function () {
        var windowID = this.Properties.windowID;
        $(windowID).find("input:text").val('');
    },
    ShowSearch: function () {
        var windowID = this.Properties.windowID;
    },
    ExecuteSearch: function () {
        var info = this.GetInfo();
        Mods.Items.Stock.ExecuteSearch(info);
    },
    ShowInfo: function (opts) {
        if (opts && opts.ID) {
            var inputValue = $.string.Format('<InputValue ID="{0}"/>', opts.ID);
            FWS.System.IO.Ajax({
                url: '../Mods/Items/Service/StockService.asmx/GetStock',
                type: 'POST',
                data: { InputValue: inputValue },
                success: function (data, textStatus, jqXHR) {
                    var data = $(data).find("string").text();
                    data = eval("(" + data + ")");
                    $("#StockEntry-txtCode").val(data.Code);
                    $("#StockEntry-txtName").val(data.Name);
                    $("#StockEntry-cbParent").val(data.ParentID);
                    $("#StockEntry-txtDescription").val(data.Description);
                }
            });
        }
    },
    ShowParent: function () {        
        var inputValue = $.string.Format('<InputValue ExceptID="{0}"/>', 0);
        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/StockService.asmx/GetStockList',
            type: 'POST',
            data: { currPage: 1, numberRowOfPage: 999, inputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                if ($(data).find("string").length) {
                    data = $(data).find("string").text();
                }
                data = eval("(" + data + ")");                
                //data = data.invdata;
                var ret = "";
                for (i in data) {
                    var item = data[i];
                    ret += $.string.Format("<option value='{0}' code='{1}'>{2}</option>", item.ID, item.Code, item.Name);
                }
                $("#StockEntry-cbParent").html(ret);
            }
        });
    },
    Update: function (opts) {
        //console.log('option:', opts);
        opts = opts || Mods.Items.StockEntry.GetInfo();
        var options = {
            ID: "",
            Code: "",
            Name: "",
            ParentID: "",
            Description: ""
        };
        $.extend(true, options, opts);

        var _action = "INSERT", _id = 'ID="' + options.ID + '"';
        if (options.ID != "" && options.ID != "0") {
            _action = "UPDATE";
        }

        var parentID = options.ParentID == null ? '' : 'ParentID="' + options.ParentID + '"';
        var inputValue = $.string.Format('<InputValue {0} Code="{1}" Name="{2}" Description="{3}" Status="{4}" Action="{5}" {6}/>', _id, options.Code, options.Name, options.Description, 0, _action, parentID);

        FWS.System.IO.Ajax({
            url: '../Mods/Items/Service/StockService.asmx/Update',
            type: 'POST',
            data: { InputValue: inputValue },
            success: function (data, textStatus, jqXHR) {
                try {
                    var data = $(data).find("string").eq(0).text();
                    data = eval("(" + data + ")");
                    if (data.Code == "INV_SUCCESS") {
                        Mods.Items.Stock.Grid.RefreshCurrentPage();
                    }
                    else {
                        $.messager.alert('EDITABLE', data.Name);
                    }
                } catch (e) { $.iLog(e); }
            }
        });
    }
};
$(function () {
    Mods.Items.StockEntry.Event();
    Mods.Items.StockEntry.ShowParent();
});