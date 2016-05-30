if (typeof Mods == 'undefined') Mods = {};
if (typeof Mods.Dashboard == 'undefined') Mods.Dashboard = {};

Mods.Dashboard.Chart = {
    Init: function () {
        var thisObj = this;
        thisObj.ChartNhapXuat.Init();
        thisObj.ChartTonKhoToiThieu.Init();
        thisObj.ChartTonKhoSanPham.Init();
        // thisObj.ChartBienDongGia.Init();
        chartBienDongGia();
    },
    GetData: function (pOption, pCallback) {
        var option = {
            ClientKey: '',
            InputValue: ''
        };
        $.extend(true, option, pOption);
        $.Ajax({
            url: 'Core/CoreService.asmx/GetContextData',
            type: 'post',
            data: option,
            dataType: 'xml',
            isUseServiceData: 1,
            success: function (data, textStatus, jqXHR) {
                data = $.FindInXml(data);
                data = data.CSV2JSON2();
                if (typeof pCallback == 'function') {
                    pCallback(data);
                }
            }
        });
    },
    ChartNhapXuat: {
        Instant: null,
        Init: function () {
            var thisObj = this;
            AmCharts.ready(function () {
                Mods.Dashboard.Chart.GetData({
                    InputValue: $.HtmlEncode('<InputValue UserID="" LanguageID="129" /><RequestParams ToDate="2013-07-20" FromDate="2013-07-01" ItemIDs="" StockID="" ViewID="3" Function="InventoryInStock" />')
                }, function (rData) {
                    var chartData = [];
                    if (rData && rData.length) {

                        $.each(rData[1], function (intex, item) {
                            var stock = $.trim(item.SName);
                            chartData.push({
                                stock: stock,
                                inward: item.InWard,
                                outward: item.OutWard
                            });

                        });
                    }
                    // SERIAL CHART
                    thisObj.Instant = new AmCharts.AmSerialChart();
                    thisObj.Instant.dataProvider = chartData;
                    thisObj.Instant.categoryField = "stock";
                    thisObj.Instant.startDuration = 2;
                    thisObj.Instant.plotAreaBorderColor = "#DADADA";
                    thisObj.Instant.plotAreaBorderAlpha = 1;
                    // this single line makes the chart a bar chart          
                    thisObj.Instant.rotate = true;
                    // title of the chart
                    // AXES
                    // Category
                    var categoryAxis = thisObj.Instant.categoryAxis;
                    categoryAxis.gridPosition = "start";
                    categoryAxis.gridAlpha = 0.1;
                    categoryAxis.axisAlpha = 0;
                    // Value
                    var valueAxis = new AmCharts.ValueAxis();
                    valueAxis.axisAlpha = 0;
                    valueAxis.gridAlpha = 0.1;
                    valueAxis.position = "top";
                    thisObj.Instant.addValueAxis(valueAxis);
                    // GRAPHS
                    // first graph
                    var graph1 = new AmCharts.AmGraph();
                    graph1.type = "column";
                    graph1.title = "Nhập";
                    graph1.valueField = "inward";
                    graph1.balloonText = "Nhập:[[value]]";
                    graph1.lineAlpha = 0;
                    graph1.fillColors = "#ADD981";
                    graph1.fillAlphas = 1;
                    thisObj.Instant.addGraph(graph1);
                    // second graph
                    var graph2 = new AmCharts.AmGraph();
                    graph2.type = "column";
                    graph2.title = "Xuất";
                    graph2.valueField = "outward";
                    graph2.balloonText = "Xuất:[[value]]";
                    graph2.lineAlpha = 0;
                    graph2.fillColors = "#81acd9";
                    graph2.fillAlphas = 1;
                    thisObj.Instant.addGraph(graph2);
                    // LEGEND
                    var legend = new AmCharts.AmLegend();
                    thisObj.Instant.addLegend(legend);
                    // WRITE
                    thisObj.Instant.write("chart_NhapXuat");
                });
            });
        }
    },
    ChartTonKhoToiThieu: {
        Instant: null,
        Init: function () {
            var thisObj = this;
            //<InputValue UserID="" LanguageID="129" /><RequestParams ItemIDs="" StockIDs="" ViewID="2" Function="InventoryAlertMinAvaiable" />
            AmCharts.ready(function () {
                Mods.Dashboard.Chart.GetData({
                    InputValue: $.HtmlEncode('<InputValue UserID="" LanguageID="129" /><RequestParams ItemIDs="" StockIDs="" ViewID="2" Function="InventoryAlertMinAvaiable" />')
                }, function (rData) {
                    // SERIAL CHART
                    var chartData = [];
                    if (rData && rData.length) {
                        $.each(rData[1], function (intex, item) {
                            var extend = item.Extend;
                            var extendObj = eval('(' + extend + ')');
                            var CStyle_Quantity = extendObj.CStyle_Quantity;
                            var CStyle_QuantityArr = CStyle_Quantity.split(',');
                            var bgColor = '#999999';
                            if (CStyle_QuantityArr.length) {
                                if (CStyle_QuantityArr[1]) {
                                    bgColor = CStyle_QuantityArr[1].replace('background-color_', '');
                                }
                            }
                            //Extend: "{CStyle_Quantity: "color_#277500,background-color_#f2ffe5"}"
                            chartData.push({
                                stockName: $.trim(item.StockName),
                                stock: $.trim(item.StockCode),
                                inventory: item.BalanceQuantity,
                                color: bgColor
                            });
                        });
                    }
                    thisObj.Instant = new AmCharts.AmSerialChart();
                    thisObj.Instant.dataProvider = chartData;
                    thisObj.Instant.categoryField = "stock";
                    thisObj.Instant.marginRight = 0;
                    thisObj.Instant.marginTop = 0;
                    thisObj.Instant.autoMarginOffset = 0;
                    thisObj.Instant.startDuration = 2;
                    // the following two lines makes chart 3D
                    thisObj.Instant.depth3D = 6;
                    thisObj.Instant.angle = 30;
                    // title of the chart
                    // chart.addTitle("Tồn kho tối thiểu", 12);
                    // AXES
                    // category
                    var categoryAxis = thisObj.Instant.categoryAxis;
                    categoryAxis.labelRotation = 90;
                    categoryAxis.dashLength = 5;
                    categoryAxis.gridPosition = "start";
                    // value
                    var valueAxis = new AmCharts.ValueAxis();
                    valueAxis.title = "Inventory";
                    valueAxis.dashLength = 5;
                    thisObj.Instant.addValueAxis(valueAxis);
                    // GRAPH            
                    var graph = new AmCharts.AmGraph();
                    graph.valueField = "inventory";
                    graph.colorField = "color";
                    graph.balloonText = "[[stockName]]: [[value]]";
                    graph.type = "column";
                    graph.lineAlpha = 0;
                    graph.fillAlphas = 0.75;
                    thisObj.Instant.addGraph(graph);
                    var balloon = thisObj.Instant.balloon;
                    balloon.color = "#000";

                    // WRITE
                    thisObj.Instant.write("chart_TonKho");
                });
            });

        }
    },
    ChartTonKhoSanPham: {
        Instant: null,
        Init: function () {
            var thisObj = this;
            //<InputValue UserID="" LanguageID="129" /><RequestParams ItemIDs="" StockIDs="" ViewID="2" Function="InventoryAlertMinAvaiable" />
            AmCharts.ready(function () {
                Mods.Dashboard.Chart.GetData({
                    InputValue: ''
                }, function (rData) {
                    var chartData = [{ stock: "Tân Định", inventory: 23.5, color: "#FF0F00" }, { stock: "Đakao", inventory: 26.2, color: "#FF6600" }, { stock: "Bến Nghé", inventory: 30.1, color: "#FF9E01" }, { stock: "Bình Thạnh", inventory: 29.5, color: "#FCD202" }, { stock: "Tân Bình", inventory: 24.6, color: "#F8FF01" }, { stock: "Thủ Đức", inventory: 39.8, color: "#B0DE09" }, { stock: "Tân Phong", inventory: 18.7, color: "#04D215" }, { stock: "Thảo Điền", inventory: 32.2, color: "#0D8ECF" }, { stock: "Phú Trung", inventory: 13.8, color: "#0D52D1" }, { stock: "Hòa Thạnh", inventory: 16.7, color: "#2A0CD0" }, { stock: "Tân Phong 2", inventory: 18.7, color: "#8A0CCF" }, { stock: "Thảo Điền 2", inventory: 32.2, color: "#CD0D74" }, { stock: "Phú Trung 2", inventory: 13.8, color: "#754DEB" }, { stock: "Hòa Thạnh 2", inventory: 16.7, color: "#DDDDDD" }]
                    // PIE CHART
                    thisObj.Instant = new AmCharts.AmPieChart();
                    // title of the chart
                    // chart.addTitle("Tồn kho của 1 sản phẩm", 12);
                    thisObj.Instant.dataProvider = chartData;
                    thisObj.Instant.titleField = "stock";
                    thisObj.Instant.valueField = "inventory";
                    thisObj.Instant.sequencedAnimation = true;
                    thisObj.Instant.startEffect = "elastic";
                    thisObj.Instant.innerRadius = "30%";
                    thisObj.Instant.startDuration = 2;
                    thisObj.Instant.labelRadius = 15;
                    // the following two lines makes the chart 3D
                    thisObj.Instant.depth3D = 10;
                    thisObj.Instant.angle = 15;
                    // WRITE                                 
                    thisObj.Instant.write("chart_TonKho_SanPham");
                });
            });

        }
    },
    ChartBienDongGia: {
        Instant: null,
        Init: function () {
            var thisObj = this;
            AmCharts.ready(function () {
                Mods.Dashboard.Chart.GetData({
                    InputValue: $.HtmlEncode('<InputValue UserID="" LanguageID="129" /><RequestParams ToDate="2013-07-23" FromDate="2013-07-01" StockID="2" ViewID="14" Function="InwardOutwardDetail_ByDate" />')
                }, function (rData) {
                    console.log('ChartBienDongGia::rData', rData);
                    var chartData = [];
                    // PIE CHART
                    if (rData && rData.length) {

                        $.each(rData[1], function (intex, item) {
                            var stock = $.trim(item.SName);
                            chartData.push({
                                date: newDate,
                                visits: visits,
                                hits: hits,
                                views: views,
                                customBullet: ''
                            });
                        });
                    }
                    thisObj.Instant = new AmCharts.AmSerialChart();
                    thisObj.Instant.marginTop = 0;
                    thisObj.Instant.startDuration = 0.5;
                    thisObj.Instant.autoMarginOffset = 5;
                    thisObj.Instant.pathToImages = "http://www.amcharts.com/lib/images/";
                    thisObj.Instant.zoomOutButton = {
                        backgroundColor: '#000000',
                        backgroundAlpha: 0.15
                    };
                    thisObj.Instant.dataProvider = chartData;
                    thisObj.Instant.categoryField = "date";

                    // title of the chart
                    //chart.addTitle("Biến động giá", 12);

                    // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
                  //  thisObj.Instant.addListener("dataUpdated", zoomChart);

                    // AXES
                    // category                
                    var categoryAxis = thisObj.Instant.categoryAxis;
                    categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                    categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
                    categoryAxis.dashLength = 2;
                    categoryAxis.gridAlpha = 0.15;
                    categoryAxis.axisColor = "#DADADA";

                    // first value axis (on the left)
                    var valueAxis1 = new AmCharts.ValueAxis();
                    valueAxis1.axisColor = "#FF6600";
                    valueAxis1.axisThickness = 1;
                    valueAxis1.gridAlpha = 0;
                    thisObj.Instant.addValueAxis(valueAxis1);
                    // GRAPHS
                    // first graph
                    var graph1 = new AmCharts.AmGraph();
                    graph1.valueAxis = valueAxis1; // we have to indicate which value axis should be used
                    graph1.title = "Panadol";
                    graph1.valueField = "visits";
                    graph1.bullet = "round";
                    graph1.bulletSize = "4";
                    graph1.hideBulletsCount = 30;
                    thisObj.Instant.addGraph(graph1);

                    // second graph                
                    var graph2 = new AmCharts.AmGraph();
                    //graph2.valueAxis = valueAxis2; // we have to indicate which value axis should be used
                    graph2.title = "Decolgen";
                    graph2.valueField = "hits";
                    //graph2.bullet = "square";
                    graph2.bulletSize = "10";
                    //graph2.customBullet = "http://www.amcharts.com/lib/images/star.gif";
                    graph2.customBulletField = "customBullet"; // this will make the graph to display custom bullet (red star)
                    graph2.hideBulletsCount = 30;
                    thisObj.Instant.addGraph(graph2);

                    // third graph
                    var graph3 = new AmCharts.AmGraph();
                    //graph3.valueAxis = valueAxis3; // we have to indicate which value axis should be used
                    graph3.valueField = "views";
                    graph3.title = "Colchicine";
                    //graph3.bullet = "triangleUp";
                    graph3.bulletSize = "10";
                    //graph3.customBulletField = "customBullet"; // this will make the graph to display custom bullet (red star)
                    graph3.hideBulletsCount = 30;
                    thisObj.Instant.addGraph(graph3);

                    // CURSOR
                    var chartCursor = new AmCharts.ChartCursor();
                    chartCursor.cursorPosition = "mouse";
                    thisObj.Instant.addChartCursor(chartCursor);

                    // SCROLLBAR
                    var chartScrollbar = new AmCharts.ChartScrollbar();
                    thisObj.Instant.addChartScrollbar(chartScrollbar);

                    // LEGEND
                    var legend = new AmCharts.AmLegend();
                    legend.marginLeft = 110;
                    thisObj.Instant.addLegend(legend);

                    // WRITE
                    thisObj.Instant.write("chart_BienDongGia");
                });
            });
        }
    }
}

