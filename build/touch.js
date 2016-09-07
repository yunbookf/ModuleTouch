var ModuleTouch = (function () {
    function ModuleTouch() {
    }
    ModuleTouch.tap = function (na, fun) {
        var n = $(na);
        n.on("touchstart.mt", function (e) {
            var node = $(this);
            node.data("touch", true);
            var touch = e.originalEvent.targetTouches[0];
            node.data("oTouch", { pageX: touch.pageX, pageY: touch.pageY }).data("nTouch", node.data("oTouch"));
            node.addClass("hover");
            $("body").on("touchmove.mt", function (e) {
                var touch = e.originalEvent.targetTouches[0];
                node.data("nTouch", { pageX: touch.pageX, pageY: touch.pageY });
            });
            $("body").on("touchend.mt", function (e) {
                var oTouch = node.data("oTouch");
                var nTouch = node.data("nTouch");
                $(this).off("touchend.mt touchmove.mt");
                node.removeClass("hover");
                if (Math.abs(nTouch.pageX - oTouch.pageX) < 25 && Math.abs(nTouch.pageY - oTouch.pageY) < 25) {
                    return fun.call(node[0], e);
                }
            });
        }).on("click", function (e) {
            if ($(this).data("touch") === true) {
                $(this).removeData("touch");
            }
            else
                return fun.call(this, e);
        });
    };
    ModuleTouch.version = "0.2";
    return ModuleTouch;
}());
//# sourceMappingURL=touch.js.map