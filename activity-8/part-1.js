// Activity 8: Reusable Machines 

// Part 1: Group Discussion 

// 1. A Vending machine is similar to a function because a function
// can also be used anytime instead of repeating ourself

// 2. A parameter are those values we assign when defining a function
// while an Argument are those values we put when calling the function

// 3. Writing a function saves time instead of repetation and if 
// correction is to be made, it will be done once

// 4. if a function is declared and never called, the function
// will not do anything until it is called

// 5. Yes a function can have morethan one parameter and if
// when a function is called without an argument it gives undefine



// Part 2: Predict the Output 
// Snippet A 
function greet(name){
    console.log("Hello " + name + "!");  
}

greet("Ifeoma")    //Output = Hello Ifeoma!
greet("David")     //Output = Hello David!


// Snippet B
function addNumbers(a,b){
    console.log(a + b);  
}
addNumbers(4,7)   //Ouput 11
addNumbers(10)    //NAN


// Snippet C
function sayHi(){
    console.log("Hi there"); 
}

console.log("Before calling the function"); //Before calling the function
sayHi();                                    //Hi There
console.log("After calling the function"); //after calling the function



// Part 3: Debugging Challenge 
function calculateArea(length, width){
    console.log(length * width);
    
}

function displayMessage(msg){
    console.log(msg); 
}
displayMessage("calculate area ready")
calculateArea(5,10)

// Error: The first function does not have a closing tag, and is syntax
// error



// Part 4: Collaborative Technical Challenge 

// step1: We want to build a Tip Calculator Toolkit with two functions:
// calculateTip() — calculates the tip amount from a bill and tip percentage.
// formatMessage() — creates a clear, readable message showing the bill, tip, and total.

// step2: The program needs: Bill amount — e.g. 5000 percentage — e.g. 10 for 10%

// step3: The tip can be calculated with: Tip = Bill × (Tip Percentage ÷ 100)
// Total = Bill + Tip

// step4: The first function should receive the bill and percentage and return the tip amount.

// step5: the program will use two functions for readability

// step6:
console.log("...........................................");

function calculateTip(bill, tipPercantage){
     let tip = bill * (tipPercantage/100)
     return tip
}

let tip = calculateTip(5000, 10)
console.log(tip);

// second function
function formatMessage(bill, tip) {
    let total = bill + tip;
    return `Bill: ₦${bill}
    Tip: ₦${tip}
    Total: ₦${total}`;
}

console.log(formatMessage(4000, 20));
