function sum(a,b){
    console.log(a+b)
}

function calculate(a,b,sumCallback){
    sumCallback(a,b)
}

calculate(5,3,sum)

calculate(1,2,(sum)=>{
    console.log(a+b);
})