$(function () {
    Mods.Dashboard.Chart.Init();
});
/*-------------------------------------------------------------------------------
Chart: Thống kê Nhập Xuất 
-------------------------------------------------------------------------------*/
function chartNhapXuat(pData) {
    var chart;
    var chartData = [{
        stock: 'Tân Định',
        inward: 23.5,
        outward: 18.1
    },
    {
        stock: 'Đakao',
        inward: 26.2,
        outward: 22.8
    },
    {
        stock: 'Bến Nghé',
        inward: 30.1,
        outward: 23.9
    },
    {
        stock: 'Bình Thạnh',
        inward: 29.5,
        outward: 25.1
    },
    {
        stock: 'Tân Bình',
        inward: 24.6,
        outward: 25.0
    },
    {
        stock: 'Thủ Đức',
        inward: 39.8,
        outward: 32.9
    },
    {
        stock: 'Tân Phong',
        inward: 18.7,
        outward: 15.8
    },
    {
        stock: 'Thảo Điền',
        inward: 32.2,
        outward: 25.6
    },
    {
        stock: 'Phú Trung',
        inward: 13.8,
        outward: 12.9
    },
    {
        stock: 'Hòa Thạnh',
        inward: 16.7,
        outward: 11.8
    }];
    AmCharts.ready(function () {
        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = "stock";
        chart.startDuration = 2;
        chart.plotAreaBorderColor = "#DADADA";
        chart.plotAreaBorderAlpha = 1;
        // this single line makes the chart a bar chart          
        chart.rotate = true;

        // title of the chart
        //chart.addTitle("Nhập - Xuất", 12);

        // AXES
        // Category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridPosition = "start";
        categoryAxis.gridAlpha = 0.1;
        categoryAxis.axisAlpha = 0;

        // Value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisAlpha = 0;
        valueAxis.gridAlpha = 0.1;
        valueAxis.position = "top";
        chart.addValueAxis(valueAxis);

        // GRAPHS
        // first graph
        var graph1 = new AmCharts.AmGraph();
        graph1.type = "column";
        graph1.title = "Nhập";
        graph1.valueField = "inward";
        graph1.balloonText = "Nhập:[[value]]";
        graph1.lineAlpha = 0;
        graph1.fillColors = "#ADD981";
        graph1.fillAlphas = 1;
        chart.addGraph(graph1);

        // second graph
        var graph2 = new AmCharts.AmGraph();
        graph2.type = "column";
        graph2.title = "Xuất";
        graph2.valueField = "outward";
        graph2.balloonText = "Xuất:[[value]]";
        graph2.lineAlpha = 0;
        graph2.fillColors = "#81acd9";
        graph2.fillAlphas = 1;
        chart.addGraph(graph2);

        // LEGEND
        var legend = new AmCharts.AmLegend();
        chart.addLegend(legend);

        // WRITE
        chart.write("chart_NhapXuat");
    });
}

