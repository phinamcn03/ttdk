if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.AR == 'undefined') Mods.AR = {};

$.extend($.fn.datagrid.defaults.editors, {
    combogrid: {
        init: function (container, options) {
            var input = $('<input type="text" class="datagrid-editable-input">').appendTo(container);
            var girdObj = Mods.AR.SellOdd.Grid;
            var rowIndex = girdObj.GetRowIndex();
            data_combogrid = girdObj.GetLedgerInfo();
            options = {
                showHeader: false,
                panelWidth: 300,
                idField: 'SerialNo',
                textField: 'SerialNo',
                data: data_combogrid,
                columns: [[
                    { field: 'SerialNo', title: 'Số lô', width: 91 },
                    { field: 'Quantity', title: 'Tồn kho', width: 92 },
                    { field: 'ExpDate', title: 'Hạn sử dụng', width: 91 }

                ]],
                onClickRow: function (pRowIndex, pRowData) {
                    girdObj.UpdateData(rowIndex, pRowData);
                }
            };
            return input.combogrid(options);
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            console.log('getValue', $(target).combogrid('getValue'));
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    },
    numberspinner: {
        init: function (container, options) {
            var girdObj = Mods.AR.SellOdd.Grid;
            var row_data = girdObj.GetRowSelect();
            var SalePrice = row_data['SalePrice'];
            var rowIndex = girdObj.GetRowIndex();
            var input = $('<input type="text" class="datagrid-editable-input">').appendTo(container);
            return input.numberspinner({
                min: 0,
                onChange: function (newValue, oldValue) {
                    row_data['TotalAmount'] = SalePrice * newValue;
                    girdObj.UpdateFooterSummary();
                }
            });
        },
        destroy: function (target) {
            $(target).numberspinner('destroy');
        },
        getValue: function (target) {
            return $(target).numberspinner('getValue');
        },
        setValue: function (target, value) {
            $(target).numberspinner('setValue', value);
        },
        resize: function (target, width) {
            $(target).numberspinner('resize', width);
        }
    }
});
Mods.AR.SellOdd = {
    Init: function () {
        var thisObj = this;
        thisObj.Dropdown.Init();
        thisObj.Grid.Init();
        thisObj.Event();
    },
    Grid: {
        Container: '#SellOdd-Grid',
        Init: function () {
            var thisObj = Mods.AR.SellOdd.Grid;
            $(thisObj.Container).datagrid({
                showFooter: true,
                rownumbers: true,
                fitColumns: true,
                fixed: true,
                singleSelect: true,
                width: '100%',
                height: 500,
                columns: [[
                    { field: 'ID', title: 'ID', hidden: true },
                    { field: 'ItemID', title: 'Mã thuốc', width: 80 },
                    { field: 'ItemName', title: 'Tên thuốc', width: 200 },
                    { field: 'SerialNo', title: 'Số lô', width: 100, editor: { type: 'combogrid' } },
                    { field: 'InventoryNumber', title: 'Tồn kho', width: 100 },
                    { field: 'ExpDate', title: 'Hạn sử dụng', width: 100 },
                    { field: 'ActivePrincipleName', title: 'hoạt chất', width: 100 },
                    { field: 'Quantity', title: 'Số lượng', width: 100, editor: { type: 'numberspinner' } },
                    { field: 'SalePrice', title: 'Giá', width: 100 },
                    { field: 'DiscountAmount', title: 'Giảm giá', width: 100 },
                    { field: 'UsingNote', title: 'Liều dùng', width: 100 }
                ]],
                data: {
                    "total": 1,
                    "rows": [], "footer": [
                        { "DiscountAmount": 'Tổng cộng:', "UsingNote": "0" }
                    ]
                },
                onClickRow: function (index) {
                    var thisObj = Mods.AR.SellOdd.Grid;
                    if (thisObj.editIndex != index) {
                        if (thisObj.EndEditing()) {
                            $(thisObj.Container).datagrid('selectRow', index)
                                    .datagrid('beginEdit', index);
                            thisObj.editIndex = index;
                        } else {
                            $(thisObj.Container).datagrid('selectRow', thisObj.editIndex);
                        }
                    }
                },
                onSelect: function (rowIndex, rowData) {
                },
                onBeforeEdit: function (rowIndex, rowData) {
                },
                onAfterEdit: function (rowIndex, rowData, changes) {
                },
                onCancelEdit: function (rowIndex, rowData) {
                }
            });
        },
        Clear: function () {
            var thisObj = this;
            var dg = $(thisObj.Container);
            dg.datagrid('loadData', []);
        },
        AddRow: function (pData, pRowIndex) {
            var thisObj = Mods.AR.SellOdd.Grid;
            $(thisObj.Container).datagrid('appendRow', pData);
        },
        GetRowSelect: function () {
            var thisObj = Mods.AR.SellOdd.Grid;
            var ret = $(thisObj.Container).datagrid('getSelected');
            return ret;
        },
        GetRowIndex: function (pRow) {
            var thisObj = Mods.AR.SellOdd.Grid;
            var rowSelected = thisObj.GetRowSelect();
            var ret = $(thisObj.Container).datagrid('getRowIndex', rowSelected);
            return ret;
        },
        GetRows: function () {
            var thisObj = Mods.AR.SellOdd.Grid;
            var ret = $(thisObj.Container).datagrid('getRows');
            return ret;
        },
        UpdateData: function (pRowIndex, pData) {
            var thisObj = this;
            var rowIndex = pRowIndex || thisObj.GetRowIndex();
            var row_data = thisObj.GetRowSelect();

            var SerialNo = pData.SerialNo;
            var ExpDate = pData.ExpDate;
            var Quantity = pData.Quantity;

            row_data['SerialNo'] = SerialNo;
            row_data['ExpDate'] = ExpDate;
            row_data['InventoryNumber'] = Quantity;

            var $tr = $('#datagrid-row-r1-2-' + rowIndex);
            $tr.find('td[field="ExpDate"] div').text(ExpDate);
            $tr.find('td[field="InventoryNumber"] div').text(Quantity);
        },
        UpdateFooterSummary: function () {
            var thisObj = this;
            var dg = $(thisObj.Container);
            //var data = dg.datagrid('getData');
            //dg.datagrid('loadData', data);
            var total = 0;

            var rows = dg.datagrid('getRows');
            $.each(rows, function (key, item) {
                total += parseInt(item['TotalAmount']);
            });
            dg.datagrid('reloadFooter', [{ "DiscountAmount": 'Tổng cộng:', "UsingNote": total }]);
        },
        SetCell: function (pRowIndex, pFieldName, pFieldValue) {
            var thisObj = Mods.AR.SellOdd.Grid;
            var row_data = thisObj.GetRowSelect();
            row_data[pFieldName] = pFieldValue;
        },
        EndEditing: function () {
            var thisObj = Mods.AR.SellOdd.Grid;
            if (thisObj.editIndex == undefined) { return true }
            if ($(thisObj.Container).datagrid('validateRow', thisObj.editIndex)) {
                $(thisObj.Container).datagrid('endEdit', thisObj.editIndex);
                thisObj.editIndex = undefined;
                return true;
            } else {
                return false;
            }
        },
        LedgerInfoCache: {},
        GetLedgerInfo: function (pID) {
            var thisObj = this;
            var rowIndex = thisObj.GetRowIndex();
            var row_data = thisObj.GetRowSelect();
            var id = pID || row_data.ID;
            return thisObj.LedgerInfoCache[id];
        },
        editIndex: undefined
    },
    Event: function () {
        var thisObj = this;
        $('#SellOdd-txtBarCode').on('keydown', function (e) {
            if (e.which == 13) {
                e.preventDefault();
                var barCode = $.trim($('#SellOdd-txtBarCode').val());
                var stockID = thisObj.Dropdown.Warehouse.GetValue();
                thisObj.GetItem({
                    StockID: stockID,
                    Barcode: barCode
                }, function (rData) {
                    if (rData && rData.length) {
                        if (rData[1] && rData[1].length) {
                            var data = rData[1][0];
                            console.log('data', data);
                            var ID = data.ID;
                            var Name = data.Name;
                            var ActivePrincipleName = data.ActivePrincipleName;
                            var SalePrice = parseInt(data.SalePrice || 0) || 1000;
                            var LedgerInfo = data.LedgerInfo;
                            var DiscountAmount = 0;
                            var Quantity = 1;
                            var SerialNo = '';
                            var ExpDate = '';
                            var InventoryNumber = '';

                            if (LedgerInfo) {
                                LedgerInfo = eval('(' + LedgerInfo + ')');
                                if ($.isArray(LedgerInfo)) {
                                    if (LedgerInfo && LedgerInfo.length) {
                                        SerialNo = LedgerInfo[0].SerialNo;
                                        ExpDate = LedgerInfo[0].ExpDate;
                                        InventoryNumber = LedgerInfo[0].Quantity;
                                        thisObj.Grid.LedgerInfoCache[ID] = LedgerInfo;
                                    }
                                }
                            }
                            var TotalAmount = Quantity * (SalePrice - DiscountAmount);
                            thisObj.Grid.AddRow({
                                ID: ID,
                                Action: '#',
                                ItemName: Name,
                                ItemID: ID,
                                ActivePrincipleName: ActivePrincipleName,
                                SalePrice: SalePrice,
                                DiscountAmount: DiscountAmount,
                                TotalAmount: TotalAmount,
                                SerialNo: SerialNo,
                                InventoryNumber: InventoryNumber,
                                ExpDate: ExpDate,
                                Quantity: Quantity,
                                UsingNote: 'UsingNote'
                            });
                            var summaryTotal = parseInt($('#SellOdd-Summary-Total').val() || 0);
                            summaryTotal += TotalAmount;
                            thisObj.Grid.UpdateFooterSummary();
                        }
                    }

                });

            }
        });
        $('#SellOdd-btnCreate').click(function () {
            var rows = thisObj.Grid.GetRows();
            if (rows.length == 0) {
                $.messager.alert('Thông báo', 'Chưa nhập dữ liệu.', 'error');
                return false;
            }
            $.messager.confirm('Thông báo', 'Bạn muốn tạo phiếu này?', function (r) {
                if (r) {
                    var row_datas = thisObj.Grid.GetRows();
                    $.each(row_datas, function (index, item) {
                        item.RootName = 'ItemDetail';
                    });
                    var RequestParams = [{
                        RootName: 'RequestParams',
                        RefNo: 'PT0012',
                        RefType: '20',
                        RefDate: '2012-01-10',
                        PartnerID: thisObj.Dropdown.Partner.GetValue(),
                        PartnerName: thisObj.Dropdown.Partner.GetText(),
                        Amount: '400000',
                        DiscountAmount: '0',
                        TaxAmount: '0',
                        TotalAmount: '400000',
                        Note: 'Ban hang',
                        Action: 'SAVE',
                        InputNested: row_datas
                    }];
                    console.log('row_datas', row_datas);
                    thisObj.ExecuteAction(RequestParams, function (rData) {
                        if (rData && rData.length)
                            $.messager.alert('Thông báo', rData[0][0].Description, 'info');
                    });
                }
            });

        });
        $('#SellOdd-btnInfo').click(function () {
            $('#SellOdd-MedicReceiptInfo-Dialog').dialog('open');
        });
        $('#SellOdd-btnClear').click(function () {

            thisObj.ClearForm();
        });
    },
    ClearForm: function () {
        var thisObj = this;
        $('#SellOdd-txtBarCode').val('');
        $('#SellOdd-txtBarCodeSearch').val('');
        thisObj.Dropdown.Reset();
        thisObj.Grid.Clear();
    },
    Dropdown: {
        Init: function () {
            var thisObj = this;
            thisObj.Partner.Init();
            thisObj.Warehouse.Init();

        },
        Reset: function () {
            this.Partner.Reset();
            this.Warehouse.Reset();
        },
        Partner: {
            Selector: '#SellOdd-Partner',
            Init: function () {
                $(this.Selector).combobox({
                    editable: true,
                    data: [
                        { id: '1', text: 'Triệu Tấn Vinh' },
                        { id: '2', text: 'Nguyễn Phi Nam' }
                    ],
                    value: '1',
                    valueField: 'id',
                    textField: 'text'
                });
            },
            GetValue: function () {
                return $(this.Selector).combobox('getValue');
            },
            GetText: function () {
                return $(this.Selector).combobox('getText');
            },
            Reset: function () {
                $(this.Selector).combobox('setValue', '1');
            }
        },
        Warehouse: {
            Selector: '#SellOdd-Warehouse',
            Init: function () {
                $(this.Selector).combobox({
                    editable: true,
                    data: [
                        { id: '9', text: 'Kho 9' },
                        { id: '10', text: 'Kho 10' }
                    ],
                    value: '9',
                    valueField: 'id',
                    textField: 'text'
                });
            },
            GetValue: function () {
                return $(this.Selector).combobox('getValue');
            },
            GetText: function () {
                return $(this.Selector).combobox('getText');
            },
            Reset: function () {
                $(this.Selector).combobox('setValue', '9');
            }
        }
    },
    ExecuteAction: function (pOption, pCallback) {
        $.CCore.Service.ExecuteAction(pOption, function (rData) {
            if (typeof pCallback == 'function') {
                pCallback(rData);
            }
        });
    },
    GetItem: function (pOption, pCallback) {
        var option = {
            RootName: 'RequestParams',
            Function: 'GetItems',
            Context: 'Sale_Barcode',
            StockID: '',
            Barcode: ''
        };
        $.extend(true, option, pOption);

        var data = [option];
        $.CCore.Service.GetContextData(data, function (rData) {
            if (typeof pCallback == 'function') {
                pCallback(rData);
            }
        });
    }
};
$(function () {
    Mods.AR.SellOdd.Init();
});
