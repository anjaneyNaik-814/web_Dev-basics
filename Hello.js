// console.log("Welcome to all");
// console.log("This is my first seminar");
// console.log("And Good Afternoon to all");

// let name="Anjaney Naik";
// const Roll=103;
// console.log(name);
// console.log(Roll);

// const student={
//     fullName : "Anjaney Naik",
//     rollNumber : 103,
//     age : 20,
//     cgpa : 8.2,
//     isPass : true,
// };

// student["age"] = student["age"]+1;
// console.log(student["age"]);

// student["rollNumber"] = student["rollNumber"] +10;
// console.log(student["rollNumber"]);

// const profile={
//     usarname:"Anjaney Naik",
//     isFollow:true,
//     Followers:488,
//     Following:380,
// };
// console.log(profile);

// // Operators in JavaScript
// let a=16,b=8;
// console.log("a = ",a ,"& b =" ,b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("++a =",++a);
// console.log("--a =",--a);

// //conditional operators
// console.log("a<b =",a<b);
// console.log("a>b =",a>b);
// console.log("a==b =",a==b);
// console.log("a!=b =",a!=b);
// console.log("a===b =",a===b);

// //logical oparents
// console.log("a<b && a>b =",a<b && a>b);
// console.log("a<b || a>b =",a<b || a>b);

// //coditional statement
// let x=27;
// if(x%2===0)
//     {
//         console.log(x,"it is even number");
//     }
//     else{
//         console.log(x,"it is odd number");
//     }

// //ternary operators
// let e=14;
// let result= e>21 ? "you can marrage" : "not elegible";
// console.log(result); 

// //practice set
// let num=prompt("Enter the number");
// if(num%4===0)
//     {
//         console.log(num,"is multiple of 4");
//     }
//     else{
//         console.log(num,"is NOT multiple of 4");
//     }

// let marks=prompt("Enter the your marks(0-100)");
// let grade;
// if(marks>90 && marks<100)
//     {
//       grade='A';
//     }
//     else if(marks>70 && marks<89)
//     {
//         grade='B';
//     }
//     else if(marks>60 && marks<69)
//         {
//             grade='C';
//         }
//         else if(marks>50 && marks<59)
//             {
//                 grade='D';
//             }
//             else if(marks>0 && marks<49)
//                 {
//                     grade='F';
//                 } 
        
//     console.log("your grade is :",grade);

// // loops in javasrcipt
// let a;
// let sum=0;
// for(a=0;a<10;a++)
//     {
//         if(a%2===0)
//             {
//                 console.log(a, "this is even number");
//             }
//     }

// for(a=0;a<50;a++)
//     {
//         if(a%2===0)
//             {
//                 sum=sum+a;
//             }
//     }
//     console.log("the sum of even numbers =",sum);

// // for-of loop
// let str="ANJANEY NAIK";
// let size=0;

// for(let i of str)
//     {
//         console.log("i =",i);
//         size++;
//     }
//     console.log("length of the string is = ",size);


// // for-in loop
// let student={
//     name:"Anjaney",
//     age:20,
//     cgpa:7.9,
//     isPass:true,
// };

// for(let key in student)
//     {
//         console.log("key = ",key , "&", "value = ",student[key]);
//     }
    

// // practice qust 2

// let gameNum=103;
// let guessNum=prompt("Guess the correct game Number");

// while(guessNum!=gameNum){
//     guessNum=prompt("Wrong Number entered! try again");
// }
// console.log("Wow! amazing You find the correct number");


// //strings in javascript
// let str= "Anjaney" ;

// console.log(str[5]);

// //Templete literals
// let specialString='This is templete sentence';

// console.log(typeof specialString);

// let obj={
//     item : "pen",
//     price:20,
// };

// let output=`The cost of ${obj.item} is only ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of", obj.item,"is",obj.price,"rupees");

// // Methods in strings upper and lowwer case
// let str="Anjaney";
// let newStr =str.toUpperCase();
// let lowerStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);
// console.log(lowerStr);

// // methods slice concat replace
// let str1="hello";
// console.log(str1.slice(2,4));

// let str2="\teveryone";

// let res=str1.concat(str2);
// let add= "welcome to all \t"+ str1 + str2;
// console.log(res);
// console.log(add);

// let replace ="welcome";
// console.log(replace);
// console.log(replace.replace("w","h"));


// // practice set 
// let fullName= prompt("enter your full name");
// let userName=`@${fullName}${fullName.length} `;
// console.log("@"+fullName,fullName.length);
// console.log(userName);

// // ARRAYS 
// let marks = [98,38,58,96,76];
// console.log(marks);

// // loops on arrays
// let heroes = ["superman", "spiderman", "thor", "hulk", "ironman", "captain"];
// for(let i=0; i<heroes.length; i++ )
//     {
//         console.log(heroes[i]);
//     }

// let cities = ["Gokak" , "Chikkaodi" , "Athani" ,"Bengaluru","Shivapur"];
// for(let city of cities)
//     {
//         console.log(city.toUpperCase());
//     }


