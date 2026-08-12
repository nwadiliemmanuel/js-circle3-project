
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

