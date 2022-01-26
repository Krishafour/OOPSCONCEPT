var player = /** @class */ (function () {
    function player() {
    }
    player.prototype.getdata = function (health, speed) {
        this.health = health;
        this.speed = speed;
    };
    player.prototype.showdata = function () {
        console.log('health is ' + this.health + ' and speed is ' + this.speed);
    };
    return player;
}());
var mario = new player();
mario.getdata(10, 100);
mario.showdata();
var peach = new player();
peach.getdata(7, 99);
peach.showdata();
