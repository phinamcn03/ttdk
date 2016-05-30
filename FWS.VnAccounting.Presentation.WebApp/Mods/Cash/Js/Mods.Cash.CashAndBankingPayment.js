if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Cash == 'undefined')
    Mods.Cash = {};

Mods.Cash.CashAndBankingPayment = {
    Init: function () {
        this.Grid.Load();
        this.Event();
    },
    Event: function () { },
    Grid: {
        GridUrl: '',
        GridId: '#',
        GridPager: '',
        optionClient: "",
        Load: function () { },
        Reload: function () { },
        RefreshCurrentPage: function () { },
        Search: function () { }
    }
};
$(function () {
    Mods.Cash.CashAndBankingPayment.Init();
});