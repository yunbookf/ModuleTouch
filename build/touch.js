var ModuleTouch = (function () {
    function ModuleTouch() {
    }
    ModuleTouch.tap = function (na, fun) {
        var n = $(na);
        n.on("touchstart.mt", function (oe) {
            var node = $(this);
            var ei = ++ModuleTouch.eventIndex;
            node.data("touch", true);
            var touch = oe.originalEvent.targetTouches[0];
            node.data("oTouch", { screenX: touch.screenX, screenY: touch.screenY }).data("nTouch", node.data("oTouch"));
            node.addClass("active-mt");
            $("body").on("touchmove.mt." + ei, function (e) {
                var touch = e.originalEvent.targetTouches[0];
                node.data("nTouch", { screenX: touch.screenX, screenY: touch.screenY });
            });
            $("body").on("touchend.mt." + ei, function (e) {
                var oTouch = node.data("oTouch");
                var nTouch = node.data("nTouch");
                $(this).off("touchend.mt." + ei + " touchmove.mt." + ei);
                node.removeClass("active-mt");
                if (Math.abs(nTouch.screenX - oTouch.screenX) < 25 && Math.abs(nTouch.screenY - oTouch.screenY) < 25) {
                    return fun.call(node[0], oe);
                }
            });
        }).on("click.mt", function (e) {
            if ($(this).data("touch") === true) {
                $(this).removeData("touch");
            }
            else
                return fun.call(this, e);
        }).on("mousedown.mt", function () {
            var node = $(this);
            var ei = ++ModuleTouch.eventIndex;
            if (node.data("touch") !== true) {
                node.addClass("active-mt");
                node.on("mouseleave.mt." + ei + " mouseup.mt." + ei, function () {
                    node.removeClass("active-mt").off("mouseleave.mt." + ei + " mouseup.mt." + ei);
                });
            }
        }).hover(function () {
            $(this).addClass("hover-mt");
        }, function () {
            $(this).removeClass("hover-mt");
        });
    };
    ModuleTouch.scrollStart = function (na, fun) {
        this._scrollInit(na);
        $(na).data("scrollStartFun", fun);
    };
    ModuleTouch.scrollEnd = function (na, fun) {
        this._scrollInit(na);
        $(na).data("scrollEndFun", fun);
    };
    ModuleTouch._scrollInit = function (na) {
        var n = $(na);
        n.each(function () {
            var node = $(this);
            if (node.data("scrollInit") !== true) {
                node.data("scrollInit", true);
                node.data("scrollStartFun", function () { }).data("scrollEndFun", function () { }).data("scrollTimer", 0);
                node.on("scroll.mt", function (oe) {
                    if (node.data("scrollStart") !== true) {
                        node.data("scrollStart", true);
                        node.data("scrollStartFun").call(node, oe);
                    }
                    if (node.data("touchScroll") !== true) {
                        clearTimeout(node.data("scrollTimer"));
                        node.data("scrollTimer", setTimeout(function () {
                            node.removeData("scrollStart").data("scrollTimer", 0);
                            node.data("scrollEndFun").call(node, oe);
                        }, 70));
                    }
                    else {
                        if (node.data("scrollTimer") !== 0) {
                            clearTimeout(node.data("scrollTimer"));
                            node.data("scrollTimer", setTimeout(function () {
                                node.removeData("scrollStart").removeData("touchScroll").data("scrollTimer", 0);
                                node.data("scrollEndFun").call(node, oe);
                            }, 70));
                        }
                    }
                }).on("touchstart.mt", function (oe) {
                    var ei = ++ModuleTouch.eventIndex;
                    node.data("touchScroll", true);
                    $("body").on("touchend.mt." + ei, (function (e) {
                        $("body").off("touchend.mt." + ei);
                        clearTimeout(node.data("scrollTimer"));
                        node.data("scrollTimer", setTimeout(function () {
                            node.removeData("scrollStart").removeData("touchScroll").data("scrollTimer", 0);
                            node.data("scrollEndFun").call(node, oe);
                        }, 70));
                    }).bind(this));
                });
            }
        });
    };
    ModuleTouch.version = "0.4";
    ModuleTouch.eventIndex = 0;
    return ModuleTouch;
}());
//# sourceMappingURL=touch.js.map