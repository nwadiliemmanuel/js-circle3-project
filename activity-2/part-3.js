1.

//let firstName = "Tunde";
//let lastName = "Okafor";
//let fullName = firstName + " "  lastName;
//console.log("Welcome, " + fullname + "!");

//Error 1 Missing (+)
//let fullName = firstName + " "  lastName;
//There needs to be a + between " " and lastName:


//Error 2  fullname vs fullName
//console.log("Welcome, " + fullname + "!");
//The variable was created as: let fullName,But you're trying to use:fullname



//Correct code
//let firstName = "Tunde";
//let lastName = "Okafor";

//let fullName = firstName + " " + lastName;

//console.log("Welcome, " + fullName + "!"); final output: Welcome, Tunde Okafor!





2.
//let itemPrice = "15"
//let total = itemPrice + 5;
//console.log(`Your total is $${total}`);

//Error 
//The problem is that `itemPrice` is stored as a string because `15` is inside quotation marks. When we use the `+` operator with the string `"15"` and the number `5`, JavaScript joins them together instead of adding them. Therefore, the result will be `"155"` instead of `20.


//Correct Code
let itemPrice = 15;

let total = itemPrice + 5;

console.log(`Your total is $${total}`); //final output: Your total is $20


