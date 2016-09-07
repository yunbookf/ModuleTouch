$(document).ready(function() {
    ModuleTouch.tap("#touchDiv", function(): void {
        $("#showDiv").append("[Yeah!]");
    });
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
    });
    ModuleTouch.tap("#maskDiv", function(e: JQueryEventObject): any {
        $("#mask").addClass("show");
    });
    ModuleTouch.tap("#mask", function(e: JQueryEventObject): any {
        $(this).removeClass("show");
    });
    ModuleTouch.tap("#alertDiv", function(e: JQueryEventObject): any {
        alert("yeah");
    });
    /*
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
        e.preventDefault();
        return false;
    });
    // */
});