/*-------------------------------------------------------------------------------
Chart: Thống kê Tồn Kho Tối Thiểu
-------------------------------------------------------------------------------*/
function chartTonKhoToiThieu() {
    var chart;

    var chartData = [{
        stock: 'LYPANTHYL 160',
        inventory: 23.5,
        color: "#FF0F00"
    },
    {
        stock: 'BETALOC-50MG',
        inventory: 26.2,
        color: "#FF6600"
    },
    {
        stock: 'HAPPY DENT CHAI',
        inventory: 30.1,
        color: "#FF9E01"
    },
    {
        stock: 'BERBERIN (DMC)',
        inventory: 29.5,
        color: "#FCD202"
    },
    {
        stock: 'VITAMIN C 250(HAU GIANG)',
        inventory: 24.6,
        color: "#F8FF01"
    },
    {
        stock: 'SIOFOR 1000',
        inventory: 39.8,
        color: "#B0DE09"
    },
    {
        stock: 'CLAMIVUDINE',
        inventory: 18.7,
        color: "#04D215"
    },
    {
        stock: 'MAT GAN GIAI DOC',
        inventory: 32.2,
        color: "#0D8ECF"
    },
    {
        stock: 'ACEMOL E 100MG',
        inventory: 13.8,
        color: "#0D52D1"
    },
    {
        stock: 'HAZELINE',
        inventory: 16.7,
        color: "#2A0CD0"
    },
    {
        stock: 'FERLIN',
        inventory: 18.7,
        color: "#8A0CCF"
    },
    {
        stock: 'CORRECTOL COLL',
        inventory: 32.2,
        color: "#CD0D74"
    },
    {
        stock: 'LISTERIN BRIGHT 80ML',
        inventory: 13.8,
        color: "#754DEB"
    },
    {
        stock: 'PHAN JOHNSON 500',
        inventory: 16.7,
        color: "#DDDDDD"
    }];

    AmCharts.ready(function () {
        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = "stock";
        chart.marginRight = 0;
        chart.marginTop = 0;
        chart.autoMarginOffset = 0;
        chart.startDuration = 2;
        // the following two lines makes chart 3D
        chart.depth3D = 6;
        chart.angle = 30;

        // title of the chart
        //chart.addTitle("Tồn kho tối thiểu", 12);

        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.labelRotation = 90;
        categoryAxis.dashLength = 5;
        categoryAxis.gridPosition = "start";

        // value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.title = "Inventory";
        valueAxis.dashLength = 5;
        chart.addValueAxis(valueAxis);

        // GRAPH            
        var graph = new AmCharts.AmGraph();
        graph.valueField = "inventory";
        graph.colorField = "color";
        graph.fillColors = "#ADD981";
        graph.balloonText = "[[category]]: [[value]]";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.75;
        chart.addGraph(graph);

        // WRITE
        chart.write("chart_TonKho");
    });
}

