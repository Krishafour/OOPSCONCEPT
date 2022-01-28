abstract class actor{
    payment:number;
    role:string;
    constructor()
    {
        this.payment=0;
        this.role='null';
    }

    abstract acting(): void;
}

interface Hero extends actor{
    heroId:number;
}

interface Enemy extends actor{
    enemyId:number;
}

class Spy implements Hero, Enemy{
    payment: number;
    role:string;
    heroId:number;
    enemyId:number;
    constructor()
    {
        this.payment=1;
        this.role='null';
        this.heroId=0;
        this.enemyId=0;
    }

    acting(): void {
        this.payment-=1;
    }
}

const hero: Hero=new Spy();
const enemy: Enemy=new Spy();   
hero.payment=90;
hero.acting();
enemy.acting();
console.log(hero.payment);
console.log(enemy.payment);