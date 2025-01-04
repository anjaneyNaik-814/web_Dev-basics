class Person{

    constructor(){
        console.log("create new Person")
        this.species = "home sapians";//this is refers that obj 
    }


    eat() {
        console.log("eat something");
    }

    sleep() {
        console.log("sleep well");
    }

    work(){
        console.log("do nothing!");//child and parent had same method the child work will be display
    }
}

class Engineer extends Person{
    work() {
        console.log("solve problems and create somthing new!");
    }
}

class Docter extends Person{
    work() {
        console.log("give free services for poor pepoles!");
    }
}

let me = new Engineer(); // new means create new object in engineer
console.log(me);

let you = new Docter();
console.log(you);