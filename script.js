//write a javascript program to sepearte all the details of users which contains
// userid==3 in the following api

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>(res.json()))
// .then(json=>{
//     console.log(json);
//     let data = json.filter((value)=>{
//         if(value.id==3){
//             console.log(value);
//         }
//     })
// })

//write a javascript function to get the current date
// function currentDate(){
//     let x =new Date
//     let date = x.toDateString()
//     console.log(date);
// }
// currentDate()


//write a javascript program which iterates the integers from 1 to 100.
//But for multiple of three print "Flizz"

// function fun(n){
//     for(let i=1 ; i<=n ; i++){
//         if(i % 3==0 && i % 5==0){
//             console.log(i + " FIZZBUZZ");
//         }
//         else if(i % 3 ==0){
//             console.log(i + " FIZZ");
//         }  
//         else if(i% 5 ==0){
//             console.log(i +" BUZZ");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// fun(100)


//write a javascript program to print all the datas with their id and title in the
//following api in the format==> id:id from data title:title from data

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(json=>{
//     console.log(json);
//     let data = json.map((value)=>{
//     console.log("id: "+value.id);
//     console.log("name: "+value.name);
//     })
    
// })


//clone an array using object.assign, JSON.parse and JSON.stringify and spreadoperator

// let array = [1,22,33,44,55,66,77,88,99];

// let clone = JSON.parse(JSON.stringify(array))

// console.log(clone);

// let asign =[];
// Object.assign(asign, {...array})
// console.log(asign);

//use filter method to separate all even numbers in the array of numbers from 1 t0 20

// function even(n){
//     let x =[]
//     for(let i=1; i<=n; i++){
//         x.push(i)
//     }
//     let even = x.filter((value)=>{
//         if(value%2==0){
//         console.log(value);
//         }
//         return 
//     })
// }
// even(40)



//



//use filter method to separate all odd numbers in the array of numbers from 1 t0 20

// function odd(n){
//     let x =[]
//     for(let i=1; i<=n; i++){
//         x.push(i)
//     }
//     let even = x.filter((value)=>{
//         if(value%3==0){
//         console.log(value);
//         }
//         return 
//     })
// }
// odd(40)


//write an javascript program to check whethear the given number is present in array and 
//return true if present and falseif doesnt exist

// let arr = [2,3,3,5,6,8,10,30,49,27];

// function check(n){
//     let arr = [2,3,3,5,6,8,10,30,49,27];
//     let find = arr.filter((value)=>{
//         if(value==n){
//             console.log(true);
//         }
//         else{
//             console.log(false);
//         }
//     })
// }
// check(2)


//use filter method to print all the number that ar divisible by 2 in array
//of numbers from 1-20



// function findDivisibleBy(n){
//     if(n<=0){
//         return false
//     }
//     else if(n %2==0){
//         console.log(n + " is divisible by 2");
//     }
//     else{
//         console.log(n + " is not divisible by 2");
//     }
   
// }
// findDivisibleBy(3)