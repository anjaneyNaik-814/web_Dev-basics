console.log("One");
console.log("two");

function hello(){
    console.log("Welcome ");
}

setTimeout(hello,3000);  //(fuction,time to wait in milisec)

//we can create arrrow function

setTimeout(()=>{
    console.log("friends");
},4000)

console.log("three");
console.log("four");