var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.greetings = function () {
        console.log('Hello World');
    };
    return employee;
}());
var john = new employee();
john.id = 101;
john.name = "John";
john.greetings();