function chartTonKho_SanPham() {
    var chart;

    var chartData = [{
        stock: 'Tân Định',
        inventory: 23.5,
        color: "#FF0F00"
    },
    {
        stock: 'Đakao',
        inventory: 26.2,
        color: "#FF6600"
    },
    {
        stock: 'Bến Nghé',
        inventory: 30.1,
        color: "#FF9E01"
    },
    {
        stock: 'Bình Thạnh',
        inventory: 29.5,
        color: "#FCD202"
    },
    {
        stock: 'Tân Bình',
        inventory: 24.6,
        color: "#F8FF01"
    },
    {
        stock: 'Thủ Đức',
        inventory: 39.8,
        color: "#B0DE09"
    },
    {
        stock: 'Tân Phong',
        inventory: 18.7,
        color: "#04D215"
    },
    {
        stock: 'Thảo Điền',
        inventory: 32.2,
        color: "#0D8ECF"
    },
    {
        stock: 'Phú Trung',
        inventory: 13.8,
        color: "#0D52D1"
    },
    {
        stock: 'Hòa Thạnh',
        inventory: 16.7,
        color: "#2A0CD0"
    },
    {
        stock: 'Tân Phong 2',
        inventory: 18.7,
        color: "#8A0CCF"
    },
    {
        stock: 'Thảo Điền 2',
        inventory: 32.2,
        color: "#CD0D74"
    },
    {
        stock: 'Phú Trung 2',
        inventory: 13.8,
        color: "#754DEB"
    },
    {
        stock: 'Hòa Thạnh 2',
        inventory: 16.7,
        color: "#DDDDDD"
    }];

    AmCharts.ready(function () {
        // PIE CHART
        chart = new AmCharts.AmPieChart();
        // title of the chart
        // chart.addTitle("Tồn kho của 1 sản phẩm", 12);
        chart.dataProvider = chartData;
        chart.titleField = "stock";
        chart.valueField = "inventory";
        chart.sequencedAnimation = true;
        chart.startEffect = "elastic";
        chart.innerRadius = "30%";
        chart.startDuration = 2;
        chart.labelRadius = 15;
        // the following two lines makes the chart 3D
        chart.depth3D = 10;
        chart.angle = 15;
        // WRITE                                 
        chart.write("chart_TonKho_SanPham");
    });
}

