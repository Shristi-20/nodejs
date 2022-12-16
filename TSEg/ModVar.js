"use strict";
//export var greeting : string = "Hello World!";
exports.__esModule = true;
exports.Addition = exports.greeting = void 0;
exports.greeting = "Hello World!";
var Addition = /** @class */ (function () {
    function Addition(x, y) {
        this.x = x;
        this.y = y;
    }
    Addition.prototype.Sum = function () {
        console.log("SUM: " + (this.x + this.y));
    };
    return Addition;
}());
exports.Addition = Addition;
