// const employee =
// {
//     calcTaxt(){
//         console.log("Taxt rate is 10%");
//     },
// };

// const abcd={
//     salary : 10000,
//     calcTaxt(){
//         console.log("Taxt rate is 20%");
//     }
// };

// abcd__proto__ = employee;// this method is called prototype



class ToyotaCar{
    constructor(brand,mailage){
        console.log("create new object");
        this.brand = brand;
        this.mailage = mailage; 
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar( "fortuner", 120);
console.log(fortuner);

let lexus = new ToyotaCar( "lexus" , 150);
console.log(lexus);
