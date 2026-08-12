
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