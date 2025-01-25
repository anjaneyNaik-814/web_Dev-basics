// let promise = new Promise((resolve,reject)=>{
//     console.log("I promised");
//     reject("some error occured");
// })

// function getData(dataId,nextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("sucess");
//         },5000);
//     });
// }

function asyncFunc(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some data");
            resolve("sucess");
        },4000);
    });
}
// call the async function
console.log("Fetching data....")
let p1 = asyncFunc();
p1.then((res) =>{   //when the data is fullfilled in that case we use '.then' otherwise we use '.catch'
    console.log(res);
});


// Promise Chain......

function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some data1");
            resolve("sucess");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some data2");
            resolve("sucess");
        },4000);
    });
}
// promise chain
console.log("fetching data1...");
let n1 = asyncFunc1();
n1.then((res) =>{
    console.log("fetching data2...");
    let n2 = asyncFunc2();
    n2.then((res) =>{});
});