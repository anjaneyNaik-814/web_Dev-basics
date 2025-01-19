// async function api(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("wether data");
//             resolve(200);   // success = 200
//         },2000);
//     });
// }

// async function getWetherdata(){
//     await api();
//     await api();
// } 



async function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some data1");
            resolve("sucess");
        },2000);
    });
}

async function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some data2");
            resolve("sucess");
        },4000);
    });
}

async function getData(){
    await asyncFunc1();
    await asyncFunc2();
}


// IIFE 

(async function(){
    await asyncFunc1();
    await asyncFunc2();
})();