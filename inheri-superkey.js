class Person{
    constructor(name,branch){
        this.specience = "Home=sepience"
        this.name = name;
        this.branch = branch;

    }

    eat(){
        console.log("First eat!");
    }
};

class Engineer extends Person 
{
    
    constructor(name,branch){
        console.log("create new Engineer");
        super(name,branch);         //to invoked parent class constructor
    }
    
    work(){
         super.eat(); 
         /*when we call first parent function we use SUPER keyword
         because we can't call directly parent function in child class*/

        console.log("And create something new!");
    }
};



let engObj = new Engineer("Anjaney","Computer-Engineer");
console.log(engObj);

