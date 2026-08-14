/*  1. A ternary operator is often described as a "shortcut" for if/else. What do you
think that means, based on what you've seen?

Answer:

1. A ternary operator is called a "shortcut" for if/else because it allows us to make a simple decision using just one line of code instead of several lines. */


/* if (age >= 18) {
    console.log("adult.");
} else {
    console.log("Minor.");
} */

age >= 18 ? console.log("adult.") : console.log("Minor.");

/* 2. Can a ternary operator replace an if/else if/else with three branches? Why or
why not?

Answer:

2. A ternary operator cannot directly replace an if/else if/else with 
three branches because it only supports a single condition and two outcomes. 
For multiple conditions, you would need to nest ternary operators or use a 
series of if/else statements. */


/* 3. When might a ternary operator make code harder to read instead of easier?
Discuss a case where you'd stick with regular if/else

Answer: 
A ternary operator can make code harder to read when the decision involves 
multiple conditions, complicated logic, or several possible outcomes. 
Although a ternary operator can make code shorter, using too many nested
ternaries can make the code confusing and difficult for another programmer
to understand.
    
*/