
class police{
    payment:number;
    case:string;

    attack(){
        console.log("I'm attacking...");
    }

    move(){
        console.log("I'm moving...");
    }

    eat(){
        console.log("I'm eating...");
    }
}
class constable extends police{
    bullet:number=105;
    attack(){
        super.attack();
        console.log("I also approaching a theif ");
        this.bullet-=1;
        console.log(`Bullets is ${this.bullet}`);
    }
}



const c1: constable = new constable();
c1.attack();
