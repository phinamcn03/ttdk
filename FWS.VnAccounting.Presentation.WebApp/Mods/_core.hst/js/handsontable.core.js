//------------------------------------------------------------------------------------------------------------
//  Class CHST
//------------------------------------------------------------------------------------------------------------
var iMarkets = {
    Grid: {
        CustomFormatHTMLEscape: function () { },
        CustomFormatInt: function () { },
        CustomFormatString: function () { },
        CustomFormatDate: function () { },
        formatDecimalEx: function () { }
    }
};
var VnAccounting = {
    Grid: {
        CustomFormatHTMLEscape: function () { },
        CustomFormatInt: function () { },
        CustomFormatString: function () { },
        CustomFormatDate: function () { },
        formatDecimalEx: function () { }
    }
};
var hstAvailableWidth, hstAvailableHeight;
var fnCalculateReSize = function () {
    var hstGrid = $('div.handsontable'), scrollSize = 11;
    var offset = hstGrid.offset();
    hstAvailableWidth = $(window).width() - offset.left
    hstAvailableHeight = $(window).height() - offset.top;
    hstGrid.handsontable('render');

    var hstGridTotal = $('div.handsontable.grid-footer-total');
    if (hstGridTotal.length > 0) {
        var top = hstGrid.position().top + hstAvailableHeight - scrollSize - 24;
        //grid content no horizontal bar            
        if (!hstGrid.handsontable('getInstance').view.wt.wtScrollbars.horizontal.visible) {
            top = top * 1 + scrollSize;
            hstGridTotal.attr({ 'horizontal': 'false' });
        }
        hstGridTotal.css({ 'top': top, 'width': (hstAvailableWidth - 10) });
        hstGridTotal.handsontable('render');
    }
};
$(window).on('resize', fnCalculateReSize);
//------------------------------------------------------------------------------------------------------------
//  Override Class Handsontable 
//------------------------------------------------------------------------------------------------------------
$.fn.hst = function (action) {
    action = action || {};
    //console.log('::My Action [0]', action);
    var retObj = null;

    //Init case
    if (typeof action !== 'string') {
        action = new CHstAdapter().fixAutoColumnWidth(action);
        action = new CHstAdapter().setDynanicColumn(action);
        //console.log('::My Action [1]', action);
        retObj = this.handsontable(action);
    }
    //Action case
    else {
        var args = [];
        if (arguments.length > 1) {
            for (i = 1, ilen = arguments.length; i < ilen; i++) {
                args.push(arguments[i]);
            }
        }
        instance = this.handsontable('getInstance');
        if (instance) {
            if (typeof instance[action] !== 'undefined') {
                retObj = instance[action].apply(instance, args);
            }
            else {
                throw new Error('Handsontable do not provide action: ' + action);
            }
        }
    }
    return retObj;
}
//=====================================================================================================
//Overwrite custom class Handsontable
//=====================================================================================================
Handsontable.iGrid = {
    //convert icss to style
    iCss2Style: function (iCss) {
        var str = iCss;
        str = str.replace(/_/gi, "':'").replace(/;/gi, "','");
        if (str.substring(str.length - 2, str.length) == ",'")
            str = str.substring(0, str.length - 2)
        else
            str += "'";
        str = "{'" + str + "}";
        str = eval('(' + str + ')');
        return str;
    },
    //format data null
    formatNull: function (value, colOption, type) {
        var ret = value;
        if (typeof colOption.hstDisplayCompareValue != 'undefined') {
            if (typeof type == 'undefined') type = 'number';
            if (type == 'number' && $.isNumeric(value)) {
                var digit = colOption.hstDisplayDecimal || '0';
                var temp = $.parseFloat(value, 'n0', "en-US"),
                tempCompare = colOption.hstDisplayCompareValue;
                if (tempCompare != '' && temp == tempCompare) {
                    ret = colOption.hstDisplayCompareReplace;
                }
            }
            else {
                if (ret == colOption.hstDisplayCompareValue) {
                    ret = colOption.hstDisplayCompareReplace;
                }
            }
        }
        return ret;
    },
    //format data
    format: function (value, colOption, instance, row) {
        var ret = value;
        if (typeof colOption.formatter != 'undefined') {
            var sformat = colOption.formatter,
                formater = new CFormatter();
            switch (sformat) {
                case 'iMarkets.Grid.CustomFormatHTMLEscape':
                    break;
                case 'iMarkets.Grid.CustomFormatInt':
                    ret = formater.formatInt(value);
                    break;
                case 'iMarkets.Grid.CustomFormatString':
                    break;
                case 'iMarkets.Grid.CustomFormatDate':
                    ret = formater.formatDate(value);
                    break;
                case 'iMarkets.Grid.CustomFormatDateTimeMinutes':
                    ret = formater.formatDateTime(value);
                    break;
                case 'iMarkets.Grid.CustomFormatDecimal':
                    ret = formater.formatDecimal(value, colOption.hstDisplayDecimal);
                    //ret = formater.formatNumber(value, colOption.hstDisplayDecimal);
                    break;
                case 'iMarkets.Grid.CustomFormatDecimalScale':
                    var extend = instance.getDataAtRowProp(row, 'Extend');
                    if (typeof extend == 'undefined')
                        extend = instance.getDataAtRowProp(row, 'extend');

                    if (typeof extend != 'undefined') {
                        try {
                            extend = eval('(' + extend + ')');
                            if (extend && typeof extend.Decimal != 'undefined') {
                                ret = formater.formatDecimalScale(value, extend.Decimal, extend.Scale);
                            }
                            else ret = '...';
                        } catch (e) { ret = '...'; }
                    }
                    else ret = '...';
                    break;
                case 'iMarkets.Grid.CustomFormatDecimalEx':
                    ret = formater.formatDecimalEx(value, colOption.hstDisplayDecimal);
                    break;
                default:
                    break;
            }
            var valueNull = this.formatNull(value, colOption);
            if (value != valueNull) ret = valueNull;
        }
        return ret;
    },
    //default cell render
    renderer: function (instance, td, row, col, prop, value, cellProperties) {
        Handsontable.TextCell.renderer.apply(this, arguments);

        var settings = instance.getSettings();
        var columns = settings.columns || {};

        //Format Data
        if (typeof columns[col].formatter != 'undefined') {
            $(td).html(Handsontable.iGrid.format(value, columns[col], instance, row));
        }
        //Format Css
        if (typeof columns[col].hstCss != 'undefined' && columns[col].hstCss != '') {
            var hstCss = columns[col].hstCss;
            var style = Handsontable.iGrid.iCss2Style(hstCss);
            $(td).css(style);
        }
        //Format Align
        if (typeof columns[col].hstAlign != 'undefined' && columns[col].hstAlign != '') {
            var hstAlign = columns[col].hstAlign;
            $(td).addClass(hstAlign);
        }
        //Format Css  
        if (typeof columns[col].hstiSEL != 'undefined') {
            $(td).addClass(columns[col].hstiSEL);
        }
        if (typeof columns[col].hstColCss != 'undefined') {
            $(td).addClass(columns[col].hstColCss);
        }
        //Fixed Column
        if (col == settings.fixedColumnsLeft - 1) {
            $(td).addClass('fixCol');
        }
        //default class of row number
        if (prop == 'RowNumber') $(td).addClass('RowNumber');
        //Extend style
        var extend = instance.getDataAtRowProp(row, 'extend');
        if (typeof extend == "undefined") {
            extend = instance.getDataAtRowProp(row, 'Extend');
        }
        if (typeof extend != 'undefined' && extend != '') {
            extend = eval('(' + extend + ')');
            if (typeof columns[col].hstStyleName != 'undefined') {
                for (n in extend) {
                    if (n == columns[col].hstStyleName) {
                        var css = extend[n];
                        css = '{"' + css.replace(/,/g, '","').replace(/_/g, '":"') + '"}';
                        $(td).css($.parseJSON(css));
                        break;
                    }
                }
            }
        }

        var rowData = instance.getDataAtRow(row);
        //row status: readonly, delete,...
        if (rowData.ActionStatus != null && typeof rowData.ActionStatus != 'undefined') {
            switch (rowData.ActionStatus) {
                case '1': //delete
                    $(td).addClass('row-delete');
                    cellProperties.readOnly = true;
                    break;
                case '2': //readonly
                    cellProperties.readOnly = true;
                    break;
                default:
                    delete cellProperties.readOnly;
                    break;
            }
        }
        //row edited
        if (rowData.Edited != null && typeof rowData.Edited != 'undefined') {
            var edited = JSON.parse(rowData.Edited);
            if (typeof edited[prop] != 'undefined') {
                if (edited[prop].c) $(td).addClass('row-edited');
                else $(td).removeClass('row-edited');
            }
        }
    },
    //get define option from options
    getOptions: function (options) {
        var ret = {};
        if (typeof options == 'undefined') return ret;

        var _gOpts = options.gridOptions;
        //Grid Options ----------------------------------------------------------                
        ret.currentRowClassName = 'cur_row';
        ret.columnSorting = true;
        ret.contextMenu = Handsontable.iGrid.contextMenu;

        ret.fixedColumnsLeft = _gOpts.fixedcolumn;
        ret.gridId = options.gridId;
        //Server config (old)
        ret.colModels = options.gridColModels;
        ret.colNames = options.gridColNames;
        //Columns options
        var _columns = [], _colHeaders = [], _colWidths = [];
        for (i in ret.colModels) {
            var item = ret.colModels[i],
                hidden = item.hidden || false;

            if (!hidden) {
                _colHeaders.push(ret.colNames[i]);

                var w = (item.width || 50) + 6;
                _colWidths.push(w);

                var _col = getColOption(item);
                _columns.push(_col);
            }
        }
        ret.columns = _columns;
        ret.colHeaders = _colHeaders;
        ret.colWidths = _colWidths;
        //define cell format
        ret.cells = function (row, col, prop) {
            if (_columns[col].type != 'checkbox') {
                this.renderer = Handsontable.iGrid.renderer;
            }
        };

        ret.afterRender = function () {
            var instance = $(options.gridId).hst('getInstance');
            var settings = instance.getSettings();
            var isRowHeader = settings.rowHeaders,
                columns = settings.columns;
            var headerHtml = $(options.gridId + ' th div.relative');
            for (var i = 0; i < columns.length; i++) {
                var textalign = columns[i].hstAlign || 'right';
                var col = isRowHeader ? i + 1 : i;
                if ($(headerHtml[col]).length > 0) $(headerHtml[col]).removeClass('left center right').addClass(textalign);
            }
            //bind event group after render. not used in init: table clear after render            
            $(options.gridId + ' th').off('click').on('click', function (e) {
                var instance = $(options.gridId).hst('getInstance');
                var settings = instance.getSettings();
                if (e.ctrlKey) {
                    var colIndex = $(this).index();
                    if (typeof _columns[colIndex] != 'undefined') {
                        var colName = _columns[colIndex].data;
                        if (typeof instance.Grouping == 'undefined' || instance.Grouping == false ||
                            (instance.Grouping && instance.GroupColumnName != colName)) {

                            if (instance.Grouping) instance.iRemoveGroup();

                            instance.iSortGroup(colName);
                        }
                        else {
                            instance.iRemoveGroup();
                        }
                    }
                    return false;
                }
                else {
                    instance.iSort(e);
                    return false;
                }
            });
            //tai.nguyen: create grid total footer
            if (_gOpts.isShowTotal) {
                instance.iAddTotal(options, columns, _colWidths, _gOpts);
            }
            else {//clear footer grid
                if ($('div[id$=_footer_total]').length)
                    $('div[id$=_footer_total]').remove();
            }
            instance.iSetTotalCount();
            instance.deselectCell();
        };

        ret.beforeRender = function () { };

        ret.afterInit = function () {
            $(ret.gridId + ' table.htCore').addClass('SkinGrid');
            var headHtml = $(ret.gridId + ' table colgroup')
            if (_gOpts.rownumbers) $('col.rowHeader', headHtml).width(_gOpts.rownumWidth);
            //hide column invisible with column width: 1 or 3
            for (var i = 0; i < ret.colWidths.length; i++) {
                if (ret.colWidths[i] == 1 || ret.colWidths[i] == 3) {
                    $($('col', headHtml)[i + 1]).width(0);
                }
            }
        };

        //phai overwrite theo tung grid
        //ret.groupCallback = function () { };
        //ret.totalCallback = function () { };

        ret.width = function () {
            return hstAvailableWidth || 400;
        };
        ret.height = function () {
            return hstAvailableHeight || 300;
        };
        //define function
        function getColOption(item) {
            var ret = { data: item.name, readOnly: true };
            if (typeof item.sformatter != 'undefined') ret.formatter = item.sformatter;
            if (typeof item.ConditionStyleName != 'undefined') ret.hstStyleName = item.ConditionStyleName;
            if (typeof item.iCSS != 'undefined' && item.iCSS != '') ret.hstCss = item.iCSS;
            if (typeof item.align != 'undefined' && item.align != '') ret.hstAlign = item.align;
            if (typeof item.DisplayCompareValue != 'undefined') ret.hstDisplayCompareValue = item.DisplayCompareValue;
            if (typeof item.DisplayCompareReplace != 'undefined') ret.hstDisplayCompareReplace = item.DisplayCompareReplace;
            if (typeof item.DisplayDecimal != 'undefined' && item.DisplayDecimal != '') ret.hstDisplayDecimal = item.DisplayDecimal;
            if (typeof item.ColumnHideMode != 'undefined' && item.ColumnHideMode != '') ret.hstColumnHideMode = item.ColumnHideMode;
            if (typeof item.sorttype != 'undefined' && item.sorttype != '') ret.hstsorttype = item.sorttype;
            if (typeof item.AutoColumnResizeMode != 'undefined' && item.AutoColumnResizeMode != '') ret.hstAutoColumnResizeMode = item.AutoColumnResizeMode;
            if (typeof item.summaryType != 'undefined' && item.summaryType != '') ret.hstSummaryType = item.summaryType;
            if (typeof item.AlwayShowColumn != 'undefined' && item.AlwayShowColumn == '1') ret.hstAlwayShow = item.AlwayShowColumn;
            if (typeof item.classes != 'undefined' && item.classes != '') ret.hstColCss = item.classes;
            if (typeof item.classes != 'undefined' && item.classes.indexOf('iSEL') != -1) ret.hstiSEL = 'iSEL';
            if (typeof item.editable != 'undefined' && item.editable == true) ret.readOnly = false;
            //checkbox
            //if (typeof item.type != 'undefined' && item.type != '') ret.type = item.type;        
            return ret;
        };
        //================================
        return ret;
    },
    //default context
    contextMenu: {
        callback: function (key, options) {
            switch (key) {
                case 'h21':
                    break;
                case 'h22':
                    break;
                case 'h23':
                    break;
                //export                                                                                                                                                                                                                                                                                                                                                               
                case 'h231':
                    Handsontable.iGrid.exportDataOnly();
                    break;
                case 'h232':
                    Handsontable.iGrid.previewFullHtml(2);
                    break;
                //print                                                                                                                                                                                                                                                                                                                                                               
                case 'h31':
                    Handsontable.iGrid.previewFullHtml(1);
                    break;
                //zoom                                                                                                                                                                                                                                                                                                                                                               
                case 'h321':
                    Handsontable.iGrid.zoomGrid(1);
                    break;
                case 'h322':
                    Handsontable.iGrid.zoomGrid(0);
                    break;
                case 'h323':
                    Handsontable.iGrid.zoomGrid(-1);
                    break;
                //reload                                                                                                                                                                                                                                                                                                                                                              
                case 'h33':
                    CoreGrid.handsontable.iReload();
                    break;
            }
        },
        items: {
            'h3': {
                'name': 'Form',
                'icon': 'form',
                'items': {
                    'h31': { 'name': 'Print', 'icon': 'print' },
                    'h32': {
                        'name': 'Zoom',
                        'icon': 'zoom',
                        'items': {
                            'h321': { 'name': 'Zoom +', 'icon': 'zoomin' },
                            'h322': { 'name': '...', 'icon': 'zoom' },
                            'h323': { 'name': 'Zoom -', 'icon': 'zoomout' }
                        }
                    },
                    "h21": "---------",
                    'h33': { 'name': 'Reresh', 'icon': 'refresh' }
                }
            },
            'h2': {
                'name': 'Grid',
                'icon': 'grid',
                'items': {
                    'h21': { 'name': 'Set as Default', 'icon': 'setdefault' },
                    'h22': { 'name': 'Config', 'icon': 'config' },
                    'h23': {
                        'name': 'Export',
                        'icon': 'export',
                        'items': {
                            'h231': { 'name': 'Data Only', 'icon': 'exportcsv' },
                            'h232': { 'name': 'As Shown', 'icon': 'export' }
                        }
                    }
                }
            },
            "hsep2": "---------",
            "exit": { 'name': "Close Menu", 'icon': "close" }
        }
    },
    //get
    getColsOptionByType: function (columns, type) {
        var ret = {};
        $.each(columns, function (index, item) {
            switch (type) {
                case '1':
                    if (typeof item.hstSummaryType != 'undefined') {
                        ret[item.data] = item.hstSummaryType;
                    }
                    break;
                case '2':
                    if (typeof item.hstAlwayShow != 'undefined') {
                        ret[item.data] = item.hstAlwayShow;
                    }
                    break;
            }
        });
        return ret;
    },
    //auto fix column with
    fixAutoColumnWidth: function (options) {
        if (typeof options.data == 'undefined' || options.data.length == 0) return options;
        if (typeof options != 'undefined' && typeof options.data != 'undefined' && typeof options.colWidths != 'undefined') {
            for (c in options.columns) {
                var colOptions = options.columns[c];
                if (colOptions.hstAutoColumnResizeMode == '3') {
                    var colName = colOptions.data,
                        colWidth = options.colWidths[c];
                    var maxWidth = 0, datWidth = 0;
                    for (r in options.data) {
                        d = options.data[r][colName];
                        d = Handsontable.iGrid.format(d, colOptions);
                        if (typeof datWidth != 'undefined') {
                            datWidth = d.toString().length * 8;
                        }
                        if (datWidth > maxWidth) maxWidth = datWidth;
                    }
                    if (maxWidth != 0 && maxWidth < colWidth) {
                        if (options.colHeaders[c].length * 7 > maxWidth) maxWidth = options.colHeaders[c].length * 7;
                        options.colWidths[c] = maxWidth;
                    }
                }
            }
            var colsHidden = Handsontable.iGrid.getColsHidden(options.columns, options.data);
            $.each(colsHidden, function (index, item) {
                if (item.isHidden == true) {
                    Handsontable.iGrid.hideColumnByData(options, item.name);
                }
            });
        }
        return options;
    },
    //column hide by config option
    getColsHidden: function (columns, data) {
        var obj = {};
        var colAlwayShow = Handsontable.iGrid.getColsOptionByType(columns, '2');
        $.each(data, function (index, item) {
            for (i in item) {
                //kiem tra column ko ton tai trong danh sach alwayshow va data is zero         
                if (typeof colAlwayShow[i] == 'undefined') {
                    if (typeof obj[i] == 'undefined') obj[i] = { name: i, isHidden: true };
                    if (obj[i].name == i &&
                        item[i] != '' && item[i] != '...' && (parseInt(item[i]) != '0')) {
                        obj[i].isHidden = false;
                    }
                }
            };
        });
        return obj;
    },
    //column hide by data display define
    hideColumnByData: function (options, colName) {
        var index = -1;
        $.each(options.columns, function (key, item) {
            if (item.data == colName) {
                index = key;
                return false;
            }
        });
        if (index != -1) {
            options.columns.splice(index, 1);
            options.colHeaders.splice(index, 1);
            options.colWidths.splice(index, 1);
        }
    },
    //row empty
    getRowEmpty: function (obj) {
        obj = obj || {};
        for (i in obj) obj[i] = "";
        return obj;
    },
    //custom
    __sort: function (fields) {
        var n_fields = fields.length;
        return function (A, B) {
            var a, b, field, key, primer, reverse, result;
            for (var i = 0, l = n_fields; i < l; i++) {
                result = 0;
                field = fields[i];

                key = typeof field === 'string' ? field : field.name;
                a = A[key];
                b = B[key];

                if (typeof field.primer !== 'undefined') {
                    a = field.primer(a);
                    b = field.primer(b);
                }

                reverse = (field.reverse) ? -1 : 1;

                if (a < b) result = reverse * -1;
                if (a > b) result = reverse * 1;
                if (result !== 0) break;
            }
            return result;
        }
    },
    getPrimer: function (sorttype) {
        var primer;
        switch (sorttype) {
            case 'int':
                primer = parseInt;
                break;
            case 'float':
                primer = parseFloat;
                break;
            case 'datetime':
                primer = Handsontable.iGrid.parseDate;
                break;
            case 'time':
                primer = Handsontable.iGrid.parseTime;
                break;
            default:
                break;
        };
        return primer;
    },
    parseDate: function (value) {
        var ret = new Date();
        if (value) {
            value = value.split(' ')[0];
            try {
                if (value.indexOf('-') != -1) {
                    var arr = value.split('-');
                    ret = ret.setFullYear(arr[0], arr[1] - 1, arr[2]);
                    ret = new Date(ret);
                }
                else if (value.indexOf('/') != -1) {
                    var arr = value.split(' ');
                    arr = arr[0].split('/');
                    ret = ret.setFullYear(arr[2], arr[0] - 1, arr[1]);
                    ret = new Date(ret);
                }
            } catch (e) {
                ret = new Date();
            }
        }
        return ret;
    },
    parseTime: function (value) {
        var ret = new Date();
        if (value && value.length > 12) {
            value = value.replace('-', '/');
            ret = Date.parse(value);
        }
        return ret.getTime();
    },
    //print or export
    __previewFull: null,
    exportDataOnly: function () {
        var instance = CoreGrid.handsontable;
        if (instance) {
            var ret = '',
            data = instance.getData(),
            settings = instance.getSettings();

            var headers = $.extend([], settings.colHeaders, true);
            for (var i = 0; i < headers; i++) {
                headers[i] = (headers[i]);
            }
            ret = headers + "\n";
            var allRow = [];
            $.each(data, function (idx, it) {
                var row = [];
                $.each(settings.columns, function (_idx, _it) {
                    if (typeof it[_it.data] != 'undefined') {
                        row.push('"' + it[_it.data].toString().replace('"', '""') + '"');
                    }
                });
                if (row.length) allRow.push(row.join(','));
            });
            if (allRow.length) ret += allRow.join('\n');
            Handsontable.iGrid.__previewFull = window.open('PrintPreview.aspx');
            if (Handsontable.iGrid.__previewFull) {
                window.setTimeout(function () {
                    if (Handsontable.iGrid.__previewFull._export) {
                        Handsontable.iGrid.__previewFull._export('csv', ret, function () {
                            if (Handsontable.iGrid.__previewFull) Handsontable.iGrid.__previewFull.close();
                        });
                    }
                }, 1000);
            }
        }
    },
    previewFullHtml: function (type) {
        var instance = CoreGrid.handsontable;
        if (instance) {
            if (iMarkets.CoreSub.Overlay) iMarkets.CoreSub.Overlay.Show();
            var data = instance.getData(),
            settings = instance.getSettings(),
            html = '',
            idx = 0,
            step = 25,
            timewaitting = 1000,
            isHorizontal = false;
            var lastColWidths = $.extend([], settings.colWidths, true);
            var lastOffsetRow = instance.view.wt.lastOffsetRow;
            var totalHtml = '';
            window.setTimeout(function () {
                //open window preview 
                var params = 'width=' + screen.width
                        + ', height=' + screen.height
                        + ', top=0, left=0'
                        + ', fullscreen=yes,menubar=no,resizable=no,scrollbars=yes,location=no,toolbar=no';
                Handsontable.iGrid.__previewFull = window.open('PrintPreview.aspx', 'iMarket: Preview', params);
                if (Handsontable.iGrid.__previewFull) {
                    if (instance.view.wt.wtScrollbars.horizontal.visible) {
                        for (var i = 0; i < settings.colWidths.length; i++) {
                            settings.colWidths[i] = 10;
                        }
                        isHorizontal = true;
                        instance.render();

                        var totalGrid = $(CoreGrid.config.gridId + '_footer_total');
                        if (totalGrid.length) {
                            var totalInstance = totalGrid.hst('getInstance');
                            var totalSettings = totalInstance.getSettings();
                            totalSettings.colWidths = settings.colWidths;
                            totalInstance.updateSettings(totalSettings);
                            totalHtml = $(CoreGrid.config.gridId + '_footer_total div.wtSpreader table.htCore tbody').html();
                        }
                    }
                    else {
                        if ($(CoreGrid.config.gridId + '_footer_total').length) {
                            totalHtml = $(CoreGrid.config.gridId + '_footer_total div.wtSpreader table.htCore tbody').html();
                        }
                    }
                    if (instance.view.wt.wtScrollbars.vertical.visible) {
                        timewaitting = 3000;
                        step = instance.view.wt.wtScrollbars.vertical.visibleCount;
                        //scroll top before get html
                        instance.view.wt.wtScrollbars.vertical.scrollTo(0);
                        instance.render();
                        _callExec(0);
                    }
                    else {
                        html = $(CoreGrid.config.gridId + ' div.wtSpreader').html();
                        _intervalComplete(html);
                    }
                }
            }, 100);
            function _callExec(index) {
                if (index < data.length) _process(index);
                else {
                    _intervalComplete(html);
                };
            };
            function _process(index) {
                idx = index + step;
                html += _getHtml(idx);
                instance.view.wt.wtScrollbars.vertical.scrollTo(idx);
                instance.render();
                _callExec(idx);
            };

            function _getHtml(idx) {
                var ret = '';
                if (idx <= step) {
                    ret = $(CoreGrid.config.gridId + ' div.wtSpreader').html();
                }
                else ret = $(CoreGrid.config.gridId + ' table.htCore tbody').html();
                return ret;
            };
            function _intervalComplete(html) {
                html = html.replace('</tbody></table>', '');
                html += totalHtml;
                html += '</tbody></table>';

                window.setTimeout(function () {
                    try {
                        if (Handsontable.iGrid.__previewFull) {
                            var prev = Handsontable.iGrid.__previewFull;
                            if (prev._preview) prev._preview(html);
                            switch (type) {
                                case 1:
                                    if (prev._print) prev._print();
                                    break;
                                case 2:
                                    if (prev._export) prev._export('xls');
                                    break;
                            }
                        }
                    } catch (e) { }
                    if (isHorizontal) {
                        settings.colWidths = lastColWidths;
                        instance.updateSettings(settings);
                        var totalGrid = $(CoreGrid.config.gridId + '_footer_total');
                        if (totalGrid.length) {
                            var gridHtml = $(CoreGrid.config.gridId);
                            var top = gridHtml.position().top + gridHtml.height() - 24;
                            totalGrid.css('top', top + 'px');
                            var totalInstance = totalGrid.hst('getInstance');
                            var totalSettings = totalInstance.getSettings();
                            totalSettings.colWidths = lastColWidths;
                            totalInstance.updateSettings(totalSettings);
                        }
                    }
                    instance.view.wt.wtScrollbars.vertical.scrollTo(lastOffsetRow);
                    instance.render();
                    if (iMarkets.CoreSub.Overlay) iMarkets.CoreSub.Overlay.Hide();
                }, timewaitting);
            };
        }
    },
    //zoom
    current: 1.0,
    zoomGrid: function (type) {
        var thisObj = Handsontable.iGrid;
        if (type == 1) thisObj.current += 0.1;
        else if (type == -1) thisObj.current -= 0.1;
        else thisObj.current = 1.0;
        document.body.style.zoom = thisObj.current;
    },
    //action in header
    getHeaderAction: function (type, gridId) {
        var ret = '';
        switch (type) {
            case -1:
                ret = '<img src="../../Mods/Order/Css/img/recancel.png" title="Cancel" id="hstReCancelAll">';
                break;
            case 1:   //cancel only
                ret = '<img src="../../Mods/Order/Css/img/cancel.png" title="Cancel" id="hstCancelAll">';
                break;
        }
        //bind event document
        $(gridId).on({
            'mousedown': function (event) { event.stopPropagation(); },
            'mouseup': function (event) {
                var instance = $(gridId).hst('getInstance');
                var data = instance.getData();
                if (data.length) {
                    $.each(data, function (idx, it) {
                        it.ActionStatus = 1;
                    });
                    instance.getSettings().colHeaders[0] = Handsontable.iGrid.getHeaderAction(-1, gridId);
                    instance.render();
                }
            }
        }, 'img#hstCancelAll')
        .on({
            'mousedown': function (event) { event.stopPropagation(); },
            'mouseup': function (event) {
                var instance = $(gridId).hst('getInstance');
                var data = instance.getData();
                if (data.length) {
                    $.each(data, function (idx, it) {
                        it.ActionStatus = 0;
                    });
                    instance.getSettings().colHeaders[0] = Handsontable.iGrid.getHeaderAction(1, gridId);
                    instance.render();
                }
            }
        }, 'img#hstReCancelAll');
        return ret;
    },
    //edit change
    afterChange: function (changes, source, instance) {
        if (source !== 'loadData') {
            var item = changes[0];
            switch (item[1]) {
                case 'Edited':
                    break;
                default:
                    var edited = instance.getDataAtRowProp(item[0], 'Edited');
                    if (edited == null || typeof edited == 'undefined') {
                        edited = {};
                        edited[item[1]] = { o: item[2], n: item[3], c: true };
                    }
                    else {
                        edited = JSON.parse(edited);
                        if (typeof edited[item[1]] != 'undefined') {
                            if (edited[item[1]].o == item[3]) {
                                edited[item[1]].c = false;
                            }
                            else {
                                edited[item[1]].n = item[3];
                                edited[item[1]].c = true;
                            }
                        }
                        else {
                            edited[item[1]] = { o: item[2], n: item[3], c: true };
                        }
                    }
                    edited = JSON.stringify(edited);
                    instance.setDataAtRowProp(item[0], 'Edited', edited);
                    break;
            }
        }
    },
    beforeChange: function (changes, source) {
        if (source === 'edit') {
            console.log(arguments);
        }
    },
    //context
    icontextMenu: function (items, func, gridId, grid, customCreate) {
        function createCustomMenu(ctr) {
            if (customCreate && $.isFunction(customCreate)) {
                return customCreate(ctr);
            }
            else {
                var sel = grid.instance.getSelected();
                if (sel.length == 0) return {};
                var ridx = sel[0];
                var rowData = grid.instance.getDataAtRow(ridx);
                grid.rowselected = { index: ridx, data: rowData };

                var ret = {
                    callback: function (key, options) {
                        if (grid.rowselected == null) return {};
                        if (typeof func[key] != 'undefined') {
                            func[key](grid.rowselected);
                        }
                        else {
                            Handsontable.iGrid.contextMenu.callback.apply(this, arguments);
                        }
                        window.setTimeout(function () {
                            grid.instance.deselectCell();
                        }, 100);
                    },
                    items: items
                };
                ret.items = $.extend({}, ret.items, Handsontable.iGrid.contextMenu.items);
                return ret;
            }
        };
        // some asynchronous click handler
        $(gridId).on('mouseup', 'table.htCore tbody tr td', function (e) {
            if (e.which == 3) {
                var $this = $(this);
                $this.data('iCallback', createCustomMenu);
                var _offset = $this.offset(),
                    position = { x: _offset.left + 10, y: _offset.top + 10 };
                setTimeout(function () {
                    try { $this.contextMenu(position); } catch (e) { }
                }, 1);
            }
        });
        // setup context menu
        $.contextMenu({
            selector: gridId + ' table.htCore tbody tr td',
            trigger: 'none',
            build: function ($trigger, e) {
                return $trigger.data('iCallback')($trigger);
            }
        });
    }
};
//clear
Handsontable.Core.prototype.iClear = function () {
    this.loadData([]);
    this.iSetTotalCount([]);

    var totalGridID = this.getSettings().gridId + '_footer_total';
    if ($(totalGridID).length) {
        $(totalGridID).hst('getInstance').loadData([]);
    }
};
//remove group
Handsontable.Core.prototype.iRemoveGroup = function () {
    var gridData = $.extend([], [], this._data);
    $.each(gridData, function (index, item) {
        if (item.RowNumber) item.RowNumber = index + 1;
    });

    delete this.Grouping
    delete this.GroupData;
    delete this.GroupHeaderData;
    delete this.GroupColumnName;

    this.loadData(gridData);
};
//add group
Handsontable.Core.prototype.iAddGroup = function (colName, data) {
    var gridData = [];
    if (typeof data == 'undefined') gridData = $.extend([], [], this.getData());
    else gridData = $.extend([], [], data);

    if (gridData.length == 0 || typeof gridData[0][colName] == 'undefined') return;

    this.Grouping = true;
    this.GroupColumnName = colName;
    this.GroupHeaderData = {};
    //get group header data
    $.each(gridData, function (index, item) {
        if (typeof this.GroupHeaderData[item[colName]] == 'undefined') {
            instance.GroupHeaderData[item[colName]] = {
                name: colName,
                row: item,
                data: new Array()
            };
        }
        this.GroupHeaderData[item[colName]].data.push(item);
    });

    var settings = this.getSettings();
    var columns = settings.columns;
    var colSummary = Handsontable.iGrid.getColsOptionByType(columns, "1");

    var tempData = new Array(), rownumber = 0;
    $.each(this.GroupHeaderData, function (index, item) {
        var row = getGroupRow(settings, columns, item, colSummary);
        if (typeof row != 'undefined' && row != null) {
            item.row = row;
            tempData.push(row);
            for (var j = 0; j < item.data.length; j++) {
                rownumber++;
                item.data[j].RowNumber = rownumber;
                tempData.push(item.data[j]);
            }
        }
    });
    //clear sort index
    this.sortIndex.length = 0;
    this.sortIndex = [];

    this.GroupData = tempData;
    this.loadData(tempData);
    this.render();

    function getGroupRow(settings, columns, group, colSummary) {
        var row = $.extend({}, {}, group.data[0]);
        if (typeof row == 'undefined') return null;
        row = Handsontable.iGrid.getRowEmpty(row);

        $.each(group.data, function (index, item) {
            for (var i in item) {
                //kiem tra column co summary va type = sum
                if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'sum' && $.isNumeric(item[i])) {
                    if (row[i] == '') row[i] = 0;
                    row[i] += parseFloat(item[i]);
                }
                if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'count') {
                    if (row[i] == '') row[i] = 0;
                    row[i] += 1;
                }
            };
        });

        for (var i in columns) {
            if (typeof columns[i].hstSummaryType != 'undefined' && $.isNumeric(row[columns[i].data])) {
                var tmp = Handsontable.iGrid.format(row[columns[i].data], columns[i]);
                if (!isNaN(tmp)) row[columns[i].data] = tmp;
            }
            if (columns[i].type === 'checkbox') row[columns[i].data] = true;
        }
        //callback totalgrid function config        
        var callback = settings.groupCallback;
        if ($.isFunction(callback)) row = callback(row, group);

        //xac dinh dong group de remove                  
        row.IsGroup = true;
        row.GroupName = group.name;
        row.GroupValue = group.row[group.name];

        return row;
    };
};
//add total
Handsontable.Core.prototype.iAddTotal = function (options, columns, colwidth, serveroption) {
    var instance = $(options.gridId).hst('getInstance'),
        totalGridID = options.gridId + '_footer_total',
        _columns = [];
    $.each(instance.getSettings().columns, function (idx, it) {
        var _it = $.extend(true, {}, it);
        if (typeof _it.type != 'undefined') {
            delete _it.type;
            delete _it.renderer;
            delete _it.editor;
            if (typeof _it.readOnly != 'undefined') delete _it.readOnly;
        }
        _columns.push(_it);
    });

    if ($(totalGridID).length == 0) {
        var gridHtml = $(options.gridId);
        var top = gridHtml.position().top + gridHtml.height() - 24;
        var style = 'top:' + top + 'px;overflow: visible;width:' + (gridHtml.width() - 11) + 'px;';

        var gridTotalHtml = '<div id="' + totalGridID.replace(/#/gi, '') + '" style="' + style + '" class="grid-footer-total"></div>';
        gridHtml.after(gridTotalHtml);
        var totalOptions = {
            gridId: totalGridID.replace(/#/gi, ''),
            columns: _columns,
            rowHeaders: false,
            colHeaders: false,
            readOnly: true,
            colWidths: colwidth,
            fixedColumnsLeft: serveroption.fixedcolumn,
            columnSorting: false,
            minSpareRows: 1,
            maxSpareRows: 1,
            gridTotal: true,
            gridContentID: options.gridId,
            afterInit: function () {
                $(totalGridID).css({ 'position': 'absolute' });
                if (serveroption.rownumbers) $(totalGridID + ' table colgroup col.rowHeader').width(serveroption.rownumWidth);
            },
            afterRender: function () {
                setTotalGridStyle(_columns, totalGridID);
                //callback totalgrid function config
                var callback = gridHtml.hst('getInstance').getSettings().totalCallback;
                if ($.isFunction(callback)) callback();
            }
        };
        $(totalGridID).hst(totalOptions);
    }
    else {
        var totalInstance = $(totalGridID).hst('getInstance');
        var totalData = totalInstance.getData();
        if (totalData.length == 0 || Object.keys(totalData[0]).length === 0) {
            var data = instance.getData();
            if (data.length) {
                var totalSettings = totalInstance.getSettings();
                totalSettings.minSpareRows = 0;
                totalInstance.updateSettings(totalSettings);
            }
            setTotalGrid(_columns, data, totalGridID);
            setTotalGridStyle(_columns, totalGridID);
        }
    }
    //grid content no horizontal bar            
    if (!instance.view.wt.wtScrollbars.horizontal.visible && typeof $(totalGridID).attr('horizontal') == 'undefined') {
        var top = $(totalGridID).css('top');
        if (top.indexOf('px') != -1) {
            top = top.toString().replace('px', '');
            top = top * 1 + 14;
            $(totalGridID).css({ 'top': top }).attr({ 'horizontal': 'false' });
        }
    }

    function setTotalGrid(columns, data, totalGridID) {
        if (data.length > 0) {
            var row = getTotalGridRow(columns, data);
            $(totalGridID).hst('getInstance').loadData([row]);
        }
    };

    function setTotalGridStyle(columns, totalGridID) {
        var tdHtml = $(totalGridID + ' tr td');
        if (tdHtml.length > 0) {
            //set style columns in grid total
            for (i in columns) {
                var td = tdHtml.eq(i);
                //Format Css
                if (typeof columns[i].hstCss != 'undefined' && columns[i].hstCss != '') {
                    var style = Handsontable.iGrid.iCss2Style(columns[i].hstCss);
                    $(td).css(style);
                }
                //Format Align
                if (typeof columns[i].hstAlign != 'undefined' && columns[i].hstAlign != '') {
                    $(td).removeClass('left center right').addClass(columns[i].hstAlign);
                }
            }
        }
    };

    function getTotalGridRow(columns, data) {
        var row = $.extend({}, {}, data[0]);
        row = Handsontable.iGrid.getRowEmpty(row);
        var colSummary = Handsontable.iGrid.getColsOptionByType(columns, "1");
        $.each(data, function (index, item) {
            for (i in item) {
                //kiem tra column co summary va type = sum                
                if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'sum' && $.isNumeric(item[i])) {
                    if (row[i] == '') row[i] = 0;
                    row[i] += parseFloat(item[i]);
                }
                if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'count') {
                    if (row[i] == '') row[i] = 0;
                    row[i] += 1;
                }
            };
        });
        for (i in columns) {
            if (typeof columns[i].hstSummaryType != 'undefined') {
                row[columns[i].data] = Handsontable.iGrid.format(row[columns[i].data], columns[i]);
            }
        }
        return row;
    };
};
//remove total
Handsontable.Core.prototype.iRemoveTotal = function (options) {
    console.log('remove total', options);
}
//set total row count in header
Handsontable.Core.prototype.iSetTotalCount = function (data) {
    var instance = this;
    data = data || (instance._data || instance.getData());
    var totalRow = '-';
    if (data && data.length > 0) {
        if (instance.Grouping) {
            var cr = 0;
            $.each(data, function (idx, it) {
                if (typeof it.IsGroup == 'undefined' || it.IsGroup == false) cr++;
            });
            totalRow = cr;
        }
        else totalRow = data.length;
    }
    var settings = instance.getSettings();
    if (settings.rowHeaders) {
        $(settings.gridId + ' .htCore thead th div:eq(0)').html(totalRow).addClass('rownumber');
    }
    else {
        $(settings.gridId + ' .htCore thead th span.colHeader:eq(0)').html(totalRow);

        var colHeaders = settings.colHeaders;
        if (!$.isFunction(colHeaders)) {
            if (colHeaders && !$.isFunction(colHeaders)) { colHeaders[0] = totalRow; }
        }
    }
};
//hide column by name, index
Handsontable.Core.prototype.iHideColumn = function (col) {
    if (col) {
        var settings = this.getSettings();
        var index = -1;
        if (typeof col === 'number') {
            index = col;
        }
        else if (typeof col === 'string') {
            $.each(settings.columns, function (key, item) {
                if (item.data == col) {
                    index = key;
                    return false;
                }
            });
        }
        if (index != -1) {
            settings.columns = $.grep(settings.columns, function (n, i) { return i == index; }, true);
            settings.colHeaders = $.grep(settings.colHeaders, function (n, i) { return i == index; }, true);
            settings.colWidths = $.grep(settings.colWidths, function (n, i) { return i == index; }, true);
            this.updateSettings(settings);
        }
    }
};
//add one or more row
Handsontable.Core.prototype.iAddRow = function (row, data) {
    if (data || data.length) {
        var gridData = $.extend([], this.getData(), true);
        if (typeof row == 'string') row = parseInt(row);
        row += 1;
        if (data instanceof Array) {
            $.each(data, function (index, item) {
                gridData.splice(row + index, 0, item);
            });
        }
        else if (data instanceof Object) {
            gridData.splice(row, 0, data);
        }
        this.loadData(gridData);
    }
};
//remove one or more row
Handsontable.Core.prototype.iRemoveRow = function (row, data) {
    var gridData = $.extend([], this.getData(), true), count = 1;
    if (typeof row == 'string') row = parseInt(row);
    row += 1;
    if (data && data.length) {
        count = data.length;
        var countTemp = 0, childCount = 0;
        for (var i = row; i < gridData.length; i++) {
            var it = gridData[i];
            if (typeof it.Parent != 'undefined' && it.Parent != '') childCount++;
            else countTemp++;

            if (countTemp > count) break;
        }
        if (childCount) count += childCount;
    }

    gridData = $.grep(gridData, function (n, i) { return (row <= i && i < row + count); }, true);
    this.loadData(gridData);
};
//remove all row(s) in group(s)
Handsontable.Core.prototype.iRemoveAllRowInGroup = function (row, rowdata) {
    var gridData = $.extend([], this.getData(), true);
    if (typeof row == 'string') row = parseInt(row);
    row = row || 0;
    var crow = row, arrGroup = [];
    for (row; row < gridData.length; row++) {
        var item = gridData[row];
        if (item[rowdata.GroupName] == rowdata.GroupValue) {
            arrGroup.push(item);
        }
    }
    crow += 1;
    gridData = $.grep(gridData, function (n, i) { return (crow <= i && i < crow + arrGroup.length); }, true);
    this.loadData(gridData);
};
//get row data
Handsontable.Core.prototype.iGetRowData = function (colName, val, data) {
    var row = null;
    if (arguments.length > 2) {
        var data = data || this.getData();
        data = $.extend([], data, true);

        $.each(data, function (idx, it) {
            if (it[colName] == val) {
                row = {
                    index: idx,
                    data: it
                };
                return false;
            }
        });
    }
    return row;
};
//config column with by: header, data, default
Handsontable.Core.prototype.iConfigColumnWidth = function (data, options) {
    var settings = this.getSettings(), obj = {};
    var thead = $(options.gridId + ' .htCore thead tr:eq(0)'),
        tbody = $(options.gridId + ' .htCore tbody');

    for (c in options.columns) {
        var colOptions = options.columns[c];
        if (colOptions.hstAutoColumnResizeMode == '3') {
            var colName = colOptions.data;
            var colWidth = options.colWidths[c];
            var maxWidth = 0, datWidth = 0;
            for (r in data) {
                d = data[r][colName];
                d = Handsontable.iGrid.format(d, colOptions);
                if (typeof datWidth != 'undefined') datWidth = d.toString().length * 8;
                if (datWidth > maxWidth) maxWidth = datWidth;
            }
            if (maxWidth != 0 && maxWidth < colWidth) {
                if (options.colHeaders[c].length * 7 > maxWidth) maxWidth = options.colHeaders[c].length * 7;
                options.colWidths[c] = maxWidth;
            }
        }
        //options.colWidths[c] = getMaxsize(c, colOptions);
    }

    function getMaxsize(col, colOption) {
        var ret = 0;
        switch (colOption.hstAutoColumnResizeMode) {
            case '1':
                ret = getBodysize(col, colOption);
                break;
            case '2':
                ret = getHeadersize(col);
                break;
            case '3':
                var sizeHead = getHeadersize(col);
                var sizeBody = getBodysize(col, colOption);
                ret = Math.max(sizeBody, sizeHead);
                break;
            default:
                ret = options.colWidths[col];
                break;
        }
        return ret;
    };

    function getHeadersize(col) {
        return thead.find('div:eq(' + col + ') span').width() + 6;
    };

    function getBodysize(col, colOption) {
        var ret = 0;
        for (r in data) {
            var d = data[r][colOption.data];
            d = Handsontable.iGrid.format(d, colOption);
            var hstCss = colOption.hstCss;
            if (hstCss) {
                var style = Handsontable.iGrid.iCss2Style(hstCss);
                ret = d.toString().widthstyle(style);
            }
        }
        return ret;
    };

    //hidden
    $.each(options.columns, function (idx, it) {
        if (typeof it.hstAlwayShow == 'undefined' && typeof it.hstColumnHideMode != 'undefined') {
            switch (parseInt(it.hstColumnHideMode)) {
                case 1: //hide column null or empty
                    var str = '';
                    $.each(data, function (_index, _item) {
                        if (_item[it.data] != '') {
                            str = _item[it.data];
                            return false;
                        }
                    });
                    if (!str.length) obj[it.data] = { name: it.data, isHidden: true };
                    break;
                case 2: //string
                    if (data && data.length) {
                        var isSame = true, dataCompare = data[0][it.data];
                        if (data[0].IsGroup) dataCompare = data[1][it.data];
                        $.each(data, function (_index, _item) {
                            if (dataCompare != _item[it.data]) {
                                isSame = false;
                                return false;
                            }
                        });
                        if (isSame) obj[it.data] = { name: it.data, isHidden: true };
                    }
                    break;
                case 3: //decimal
                    if (data && data.length) {
                        var isSame = true, dataCompare = data[0][it.data];
                        if (data[0].IsGroup) dataCompare = data[1][it.data];
                        $.each(data, function (_index, _item) {
                            try {
                                if (parseFloat(dataCompare) != parseFloat(_item[it.data])) {
                                    isSame = false;
                                    return false;
                                }
                            } catch (e) { }
                        });
                        if (isSame) obj[it.data] = { name: it.data, isHidden: true };
                    }
                    break;
                case 4: //zero
                    if (data && data.length) {
                        var isSame = true, dataCompare = data[0][it.data];
                        if (data[0].IsGroup) dataCompare = data[1][it.data];
                        $.each(data, function (_index, _item) {
                            try {
                                if (parseFloat(dataCompare) != 0) {
                                    isSame = false;
                                    return false;
                                }
                            } catch (e) { }
                        });
                        if (isSame) obj[it.data] = { name: it.data, isHidden: true };
                    }
                    break;
                case 5: // all '' or all same and == ColumnHideModeValue
                    var isSame = true,
                        isEmpty = true;
                    if (data && data.length) {
                        var firstVal = data[0][it.data];
                        if (data[0].IsGroup) firstVal = data[1][it.data];
                        $.each(data, function (_index, _item) {
                            var currentVal = _item[it.data],
                                colHideModeValue = it.hstColumnHideModeValue;
                            if (currentVal != '') isEmpty = false;
                            if ((firstVal != currentVal) || (firstVal != colHideModeValue) || (currentVal != colHideModeValue)) isSame = false;
                        });
                    }
                    if (isSame || isEmpty) obj[it.data] = { name: it.data, isHidden: true };
                    break;
            };
        }
    });
    var arrIdx = [];
    $.each(options.columns, function (idx, it) {
        if (typeof obj[it.data] != 'undefined' && obj[it.data].isHidden) {
            arrIdx.push(idx);
        }
    });
    //merg array item for
    for (var i = arrIdx.length; i >= 0; i--) {
        var idx = arrIdx[i];
        options.columns = $.grep(options.columns, function (n, i) { return i == idx; }, true);
        options.colHeaders = $.grep(options.colHeaders, function (n, i) { return i == idx; }, true);
        options.colWidths = $.grep(options.colWidths, function (n, i) { return i == idx; }, true);
    }
    if (arrIdx.length > 0) {
        settings.columns = options.columns;
        settings.colHeaders = options.colHeaders;
        settings.colWidths = options.colWidths;
        this.updateSettings(settings);

        var totalInstance = $(options.gridId + '_footer_total').hst('getInstance');
        if (totalInstance) {
            var totalSetting = totalInstance.getSettings();
            var _columns = [];
            $.each(options.columns, function (idx, it) {
                var _it = $.extend(true, {}, it);
                if (typeof _it.type != 'undefined') {
                    delete _it.type;
                    delete _it.renderer;
                    delete _it.editor;
                }
                _columns.push(_it);
            });
            totalSetting.columns = _columns;
            totalSetting.colWidths = options.colWidths;
            totalInstance.updateSettings(totalSetting);
        }
    }
};
//get row(s) in group
Handsontable.Core.prototype.iGetAllRowInGroup = function (row, groupName) {
    row = row || 0;
    var ret = [],
        data = this.getData();
    for (row; row < data.length; row++) {
        var item = data[row];
        if (item.GroupName === groupName) {
            ret.push(item);
        }
    }
    return ret;
};
//check/uncheck all row in group
Handsontable.Core.prototype.iCheckAllRowInGroup = function (row, col, val, groupName, groupValue) {
    row = row || 0;
    var data = this.getData(),
        isStart = false;
    for (row; row < data.length; row++) {
        var item = data[row];
        if (item[groupName] == groupValue) {
            isStart = true;
            item[col] = val;
        }
        else if (isStart) {  //end group
            break;
        }
    }
};
//sort: click to sort, right click to group and sort
Handsontable.Core.prototype.iSort = function (e) {
    var settings = this.getSettings();
    var columns = settings.columns;
    if (typeof e == 'string') {
        var col = 0;
        $.each(columns, function (idx, it) {
            if (it.data == e) {
                col = idx;
                return false;
            }
        });
        if (col == 0) return;
        this.iSortType = columns[col].hstsorttype;
        var data = $.extend([], [], this.getData()),
            primer = Handsontable.iGrid.getPrimer(this.iSortType),
            arrSort = [{
                name: e,
                reverse: false,
                primer: primer
            }];
        data = data.sort(Handsontable.iGrid.__sort(arrSort));
        this.iAddGroup(e, data);
    }
    else if (typeof e == 'object') {
        var target = $(e.target);
        if (target.is('.columnSorting')) {
            var col = target.closest('th').index();
            if (settings.rowHeaders) col--;
            if (this.iSortColumnIndex && this.iSortColumnIndex === col) {
                this.iSortColumnOrder = !this.iSortColumnOrder;
            }
            else {
                this.iSortColumnIndex = col;
                this.iSortColumnOrder = true;
                this.iSortColumnName = columns[col].data;
            }
            this.iSortType = columns[col].hstsorttype;
            var primer = Handsontable.iGrid.getPrimer(this.iSortType),
                data = $.extend([], [], this.getData()),
                arrSort = [];
            if (typeof this.Grouping != 'undefined' && this.Grouping == true) {
                arrSort.push({
                    name: this.GroupColumnName,
                    reverse: false,
                    primer: undefined
                });
                data = removeRowGroup(this.GroupData);
            }

            arrSort.push({
                name: this.iSortColumnName,
                reverse: this.iSortColumnOrder,
                primer: primer
            });
            data = data.sort(Handsontable.iGrid.__sort(arrSort));

            if (typeof this.Grouping != 'undefined' && this.Grouping == true) {
                this.iAddGroup(this.GroupColumnName, data);
            }
            else {
                $.each(data, function (idx, it) {
                    if (typeof it.RowNumber != 'undefined') it.RowNumber = idx + 1;
                });
                this.loadData(data);
                this.render();
            }
        }
    }
    function removeRowGroup(data) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            if (typeof data[i].IsGroup != 'undefined') {
                arr.push(i);
            }
        }
        for (var i = arr.length - 1; i >= 0; i--) {
            data.splice(arr[i], 1);
        }
        return data;
    };
};
//load grid group and sort default or by colname, index
Handsontable.Core.prototype.iSortGroup = function (col, data) {
    var settings = this.getSettings();
    var columns = settings.columns;
    var index = 0;
    if (typeof col === 'number') {
        index = col;
        col = columns[col].data;
    }
    else if (typeof col === 'string') {
        $.each(columns, function (idx, it) {
            if (it.data == col) {
                index = idx;
                return false;
            }
        });
    }
    if (index == 0) return;

    data = data || this.getData();
    this.iSortGroupType = columns[index].hstsorttype;

    var primer = Handsontable.iGrid.getPrimer(this.iSortGroupType);
    var arrSort = [{ name: col, reverse: false, primer: primer}];
    var arrDef = ['Code', 'SecuritiesCode'];
    $.each(columns, function (idx, it) {
        if ($.inArray(it.data, arrDef) != -1) {
            arrSort.push({
                name: it.data,
                reverse: false,
                primer: primer
            });
            return false;
        }
    });
    data = $.extend([], [], data || this.getData());
    data = data.sort(Handsontable.iGrid.__sort(arrSort));
    Handsontable.iGrid.iAddGroup(col, data);
}
//reload grid
Handsontable.Core.prototype.iReload = function (options) {
    if ($.isFunction(FilterData)) {
        if (options) {
            FilterData(options);
        }
        else if (parent && typeof parent._filterData != 'undefined') {
            FilterData(parent._filterData);
        }
        else {
            location.reload(true);
        }
    }
    else {
        location.reload(true);
    }
};
//search
Handsontable.Core.prototype.iSearch = function (action) {
    if (action instanceof Object) {
        if (typeof this.Searching == 'undefined') {
            this.Searching = true;
            this.SearchData = $.extend([], [], this.getData());
        }
        this.__options = $.extend({ col: [], colidx: [] }, action, true);
    }
    else if (typeof action === 'string') {
        action = '__' + action;
        if (typeof this[action] !== 'undefined') {
            var args = [];
            if (arguments.length > 1) {
                for (i = 1, ilen = arguments.length; i < ilen; i++) {
                    args.push(arguments[i]);
                }
            }
            return this[action].apply(this, args);
        }
        else {
            throw new Error('Handsontable Search do not provide action: ' + action);
        }
    }
    else {
        throw new Error('Handsontable Search do not provide action: ' + action);
    }
    this.__text = null;
    this.__matched = [];
    this.__selected = null;

    this.__clear = function () {
        this.__text = null;
        this.__matched = [];
        this.__selected = null;
    };

    this.__search = function (text) {
        var _this = this;
        _this.__clear();

        if (text != null && typeof text != 'undefined' && text != '') {
            var t = text.toString().toLowerCase();
            if (_this.__text != null && t.indexOf(_this.__text) == -1) {
                _this.loadData(_this.SearchData);
                _this.render();
                if (_this.__text == t) return;
            }
            _this.__text = t;
            var value = t,
                columns = _this.getSettings().columns,
                data = $.extend([], [], _this.SearchData);

            if (_this.__options.col.length == 0 || data.length == 0) return;

            _this.__getName(columns);
            for (var i = 0; i < data.length; i++) {
                _this.__match(i, data[i], value);
            }

            if (_this.__matched.length > 0) {
                _this.__selected = {
                    i: 0,
                    r: _this.__matched[0].r,
                    c: _this.__matched[0].c
                }
                switch (_this.__options.mode) {
                    case '0': //scroll to first row matched
                        var row = _this.__matched[0];
                        _this.__select(row.r, row.c);
                        break;
                    case '1': //show row matched
                        var d = [];
                        for (var i = 0; i < _this.__matched.length; i++) {
                            d.push(_this.__matched[i].i);
                        }
                        _this.loadData(d);
                        _this.render();
                        break;
                    case '2': //show row not in matched

                        break;
                    default:
                        var row = _this.__matched[0];
                        _this.__select(row.r, row.c);
                        break;
                }
            }
            return _this.__matched;
        }
        else {

        }
    };

    this.__match = function (idx, row, value) {
        var _this = this;
        for (var i = 0; i < _this.__options.col.length; i++) {
            var rv = row[_this.__options.col[i]];
            if (typeof rv != 'undefined') {
                rv = rv.toString().toLowerCase();
                if ((value.indexOf("@") == 0 && rv.indexOf(value.substr(1, value.length)) == 0)
                || (value.indexOf("%") == 0 && rv.indexOf(value.substr(1, value.length)) != -1)
                || (rv.indexOf(value) != -1)) {
                    _this.__matched.push({ r: idx, c: _this.__options.colidx[i], i: row });
                }
            }
        }
    };

    this.__getName = function (columns) {
        var _this = this;
        for (var i = 0; i < _this.__options.col.length; i++) {
            for (var j = 0; j < columns.length; j++) {
                if (columns[j].data == _this.__options.col[i]) {
                    _this.__options.colidx.push(j);
                    break;
                }
            }
        };
    };

    this.__next = function () {
        if (this.__selected != null) {
            var next = this.__matched[this.__selected.i++];
            if (typeof next != 'undefined') {
                this.__select(next.r, next.c);
            }
        }
    };

    this.__prev = function () {
        if (this.__selected != null) {
            var prev = this.__matched[this.__selected.i--];
            if (typeof prev != 'undefined') {
                this.__select(prev.r, prev.c);
            }
        }
    };

    this.__select = function (row, col) {
        this.selectCell(row, col);
        this.view.wt.wtScrollbars.vertical.scrollTo(row);
        this.render();
    };

    this.destroy = function () {
        var data = $.extend([], [], this.SearchData);
        delete this.Searching;
        delete this.SearchData;

        this.loadData(data);
        this.render();
    };
};
//get data with index
Handsontable.Core.prototype.iGetData = function (action) {
    var data = $.extend([], this.getData(), true);
    $.each(data, function (idx, it) {
        it.index = idx;
    });
    return data;
};
//set data with index
Handsontable.Core.prototype.iSetData = function (data) {
    data = data || [];
    if (data.length) {
        var gridData = this.getData();
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            $.extend(true, gridData[row.index], row);
        }
        this.render();
    }
};
//reload row data
Handsontable.Core.prototype.iReloadRow = function (row, data) {
    if (typeof row != 'undefined' && data) {
        var rowData = this.getData()[row];
        if (typeof rowData != 'undefined' && Object.keys(rowData).length !== 0) {
            $.extend(true, rowData, data);
            this.render();
        }
    }
};
//set cell data
Handsontable.Core.prototype.iSetCell = function (rowKey, keyValue, colName, colValue) {
    var data = this.getData();
    $.each(data, function (idx, it) {
        if (it[rowKey] == keyValue) {
            it[colName] = colValue;
            return false;
        }
    });
};
//load child group
Handsontable.Core.prototype.iLoadGroupChild = function (row, callback) {
    var groupValue = this.getDataAtRowProp(row, 'GroupValue');
    if (typeof groupValue != 'undefined' && this.Grouping && this.GroupHeaderData) {
        var data = this.GroupHeaderData[groupValue].data;
        if (data && data.length > 0) {
            this.iAddRow(row, data);
        }
        if (callback) callback();
    }
};
//remove child group
Handsontable.Core.prototype.iRemoveGroupChild = function (row, callback) {
    var groupValue = this.getDataAtRowProp(row, 'GroupValue');
    if (typeof groupValue != 'undefined' && this.Grouping && this.GroupHeaderData) {
        var data = this.GroupHeaderData[groupValue].data;
        if (data && data.length > 0) {
            this.iRemoveRow(row, data);
        }
        if (callback) callback();
    }
};
//collapse group: show/hide child
Handsontable.Core.prototype.iCollapseAllGroup = function (colAction) {
    var _this = this;
    var arr = [], gridData = [];
    if (_this.iCollapseStatus == '0') {
        gridData = _this.GroupHeaderData;
        $.each(gridData, function (idx, it) {
            it.row[colAction] = '+';
            arr.push(it.row);
        });
    }
    else if (_this.iCollapseStatus == '1') {
        arr = _this.GroupData;
        $.each(arr, function (idx, it) {
            if (it.IsGroup == true) it[colAction] = '-';
        });
    }
    if (arr.length > 0) {
        _this.loadData(arr);
    }
};
//collapse all group in grid
Handsontable.Core.prototype.iCollapse = function (col, colMap) {
    var _this = this;
    if (typeof _this.Grouping != 'undefined' && _this.Grouping == true) {
        var tmp = '<img src="../order/css/img/{0}" title="" id="imgActionAll" class="actionAll" loaded="0" />',
            img = 'plus.png',
            gridTmp = '{0} thead th div.relative:eq({1})';
        if (typeof _this.iCollapseStatus == 'undefined') _this.iCollapseStatus = '1';
        if (_this.iCollapseStatus == '1') img = 'minus.png';
        img = $.Format(tmp, img);

        var $thAction = $($.Format(gridTmp, _this.getSettings().gridId, col));
        $thAction.addClass('action');
        $thAction.find('span.colHeader').html(img);

        $('#imgActionAll').off('click').on('click', function () {
            if (iMarkets.CoreSub.Overlay) iMarkets.CoreSub.Overlay.Show();
            window.setTimeout(function () {
                if (_this.iCollapseStatus == '0') {
                    _this.iCollapseStatus = '1';
                }
                else {
                    _this.iCollapseStatus = '0';
                }
                _this.iCollapseAllGroup(colMap);
                if (iMarkets.CoreSub.Overlay) iMarkets.CoreSub.Overlay.Hide();
            }, 100);
        });
    }
};
//custom cell checkbox, delete,...
Handsontable.Core.prototype.iCustomAction = function (data) {
    var _this = this;
    if (typeof _this.iCheckboxs == 'undefined') _this.iCheckboxs = [];
    var settings = _this.getSettings();
    //checkbox
    if (!_this.iCheckboxs.length) {
        var arrCheckbox = [];
        $.each(settings.columns, function (idx, it) {
            if (it.type == 'checkbox') {
                //clear readonly for checkbox
                delete it.readOnly;

                arrCheckbox.push([idx, it.data]);
            }
        });
        _this.iCheckboxs = arrCheckbox;
    }
    _this.iCheckbox(data);
    //cells
    _this.iCells();
};
//checkbox
Handsontable.Core.prototype.iCheckbox = function (data) {
    var _this = this;
    try {
        if (_this.iCheckboxs.length) {
            var settings = _this.getSettings();
            var isChecked = {},
                arrCheckbox = _this.iCheckboxs;
            for (var i = 0; i < arrCheckbox.length; i++) {
                isChecked[arrCheckbox[i][0]] = true;
                //column checkbox not exist data                
                if (typeof data[0][arrCheckbox[i][1]] == 'undefined') {
                    $.each(data, function (idx, it) {
                        it[arrCheckbox[i][1]] = isChecked[arrCheckbox[i][0]];
                    });
                }
                $.each(data, function (idx, it) {
                    it[arrCheckbox[i][1]] = isChecked[arrCheckbox[i][0]];
                });
                if (!$.isFunction(settings.colHeaders)) {
                    $(settings.gridId).off("mousedown mouseup", 'input.' + arrCheckbox[i][1] + '-checker')
                        .on({
                            mousedown: function (event) {
                                event.stopPropagation();
                            },
                            mouseup: function (event) {
                                var ctr = $(this);
                                var colname = ctr.attr('colname'),
                                    col = ctr.attr('col');
                                isChecked[col] = !ctr.is(':checked');
                                var localdata = _this.getData();
                                $.each(localdata, function (idx, it) {
                                    it[colname] = isChecked[col];
                                });
                                _this.render();
                            }
                        }, 'input.' + arrCheckbox[i][1] + '-checker');
                }
            }
            if (!$.isFunction(settings.colHeaders)) {
                var colHeaders = $.extend([], settings.colHeaders, true);
                settings.colHeaders = function (col) {
                    if (settings.columns[col].hstsorttype == 'checkbox') {
                        return $.string.Format("<input type='checkbox' class='{0}-checker' {1} colname='{0}' col='{2}'>", settings.columns[col].data, (isChecked[col] ? 'checked="checked"' : ''), col);
                    }
                    else {
                        return colHeaders[col];
                    }
                };
            }
        }
    } catch (e) { console.log('::hstCheckbox', e); }
};
//custom cell format
Handsontable.Core.prototype.iCells = function () {
    var _this = this;
    var settings = _this.getSettings();
    var _cells = settings.cells;
    settings.cells = function (row, col, prop) {
        if (_this.iCheckboxs.length) {
            var isExist = false;
            for (var i = 0; i < _this.iCheckboxs.length; i++) {
                if (_this.iCheckboxs[i][1] == prop) {
                    isExist = true;
                    break;
                }
            }
            if (isExist) {
                this.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                    if (String(value) == 'true') value = true;
                    else value = false;
                    var cs = 'center';
                    var rowdata = instance.getDataAtRow(row);
                    if (typeof rowdata.IsGroup != 'undefined' && rowdata.IsGroup) {
                        cs += ' GridGroupHeader';
                        _this.iCheckAllRowInGroup(row, prop, value, rowdata.GroupName, rowdata.GroupValue);
                    }
                    $(td).addClass(cs);
                    Handsontable.CheckboxCell.renderer.apply(this, arguments);
                }
            }
            else {
                _cells.apply(this, arguments);
            }
        }
        else {
            _cells.apply(this, arguments);
        }
    };
    _this.updateSettings(settings);
};
//=====================================================================================================
function CFormatter() {
    //Format Function --------------------------------------------------
    this.culture = FWS_SERVER_CONFIG.Culture || 'en-US';
    this.formatHTMLEscape = function () { };
    this.formatInt = function (value, culture) {
        if (typeof value == 'undefined' || value == '' || !$.isNumeric(value)) return '';
        var val = parseInt(value);
        var digit = digit || 0;
        culture = culture || this.culture;
        if (val != "")
            val = $.format(val, "n" + digit, culture);
        return val;
    };
    this.formatString = function () { };
    this.formatDate = function (value, pattern) {
        if (typeof value == 'undefined' || value == '') return '';
        var val = value;
        pattern = pattern || 'MM/dd/yyyy';
        //pattern = pattern || 'dd/MM/yyyy';
        if (val != "")
            val = $.format(new Date(value), pattern);
        return val;
    };
    this.formatTime = function (value, pattern) {
        if (typeof value == 'undefined' || value == '') return '';
        var val = value;
        pattern = pattern || 'hh/MM/ss';
        if (val != "")
            val = $.format(new Date(value), pattern); ;
        return val;
    };
    this.formatDateTime = function (value, pattern) {
        if (typeof value == 'undefined' || value == '') return '';
        var val = value;
        pattern = pattern || 'MM/dd/yyyy hh/MM';
        if (val != "")
            val = $.format(new Date(value), pattern);
        return val;
    };
    this.formatDecimalEx = function (value, digit, culture) {
        if (typeof value == 'undefined' || value == '' || !$.isNumeric(value)) return '';
        var val = parseFloat(value);
        digit = digit || 2;
        culture = culture || this.culture;
        if (val != "") {
            val = $.format(val, "n" + digit, culture);
        }
        return val;
    };
    this.formatNumber = function (value, digit, scale, culture) {
        if (typeof value == 'undefined' || value == '') return '';
        digit = digit || 2;
        scale = scale || 1;
        culture = culture || this.culture;

        var val = this.parseFloat(value, culture);
        if (typeof val == 'number') {
            val = val * scale;
            var d = val.toString().split('.');
            if (d.length == 1) {
                digit = 0;
            }
            else if (d.length > 1 && d[1].length < digit) {
                digit = d[1].toString().length;
            }
            val = $.format(val, "n" + digit, culture);
        }
        return val;
    };
    this.parseFloat = function (val, culture) {
        var ret = val;
        if (val) {
            if (typeof val == 'number') {
                ret = val;
            }
            else if (typeof val == 'string') {
                switch (culture) {
                    case "vi-VN":
                        ret = val.replace(/\./g, '').replace(/\,/g, '.');
                        break;
                    default:
                        ret = val.replace(/,/g, '');
                        break;
                }
            }
            else {
                ret = val;
            }
        }
        return parseFloat(ret);
    };
};
function CHstFormater() {
    var self = this;
    this.exec = function (instance, td, row, col, prop, value, cellProperties) {
        Handsontable.TextCell.renderer.apply(this, arguments);

        var settings = instance.getSettings();
        var columns = settings.columns || {};

        //Format Data
        if (typeof columns[col].formatter != 'undefined') {
            $(td).html(self.format(value, columns[col]));
        }

        //Format Css
        if (typeof columns[col].hstCss != 'undefined' && columns[col].hstCss != '') {
            var hstCss = columns[col].hstCss;
            var style = new CHstFormater().iCss2Style(hstCss);
            $(td).css(style);
        }

        //Format Align
        if (typeof columns[col].hstAlign != 'undefined' && columns[col].hstAlign != '') {
            var hstAlign = columns[col].hstAlign;
            $(td).addClass(hstAlign);
        }
        if (col == settings.fixedColumnsLeft - 1) {
            $(td).addClass('fixCol');
        }

        //Extend style
        var extend = instance.getDataAtRowProp(row, 'Extend');
        if (typeof extend != 'undefined' && extend != '') {
            extend = eval('(' + extend + ')');
            if (typeof columns[col].hstStyleName != 'undefined') {
                for (n in extend) {
                    if (n == columns[col].hstStyleName) {
                        var css = extend[n];
                        css = '{"' + css.replace(/,/g, '","').replace(/_/g, '":"') + '"}';
                        $(td).css($.parseJSON(css));
                        break;
                    }
                }
            }
        }
    }

    //Style Function ----------------------------------------------------
    this.iCss2Style = function (iCss) {
        var str = iCss;
        str = str.replace(/_/gi, "':'").replace(/;/gi, "','");
        if (str.substring(str.length - 2, str.length) == ",'")
            str = str.substring(0, str.length - 2);
        else
            str += "'";
        str = "{'" + str + "}";
        str = eval('(' + str + ')');
        return str;
    }
    this.formatNull = function (value, colOption, type) {
        var ret = value;
        if (typeof colOption.hstDisplayCompareValue != 'undefined') {
            if (typeof type == 'undefined') type = 'number';
            if (type == 'number' && $.isNumeric(value)) {
                var digit = colOption.hstDisplayDecimal || '0';
                var temp = $.parseFloat(value, 'n0', "en-US"),
                    tempCompare = colOption.hstDisplayCompareValue;
                if (tempCompare != '' && temp == tempCompare) {
                    ret = colOption.hstDisplayCompareReplace;
                }
            }
            else {
                if (ret == colOption.hstDisplayCompareValue) {
                    ret = colOption.hstDisplayCompareReplace;
                }
            }
        }
        return ret;
    };
    this.format = function (value, colOption) {
        var ret = value;
        var formatter = colOption.formatter;
        if (typeof formatter != 'undefined') {
            switch (formatter) {
                case 'iMarkets.Grid.CustomFormatHTMLEscape':
                    break;
                case 'iMarkets.Grid.CustomFormatInt':
                case 'VnAccounting.Grid.CustomFormatInt':
                    ret = new CFormatter().formatInt(value);
                    break;
                case 'iMarkets.Grid.CustomFormatString':
                    break;
                case 'iMarkets.Grid.CustomFormatDate':
                case 'VnAccounting.Grid.CustomFormatDate':
                    ret = new CFormatter().formatDate(value, 'dd/MM/yyyy');
                    break;
                case 'VnAccounting.Grid.CustomFormatDecimal':
                case 'iMarkets.Grid.CustomFormatDecimalEx':
                    ret = new CFormatter().formatDecimalEx(value, colOption.hstDisplayDecimal);
                    break;
                default:
                    break;
            }
            var valueNull = this.formatNull(value, colOption);
            if (value != valueNull)
                ret = valueNull;
        }
        return ret;
    };
};
function CHstAdapter() {
    //options.gridOptions
    //options.gridColNames
    //options.gridColModels
    var self = this;
    this.getHstOptions = function (options) {
        //console.log('CHstAdapter [0]', options);
        var ret = {
            readOnly: true,
            columnSorting: true,

            manualColumnResize: true,
            startRows: 20,

            currentRowClassName: 'currentRow',
            currentColClassName: 'currentCol'
        };
        if (typeof options == 'undefined')
            return ret;

        if (options.gridOptions) {
            if (options.gridOptions.numberEmptyRow) {
                ret.minSpareRows = options.gridOptions.numberEmptyRow;
            }
            if (options.gridOptions.allowAddRow) {
                ret.autoWrapRow = true;
            }
            if (options.gridOptions.allowEdit) {
                ret.readOnly = false;
            }
        }

        var _gOpts = options.gridOptions;
        var _gColNames = options.gridColNames;
        var _gColModels = options.gridColModels;

        // Grid Options ----------------------------------------------------------                
        ret._isdynamic = _gOpts.isdynamic;
        ret.fixedColumnsLeft = _gOpts.fixedcolumn;
        ret.rowHeaders = _gOpts.rownumbers;

        ret.width = function () {
            return hstAvailableWidth || 400;
        };
        ret.height = function () {
            return hstAvailableHeight || 300;
        };
        ret.afterInit = function () {
            fnCalculateReSize();
            var headHtml = $(options.gridId + ' table colgroup')
            if (_gOpts.rownumbers)
                $('col.rowHeader', headHtml).width(_gOpts.rownumWidth);

            for (var i = 0; i < _colWidths.length; i++) {
                if (_colWidths[i] == 1 || _colWidths[i] == 3) {
                    $($('col', headHtml)[i + 1]).width(0);
                }
            }
        };
        ret.afterRender = function () {
            var headerHtml = $(options.gridId + ' th div.relative');
            for (var i = 0; i < _columns.length; i++) {
                var textalign = _columns[i].hstAlign || 'center';
                $(headerHtml[i]).removeClass('left center right').addClass(textalign);
            }
            if (_gOpts.footerSummary)
                loadFooterGridTotal(options);
            else {//clear footer grid
                if ($('div[id$=_footer_total]').length)
                    $('div[id$=_footer_total]').remove();
            }
        };

        //Columns ---------------------------------------------------------------
        var _columns = [];
        var _colHeaders = [];
        var _colWidths = [];
        for (i in _gColModels) {
            var item = _gColModels[i];
            var hidden = item.hidden || false;
            if (!hidden) {
                var w = (item.width || 50) + 2;
                var _col = this.getColOptions(item);
                _columns.push(_col);
                _colHeaders.push(_gColNames[i]);
                _colWidths.push(w);
            }
        }
        ret.columns = _columns;
        ret.colHeaders = _colHeaders;
        ret.colWidths = _colWidths;

        ret.cells = function (row, col, prop) {
            //dlt: Nếu ko phải là cột check, xử lý định dạng            
            if (_columns[col].type != 'checkbox') this.renderer = new CHstFormater().exec;
        };

        //custom function grid summary            
        function loadFooterGridTotal(options) {
            var gridTotalID = options.gridId + '_footer_total';
            var instance = $(options.gridId).handsontable('getInstance');
            var data = [];
            if (typeof instance != 'undefined')
                data = instance.getData();
            if (typeof data == 'undefined')
                data = [];

            if ($(gridTotalID).length == 0) {
                var gridHtml = $(options.gridId);
                var top = gridHtml.position().top + gridHtml.height() - 24;
                var style = 'top:' + top + 'px;overflow: visible;width:' + (gridHtml.width() - 11) + 'px;';

                var html = '<div id="' + gridTotalID.replace(/#/gi, '') + '" style="' + style + '" class="grid-footer-total"></div>';
                gridHtml.after(html);
                var gridTotalHtml = $(gridTotalID);

                var totalOptions = {
                    columns: _columns,
                    rowHeaders: _gOpts.rownumbers,
                    colHeaders: false,
                    colWidths: _colWidths,
                    fixedColumnsLeft: _gOpts.fixedcolumn,
                    columnSorting: false,
                    startRows: 1,
                    minSpareRows: 0,
                    gridTotal: true,
                    gridContentID: options.gridId,
                    afterInit: function () {
                        gridTotalHtml.css({ 'position': 'absolute' });
                        if (_gOpts.rownumbers)
                            $(gridTotalID + ' table colgroup col.rowHeader').width(_gOpts.rownumWidth);
                    },
                    afterRender: function () {
                        loadFooterGridStyle(gridTotalID);
                    }
                };
                $.each(totalOptions.columns, function (index, item) {
                    item.readOnly = true;
                });
                gridTotalHtml.hst(totalOptions);
            }
            else {
                loadFooterGridData(data, gridTotalID);
            }
            //grid content no horizontal bar            
            if (instance && !instance.view.wt.wtScrollbars.horizontal.visible && typeof $(gridTotalID).attr('horizontal') == 'undefined') {
                var gridTotalHtml = $(gridTotalID);
                var top = gridTotalHtml.css('top');
                if (top.toString().indexOf('px') != -1) {
                    top = top.toString().replace('px', '');
                    top = top * 1 - 14;
                    gridTotalHtml.css({ 'top': top }).attr({ 'horizontal': 'false' });
                }
            }
        };

        function loadFooterGridData(data, gridTotalID) {
            if (data.length > 0) {
                var row = getFooterGridData(data);
                $(gridTotalID).handsontable('getInstance').loadData([row]);
            }
        };

        function getFooterGridData(data) {
            var row = $.extend({}, {}, data[0]);
            row = getRowEmpty(row);
            function getRowEmpty(obj) {
                for (i in obj) obj[i] = "";
                return obj;
            };
            var colSummary = new CHstAdapter().getColsOptionByType("1", _columns);
            $.each(data, function (index, item) {
                for (i in item) {
                    //kiem tra column co summary va type = sum
                    if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'sum' && $.isNumeric(item[i])) {
                        if (row[i] == '') row[i] = 0;
                        row[i] += parseFloat(item[i]);
                    }
                    if (typeof colSummary[i] != 'undefined' && colSummary[i] == 'count') {
                        if (row[i] == '') row[i] = 0;
                        row[i] += 1;
                    }
                };
            });

            for (i in _columns) {
                if (typeof _columns[i].hstSummaryType != 'undefined') {
                    row[_columns[i].data] = new CHstFormater().format(row[_columns[i].data], _columns[i]);
                }
            }
            row["RowNumber"] = "";
            return row;
        };

        function loadFooterGridStyle(gridTotalID) {
            var tdHtml = $(gridTotalID + ' tr td');
            if (tdHtml.length > 0) {
                tdHtml.css('font-weight', 'bold');

                var $cellTotal = tdHtml.eq(0);
                if (_gOpts.rownumbers)
                    $(gridTotalID + ' tr th').html('Σ');
                else
                    $cellTotal.html('Σ');

                //set style columns in grid total
                for (i in _columns) {
                    var td = tdHtml.eq(i);
                    //Format Css
                    if (typeof _columns[i].hstCss != 'undefined' && _columns[i].hstCss != '') {
                        var style = new CHstFormater().iCss2Style(_columns[i].hstCss);
                        $(td).css(style);
                    }
                    //Format Align
                    if (typeof _columns[i].hstAlign != 'undefined' && _columns[i].hstAlign != '') {
                        $(td).addClass(_columns[i].hstAlign);
                    }
                }
            }
        };
        //custom function

        return ret;
    };

    this.getColOptions = function (item) {
        var ret = { data: item.name };

        if (typeof item.sformatter != 'undefined')
            ret.formatter = item.sformatter;

        if (typeof item.isdynamic != 'undefined')
            ret.hstIsDynamic = item.isdynamic;

        if (typeof item.ConditionStyleName != 'undefined')
            ret.hstStyleName = item.ConditionStyleName;

        if (typeof item.iCSS != 'undefined' && item.iCSS != '')
            ret.hstCss = item.iCSS;

        if (typeof item.align != 'undefined' && item.align != '')
            ret.hstAlign = item.align;

        if (typeof item.DisplayCompareValue != 'undefined')
            ret.hstDisplayCompareValue = item.DisplayCompareValue;

        if (typeof item.DisplayCompareReplace != 'undefined')
            ret.hstDisplayCompareReplace = item.DisplayCompareReplace;

        if (typeof item.DisplayDecimal != 'undefined' && item.DisplayDecimal != '')
            ret.hstDisplayDecimal = item.DisplayDecimal;

        if (typeof item.ColumnHideMode != 'undefined' && item.ColumnHideMode != '')
            ret.hstColumnHideMode = item.ColumnHideMode;

        if (typeof item.hidden != 'undefined' && item.hidden != '')
            ret.hstHidden = item.hidden;

        if (typeof item.sorttype != 'undefined' && item.sorttype != '')
            ret.hstsorttype = item.sorttype;

        if (typeof item.AutoColumnResizeMode != 'undefined' && item.AutoColumnResizeMode != '')
            ret.hstAutoColumnResizeMode = item.AutoColumnResizeMode;

        if (typeof item.editable != 'undefined' && item.editable == true) {
            ret.readOnly = false;
        }
        else {
            ret.readOnly = true;
        }
        if (typeof item.type != 'undefined' && item.type != '')
            ret.type = item.type;
        if (typeof item.summaryType != 'undefined' && item.summaryType != '')
            ret.hstSummaryType = item.summaryType;

        if (typeof item.AlwayShowColumn != 'undefined' && item.AlwayShowColumn == '1')
            ret.hstAlwayShow = item.AlwayShowColumn;
        ret.hstAlwayShow = 1;

        if (typeof item.classes != 'undefined' && item.classes.indexOf('iSEL') != -1)
            ret.hstiSEL = 'iSEL';

        return ret;
    };

    this.fixAutoColumnWidth = function (options) {
        if (typeof options != 'undefined' && typeof options.data != 'undefined' && typeof options.colWidths != 'undefined') {
            for (c in options.columns) {
                var colOptions = options.columns[c];
                if (colOptions.hstAutoColumnResizeMode == '3') {
                    var colName = colOptions.data;
                    var colWidth = options.colWidths[c];

                    var maxWidth = 0;
                    var datWidth = 0;
                    for (r in options.data) {
                        d = options.data[r][colName];
                        d = new CHstFormater().format(d, colOptions);
                        datWidth = d.toString().length * 8;

                        if (datWidth > maxWidth)
                            maxWidth = datWidth;
                    }
                    if (maxWidth != 0 && maxWidth < colWidth) {
                        if (options.colHeaders[c].length * 7 > maxWidth)
                            maxWidth = options.colHeaders[c].length * 7;
                        options.colWidths[c] = maxWidth;
                    }
                }
            }
            var colsHidden = self.getColsHidden(options.data, options.columns);
            $.each(colsHidden, function (index, item) {
                if (item.isHidden == true) {
                    self.hideColumnByData(item.name, options);
                }
            });
        }
        return options;
    };

    this.setDynanicColumn = function (options) {
        if (!options._isdynamic) return options;
        //console.log('::setDynanicColumn.begin', options);

        // [1] Xác định column dynamic
        var colDynamic = {};
        $.each(options.columns, function (idx, col) {
            if (col.hstIsDynamic) {
                colDynamic = col;
                colDynamic._idx = idx;
            }
        });
        //console.log('colDynamic', colDynamic);

        // [2] Duyệt qua tập Data
        var d0 = {};
        if (typeof options.data != 'undefined')
            d0 = options.data[0];

        // [3] Tự động tạo cấu trúc cột
        var idx = 0;
        var width = options.colWidths[colDynamic._idx];

        $.each(d0, function (key, item) {
            if (idx >= colDynamic._idx) {
                var _colNew = $.extend({}, colDynamic);
                _colNew._idx = idx;
                _colNew.data = key;

                if (idx == colDynamic._idx) {
                    options.colWidths[idx] = width;
                    options.colHeaders[idx] = key;
                    options.columns[idx] = _colNew;
                } else {
                    options.colWidths.push(width);
                    options.colHeaders.push(key);
                    options.columns.push(_colNew);
                }
            }
            idx++;
        });

        //console.log('::setDynanicColumn.end', options);
        return options;
    };

    this.getColsHidden = function (data, colOptions) {
        var obj = {};
        var colAlwayShow = this.getColsOptionByType('2', colOptions);
        $.each(data, function (index, item) {
            for (i in item) {
                //kiem tra column ko ton tai trong danh sach alwayshow va data is zero         
                if (typeof colAlwayShow[i] == 'undefined') {
                    if (typeof obj[i] == 'undefined')
                        obj[i] = { name: i, isHidden: true };

                    if (obj[i].name == i &&
                        item[i] != '' && item[i] != '...' && (parseInt(item[i]) != '0')) {
                        obj[i].isHidden = false;
                    }
                }
            };
        });
        return obj;
    };

    this.getColsOptionByType = function (type, colOptions) {
        var ret = {};
        $.each(colOptions, function (index, item) {
            switch (type) {
                case '1':
                    if (typeof item.hstSummaryType != 'undefined') {
                        ret[item.data] = item.hstSummaryType;
                    }
                    break;
                case '2':
                    if (typeof item.hstAlwayShow != 'undefined') {
                        ret[item.data] = item.hstAlwayShow;
                    }
                    break;
            }
        });
        return ret;
    };

    this.hideColumnByData = function (colName, options) {
        var index = -1;
        $.each(options.columns, function (key, item) {
            if (item.data == colName) {
                index = key;
                return false;
            }
        });
        if (index != -1) {
            options.columns.splice(index, 1);
            options.colHeaders.splice(index, 1);
            options.colWidths.splice(index, 1);
        }
    };

    this.hideColumn = function (colName, instance) {
        var settings = instance.getSettings();
        var index = -1;
        $.each(settings.columns, function (key, item) {
            if (item.data == colName) {
                index = key;
                return false;
            }
        });
        if (index != -1) {
            settings.columns.splice(index, 1);
            settings.colHeaders.splice(index, 1);
            settings.colWidths.splice(index, 1);
            instance.updateSettings(settings);
        }
    };

    this.addDataAtRow = function (row, data, instance) {
        if (data.length > 0) {
            var gridData = $.extend([], instance.getData());
            row += 1;
            $.each(data, function (index, item) {
                gridData.splice(row + index, 0, item);
            });
            instance.loadData(gridData);
        }
    };

    this.removeDataAtRow = function (row, data, instance) {
        if (data.length > 0) {
            var gridData = $.extend([], instance.getData());
            row += 1;
            gridData.splice(row, data.length);
            instance.loadData(gridData);
        }
    };
};
//------------------------------------------------------------------------------------------------------------
//  Handsontable Utility Function
//------------------------------------------------------------------------------------------------------------
//function CXml(pTagName, pPairValues) {
//    this.tagName = pTagName;
//    this.pairValues = pPairValues;
//
//    this.init = function () {
//
//    }
//    this.getXml = function (pExceptNull) {
//        var self = this;
//        var node = '<' + self.tagName + ' [ATTRIBUTE]/>';
//        var sAttribute = '';
//        try {
//            $.each(self.pairValues, function (attName, attValue) {
//                if (attValue != undefined) {
//                    attValue += '';
//                    var value = $.trim(attValue);
//                    value = $.HtmlEncode(attValue);
//                    if (value != null && value != 'null' && typeof value != 'undefined') {
//                        if (pExceptNull) {
//                            if (value && value.length)
//                                sAttribute += attName + '="' + value + '" ';
//                        }
//                        else {
//                            sAttribute += attName + '="' + value + '" ';
//                        }
//                    }
//                }
//            });
//        }
//        catch (e) {
//            console.log('::ERROR CXML.getXml', e);
//        }
//        node = node.replace('[ATTRIBUTE]', sAttribute);
//        return node;
//    }
//};

