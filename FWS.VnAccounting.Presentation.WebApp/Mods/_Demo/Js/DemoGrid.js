function CreateGrid(numRows) {
    var optionClient = {
        jsonReader: {
            root: "invdata",
            page: "page",
            total: "total",
            records: "records",
            repeatitems: false,
            id: "ID"
        },
        colModel: colModelStock,
        colNames: colNameStock,
        sortname: 'ID',
        sortorder: "desc"
    };
    VnAccounting.Grid.Init("#fws_grid", option, optionClient);
}

$(function () {
    CreateGrid();
});