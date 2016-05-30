if (typeof Mods == 'undefined')
    Mods = {};
if (typeof Mods.Report == 'undefined')
    Mods.Report = {};

//Clear bobj of crystalreport
if (typeof bobj == 'undefined')
    bobj = {};
if (typeof bobj.crv == 'undefined')
    bobj.crv = {};
if (typeof bobj.crv.ContentRenderer == 'undefined')
    bobj.crv.ContentRenderer = {};
bobj.crv.ContentRenderer = {
    adjustWidthAndHeight: function () { }
};

$(function () {
    Mods.Report.Html.init();
});

Mods.Report.Html = {
    init: function () {
        this.setCenterResize();
        if (!$.browser.msie)
            this.setImageUrl();
        //set background body
        $("body").removeAttr("bgcolor");
    },
    setImageUrl: function () {
        var arrImage = $(".crystalstyle").find('div[alt^="Image"]');
        if (typeof arrImage != 'undefined') {
            //set image url
            $.each(arrImage, function () {
                var dvImage = this;
                var style = $(dvImage).attr("style");
                var reg = new RegExp("'.*'");
                var m = reg.exec(style);
                if (m != null) {
                    var st = dvImage.style.cssText;
                    if (typeof st == 'undefined')
                        st = "";
                    var image = "<image style='" + st + "' src=" + m[0] + "/>";
                    dvImage.innerHTML = image;
                }
            });
        }
    },
    setCenterResize: function () {
        $(window).bind('resize', function () {
            //1137 = 1075 + 31 + 31==>> html width + top + left
            //Set align center with document for html
            var ownerWidth = 0;
            var docWidth = $(document).width();
            if (typeof window.parent != 'undefined' && typeof window.parent.frameElement != 'undefined' && typeof window.parent.frameElement.ownerDocument != 'undefined')
                ownerWidth = window.parent.frameElement.ownerDocument.width;

            //IE Exception >>> TEMP
            if (typeof ownerWidth == 'undefined')
                ownerWidth = parseInt(docWidth) + 1;

            var left = 1, top = 1, _requestfrom = 1;
            if (typeof requestfrom != 'undefined')
                _requestfrom = requestfrom;

            if (parseInt(docWidth) < parseInt(ownerWidth) && _requestfrom * 1 == 0) {
                top = 31;
                var contentWidth = $("#ReportHeaderSection1").width();
                left = parseInt((docWidth - contentWidth) / 2);
            }
            else {
                top = 1;
                left = 1;
            }
            $(".crystalstyle").attr('style', "position:absolute; top:" + top + "px; left:" + left + "px;");
        }).trigger('resize');
    }
};
function AddScript(src) {
    var headOfPage = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = src;
    headOfPage.appendChild(newScript);
};
function AddScripts(arr) {
    for (var i = 0; i < arr.length; i++) {
        AddScript(arr[i]);
    }
};