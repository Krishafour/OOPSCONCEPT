var actor = /** @class */ (function () {
    function actor() {
    }
    return actor;
}());
var Spy = /** @class */ (function () {
    function Spy() {
    }
    Spy.prototype.acting = function () {
        this.payment -= 1;
    };
    return Spy;
}());
var hero = new Spy();
var enemy = new Spy();
hero.payment = 90;
hero.acting();
enemy.acting();
console.log(hero.payment);
console.log(enemy.payment);
