<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FunctionList.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods._Demo.FunctionList" %>
<script type="text/javascript">
    var fl_options_entry = {
        commandName: 'GetTemplatePage',
        resultCallback: 'Handler.ShowPopup',
        template: 'Mods/_Demo/FunctionEntry',
        data: "{a:'-', b:'--'}"
    };
    function LoadEntry() {
        FWS.Web.CTemplateController.Load(fl_options_entry);
    }
    $(function () {
        $('.easyui-linkbutton').linkbutton();
        var mydata = [
            { Code: "ST-0001", StockName: "Kho Việt Nam", ParentName: "", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0002", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0003", StockName: "Kho Hà Nội", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0004", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0005", StockName: "Kho Hải Phòng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0006", StockName: "Kho Đà Nẵng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0007", StockName: "Kho Nam Định", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0008", StockName: "Kho Thanh Hóa", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0009", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0010", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' }
         ];
        jQuery("#list9").jqGrid({
            data: mydata,
            datatype: "local",
            colNames: ['Code', 'Stock Name', 'Parent Name', 'Description', 'Action'],
            colModel: [
                { name: 'Code', index: 'id', width: 100, align: "center", editable: true },
                { name: 'StockName', index: 'invdate', width: 200, editable: true },
                { name: 'ParentName', index: 'name', width: 200, editable: true },
                { name: 'Description', index: 'amount', width: 300 },
                { name: 'Action', index: 'tax', width: 100, align: "center" }
            ],
            height: 250,
            rowNum: 10,
            rowTotal: 50,
            pager: '#pager9',
            sortname: 'id',
            loadonce: true,
            viewrecords: true,
            sortorder: "desc",
            multiselect: true,
            editurl: '../Mods/_Global/Service/GetDataJsonTree.ashx'
        });
        jQuery("#list9").jqGrid('navGrid', '#pager9', {});
    });
</script>
<fieldset class="fsSearch" style="border: 1px solid #CCC; padding: 5px; margin: 5px;"><legend>Search Items:</legend>
    <label style="width: 40px;">Code</label><input type="text" style="width: 80px;" />
    <label style="width: 40px; margin-left: 40px;">Name</label><input type="text" style="width: 400px;" /><a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-search" style="margin-left: 15px;">Search</a>
</fieldset>
<fieldset class="fsSearch" style="border: 1px solid #CCC; padding: 5px; margin: 5px;"><legend>Functions</legend>
    <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add" style="" onclick="LoadEntry()">
        Add</a>
    <a href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel" style="margin-left: 15px;">
        Delete</a>
</fieldset>
<table id="list9">
</table>
<div id="pager9"></div>