/*-------------------------------------------------------------------------------
Chart: Thống kê Biến động giá
-------------------------------------------------------------------------------*/
function chartBienDongGia() {
    var chart;
    var chartData = [];


    // generate some random data, quite different range
    function generateChartData() {
        var firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 50);

        for (var i = 0; i < 50; i++) {
            var newDate = new Date(firstDate);
            newDate.setDate(newDate.getDate() + i);

            var visits = Math.round(Math.random() * 40) + 50;
            var hits = Math.round(Math.random() * 80) + 100;
            var views = Math.round(Math.random() * 60 + 170);
            var item = {
                date: newDate,
                visits: visits,
                hits: hits,
                views: views,
                customBullet:''
            };
            if (parseInt(i * Math.random() * 60) % 9 == 0)
                item.customBullet = "http://www.amcharts.com/lib/images/redstar.png";
            chartData.push(item);
        }
    }

    // this method is called when chart is first inited as we listen for "dataUpdated" event
    function zoomChart() {
        // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
        chart.zoomToIndexes(20, 50);
    }

    // create chart
    AmCharts.ready(function () {
        // generate some random data first
        generateChartData();

        // SERIAL CHART    
        chart = new AmCharts.AmSerialChart();
        chart.marginTop = 0;
        chart.startDuration = 0.5;
        chart.autoMarginOffset = 5;
        chart.pathToImages = "http://www.amcharts.com/lib/images/";
        chart.zoomOutButton = {
            backgroundColor: '#000000',
            backgroundAlpha: 0.15
        };
        chart.dataProvider = chartData;
        chart.categoryField = "date";

        // title of the chart
        //chart.addTitle("Biến động giá", 12);

        // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
        chart.addListener("dataUpdated", zoomChart);

        // AXES
        // category                
        var categoryAxis = chart.categoryAxis;
        categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
        categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
        categoryAxis.dashLength = 2;
        categoryAxis.gridAlpha = 0.15;
        categoryAxis.axisColor = "#DADADA";

        // first value axis (on the left)
        var valueAxis1 = new AmCharts.ValueAxis();
        valueAxis1.axisColor = "#FF6600";
        valueAxis1.axisThickness = 1;
        valueAxis1.gridAlpha = 0;
        chart.addValueAxis(valueAxis1);

        /*
        // second value axis (on the right) 
        var valueAxis2 = new AmCharts.ValueAxis();
        valueAxis2.position = "right"; // this line makes the axis to appear on the right
        valueAxis2.axisColor = "#FCD202";
        valueAxis2.gridAlpha = 0;
        valueAxis2.axisThickness = 2;
        chart.addValueAxis(valueAxis2);

        // third value axis (on the left, detached)
        valueAxis3 = new AmCharts.ValueAxis();
        valueAxis3.offset = 50; // this line makes the axis to appear detached from plot area
        valueAxis3.gridAlpha = 0;
        valueAxis3.axisColor = "#B0DE09";
        valueAxis3.axisThickness = 2;
        chart.addValueAxis(valueAxis3);
        */
        // GRAPHS
        // first graph
        var graph1 = new AmCharts.AmGraph();
        graph1.valueAxis = valueAxis1; // we have to indicate which value axis should be used
        graph1.title = "Panadol";
        graph1.valueField = "visits";
        graph1.bullet = "round";
        graph1.bulletSize = "4";
        graph1.hideBulletsCount = 30;
        chart.addGraph(graph1);

        // second graph                
        var graph2 = new AmCharts.AmGraph();
        //graph2.valueAxis = valueAxis2; // we have to indicate which value axis should be used
        graph2.title = "Decolgen";
        graph2.valueField = "hits";
        //graph2.bullet = "square";
        graph2.bulletSize = "10";
        //graph2.customBullet = "http://www.amcharts.com/lib/images/star.gif";
        graph2.customBulletField = "customBullet"; // this will make the graph to display custom bullet (red star)
        graph2.hideBulletsCount = 30;
        chart.addGraph(graph2);

        // third graph
        var graph3 = new AmCharts.AmGraph();
        //graph3.valueAxis = valueAxis3; // we have to indicate which value axis should be used
        graph3.valueField = "views";
        graph3.title = "Colchicine";
        //graph3.bullet = "triangleUp";
        graph3.bulletSize = "10";
        //graph3.customBulletField = "customBullet"; // this will make the graph to display custom bullet (red star)
        graph3.hideBulletsCount = 30;
        chart.addGraph(graph3);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorPosition = "mouse";
        chart.addChartCursor(chartCursor);

        // SCROLLBAR
        var chartScrollbar = new AmCharts.ChartScrollbar();
        chart.addChartScrollbar(chartScrollbar);

        // LEGEND
        var legend = new AmCharts.AmLegend();
        legend.marginLeft = 110;
        chart.addLegend(legend);

        // WRITE
        chart.write("chart_BienDongGia");
    });
}

