class employee1{
    id:number
    name: string;
    isIncompany: boolean;
    greetings(){
        console.log(`Hello, my name is ${this.name},Id is ${this.id} Work in company is ${this.isIncompany}`);
    }
}

const x=new employee1();
x.name="Manish";
x.id=105;
x.isIncompany=true;


const p=new employee1();
p.name="Rajesh";
p.id=108;
p.isIncompany=false;

x.greetings();
p.greetings();


