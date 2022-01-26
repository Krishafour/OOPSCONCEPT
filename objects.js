var employee1 = /** @class */ (function () {
    function employee1() {
    }
    employee1.prototype.greetings = function () {
        console.log("Hello, my name is ".concat(this.name, ",Id is ").concat(this.id, " Work in company is ").concat(this.isIncompany));
    };
    return employee1;
}());
var x = new employee1();
x.name = "Manish";
x.id = 105;
x.isIncompany = true;
var p = new employee1();
p.name = "Rajesh";
p.id = 108;
p.isIncompany = true;
x.greetings();
p.greetings();
