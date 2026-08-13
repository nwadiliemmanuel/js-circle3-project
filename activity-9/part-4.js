//Converting a percentage to a decimal

//Step 1 — Understand the Problem:  The algorithm (code) will ask for an input which will be in percentage, then it will convert the percentage into decimal form. 

// Step 2 — Identify Inputs: A number that will be in percentage 

// Step 3 — Identify Processing: The formular will simply be to divide the input value by 100. 

// Step 4 — Identify Outputs: The result will be in decimal form.

// Step 5 — Plan the Solution: A single arrow function is sufficient for this process 

//Step 6 — Write the Code: 
const percentageToDecimal = (percentage) => percentage / 100
console.log("The decimal is: " + percentageToDecimal(25));

// Step 7 — Test the Program: 
// Percentage to decimal: 25 
// Output: The decimal is: 0.25

// Step 8 — Improve the Solution: Arrow functions are easier to write, hence the feeling that it is a shortcut form. Whereas, using the regular version feels clearer and more descriptive


//=============================


//Calculating a rectangle's area

// Step 1 — Understand the Problem:  The algorithm (code) solves the problem of calculating a rectangle’s area quickly. 

// Step 2 — Identify Inputs: two inputs one will be the height, the other will serve as the width.

// Step 3 — Identify Processing: The formular will multiply the height by the width. 

// Step 4 — Identify Outputs: The result will be a multiple of the height and width.

// Step 5 — Plan the Solution: A single arrow function is sufficient for this process 

//Step 6 — Write the Code: 
const areaOfRectangle = (length, width) => length * width
console.log("Area of Rectangle is: " + areaOfRectangle(4, 9));
console.log("Area of Rectangle is: " + areaOfRectangle(10, 5));

// Step 7 — Test the Program: 
// Rectangle area: length 4, width 9 
// Rectangle area: length 10, width 5 
// Output: Area of Rectangle is: 36
// Area of Rectangle is: 50


// Step 8 — Improve the Solution: Arrow functions are easier to write, hence the feeling that it is a shortcut form. Whereas, using the regular version feels clearer and more descriptive





// Converting Celsius to Fahrenheit

// Step 1 — Understand the Problem:  The algorithm (code) solves the problem of converting temperature in Celsius to Fahrenheit quickly. 

// Step 2 — Identify Inputs: An input which will be in celsius.

// Step 3 — Identify Processing: The formular will multiply the input by 1.8 and add 32 to the multiple. 

// Step 4 — Identify Outputs: The result will be in degrees Fahrenheit.

// Step 5 — Plan the Solution: A single arrow function is sufficient for this process 

//Step 6 — Write the Code: 
const celsiusToFarenheit = (celsius) => (celsius * 1.8) + 32
console.log ("The Farenheit is: " + celsiusToFarenheit(35) + " °F");
console.log ("The Farenheit is: " + celsiusToFarenheit(100) + " °F");

// Step 7 — Test the Program: 
// Celsius to Fahrenheit: 35 
// Celsius to Fahrenheit: 100 
// Output: The Farenheit is: 95 °F
// The Farenheit is: 212 °F


// Step 8 — Improve the Solution: Arrow functions are easier to write, hence the feeling that it is a shortcut form. Whereas, using the regular version feels clearer and more descriptive





//Part 5: Extension Challenge

const FarenheitToCelsius = (farenheit) => (farenheit - 32) / 1.8
console.log ("The Celsius is: " + FarenheitToCelsius(95) + " °C");
console.log ("The Celsius is: " + FarenheitToCelsius(212) + " °C");


//Output: The Celsius is: 35 °C
//The Celsius is: 100 °C
