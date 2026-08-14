// Snippet A:

let temperature = 15;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}

//  The Output of the above code will be "It's cool." because the temperature is 15, which does not satisfy any of the conditions in the if or else if statements. Therefore, the else block will execute.

// Snippet B:

let age = 20;
let hasID = false;
if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}
// Output of the above code will be "Entry denied." because the condition in the if statement requires both age to be 18 or older and hasID to be true. Since hasID is false, the else block will execute.


// Snippet C:

let password = "1234";
if (password === "0000") {
    console.log("Password changed!");
} else {
    console.log("No change.");
}

// The output of the above code will be "No change." because the password variable is set to "1234", which does not match the string "0000" in the if statement. Therefore, the else block will execute.