$(document).ready(function() {
    ModuleTouch.tap("#touchDiv", function(): any {
        $("#showDiv").append("[Yeah!]");
        return false;
    });
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
    });
    ModuleTouch.tap("#maskDiv", function(e: JQueryEventObject): any {
        $("#mask").addClass("show");
        return false;
    });
    ModuleTouch.tap("#mask", function(e: JQueryEventObject): any {
        $(this).removeClass("show");
        return false;
    });
    ModuleTouch.tap("#alertDiv", function(e: JQueryEventObject): any {
        alert("yeah");
        return false;
    });
    /*
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
        e.preventDefault();
        return false;
    });
    // */
    ModuleTouch.scrollStart("#scrollDiv", function(): void {
        $(this).addClass("scroll");
    });
    ModuleTouch.scrollEnd("#scrollDiv", function(): void {
        $(this).removeClass("scroll");
    });
});

