class employee{
    id: number;
    name:string;
    constructor(id: number,
        name:string){
       this.id=id;
       this.name=name;
    }
    greetings(){
        console.log('Hello World');
    }
}

const john=new employee(101,"john");

john.greetings();
