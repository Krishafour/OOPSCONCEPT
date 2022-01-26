class employee{
    id: number;
    name:string;
    greetings(){
        console.log('Hello World');
    }
}

const john=new employee();
john.id=101;
john.name="John";
john.greetings();
