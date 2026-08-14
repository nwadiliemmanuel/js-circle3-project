/* let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold";
console.log(feeling); // Output: hot

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}% ); // Output: Discount: 10%  */

// the error from the above code is that the string in the console.log statement is not properly closed. The closing backtick (`) is missing after the percentage sign (%).

// below is the corrected code:

let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold";
console.log(feeling); // Output: hot

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`); // Output: Discount: 10%