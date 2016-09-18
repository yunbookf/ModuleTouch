/**
 * ModuleTouch
 * Website: http://www.maiyun.net
 * Website: http://hanguoshuai.com
 */

// --- 右上角的点击伸缩 ---

class ModuleTouch {

    public static version: string = "0.4";
    public static eventIndex: number = 0;

    // --- 点击事件，兼容手机和 PC ---
    public static tap(na: any, fun: (e?: JQueryEventObject) => any): void {

        let n: JQuery = $(na);
        n.on("touchstart.mt", function(e: JQueryEventObject): void {
            // --- 注意，n 可能是个集合，只有 this 才代表当下 ---
            let node: JQuery = $(this);
            let ei: number = ++ModuleTouch.eventIndex;
            node.data("touch", true);
            let touch: Touch = (<TouchEvent>e.originalEvent).targetTouches[0];
            node.data("oTouch", {screenX: touch.screenX, screenY: touch.screenY}).data("nTouch", node.data("oTouch"));
            node.addClass("active-mt");
            $("body").on("touchmove.mt." + ei, function(e: JQueryEventObject): void {
                let touch: Touch = (<TouchEvent>e.originalEvent).targetTouches[0];
                node.data("nTouch", {screenX: touch.screenX, screenY: touch.screenY});
            });
            $("body").on("touchend.mt." + ei, function(e: JQueryEventObject): void {
                let oTouch = node.data("oTouch");
                let nTouch = node.data("nTouch");
                $(this).off("touchend.mt." + ei + " touchmove.mt." + ei);
                node.removeClass("active-mt");
                if (Math.abs(nTouch.screenX - oTouch.screenX) < 25 && Math.abs(nTouch.screenY - oTouch.screenY) < 25) {
                    return fun.call(node[0], e);
                }
            });
        }).on("click.mt", function(e: JQueryEventObject): any {
            if ($(this).data("touch") === true) {
                $(this).removeData("touch");
            } else
                return fun.call(this, e);
        }).on("mousedown.mt", function(): void {
            let node: JQuery = $(this);
            let ei: number = ++ModuleTouch.eventIndex;
            if (node.data("touch") !== true) {
                node.addClass("active-mt");
                node.on(`mouseleave.mt.${ei} mouseup.mt.${ei}`, function(): void {
                    node.removeClass("active-mt").off(`mouseleave.mt.${ei} mouseup.mt.${ei}`);
                });
            }
        }).hover(function(): void {
            $(this).addClass("hover-mt");
        }, function(): void {
            $(this).removeClass("hover-mt");
        });

    }

    // --- 滚动开始和停止事件 ---
    public static scrollStart(na: any, fun: (e?: JQueryEventObject) => any): void {
        this._scrollInit(na);
        $(na).data("scrollStartFun", fun);
    }

    public static scrollEnd(na: any, fun: (e?: JQueryEventObject) => any): void {
        this._scrollInit(na);
        $(na).data("scrollEndFun", fun);
    }

    private static _scrollInit(na: any): void {
        let n: JQuery = $(na);
        n.each(function(): void {
            let node: JQuery = $(this);
            if (node.data("scrollInit") !== true) {
                node.data("scrollInit", true);
                node.data("scrollStartFun", function(): void{}).data("scrollEndFun", function(): void{}).data("scrollTimer", 0);
                node.on("scroll.mt", function(e: JQueryEventObject): void {
                    if (node.data("scrollStart") !== true) {
                        // --- 第一次滚动 ---
                        node.data("scrollStart", true);
                        node.data("scrollStartFun").call(node, e);
                    }
                    // --- 如果不是手机则直接进行监听结束 ---
                    if (node.data("touchScroll") !== true) {
                        clearTimeout(node.data("scrollTimer"));
                        node.data("scrollTimer", setTimeout(function(): void {
                            node.removeData("scrollStart").data("scrollTimer", 0);
                            node.data("scrollEndFun").call(node, e);
                        }, 75));
                    } else {
                        // --- 是手机 ---
                        if (node.data("scrollTimer") !== 0) {
                            clearTimeout(node.data("scrollTimer"));
                            node.data("scrollTimer", setTimeout(function(): void {
                                node.removeData("scrollStart").removeData("touchScroll").data("scrollTimer", 0);
                                node.data("scrollEndFun").call(node, e);
                            }, 75));
                        }
                    }
                }).on("touchstart.mt", function(): void {
                    let ei: number = ++ModuleTouch.eventIndex;
                    node.data("touchScroll", true);
                    $("body").on("touchend.mt." + ei, (function(e: JQueryEventObject): void {
                        $("body").off("touchend.mt." + ei);
                        clearTimeout(node.data("scrollTimer"));
                        node.data("scrollTimer", setTimeout(function(): void {
                            node.removeData("scrollStart").removeData("touchScroll").data("scrollTimer", 0);
                            node.data("scrollEndFun").call(node, e);
                        }, 75));
                    }).bind(this));
                });
            }
        });

    }

}

