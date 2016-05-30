if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Report == 'undefined')
    Mods.Report = {};
Mods.Report.Filter[INSTANT] = {
    init: function () {
        var _input = "<InputValue ";
        if (reportParameters) {
            _input += reportParameters;
        }
        _input += "/>";        
        $("#ifrmReport[INSTANT]").attr("src", "../Mods/Report/ReportService.ashx?ExportTo=pdf&InputValue=" + encodeURIComponent(_input));        
    }
};
$(function () {
    Mods.Report.Filter[INSTANT].init();
});