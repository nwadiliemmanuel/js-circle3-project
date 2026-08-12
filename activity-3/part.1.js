


// function birthYear(){
//     const greetUser  = prompt("Enetr Your Name")
//     const age  = prompt("Enetr Your Age")
//    const year = new Date().getFullYear() - age
//    return `Welcome ${greetUser} you are born in ${year}`
// }


// console.log(birthYear());
// alert(birthYear())




// Activity 3: The Type Detective Agency 

// Part 1: Group Discussion 

// 1.  prompt() returns a string even when the user 
// inputs a Number This can cause problems because JavaScript may treat the input as text 
// instead of performing mathematical operations

// e.g
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");

// let result = num1 + num2;
// console.log(result);
// num1 = 5 and num2 = 10 the output will be 510 instead of 25
// To fix it we convert the string to a Number before using it.


// 2.  Number() converts a string to a number
// 2b. parseInt() converts Converts only the integer 
// (whole number) part and ignores
//  anything after a non-numeric character. e.g parseInt("25.5") == 25
// 2c. pasrseFloat() converts decimal numbers e.g parseFloat("25.5kg") == 25.5

// NB:when you need a real number, we use Number(), when we need a whole
// value we use parseInt() and parseFloat() when we need a decimal value


// Part 2: Predict the Output 

// 1. Snippet A
let input = "42"
let converted = Number(input)
console.log(input + 8);
console.log(converted + 8);

// Output1: 428
// Output2: 50


// 2. Snippet B

let name = " Chidimma  "
console.log(name.trim());
console.log(name.length);

// Ouput1: Chdimma (white spaces removed)
// Ouput2: 11 (white spaces included)


// 3. Snippet C
let word = "javascript"
console.log(word.toUpperCase());
console.log(word);
// Output1: JAVASCRIPT
// Output2: javascript



// Part 3: Debugging Challenge 

// code1
let userAge = prompt("Enter Age: ")
let nextYearAge = userAge + 1
console.log("Next year you will be ", + nextYearAge);

// NB: the problem is prompt returns a string so instead of adding
// to 1 it merges them. e.g say user enters 22, output becomes 221
// to fix it we use Number() convertion as below

let userAge = Number(prompt("Enter Age: "))
let nextYearAge = userAge + 1
console.log("Next year you will be ", + nextYearAge);
// Output = 21 if user enters 20 as age


// code2
let city = "lagos"
console.log(city.ToUpperCase());
// error: ToUpperCase() instead of toUpperCase()



// Part 4: Collaborative Technical Challenge 
// step1: The finished program will output lowerCase first Name and number
// step2: The programs needs name input and Number inputs
// step3: Number() conversion, trim() conversion and toLowerCase() conversion
// step4: Name: akedunle, Number: 7
// step5: i will create a variable and collects users name and number
// and and convert the name using toLowerCase() and trim() to clear white
// spaces and convert the number using Number() conversion and output them

const firstName = prompt("Enter first name").trim().toLowerCase()
const favoriteNumber = Number(prompt("Enter favourite Number"))
console.log(`Name: ${firstName}, Number: ${favoriteNumber}`);

// trim() should be used incase the user includes white spaces


// Part 5: Extension Challenge 
let firstName = prompt("Enter your first name:").trim().toLowerCase();

if (firstName.length > 8) {
    firstName = firstName.slice(0, 8);
}

let favoriteNumber = Number(prompt("Enter your favorite number:"));

let username = `${firstName}${favoriteNumber}`;

console.log(`Your username is: ${username}`);













