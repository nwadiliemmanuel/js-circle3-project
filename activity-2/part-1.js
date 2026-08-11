//1. The "+" operator has two jobs in javascript for -

//Addition - when you are working with numbers. e.g below-
//let result = 30 + 25;
//console.log(result); // 55

//String concantenation -when at least one value is a string e.g below
//let name = "Emmanuel";
//let greeting = "Hello " + name;
//console.log(greeting); // Hello Emmanuel

//===============================================

//2.

//let name = "emmanuel";
//let age = 24;
//console.log("Hello, "+ name + "! You are " + age + " years old." );


//let name = "emmanuel";
//let age = 24;
//console.log(`Hello, ${name}! You are ${age} years old.`);

//NB =I find the template literal version easier to read because I can write the sentence almost normally and insert variables using ${}.


//================================================

//3. 

//console.log(5 + "5");// 55 (string)

//If you try adding `5 + "5"`, the result will be `"55"` (a string) because one of the values is a string, so JavaScript joins them together instead of performing normal addition.



//==============================================

//4

//I think template literals use backticks to make them different from regular strings that use single or double quotes. Backticks tell JavaScript that we want to use features such as `${}` to insert variables and expressions directly into a string.
//e.g
//console.log(`Hello, ${name}! You are ${age} years old.`);



