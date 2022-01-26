abstract class actor{
    payment:number;
    role:string;

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