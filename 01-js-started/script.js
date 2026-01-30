//function for last element of the array
// let arr = [1,2,3,4,5]

// let arr2 = [2,34,3,423,4,235,23,52,352,34,2,42,432,42,42,424,4]

// function lastElement(myarr){
//     return myarr[myarr.length-1]
// }

// console.log(lastElement(arr));

//Combination of 2 arrays
// let arr = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// console.log(...arr ,...arr2)


// function randomInt(min,max){
//     return Math.floor(Math.random()* (max - min +1) + min)
// }

// console.log(randomInt(1,18));


// let arr = [1,2,3,"sd",4,"a","as","dasd",5]

// let newArray = arr.filter((n)=>{
//     return typeof n == 'string'
// })

// console.log(newArray);


// let arr = [1,2,312,41,412,41,21,23,124,123,123,12312]


// let exarr = arr.sort((a,b)=>a-b)

// console.log(exarr[exarr.length-1]);


// let obj = {
//     name:"rasd",
//     type: "sdad",
//     number:12123
// }

// function lenObj(object){
//     return Object.keys(object).length;
// }

// let ans = lenObj(obj)
// console.log(ans);

// const people = [
//   { name: "John", gender: "male" },
//   { name: "Jane", gender: "female" },
//   { name: "Julie", gender: "male" },
//   { name: "Alice", gender: "female" },
//   { name: "Bob", gender: "male" },
//   { name: "Charlie", gender: "non-binary" }
// ];

// let newArray = people.filter((n)=> n.gender == "male")
// console.log(newArray);


// let arr = ["a","a","a","a","a","a","a"]

// let nwearr = arr.map(element => {
//     return element.toUpperCase()
// });

// console.log(nwearr);

// let obj = {}


// function nokey(obj){
//     if ( Object.keys(obj).length === 0){
//         return "Nothing"
//     }
//     return "Has data"
// }

// console.log(nokey(obj));

// let arr = [1,2,3,4,5,6]

// let newarr =  arr.map((e)=>{
//     return e*e
// })

// console.log(newarr);

// let arr = [1,2,"sdad",3,4,5,"sda"]

// let string = arr.join(",")
// console.log(string);

// let arr = [1,[2,3] ,["a","s","mkl"] ,4]

// console.log(arr.flat());


// let arr = [1,2,3,4,5,"asd",3]

// function check(arry){
//     let hasString = arry.some(elemnt => typeof elemnt === "string");

//     return hasString ? "There is a string" : "All are numbers"
// }

// console.log(check(arr));

function checkprime(number){
    if(number <= 1 )   return "Not Prime";
    
    if(number === 2 ) return "Prime Number"
    for (let i =2 ; i <= Math.sqrt(number);i++){
        if (number % i ===0){
            return "Not Prime"
        }
    }
    return  "Prime number"
}

let ans = checkprime(4)
console.log(ans);
