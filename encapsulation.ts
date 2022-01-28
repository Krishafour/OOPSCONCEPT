class player{
    private health: number;
    private speed: number;
    constructor(health:number,speed:number)
    {
        this.health=health;
        this.speed=speed;
    }

    getdata(health: number, speed: number): void{
        this.health=health;
        this.speed=speed;
    }

    showdata(){
        console.log('health is ' + this.health + ' and speed is ' + this.speed);
    }
}

const mario=new player(0,0);
mario.getdata(10, 100);
mario.showdata();

const peach=new player(0,0);
peach.getdata(7, 99);
peach.showdata();