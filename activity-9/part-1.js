//a. What makes a function "anonymous"? If it has no name, how does JavaScript know when to run it? 
//An anonymous function is a kind of function created without a name.
//An anonymous function is usually assigned to a variable, passed as an argument, or stored somewhere else. To run the function, you simply call the variable or argument where it has been assigned to an it runs.
//For example, 
const myFunc = function() {
    console.log("Hi");
}; 
myFunc() //prints “Hi” to the console

//b. 
function square(num) {
    return num * num;

}

const square2 = function (num) {
    return num * num;
};

const suare3 = (num) => {
    return num * num;
};

//First code snippet is a normal function with name square.
//Second code is an anonymous function assigned to the variable square2
//Third code is an arrow function


//Why might a programmer choose an arrow function over a regular function declaration? Can your group think of a downside to always using arrow functions?
//They are shorter and cleaner to write.
//They are great for callbacks and small functions.

//If you stored an anonymous function in a variable, how would you call it later?
//You simply call the variable name followed by a bracket - ().

//Arrow functions are sometimes written even shorter, like (num) => num * num. What do you think happened to the curly braces and the word "return"?
//When there is only one expression, and you remove the curly braces {}, JavaScript automatically returns the result of that expression.


