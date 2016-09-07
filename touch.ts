/**
 * ModuleTouch
 * Website: http://www.maiyun.net
 * Website: http://hanguoshuai.com
 */

// --- 右上角的点击伸缩 ---

class ModuleTouch {

    public static version: string = "0.3";
    public static eventIndex: number = 1;

    public static tap(na: any, fun: (e?: JQueryEventObject) => any): void {

        let n: JQuery = $(na);
        n.on("touchstart.mt", function(e: JQueryEventObject): void {
            // --- 注意，n 可能是个集合，只有 this 才代表当下 ---
            let node: JQuery = $(this);
            let ei: number = ModuleTouch.eventIndex;
            ++ModuleTouch.eventIndex;
            node.data("touch", true);
            let touch: Touch = (<TouchEvent>e.originalEvent).targetTouches[0];
            node.data("oTouch", {pageX: touch.pageX, pageY: touch.pageY}).data("nTouch", node.data("oTouch"));
            node.addClass("hover-mt");
            $("body").on("touchmove.mt." + ei, function(e: JQueryEventObject): void {
                let touch: Touch = (<TouchEvent>e.originalEvent).targetTouches[0];
                node.data("nTouch", {pageX: touch.pageX, pageY: touch.pageY});
            });
            $("body").on("touchend.mt." + ei, function(e: JQueryEventObject): void {
                let oTouch = node.data("oTouch");
                let nTouch = node.data("nTouch");
                $(this).off("touchend.mt." + ei + " touchmove.mt." + ei);
                node.removeClass("hover-mt");
                if (Math.abs(nTouch.pageX - oTouch.pageX) < 25 && Math.abs(nTouch.pageY - oTouch.pageY) < 25) {
                    return fun.call(node[0], e);
                }
            });
        }).on("click", function(e: JQueryEventObject): any {
            if ($(this).data("touch") === true) {
                $(this).removeData("touch");
            } else
                return fun.call(this, e);
        });

    }

}

