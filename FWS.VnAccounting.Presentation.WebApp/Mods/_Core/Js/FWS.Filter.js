if (typeof (FWS) == 'undefined')
    FWS = {};
if (typeof (FWS.Filter) == 'undefined')
    FWS.Filter = {};

FWS.Filter = {
    Dialog: null,
    Init: function () {

    },
    DefaultInit: function () {
       FWS.Filter.Dialog = new CViewFilter();
       var options = { PageCode: "REPORT" };
       FWS.Filter.Dialog.Create(options);
    }
}