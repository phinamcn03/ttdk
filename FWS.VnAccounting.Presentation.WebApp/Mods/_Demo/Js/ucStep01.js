LoadData();
function LoadData() {
    LoadAjax('Guest');
};
function GetName(obj) {
    LoadAjax(obj);
};
function LoadAjax(obj) {
    $.ajax({
        type: 'POST',
        url: '../Mods/_Demo/TemplateControllerService.asmx/HelloWorld',
        data: { name: obj },
        success: function (ret) {
            var d = $(ret).find('string').eq(0).text();
            if (d) {
                $('.cControl').html(d);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('.cControl').html('Load fail');
        }
    });
};