ddsmoothmenu.init({
    mainmenuid: "NavigationBar", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    contentsource: "markup", //"markup" or ["container_id", "path_to_menu_file"]
    shadow: { offsetx: 1, offsety: 1 }
});
$(function () {
    var $slider_ul_id = $('#slider'); //Please define slider items list ID
    $slider_ul_id.nivoSlider({
        effect: 'fade',
        slices: 1,
        boxCols: 1,
        boxRows: 1,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        directionNavHide: false,
        controlNav: false,
        controlNavThumbs: false,
        controlNavThumbsFromRel: false,
        controlNavThumbsSearch: '.jpg',
        controlNavThumbsReplace: '_thumb.jpg',
        keyboardNav: false,
        pauseOnHover: true,
        manualAdvance: false,
        captionOpacity: 1,
        prevText: 'Prev',
        nextText: 'Next',
        beforeChange: function () { },
        afterChange: function () { },
        slideshowEnd: function () { },
        lastSlide: function () { },
        afterLoad: function () { }
    });
});