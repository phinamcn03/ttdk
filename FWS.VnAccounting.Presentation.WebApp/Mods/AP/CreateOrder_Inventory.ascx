<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CreateOrder_Inventory.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.AP.CreateOrder_Inventory" %>
<script type="text/javascript">
    function LoadNCC(elem) {
        var rowIdNCC = $(elem).attr('id').split("_")[0]
       // var ret = $("#CreateOrderAuto_Grid").jqGrid('getRowData', rowId);
        var valueDefault = $("#CreateOrderAuto_Grid").getCell(rowIdNCC, 'NccID');
        console.log("val:" + valueDefault);
        FWS.System.IO.Combobox(elem, '../Mods/Inventory/Service/CStockService.asmx/GetAutoCompleteVendor', {
            data: { inputValue: '' },
            valueField: 'value',
            textField: 'text',
            width:295,
            defaultData: valueDefault,
            onLoadSuccess: function () {
              
              // console.log("val"+valueDefault);
              // $(elem).combobox('setValue', valueDefault);
              
            },
            onSelect: function (record) {
             //   var rowId = $("#CreateOrderAuto_Grid").jqGrid('getGridParam', 'selrow');
                if (record) {
                    $("#CreateOrderAuto_Grid").jqGrid('setCell', rowIdNCC, 'NccID', record.id);
                    $(elem).val(record.text);
                }

            }
        });

    }

    function fvalue(elem, operation, value) {
        if (operation == "set") {
            $(elem).val(value);
        }
        return $(elem).val();
    }
</script>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/AP/Js/Mods.AP.CreateOrderAuto.js") %>"></script>
<div class="border-layout">
   <fieldset class="border-layout-functions"><legend id='fsFunctionTitle'>Chức năng</legend>
        <a id="Customer-btnAddNew" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-add">
            Tạo đơn</a>
        <a id="Customer-btnDelete" href="javascript:void(0);" class="easyui-linkbutton" iconcls="icon-cancel">
            Hủy</a>
    </fieldset>
 
</div>
<div class="border-layout">
    <fieldset class="border-layout-list"><legend id='fsListTitle'>Danh sách::Khách hàng</legend>
        <table id="CreateOrderAuto_Grid" class="SkinGrid">
        </table>
        <div id="CreateOrderAuto_GridPage"></div>
    </fieldset>
</div>