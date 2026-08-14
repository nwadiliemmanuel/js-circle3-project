/* 1.What does it mean for a program to make a "decision"? Give a real-life
example of a decision that could be written as an if statement. */

// example: A program can make a decision by using an if statement to determine whether a certain condition is true or false. e.g

let score = 85;
if (score >= 90) {
  console.log("You Passed");
}

// 2. What's the difference between =, ==, and ===? Why might using the wrong one cause bugs?

/* 
The difference between =, ==, and === is as follows:

= is the assignment operator, used to assign a value to a variable.

== is the equality operator, used to compare two values for equality, but it performs type coercion (it converts the values to the same type before comparing).

=== is the strict equality operator, used to compare two values for equality without type coercion (it checks both value and type).  

Note: Using the wrong operator can cause bugs because it may lead to unexpected behavior. For example, using == instead of === can result in true when comparing values of different types, which may not be the intended logic.
*/


/* 3. If you have an if, an else if, and an else, can more than one block run? Discuss and explain your reasoning

Answer: 
No, more than one block cannot run in a single if...else if...else statement.

JavaScript checks the conditions from top to bottom. As soon as it finds the first condition that is true, it runs that block and then skips the remaining else if and else blocks.

*/
let age = 25;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 21) {
    console.log("Can legally drink in the US");
} else {
    console.log("Under 18");
}

/* How do && (AND) and || (OR) change the way a condition behaves? Can your group come up with an everyday sentence that uses "and" versus "or"
logically?

Answer:

The && (AND) and || (OR) operators allow a program to combine multiple conditions.

1. && — AND

The AND (&&) operator means that all conditions must be true for the entire condition to be true.

 */
{
    let age = 10;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter.");
}
}

// 2. || — OR

// The OR (||) operator means that at least one of the conditions must be true for the entire condition to be true.

{if (age >= 18 || hasID) {
    console.log("You can not enter.");
}}