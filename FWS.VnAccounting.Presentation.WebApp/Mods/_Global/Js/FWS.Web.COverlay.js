function COverlay(options) {
    var self = this;
    this.GuidGenerator = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4());
    };
    this._container = 'body';
    this._options = {
        id: self.GuidGenerator(),
        autoShow: true,
        modal: true,
        onlyOne: false,
        zIndex: 99
    };
    $.extend(true, self._options, options);
    this._overlayID = "COverlay-" + self._options.id;
    this._template = ''
    + '<div id="[ID]" class="COverlay" style="display:none; z-index:[zIndex];">'
        + '<div class="COverlay-Fixed" style="z-index:[zIndex2];"></div>'
        + '<div style="z-index:[zIndex];"><span>Loading</span>' + '<span class="COverlay-dots">...</span></div>'

    + '</div>';
    this.GetHtml = function () {
        var template = self._template;
        var _id = self._overlayID;
        var _zIndex = self._options.zIndex;
        template = template.replace(/\[ID\]/g, _id);
        template = template.replace(/\[zIndex\]/g, _zIndex);
        template = template.replace(/\[zIndex2\]/g, _zIndex - 1);
        return template;
    };
    this.Show = function () {
        var container = self._container;
        var _overlayID = "#" + self._overlayID;
        var $overlay = $(container).find(_overlayID);
        if (self._options.onlyOne) {
            var display = $overlay.is(":visible");
            if (display) {
                var count = parseInt($overlay.attr("count")) || 1;
                $overlay.attr("count", (count + 1));
            }
            else {
                $overlay.show();
            }
        }
        else {
            $overlay.show();
        }
    };
    this.Hide = function () {
        var container = self._container;
        var _overlayID = "#" + self._overlayID;
        var $overlay = $(container).find(_overlayID);
        if (self._options.onlyOne) {
            var count = parseInt($overlay.attr("count")) || 1;
            if (count == 1) {
                window.setTimeout(function () {
                     $overlay.hide();
                }, 500);
            }
            else {
                $overlay.attr("count", (count - 1));
            }
        }
        else {
            $overlay.hide();
            self.StopLoadingDots();
        }
    };
    this.Remove = function () {
        var container = self._container;
        var _overlayID = "#" + self._overlayID;
        $(container).find(_overlayID).remove();
        self.StopLoadingDots();
    };
    this.LoadingDotsInterval = 0;
    this.StopLoadingDots = function () {
        window.clearInterval(self.LoadingDotsInterval);
    };
    this.StartLoadingDots = function () {
        self.LoadingDotsInterval = window.setInterval(function () {
            var container = self._container;
            var $dots = $(container).find(".COverlay-dots");
            var length = $dots.text().length;
            if (length >= 3) {
                $dots.text("");
            } else {
                $dots.append(".");
            }
        }, 500);
    };
    this.Reposition = function () {
        var container = self._container;
        var _overlayID = "#" + self._overlayID;
        var _height = $(window).height();
        var _width = $(window).width();
        if (container != "body") {
            _height = $(container).height();
            _width = $(container).width();
        }
        var $loading = $(container).find(_overlayID);
        var _height_loading = $loading.height();
        var _width_loading = $loading.width();
        var top = (_height - _height_loading) / 2 + $(window).scrollTop();
        var left = (_width - _width_loading) / 2 + $(window).scrollTop();
        $loading.css({
            //top: top + 'px',
            left: left + 'px'
        });
    };
    this.Reposition2 = function () {
        var container = self._container;
        var _overlayID = "#" + self._overlayID;
        var _height = $(window).height();
        var _width = $(window).width();
        if (container != "body") {
            _height = $(container).height();
            _width = $(container).width();
        }
        var $loading = $(container).find(_overlayID).find(".COverlay-Loading");
        var _height_loading = $loading.height();
        var _width_loading = $loading.width();
        var top = (_height - _height_loading) / 2 + $(window).scrollTop();
        var left = (_width - _width_loading) / 2 + $(window).scrollTop();
        $loading.css({
            top: top + 'px',
            left: left + 'px'
        });
    };
    this.Init = function (container) {
        if (container)
            self._container = container;
        var _overlayID = "#" + self._overlayID;
        /* append to container */
        var html = self.GetHtml();
        $(self._container).append(html);
        self.Reposition();
        /* detect */
        if (self._container != "body") {
            $(self._container).css("position", "relative");
            $(self._container).find(_overlayID).css("position", "absolute");
        }
        /* auto show or hide */
        if (self._options.autoShow) {
            self.Show();
        }
        /* event click */
        self.StartLoadingDots();
    };
}