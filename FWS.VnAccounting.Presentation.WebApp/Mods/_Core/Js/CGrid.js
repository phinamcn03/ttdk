//=================================================================================================
// Mod:     Grid
// Author:  KhanhNguyen
// Edit:    

//=================================================================================================

function CGrid() {
    this.Request = function (gridID, clientOption) {
        var thisObj = this;
        //console.log(clientOption);
        var params = clientOption.extraParams;

        //flag for getting data from getContextData
        if (params.contextData == '1') {
            var xml = $.string.Format("<InputValue LanguageID='{0}'/><RequestParams Function='GetResource' Type='{1}' PageIndex='{2}' RowsPerPage='{3}' />", 129, params.type, params.currPage, params.numberRowOfPage);
            var inputValue = FWS.System.Core.AttachMeta(xml, {});
            clientOption.extraParams['inputValue'] = inputValue;
        }

        FWS.System.IO.Ajax({
            url: clientOption.gridUrl,
            data: clientOption.extraParams,  // For empty input data use "{}",
            type: "POST",
            complete: function (retdata, stat) {
                if (stat == "success") {
                    var thegrid = jQuery(gridID)[0];
                    var bindData = $(retdata.responseText).text();
                    if (bindData.length > 1) {
                        //try {
                        var jsonForGrid;
                        try {
                            jsonForGrid = JSON.parse(bindData);
                        }
                        catch (e) {
                            var myJSON = bindData.CSV2JSON2();

                            var dataJsonForGrid = myJSON[1];

                            var totalObj = myJSON[0][1];
                            str = $.string.Format("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":{3}",
                                    totalObj.PageIndex, totalObj.TotalPages, totalObj.TotalRows, JSON.stringify(dataJsonForGrid));
                            jsonForGrid = eval('({' + str + '})');
                        }
                        thegrid.addJSONData(jsonForGrid);
                        thisObj.ApplyStyle(gridID, clientOption.colModel, jsonForGrid);
                        if (clientOption.complete) {
                            clientOption.complete(jsonForGrid);
                        }
                        //} catch (e) {
                        //                            console.log("ERROR::GRID::Request::", e);
                        //                        }
                    }
                    else {
                        //$(gridID).setGridParam({ datatype: FWS.Grid.Request(gridID, clientOption) });
                    }
                }
            }
        });
    };
    this.Init = function (gridID, serverOptions, clientOption) {
        var thisObj = this;
        //console.log(vtnt.ClientKey);

        serverOptions.shrinkToFit = false;
        serverOptions.emptyrecords = "No records to view";
        serverOptions.jsonReader = {
            root: "invdata",
            page: "currpage",
            total: "totalpages",
            records: "totalrecords",
            repeatitems: false,
            id: "ID"
        };
        if (serverOptions.GridType == "1") {
            serverOptions.treeGrid = true;
            serverOptions.ExpandColClick = true,
                serverOptions.treedatatype = "json";
            serverOptions.treeGridModel = 'adjacency';
            serverOptions.treeReader = {
                level_field: "level",
                parent_id_field: "parent_id", // then why does your table use "parent_id"?
                leaf_field: "isLeaf",
                expanded_field: "expanded"
            };
        }
        if (clientOption.extraParams) {
            clientOption.extraParams.numberRowOfPage = serverOptions.rowNum ? serverOptions.rowNum : 100;
        }
        $.extend(true, clientOption, serverOptions);
        //console.log(clientOption);
        var mustRun = false;
        if (clientOption.datatype == "VnAccounting.Grid.Request") {
            clientOption.datatype = function () {
                //mustRun = true;
                thisObj.Request(gridID, clientOption);
            };
        }
        if (clientOption.pager) {
            clientOption.onPaging = function (pgButton) {
                try {
                    if (pgButton.match("next"))
                        clientOption.extraParams.currPage++;
                    if (pgButton.match("prev"))
                        clientOption.extraParams.currPage--;
                    if (pgButton.match("last")) {
                        clientOption.extraParams.currPage = $("#sp_1_" + clientOption.pager).text();
                    }
                    if (pgButton.match("first"))
                        clientOption.extraParams.currPage = 1;
                    if (pgButton.match("user"))
                        clientOption.extraParams.currPage = $(".ui-pg-input").val();
                    if (pgButton.match("records"))
                        clientOption.extraParams.currPage++;
                    //thisObj.Request(gridID, clientOption);
                    mustRun = true;
                } catch (e) {
                    console.log(e);
                }
            }
        }

        //if (mustRun) {
        //    thisObj.Request(gridID, clientOption);
        //}

        $(gridID).jqGrid(clientOption).navGrid("#" + clientOption.pager, { edit: false, add: false, del: false, search: false, refresh: true });
        //events
        if (clientOption.pager) {
            $("#refresh_" + gridID.replace("#", "")).click(function () {
                try {
                    $(gridID).clearGridData();
                    thisObj.Request(gridID, clientOption);
                } catch (e) {
                    console.log("Footer::Refresh", e);
                }
            });
        }
        this.FixAlignHeader(gridID, clientOption.colModel);
        /* Window Resize */
        thisObj.ResizeGrid(gridID, clientOption);
        $(".frozen-div").css("height", "22px");
        $(".frozen-bdiv").css("top", "23px");

    };
    this.ResizeGrid = function (gridID, clientOption) {
        thisObj = this;
        window.setTimeout(function () {
            var $grid = $(gridID);
            var $mainContent = $grid.parents(".MainContent");
            var isPopup = false;
            if ($grid.parents(".window-body").length) {
                $mainContent = $grid.parents(".window-body");
                isPopup = true;
            }
            /* set width */
            if (clientOption && clientOption.aWidth) {
                $grid.setGridWidth(clientOption.aWidth);
            }
            else {
                var _width_container = $mainContent.width();
                var _width_grid = _width_container - 12;
                $grid.setGridWidth(_width_grid);
            }
            /* set height */
            if (clientOption && clientOption.aHeight) {
                $grid.setGridHeight(clientOption.aHeight);
            }
            else {
                var _height_hdiv = $grid.parents(".ui-jqgrid-bdiv").prev(".ui-jqgrid-hdiv").find(".ui-jqgrid-htable").height();
                var _height_pager = $grid.parents(".ui-jqgrid").find(".ui-jqgrid-pager").height();
                var _height_footer = $grid.parents(".ui-jqgrid").find(".ui-jqgrid-ftable").height();
                var _height_container = $mainContent.height();
                var _height_top = $mainContent.find(".border-layout-functions:eq(0)").height();
                var $main_search = $mainContent.find(".border-layout-search:eq(0)");
                if (isPopup || $main_search.hasClass("relative")) {
                    _height_top = _height_top + $main_search.height();
                }
                var _height_grid = _height_container - _height_top - _height_hdiv - _height_pager - _height_footer - 20;
                $grid.setGridHeight(_height_grid - 12);
            }
            thisObj.FixedColumn.Do(gridID, clientOption);
        }, 500);
    };
    this.FixAlignHeader = function (gridID, colModel) {
        gridID = gridID.replace('#', '');
        var idx;
        for (idx in colModel) {
            var name = colModel[idx]['name'];
            var align = colModel[idx]['align'];
            var selector = "th[id='" + gridID + '_' + name + "'] div";
            $(selector).addClass(align);
        }
    };
    this.ApplyStyle = function (gridID, colModel, datas) {
        datas = datas.invdata
        for (var i = 0; i < datas.length; i++) {
            var extend = undefined;
            if (typeof (datas[i].Extend == "undefined")) {
                extend = eval("(" + datas[i].Extend + ")");
            }
            //console.log(datas[i]);
            //console.log(datas[i].Extend);
            this.CustomFormatStyle(gridID, colModel, datas[i].ID, extend);
            //format default
            for (var j in colModel) {
                var _iCss = colModel[j].iCss;
                var _classes = colModel[j].classes;
                var cellCss = "{";
                if (colModel[j].FontItalic) {
                    cellCss += '"font-style":"italic",';
                }
                if (colModel[j].FontBold) {
                    cellCss += '"font-weight":"bold",';
                }
                if (colModel[j].FontColor) {
                    cellCss += '"color":"' + colModel[j].FontColor + '",';
                }
                if (colModel[j].BackColor) {
                    cellCss += '"background-color":"' + colModel[j].BackColor + '",';
                }
                cellCss += "}";
                cellCss = eval("(" + cellCss + ")");

                _classes = (typeof (_classes) != 'undefined') ? _classes : '';
                ///console.log(j);
                //return;

                $(gridID).jqGrid('setCell', datas[i].ID, colModel[j].Name, _classes, cellCss);

                if (_classes == 'BR2') {
                    var selector = "table[aria-labelledby='gbox_" + gridID.replace('#', '') + "'] " +
                                                " thead " +
                                                " th[id$='" + colModel[j].name + "']";

                    var $th = $(selector);
                    $th.addClass(_classes);
                }
            }
        }
    };
    //colModel: add: ConditionStyleName
    this.CustomFormatStyle = function (gridID, colModel, rowID, ObjExtend) {
        try {
            if (typeof ObjExtend != 'object') {
                ObjExtend = eval("(" + ObjExtend + ")");
            }
            for (var i in colModel) {
                if (typeof colModel[i].ConditionStyleName != 'undefined') {
                    if (typeof (ObjExtend) != 'undefined') {
                        var nameCol = colModel[i].name;
                        var cellCss = ObjExtend[colModel[i].ConditionStyleName];
                        if (typeof (cellCss) != 'undefined') {
                            cellCss = "{'" +
                                cellCss.replace(/_/gi, "':'").replace(/,/gi, "','") +
                                "'}";
                            cellCss = eval("(" + cellCss + ")");
                            $(gridID).jqGrid('setCell', rowID, nameCol, '', cellCss);

                            //---------------------------------------------------------------------------------
                            //Mô tả: Với lưới có forzen column, jqGrid copy ra 1 table mới để freeze
                            //       table đó ko thể thiết lập setCell được, xử lý can thiệp trực tiếp trên dom
                            /*
                            if (colModel[i].frozen) {
                            var selector = "table[id^='" + gridID.replace('#', '') + "_frozen'] " +
                            " tr[id='" + rowID + "'] " +
                            "   td[aria-describedby$='" + colModel[i].name + "']";
                            var $td = $(selector);
                            GCss.set($td, cellCss);
                            }
                            */
                            //---------------------------------------------------------------------------------
                        }
                    }
                }
            }
        } catch (ex) { }
    };
    this.FixedColumn = {
        TableID: null,
        ScrollbarID: null,
        ArrTagsTH: null,
        ArrLeftPos: null,
        ArrColModel: null,
        ArrAlwaysHideColName: null,
        ArrHideColName: null,
        ArrShowColName: null,
        ScrollChildrenWidth: 0,
        WidthViewStatic: 0,
        WidthViewDynamic: 0,
        NumberColFixed: 0,
        Do: function (tableID, option) {
            if (typeof (option.fixedcolumn) != 'undefined') {
                var numColFixed = option.fixedcolumn;
                this.Init(tableID, numColFixed);
            }
        },
        Init: function (tableID, numColFixed) {
            var thisObj = this;
            tableID = tableID.replace("#", "");
            this.TableID = tableID.replace("#", "");
            this.ScrollbarID = '#FixColScroll_' + tableID;
            this.NumberColFixed = numColFixed;
            this.ArrColModel = $('#' + tableID).jqGrid('getGridParam', 'colModel');
            this.ArrTagsTH = $("#gview_" + tableID + " .ui-jqgrid-labels th");
            this.ArrLeftPos = [];
            this.ArrAlwaysHideColName = [];
            var lastestLeftPos = 0;
            var __ScrollChildrenWidth = 0;
            for (var i = 0; i < this.ArrTagsTH.length; i++) {
                if (this.ArrColModel[i] && this.ArrColModel[i].hidden == true)
                    this.ArrAlwaysHideColName.push(this.ArrColModel[i].name);
                else {
                    if (i < numColFixed)
                        this.WidthViewStatic += this.ArrTagsTH.eq(i).outerWidth();
                    else {
                        __ScrollChildrenWidth += this.ArrTagsTH.eq(i).outerWidth();
                        this.ScrollChildrenWidth = __ScrollChildrenWidth;
                        if (this.ArrLeftPos.length) {
                            lastestLeftPos += this.ArrTagsTH.eq(i - 1).outerWidth()
                            this.ArrLeftPos.push(lastestLeftPos);
                        }
                        else
                            this.ArrLeftPos.push(lastestLeftPos);
                    }
                }
            }
            var $grid = $('#gbox_' + tableID);
            $("#gview_" + tableID + " .ui-jqgrid-bdiv").css("overflow-x", "hidden");
            $grid.wrap("<div id='FixColWrap_" + tableID + "' class='gridFixCol_Wrap'></div>");
            $grid.after("<div id='FixColScroll_" + tableID + "' class='gridFixCol_Scrollbar'><div style='height: 18px;'></div></div>");

            var wrapWidth = $grid.parent().width();
            this.WidthViewDynamic = wrapWidth - this.WidthViewStatic;
            if (this.NumberColFixed == 1 && $('#' + this.TableID).jqGrid('getGridParam', 'rownumbers') == true) {
                var widthRowNumber = $('#gbox_' + this.TableID + ' th:first').width();
                this.WidthViewDynamic += widthRowNumber;
            }
            $('#FixColWrap_' + tableID).width(wrapWidth);
            $(this.ScrollbarID).width(this.WidthViewDynamic + 5);
            var $scroll = $(this.ScrollbarID);
            $scroll.children().width(this.ScrollChildrenWidth);

            $scroll.mouseup(function () {
                thisObj.Scroll();
            });

            $scroll.scroll(function () {
                thisObj.Scroll();
            });

            //            $(window).bind('resize', function () {
            //                setTimeout('FWS.Grid.ResizeCompleted();', 100);
            //            }).trigger('resize');
        },
        Scroll: function () {
            var scrollValue = $(this.ScrollbarID).scrollLeft();
            this.ArrHideColName = [];
            this.ArrShowColName = [];
            var colName = '';
            for (var col = 0; col < this.ArrLeftPos.length - 1; col++) {
                if (this.ArrLeftPos[col] < scrollValue) {
                    colName = this.ArrColModel[col + this.NumberColFixed].name;
                    this.ArrHideColName.push(colName);
                }
                else {
                    colName = this.ArrColModel[col + this.NumberColFixed].name;
                    if ($('#' + this.TableID + '_' + colName).width() > 5) {  // width of col hidden in grid < 5                        
                        if (!this.IsHideColumn(colName))
                            this.ArrShowColName.push(colName);
                    }
                }
            }

            $("#" + this.TableID).jqGrid('hideCol', this.ArrAlwaysHideColName);
            $("#" + this.TableID).jqGrid('hideCol', this.ArrHideColName);
            $("#" + this.TableID).jqGrid('showCol', this.ArrShowColName);
            $("#" + this.TableID).jqGrid('setGridWidth', $('#FixColWrap_' + this.TableID).width());
            this.ArrHideColName = null;
            this.ArrShowColName = null;
        },
        IsHideColumn: function (colName) {
            var ret = 0;
            if (typeof this.ArrHideColumn == 'undefined' || this.ArrHideColumn == null)
                ret = 0;
            else {
                var i;
                for (i = 0; i < this.ArrHideColumn.length; i++) {
                    if (this.ArrHideColumn[i] == colName) {
                        ret = 1;
                        break;
                    }
                }
            }
            return ret;
        },
        ResizeCompleted: function () {
            var $grid = $('#gbox_' + this.TableID);
            $("#gview_" + this.TableID + " .ui-jqgrid-bdiv").css("overflow-x", "hidden");

            var wrapWidth = $grid.parent().width();
            this.WidthViewDynamic = wrapWidth - this.WidthViewStatic;
            if (this.NumberColFixed == 1 && $('#' + this.TableID).jqGrid('getGridParam', 'rownumbers') == true) {
                var widthRowNumber = $('#gbox_' + this.TableID + ' th:first').outerWidth();
                this.WidthViewDynamic += widthRowNumber;
            }
            var $scroll = $(this.ScrollbarID);
            $($scroll).width(this.WidthViewDynamic + 5);
            $scroll.scrollLeft(0);
        }
    };
}

//--------------------------------------------------------
//Mô tả: Cập nhật css cho 1 đối tượng jQuery, data là json
//--------------------------------------------------------
var GCss = {
    set: function ($obj, data) {
        for (i in data) {
            $obj.css(i, data[i]);
        }
    }
};
