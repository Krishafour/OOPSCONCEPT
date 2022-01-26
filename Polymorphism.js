var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var police = /** @class */ (function () {
    function police() {
    }
    police.prototype.attack = function () {
        console.log("I'm attacking...");
    };
    police.prototype.move = function () {
        console.log("I'm moving...");
    };
    police.prototype.eat = function () {
        console.log("I'm eating...");
    };
    return police;
}());
var constable = /** @class */ (function (_super) {
    __extends(constable, _super);
    function constable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet = 105;
        return _this;
    }
    constable.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("I also approaching a theif ");
        this.bullet -= 1;
        console.log("Bullets is ".concat(this.bullet));
    };
    return constable;
}(police));
var c1 = new constable();
c1.attack();