/*-------------------------------------------------------------------------------
Chart: Thống kê Nhập Xuất 
-------------------------------------------------------------------------------*/
function chartDoanhThu() {
    var chart;
    var chartData = [
        {
            year: 2000,
            'TanDinh': 25000,
            'DaKao': 12500,
            'BenNghe': 22500,
            'BinhThanh': 32000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 20000,
            'ThaoDien': 15000,
            'PhuTrung': 12000,
            'HoaThanh': 5000
        },
        {
            year: 2001,
            'TanDinh': 23000,
            'DaKao': 17500,
            'BenNghe': 22500,
            'BinhThanh': 21000,
            'TanBinh': 28000,
            'ThuDuc': 22000,
            'TanPhong': 24000,
            'ThaoDien': 19000,
            'PhuTrung': 17500,
            'HoaThanh': 7500
        },
        {
            year: 2002,
            'TanDinh': 34000,
            'DaKao': 18000,
            'BenNghe': 15000,
            'BinhThanh': 26000,
            'TanBinh': 47000,
            'ThuDuc': 21000,
            'TanPhong': 22000,
            'ThaoDien': 41000,
            'PhuTrung': 16000,
            'HoaThanh': 6600,
        },
        {
            year: 2003,
            'TanDinh': 35000,
            'DaKao': 19500,
            'BenNghe': 18500,
            'BinhThanh': 26000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 28000,
            'ThaoDien': 36000,
            'PhuTrung': 16000,
            'HoaThanh': 7200,
        },
        {
            year: 2004,
            'TanDinh': 23000,
            'DaKao': 17500,
            'BenNghe': 22500,
            'BinhThanh': 21000,
            'TanBinh': 28000,
            'ThuDuc': 22000,
            'TanPhong': 24000,
            'ThaoDien': 19000,
            'PhuTrung': 17500,
            'HoaThanh': 7500
        },
        {
            year: 2005,
            'TanDinh': 35000,
            'DaKao': 19500,
            'BenNghe': 18500,
            'BinhThanh': 26000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 28000,
            'ThaoDien': 36000,
            'PhuTrung': 16000,
            'HoaThanh': 7200,
        },
        {
            year: 2006,
            'TanDinh': 34000,
            'DaKao': 18000,
            'BenNghe': 15000,
            'BinhThanh': 26000,
            'TanBinh': 47000,
            'ThuDuc': 21000,
            'TanPhong': 22000,
            'ThaoDien': 41000,
            'PhuTrung': 16000,
            'HoaThanh': 6600,
        },
        {
            year: 2007,
            'TanDinh': 35000,
            'DaKao': 19500,
            'BenNghe': 18500,
            'BinhThanh': 26000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 28000,
            'ThaoDien': 36000,
            'PhuTrung': 16000,
            'HoaThanh': 7200,
        },
        {
            year: 2008,
            'TanDinh': 25000,
            'DaKao': 12500,
            'BenNghe': 22500,
            'BinhThanh': 32000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 20000,
            'ThaoDien': 15000,
            'PhuTrung': 12000,
            'HoaThanh': 5000
        },
        {
            year: 2009,
            'TanDinh': 23000,
            'DaKao': 17500,
            'BenNghe': 22500,
            'BinhThanh': 21000,
            'TanBinh': 28000,
            'ThuDuc': 22000,
            'TanPhong': 24000,
            'ThaoDien': 19000,
            'PhuTrung': 17500,
            'HoaThanh': 7500
        },
        {
            year: 2010,
            'TanDinh': 34000,
            'DaKao': 18000,
            'BenNghe': 15000,
            'BinhThanh': 26000,
            'TanBinh': 47000,
            'ThuDuc': 21000,
            'TanPhong': 22000,
            'ThaoDien': 41000,
            'PhuTrung': 16000,
            'HoaThanh': 6600,
        },
        {
            year: 2011,
            'TanDinh': 25000,
            'DaKao': 12500,
            'BenNghe': 22500,
            'BinhThanh': 32000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 20000,
            'ThaoDien': 15000,
            'PhuTrung': 12000,
            'HoaThanh': 5000
        },
        {
            year: 2012,
            'TanDinh': 34000,
            'DaKao': 18000,
            'BenNghe': 15000,
            'BinhThanh': 26000,
            'TanBinh': 47000,
            'ThuDuc': 21000,
            'TanPhong': 22000,
            'ThaoDien': 41000,
            'PhuTrung': 16000,
            'HoaThanh': 6600,
        },
        {
            year: 2013,
            'TanDinh': 25000,
            'DaKao': 12500,
            'BenNghe': 22500,
            'BinhThanh': 32000,
            'TanBinh': 27000,
            'ThuDuc': 21000,
            'TanPhong': 20000,
            'ThaoDien': 15000,
            'PhuTrung': 12000,
            'HoaThanh': 5000
        },
    ];

    AmCharts.ready(function () {
        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();
        chart.pathToImages = "http://www.amcharts.com/lib/images/";
        chart.autoMarginOffset = 3;
        chart.startDuration = 0.2;
        chart.marginRight = 0;
        chart.zoomOutButton = {
            backgroundColor: "#000000",
            backgroundAlpha: 0.15
        };
        chart.dataProvider = chartData;
        chart.categoryField = "year";

        //chart.addTitle("Doanh thu", 15);

        // AXES
        // Category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridAlpha = 0.07;
        categoryAxis.axisColor = "#DADADA";
        categoryAxis.showLastLabel = false;
        categoryAxis.startOnAxis = true;

        // Value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.title = "percent"; // this line makes the chart "stacked"
        valueAxis.stackType = "100%";
        valueAxis.gridAlpha = 0.07;
        chart.addValueAxis(valueAxis);

        // GRAPHS
        // first graph
        var graph = new AmCharts.AmGraph();
        graph.type = "line"; // it's simple line graph
        graph.title = "TanDinh";
        graph.valueField = "TanDinh";
        graph.balloonText = "TanDinh [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.5; // setting fillAlphas to > 0 value makes it area graph 
        chart.addGraph(graph);

        // second graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "DaKao";
        graph.valueField = "DaKao";
        graph.balloonText = "DaKao [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // third graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "BenNghe";
        graph.valueField = "BenNghe";
        graph.balloonText = "BenNghe [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // 4 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "BinhThanh";
        graph.valueField = "BinhThanh";
        graph.balloonText = "BinhThanh [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // 5 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "TanBinh";
        graph.valueField = "TanBinh";
        graph.balloonText = "TanBinh [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // 6 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "ThuDuc";
        graph.valueField = "ThuDuc";
        graph.balloonText = "ThuDuc [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        /*
        // 7 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "TanPhong";
        graph.valueField = "TanPhong";
        graph.balloonText = "TanPhong [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // 8 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "ThaoDien";
        graph.valueField = "ThaoDien";
        graph.balloonText = "ThaoDien [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);

        // 9 graph
        graph = new AmCharts.AmGraph();
        graph.type = "line";
        graph.title = "PhuTrung";
        graph.valueField = "PhuTrung";
        graph.balloonText = "PhuTrung [[value]] ([[percents]]%)";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.6;
        chart.addGraph(graph);
        */
        // LEGEND
        var legend = new AmCharts.AmLegend();
        legend.align = "center";
        //chart.addLegend(legend);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.zoomable = false; // as the chart displayes not too many values, we disabled zooming
        chartCursor.cursorAlpha = 0;
        chart.addChartCursor(chartCursor);

        // WRITE
        chart.write("chart_DoanhThu");
    });
}