$.addScript = function (src, type) {
    var headOfPage = document.getElementsByTagName("head")[0];
    var obj = null;
    switch (type) {
        case 'script':
            obj = document.createElement('script');
            obj.type = 'text/javascript';
            obj.src = src;
            break;
        case 'link':
            obj = document.createElement('link');
            obj.type = 'text/css';
            obj.rel = 'stylesheet';
            obj.href = src;
            break;
        default:

            break;
    }
    if (obj != null)
        headOfPage.appendChild(obj);
};

$.callFrameFunction = function (frame, methodName, methodParam, count, limit, callback) {
    count = count || 0;
    limit = limit || 50;
    if (frame && methodName) {
        if (typeof frame == "string" && (frame.indexOf("#") == -1 && frame.indexOf(".") == -1)) {
            frame = "#" + frame;
        }
        var iframe = function (obj) {
            var iFrame = $(obj)[0];
            var iFrameWindow = iFrame.contentWindow ? iFrame.contentWindow : iFrame.contentDocument.defaultView;
            return iFrameWindow;
        };
        var fr = iframe(frame);
        if (fr && typeof fr != "undefined") {
            var method = "fr." + methodName;
            var fn = eval(method);
            if (fn && typeof fn == 'function') {
                var ret = fn(methodParam);
                if (typeof callback == 'function') {
                    callback();
                }
                return ret;
            }
            count++;
            if (count >= limit) {
                if ($.isFunction(callback)) {
                    callback();
                }
                return false;
            }
            window.setTimeout(function () {
                return $.callFrameFunction(frame, methodName, methodParam, count, limit, callback);
            }, 500);
        }
    }
};

