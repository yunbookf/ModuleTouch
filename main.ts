$(document).ready(function() {
    ModuleTouch.tap("#touchDiv", function(): void {
        $("#showDiv").append("[Yeah!]");
    });
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
    });
    /*
    ModuleTouch.tap("#hrefA", function(e: JQueryEventObject): any {
        $("#showDiv").append("[AHref]");
        e.preventDefault();
        return false;
    });
    // */
});

