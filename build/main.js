$(document).ready(function () {
    ModuleTouch.tap("#touchDiv", function () {
        $("#showDiv").append("[Yeah!]");
        return false;
    });
    ModuleTouch.tap("#hrefA", function (e) {
        $("#showDiv").append("[AHref]");
    });
    ModuleTouch.tap("#maskDiv", function (e) {
        $("#mask").addClass("show");
        return false;
    });
    ModuleTouch.tap("#mask", function (e) {
        $(this).removeClass("show");
        return false;
    });
    ModuleTouch.tap("#alertDiv", function (e) {
        alert("yeah");
        return false;
    });
    ModuleTouch.scrollStart("#scrollDiv", function () {
        $(this).addClass("scroll");
    });
    ModuleTouch.scrollEnd("#scrollDiv", function () {
        $(this).removeClass("scroll");
    });
});
//# sourceMappingURL=main.js.map