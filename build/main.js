$(document).ready(function () {
    ModuleTouch.tap("#touchDiv", function () {
        $("#showDiv").append("[Yeah!]");
    });
    ModuleTouch.tap("#hrefA", function (e) {
        $("#showDiv").append("[AHref]");
    });
});
//# sourceMappingURL=main.js.map