// // Find average marks in an array
// let marks = [85,94,68,39,94,37];
// let sum=0;
// for(let val of marks)
//     {
//         sum += val;
//     }
// let avg = sum/marks.length;
// console.log(`Avarage marks of array is ${avg}`);


// // 10% offer problem 
// let prices = [380,370,690,370,520,400,220,100];
// let i=0;
// for(let val of prices)
//     {
//         console.log(`the value of index ${i} = ${val}`);
//         let offer = val/10;
//         prices[i] = prices[i] - offer;
//         console.log(`after offer include the index ${i} = ${prices[i]}`);
//         i++;
//     }

//     for(let i=0; i<prices.length; i++)
//         {
//             let offer = prices[i]/10;
//             prices[i] -= offer;
//             console.log(`After offer apply the price of index${i} = ${prices[i]}`);
//         }


// // PUSH, POP, SHIFT AND UNSHIFT in arrays
// let heroes= ["superman", "spiderman", "thor"];
//  heroes.push("hulk", "bulk");
//  console.log(heroes);
//  heroes.pop();
//  console.log(heroes);
//  heroes.shift();
//  console.log(heroes);
//  heroes.unshift("Anjaney");
//  console.log(heroes);


// // sLICE and SPLICE and REPLACE
//  let cities = ["Gokak" , "Chikkaodi" , "Athani" ,"Bengaluru","Shivapur"];
//  console.log(cities.slice(1,4));

// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,3,101,102,103);
// // arr.splice(3,0,103);
// // arr.splice(2,1,67);
// console.log(arr);

// // practise set
// let camp = ["Bloomberg" , "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// camp.shift();
// console.log(camp);
// camp.splice(1,1,"Ola");
// console.log(camp);
// camp.push("Amazon");
// console.log(camp);


// // FUNCTIONS IN JS 

// FUNCTIONs call 

// function myFunc() {
//     console.log("Welcome to functions in javascript");
//     console.log("Hi every one");
// };
// myFunc();
// myFunc();
// myFunc();


// // FUNCTIONS sum
// function sum(a,b)
// {
//     x=a+b;
//     return x;
// }

// let res=sum(3,5);
// console.log(res);

// // ARROW FUNCTION 
// const arrowSum = (s,r)=>{
//     console.log(s+r);
// };


// // practice set
// function printVowel(str){
//     count=0;
//     for(const char of str){
        
//         if(char==="a"||char==="e"||char=="i"||char==="o"||char==="u")
//             {
//                 count++;
//             }
//     }
//     console.log(count);
// }


// // forEach LOOPS IN ARRAYS
// function abc()
// {
//     console.log("Hello!");
// }

// function Printabc(abc)
// {
//     return abc;
// }

// let arr=[1,2,3,4,5,6,7];
// arr.forEach(function printVal(val)
// {
//     console.log(val);
// });

// let str=["pune","delhi","assam","bihar"];
// str.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// });


// // square of each values using forEach loop
// let arr=[2,3,4,5,6];

// arr.forEach(function printSqr(val)
// {
//     console.log(val*val);
// });


// // MAP method in array == "it produces new array"
// let nums=[23,54,75,56];

// let newArr=nums.map((val)=>
// {
//     return val*val;
// });
// console.log(newArr);


// // FILTER method in array 
// // print only even nums in an array
// let numb=[98,2,77,4,5,46,7,8,9];

// let res=numb.filter((val)=>
// {
//     return val%2===0;
// });
// console.log(res);


// // REDUCE method in arry
// // to print sum of an array
// let set=[3,54,7,24,64];

// let outCome=set.reduce((res,pre)=>
// {
//     return res+pre;
// });
// console.log(outCome);

// // to print the greater num in an array
// let marks=[57,78,94,82,64,91,89];

// let highMark=marks.reduce((prev,cur)=>
// {
//     return prev>cur? prev : cur;
// });
// console.log(highMark);


// // Practice set
// // to print 90+ score in an array using filter method
// let mark=[67,95,84,91,90,69,93,95,76];

// let topperStd=mark.filter((val)=>
// {
//     return val>90;
// });
// console.log(topperStd);


// // take input from user and print sum using reduse method
// let n=prompt("Enter the number");

// let arr=[];
// for(let i=1; i<=n; i++)
//     {
//         arr[i-1] = i;
//     }
// console.log(arr);

// let res=arr.reduce((res,cur)=>
// {
//     return res+cur;
// });
// console.log("sum = ",res);


// // factorial of an array 
// let product=arr.reduce((res,cur)=>
//     {
//         return res * cur;
//     });
// console.log("Factorial = ",product);

// let n = prompt("enter the non-negetive number:");

// let fact = function factorial(n) 
// {
//     // Base case: if n is 0, return 1
//     if (n == 0) 
// {
//         return 1;
//     }
//     // Recursive case: multiply n by the factorial of n-1
//     return n * factorial(n - 1);
// }


