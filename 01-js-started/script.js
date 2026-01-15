// // loops and Conditionals in Js

// // - Understanding Condition Operator in JavaScript - [ 'if' , 'else' , 'if-else', ' Ternary Operator, switch case]
// // 'for' loop in JavaScript
// // 'While' Loop in javascript
// // 'do ... While' in Javascript
// // 'forEach' in JavaScript
// // 'for in' in Javascipt
// // 'for of' in Javascipt
// //  Recusion in Javascipt
// // Loop control statements - [ 'break' ,'continue' ]


// //FOR LOOP:
// // A for loop is best when we know exactly how many times we need to run a block of code

// //for loop:
// /*
// for( initailization; condition; update){
//     initailization = how are you going to start this loop 
//     condition = based on which condition you want to run this loop
//     update = how do you want to update the value 
// }
// */
// // let a  = prompt("Enter the number:")
// // for(let i=1;i<11;i++){
// //     console.log(`${a} * ${i} = ${(a*i)+2}`);   
// // }


// // for (let a =1; a <= 5 ; a++){
// //     console.log(a);
    
// // }

// //addition of even number
// // let sum= 0
// // for(let a=1; a <=100;a++){
// //     if(a%2===0){
// //         sum += a;
// //     }
    
// // }
// // console.log(sum);

// // let lang = "JavaScript";

// // for (let i=0; i < lang.length ; i++){
// //     console.log(lang.charAt(i));   
// // }

// //NESTED LOOP

// // for( let i = 1 ; i<=3; i++){
// //     for(let j = 1;j<=3;j++){
// //         console.log(`Row = ${i}, Col ${j}`);
        
// //     }
// // }

// //BREAK and CONTINUE

// // for (let i=1 ; i<=5;i++){
// //     if (i===3){
// //         break;
// //     }
// //     console.log(i);
    
// // }

// // for( let i= 1; i<=5 ;i++ ){
// //     if(i==3){
// //         continue
// //     }
// //     console.log(i);
    
// // }

// // **I SOLVED ALL QUESTIONS**

// // Level 1 - Pure Beginner Practice

// // 1. Print numbers from 1 to 10
// // Loop from 1 to 10 and print each number.

// // for (let i = 1; i<=10;i++ ){
// //     console.log(i);   
// // }

// // 2. Print only even numbers from 1 to 10
// // Use a loop and condition to print only even ones.

// // for (let i = 1; i<=10;i++ ){

// //     if(i%2==0){
// //         console.log(i);   
// //     }
// // }


// // 3. Print the word "Yes" 5 Times
// // Reverse using a loop

// // for(let a= 1;a<=5;a++){
// //     console.log(`${a} = Yes`);
    
// // }

// // 4. Print wether numbers from 1 to 10 are even or odd
// // For each number, check: even -> "Even", else -> "odd"

// // for (let i = 1; i<=10;i++ ){

// //     if(i%2==0){
// //         console.log("Even" ,i);   
// //     }else{
// //         console.log("Odd" , i);
        
// //     }
// // }

// // 5. Ask user for a number and say if it's positive or negative
// // Use prompt() and a conditional.

// // let UserNum = prompt("Enter your Number: ")
// // if(UserNum == 0){
// //     console.log(`${UserNum} is nutral`);
// // }else if( UserNum > 0 ){
// //     console.log(`${UserNum} is Postive`);
// // }else{
// //     console.log(`${UserNum} is Negative`);
    
// // }

// // 6. Ask user for a number and say if it's positive or negative
// // Use prompt() and a conditional.

// //same as 5th

// // 7. Ask user's age and check if eligible to vote
// // If age >= 18 -> "Eligible", else -> "Not eligible"

// // let userAge= prompt("Enter your age")
// // if(userAge>= 18){
// //     console.log("Eligible");
// // } else {
// //     console.log("Not eligible")
// // }

// // 8. Print multiplication table of 5
// // Use loop to print 5 x 1 to 5 x 10.

// // let a  = prompt("Enter the number:")
// // for(let i=1;i<11;i++){
// //     console.log(`${a} X ${i} = ${(a*i)}`);   
// // }