var __previewFull = null;
function exportDataOnly(action) {
    var instance = $(Mods.CoreHst.Grid.gridContentID).handsontable('getInstance');
    if (instance) {
        var ret = '',
            data = instance.getData(),
            settings = instance.getSettings();

        var headers = $.extend([], settings.colHeaders, true);
        for (var i = 0; i < headers; i++) {
            headers[i] = (headers[i]);
        }
        ret = headers.join(',') + "\n";
        var allRow = [];
        $.each(data, function (idx, it) {
            var row = [];
            $.each(settings.columns, function (_idx, _it) {
                if (typeof it[_it.data] != 'undefined' && it[_it.data] != null) {
                    row.push('"' + it[_it.data].toString().replace('"', '""') + '"');
                }
            });
            if (row.length) allRow.push(row.join(','));
        });
        if (allRow.length) ret += allRow.join('\n');
        console.log(ret);
        __previewFull = window.open('PrintPreview');
        if (__previewFull) {
            window.setTimeout(function () {
                if (__previewFull._export) __previewFull._export('csv', ret, function () {
                    if (__previewFull) __previewFull.close();
                });
            }, 1000);
        }
    }
};
//========================================================================================
String.prototype.htmlEncode = function () {
    return this.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
};
String.prototype.htmlDecode = function () {
    return this.replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, '\'')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/\\u0026amp;/g, '&')
            .replace(/\\u0026quot;/g, '"')
            .replace(/\\u0026#39;/g, '\'')
            .replace(/\\u0026lt;/g, '<')
            .replace(/\\u0026gt;/g, '>');
};
String.prototype.replaceAttributeXML = function (tag, attr, value) {
    var ret = '';
    try {
        ret = this.replace(new RegExp('\'', 'g'), '\"');
        var pattern = new RegExp('(<' + tag + '\\s+.*?' + attr + '=").*?(".*)', 'gi');
        value = '$1' + value + '$2';
        ret = ret.replace(pattern, value);
    } catch (e) {
        console.log('replaceAttributeXML::' + e);
    }
    return ret;
};
String.prototype.widthsize = function (size) {
    size = size || '11px';
    var o = $('<span>' + this + '</span>').css({ 'white-space': 'nowrap', 'visibility': 'hidden', 'font-size': size }).appendTo($('body'));
    var w = o.width();
    o.remove();
    return w + 6;
};
String.prototype.widthstyle = function (style) {
    if (style) {
        var o = $('<span>' + this + '</span>').css({ 'white-space': 'nowrap', 'visibility': 'hidden' }).appendTo($('body'));
        o.css(style);
        var w = o.width();
        o.remove();
        return w + 6;
    }
    else return 0;
};
String.prototype.updateUrl = function (key, value) {
    var q = this;
    if (q.indexOf('&') == -1)
        q += "&";
    var re = new RegExp("[?|&]" + key + "=.*?&");
    if (!re.test(q))
        q += key + "=" + value;
    else
        q = q.replace(re, "&" + key + "=" + value + "&");
    return q;
};
//========================================================================================