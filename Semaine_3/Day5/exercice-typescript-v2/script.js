var _a;
var firstName = ((_a = document.getElementById("firstName")) === null || _a === void 0 ? void 0 : _a.textContent) || "";
var button = document.getElementById("submitButton");
if (button) {
    button.addEventListener("click", function () {
        console.log("Button clicked! First Name: ".concat(firstName));
    });
}
function getName() {
    var _a;
    firstName = ((_a = document.getElementById("firstName")) === null || _a === void 0 ? void 0 : _a.textContent) || "";
    console.log("Name retrieved: ".concat(firstName));
}
