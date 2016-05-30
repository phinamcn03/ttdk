
var datatable = createBigData();
var fixCol = 1, fixRow = 0;

var f_StyleRenderer = function (instance, td, row, col, prop, value, cellProperties) {
    //console.log(row, col, arguments);
    Handsontable.TextCell.renderer.apply(this, arguments);
    $(td).css({
        background: '#a1a1a1',
        color: '#fff'
    });
};

var f_StyleRowFix = function (instance, td, row, col, prop, value, cellProperties) {
    //console.log(row, col, arguments);
    Handsontable.TextCell.renderer.apply(this, arguments);
    $(td).css({
        background: '#ffebeb',
        color: '#9e2c2c'
    });
};
var f_StyleColFix = function (instance, td, row, col, prop, value, cellProperties) {
    //console.log(row, col, arguments);
    Handsontable.TextCell.renderer.apply(this, arguments);
    $(td).css({
        background: '#ebffeb',
        color: '#265729'
    });
};

var f_StyleValFix = function (instance, td, row, col, prop, value, cellProperties) {
    //console.log(row, col, arguments);            
    Handsontable.TextCell.renderer.apply(this, arguments);

    var l = value.length;
    if (l <= 3)
        $(td).css({
            background: '#0f0',
            color: '#000'
        });
    else if (l <= 5)
        $(td).css({
            background: '#ff0',
            color: '#000'
        });
    else
        $(td).css({
            background: '#f00',
            color: '#fff'
        });

};

$(function () {
    //Example 1
    var options1 = {
        data: datatable,
        width: $('#grid_NhapXuat_Kho').width(),
        height: $('#grid_NhapXuat_Kho').height(),

        colWidths: [40, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80], //can also be a number or a function

        rowHeaders: true,

        //To add new row
        //minSpareRows: 1,

        fixedRowsTop: fixRow,
        fixedColumnsLeft: fixCol,

        //autoColumnSize: true, //>>SLOW 
        columnSorting: true,
        colHeaders: true,

        contextMenu: true,

        manualColumnMove: true,
        manualColumnResize: true,

        currentRowClassName: 'vtnt_cur_row',
        currentColClassName: 'vtnt_cur_col',
        autoWrapRow: true,

        /*
        readOnly: true,
        columns: [
        {},
        {readOnly:false}
        ]
        */

        //CONDITION STYLE FORMAT                
        cells: function (row, col, prop) {
            var cellProperties = {}
            //cellProperties.type = { renderer: f_StyleValFix };
            /*
            if (row < fixRow) {
            cellProperties.type = { renderer: f_StyleRowFix };
            }
            if (col < fixCol) {
            cellProperties.type = { renderer: f_StyleColFix };
            }
            if (row === col || (row % 30) === col) {
            //cellProperties.type = { renderer: f_StyleRenderer };
            cellProperties.readOnly = true;
            }
            */
            return cellProperties;
        }
    };
    //$('#grid_NhapXuat_Kho').hst(options1);
    //$('#grid_Statistics').hst(options1);
        
    var htsAdapter = new CHstAdapter();
    var optInvAlert = htsAdapter.getHstOptions({
        gridId: '#hstInvAlert',
        data: [],
        gridOptions: jqgInvAlert_Options,
        gridColNames: jqgInvAlert_ColNames,
        gridColModels: jqgInvAlert_ColModels
    });

    //$('#hstInvAlert').hst(optInvAlert);
    

    var optsInStock = htsAdapter.getHstOptions({
        gridId: '#hstInvAlert',
        data: [],
        gridOptions: jqgInStock_Options,
        gridColNames: jqgInStock_ColNames,
        gridColModels: jqgInStock_ColModels
    });
    //$('#htsInStock').hst(optsInStock);
    $('#htsOutStock').hst(optsInStock);
});