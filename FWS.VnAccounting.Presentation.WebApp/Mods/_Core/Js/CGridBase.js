if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Cash == 'undefined')
    Mods.Core = {};

Mods.Core.GridBase[INSTANT] = {
  //  ServiceUrl: , //"../Mods/_Cash/Service/GridBaseService.asmx/Get[INSTANT]",
    GridId: '#[INSTANT]BaseGrid',
    GridView: '#gview_[INSTANT]BaseGrid',
    GridPager: '[INSTANT]BaseGridPage',
    optionClient: '',
   
     
    CreateGrid: function () {
        var thisObj = this;
        thisObj.optionClient = {
            extraParams: {
                currPage: 1,
                numberRowOfPage: 100,

                inputValue: ''
                //                    ,gridID: Mods.ACore.Voucher[INSTANT].ServerOptions.GridID
            },
            pager: thisObj.GridPager,
            colNames: colNameGridBase_[INSTANT],
            colModel: colModelGridBase_[INSTANT],
            aWidth: 500,
            gridUrl: GridBase_Instant["[INSTANT]"].UrlData,
            afterInsertRow: function (rowid, rowdata, rowelem) {
                //                var actionHtml = $.string.Format('<span class="ui-icon ui-icon-trash" rowid="{0}" style="display:inline-block;"></span></div> / <span class="ui-icon ui-icon-pencil" rowid="{0}" style="display:inline-block;"></span>', rowid);
                //                $(thisObj.GridId).jqGrid('setCell', rowid, "Action", actionHtml);
            },
            onSelectRow: function (rowid, status) {

            },
            ondblClickRow: function (rowid, iRow, iCol, e) {

            },
            loadComplete: function () {
                //                $(thisObj.GridId).jqGrid('navGrid', thisObj.optionClient.pager, {});
            },
            gridComplete: function () {
                //$(thisObj.GridId).footerData('set', { ItemCode: 'Tổng:', Amount: thisObj.TotalAmount().split("|")[0], TotalAmount: thisObj.TotalAmount().split("|")[1] });
            }
        };
        VnAccounting.Grid.Init(thisObj.GridId, optionGridBase_[INSTANT], thisObj.optionClient);

    },
    Init: function () {
        console.log(GridBase_Instant["[INSTANT]"].UrlData);
        this.CreateGrid();

    }
};

$(function () {

    Mods.Core.GridBase[INSTANT].Init();
});