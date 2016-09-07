$(document).ready(function () {
    ModuleTouch.tap("#touchDiv", function () {
        $("#showDiv").append("[Yeah!]");
    });
    ModuleTouch.tap("#hrefA", function (e) {
        $("#showDiv").append("[AHref]");
    });
    ModuleTouch.tap("#maskDiv", function (e) {
        $("#mask").addClass("show");
    });
    ModuleTouch.tap("#mask", function (e) {
        $(this).removeClass("show");
    });
    ModuleTouch.tap("#alertDiv", function (e) {
        alert("yeah");
    });
});
//# sourceMappingURL=main.js.map