/*-------------------------------------------------------------------------------
Chart: Thống kê Nhập Xuất 
-------------------------------------------------------------------------------*/
function chartStatistics() {
    var chart;

    var chartData = [{
        year: "2003",
        europe: 2.5,
        namerica: 2.5,
        asia: 2.1,
        lamerica: 0.3,
        meast: 0.2,
        africa: 0.1
    },
    {
        year: "2004",
        europe: 2.6,
        namerica: 2.7,
        asia: 2.2,
        lamerica: 0.3,
        meast: 0.3,
        africa: 0.1
    },
    {
        year: "2005",
        europe: 2.8,
        namerica: 2.9,
        asia: 2.4,
        lamerica: 0.3,
        meast: 0.3,
        africa: 0.1
    }];

    AmCharts.ready(function () {
        // SERIALL CHART
        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = "year";
        chart.startDuration = 1;
        chart.plotAreaBorderAlpha = 0.2;
        chart.rotate = true;

        // AXES
        // Category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridAlpha = 0.1;
        categoryAxis.axisAlpha = 0;
        categoryAxis.gridPosition = "start";

        // value                      
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.stackType = "regular";
        valueAxis.gridAlpha = 0.1;
        valueAxis.axisAlpha = 0;
        chart.addValueAxis(valueAxis);

        // GRAPHS
        // firstgraph 
        var graph = new AmCharts.AmGraph();
        graph.title = "Thảo Điềm";
        graph.labelText = "[[value]]";
        graph.valueField = "europe";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#C72C95";
        chart.addGraph(graph);

        // second graph           
        graph = new AmCharts.AmGraph();
        graph.title = "Đakao";
        graph.labelText = "[[value]]";
        graph.valueField = "namerica";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#D8E0BD";
        chart.addGraph(graph);

        // thirdt graph              
        graph = new AmCharts.AmGraph();
        graph.title = "Bến Nghé";
        graph.labelText = "[[value]]";
        graph.valueField = "asia";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#B3DBD4";
        chart.addGraph(graph);

        // fourth graph 
        graph = new AmCharts.AmGraph();
        graph.title = "Tân Bình";
        graph.labelText = "[[value]]";
        graph.valueField = "lamerica";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#69A55C";
        chart.addGraph(graph);

        /*
        // fifth graph 
        graph = new AmCharts.AmGraph();
        graph.title = "Thủ Đức";
        graph.labelText = "[[value]]";
        graph.valueField = "meast";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#B5B8D3";
        chart.addGraph(graph);
    
        // sixth graph  
        graph = new AmCharts.AmGraph();
        graph.title = "Bình Thạnh";
        graph.labelText = "[[value]]";
        graph.valueField = "africa";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.lineColor = "#F4E23B";
        chart.addGraph(graph);
        */
        // LEGEND
        var legend = new AmCharts.AmLegend();
        legend.position = "right";
        legend.borderAlpha = 0.3;
        legend.horizontalGap = 10;
        legend.switchType = "v";
        chart.addLegend(legend);

        // WRITE
        chart.write("chart_Statistics");
    });


}
/*-------------------------------------------------------------------------------
INIT DASHBOARD
-------------------------------------------------------------------------------*/

//chartNhapXuat();
//chartTonKhoToiThieu();
//chartTonKho_SanPham();
//chartBienDongGia();
//chartStatistics();
//chartDoanhThu();