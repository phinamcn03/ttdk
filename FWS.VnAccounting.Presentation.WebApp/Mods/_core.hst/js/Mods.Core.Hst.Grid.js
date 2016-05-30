var Mods = {};
if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.CoreHst == 'undefined')
    Mods.CoreHst = {};

Mods.CoreHst.Grid = {
    gridContentID: '#hstInstance',
    options: null,
    showGrid: function (options) {
        //console.log('Mods.CoreHst.Grid', options);
        options.gridID = options.gridID;
        if (typeof options == 'undefined' || options.gridID == 0)
            return;
        this.options = options;

        var inputvalue = "<inputvalue a='1' b='2'/>";
        $.Ajax({
            url: '../../Mods/_core.hst/Service/HstService.asmx/GetGridConfig',
            type: 'POST',
            data: { 'gridID': this.options.gridID, 'inputvalue': inputvalue },
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                $('#script_grid_config').remove();
                $('<script type="text/javascript" id="script_grid_config"></script>').html(data).appendTo('body');
                Mods.CoreHst.Grid.init(Mods.CoreHst.Grid.options);
            }
        });
    },
    init: function (opts) {
        opts = opts || {};
        var hstAdapter = new CHstAdapter();
        var hstOptions = hstAdapter.getHstOptions({
            gridId: Mods.CoreHst.Grid.gridContentID,
            gridOptions: jqgInstance_Options,
            gridColNames: jqgInstance_ColNames,
            gridColModels: jqgInstance_ColModels
        });
        hstOptions.data = opts.data;

        var instance = $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance');
        if (typeof instance != 'undefined') {
            instance.destroy();
        }

        //checkbox template        
        var arrCheckbox = [];
        $.each(hstOptions.columns, function (idx, it) {
            if (it.type == 'checkbox') {
                arrCheckbox.push([idx, it.data]);
            }
        });
        //console.log(hstOptions.columns, arrCheckbox);
        if (arrCheckbox.length && hstOptions.data.length) {
            var colHeaders = $.extend([], hstOptions.colHeaders);
            var isChecked = {};

            for (var i = 0; i < arrCheckbox.length; i++) {
                isChecked[arrCheckbox[i][0]] = false;

                //column checkbox not exist data                
                if (typeof hstOptions.data[0][arrCheckbox[i][1]] == 'undefined') {
                    $.each(hstOptions.data, function (idx, it) {
                        it[arrCheckbox[i][1]] = isChecked[arrCheckbox[i][0]];
                    });
                }

                $(Mods.CoreHst.Grid.gridContentID).on('mousedown', 'input.' + arrCheckbox[i][1] + '-checker', function (event) {
                    event.stopPropagation();
                }).on('mouseup', 'input.' + arrCheckbox[i][1] + '-checker', function (event) {
                    var ctr = $(this);
                    var colname = ctr.attr('colname'),
                        col = ctr.attr('col');

                    isChecked[col] = !$(this).is(':checked');
                    var data = $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance').getData();

                    $.each(data, function (idx, it) {
                        it[colname] = isChecked[col];
                    });
                    $(Mods.CoreHst.Grid.gridContentID).handsontable('render');
                });
            }

            hstOptions.colHeaders = function (col) {
                if (hstOptions.columns[col].type == 'checkbox') {
                    return $.string.Format("<input type='checkbox' class='{0}-checker' {1} colname='{0}' col='{2}'>", hstOptions.columns[col].data, (isChecked[col] ? 'checked="checked"' : ''), col);
                }
                else {
                    return colHeaders[col];
                }
            };
        }

        //custom config for this grid
        if (typeof Mods.CoreHst.Grid[__HstGridID] != 'undefined')
            Mods.CoreHst.Grid[__HstGridID].init({ hstOptions: hstOptions, options: opts });

        $(Mods.CoreHst.Grid.gridContentID).hst(hstOptions);
    },
    loadAction: function (options) {
        if (typeof Mods.CoreHst.Grid[__HstGridID] != 'undefined')
            Mods.CoreHst.Grid[__HstGridID].action(options);
    }
};
$(function () {
    Mods.CoreHst.Grid.init();
});

//Custom function--------------------- 
function fnGridConfigAction(options) {
    Mods.CoreHst.Grid.loadAction(options);
};
function fnAddRowData(data, row) {
    if (data) {
        var ret = [];
        if ($.isArray(data))
            ret = data;
        else if (typeof data == 'object')
            ret = [data];
        if (ret.length > 0) {
            var instance = $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance');
            row = row || 0;
            new CHstAdapter().addDataAtRow(row, ret, instance);
        }
    }
};
function fnGetData(row, prop) {
    if (row)
        if (prop)
            return $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance').getDataAtRowProp(row, prop);
        else
            return $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance').getDataAtRow(row);
    else
        return $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance').getData();
};

function fnAddClassToColumn(instance, td, col, colName, cs) {
    if (instance.columns[col].data == colName) {
        $(td).addClass(cs);
    }
};
//---------------------------------