// // 9. Count how many numbers between 1 and 15 are greater than 8
// // Loop and count conditionally

// // let counter =0 
// // for(let i = 1; i<=15;i++){    
// //     if(i >8){
// //         counter+=1;
// //     }
// // }
// // console.log(counter);

// 10. Ask user for password and print access status
// Hardcoded correct password, Compare with user input.

// let userName = "rohan"
// let password = "dev"

// let userPrompt = prompt("Enter username:")
// let passwordPrompt = prompt("Enter password:")

// if(userPrompt === userName && passwordPrompt === passwordPrompt){
//     console.log("Login Success");
// }
// else{
//     console.log("Either user or pass is incorrect");
    
// }
// // Level 2 - Slightly Tougher but Logical

// // 11. Allow only 3 attemps to enter correct password
// // If user gets it right early, stop. If not -> "Account Loacked"
// let a;
// let password ="dev"
// for (let a =1 ; a <=3 ; a++){
//     let passPrompt = prompt(`enter password (Attempt ${a}/3):`);
//     if(passPrompt === password){

//         console.log("Access gained");
//         break;
//     }
//     if (a === 3){
//         console.log(`Account is locked Sorry`);
        
//     }
// }

// // 12. Ask user for words until they type "stop". Count how many times they types "yes"
// // Loop until "stop" is typed. Count "yes".

// let counterYes = 0;
// let userWord = ""; 

// while (userWord !== "stop") {
//     userWord = prompt("Enter a word (type 'stop' to end):").toLowerCase();

//     if (userWord === "yes") {
//         counterYes++;
//     } else if (userWord === "stop") {
//         console.log("You entered stop.");
//     }else if(userWord == ""){
//         console.log("you have entered something other than the 'yes' or 'no' ");
//         break
//     }
// }

// console.log("Total 'yes' entries: " + counterYes);



// // 13. Print numbers divisible by 7 from 1 to 50
// // Use modulo % and loop.

// for(let i =1 ; i<=50;i++){
//     if(i%7==0){
//         console.log(i);
        
//     }
// }

// // 14. Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.

// let sum= 0
// for(let a=1; a <=30;a++){
//     if(a%2!==0){
//         sum += a;
//     }
// }
// console.log(sum);

// // 15. Keep asking number until user enters an even number.
// // Use while loop. Stop only if input is even

// //While Loop
// let number;

// while (number % 2 !== 0) {
//   number = parseInt(prompt("Enter a number:"));
// }
// console.log("You entered an even number: " + number);

// // 16. Print numbers between two user inputs
// // Input starts and end using prompt() -> print all between

// let firstNum = parseInt(prompt("Enter first number:"));
// let secondNum = parseInt(prompt("Enter second number:"));

// console.log(`Your First number: ${firstNum}`);
// console.log(`Your Second number: ${secondNum}`);

// if (firstNum < secondNum) {
//     for (let i = firstNum + 1; i < secondNum; i++) {
//         console.log(`Current Number: ${i}`);
//     }
// } else if (firstNum > secondNum) {
//     for (let i = firstNum - 1; i > secondNum; i--) {
//         console.log(`Current Number: ${i}`);
//     }
// } else {
//     console.log("The numbers are equal; there are no numbers between them.");
// }

// 17. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
// let counter = 0;

// for(i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//         counter++;
//         if( counter ===3){
//             break
//         }
//     }
// }


// 18. Ask user 5 numbers. Count how many are positive. 
// Use loop + condition + counter

// let PostiveCounter= 0

// for(i=1;i<=5;i++){
//     let userNumber = parseInt(prompt("Enter your number:"))
//         if(userNumber > 0){
//             console.log(`${userNumber} is Positive`);
//             PostiveCounter++;
//         }else{
//             console.log(`${userNumber} is Negative`);
//         }
// }
// console.log(`Total Postive: ${PostiveCounter}`);




// 19. ATM Simulator - Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance - deduct
// Else -> print "Insufficient Balance"


// Functions =
/*
    Arrow function,
    Annnonymous,
    Callback,
    Nested function,
    Higher Order function,
    
 */



 