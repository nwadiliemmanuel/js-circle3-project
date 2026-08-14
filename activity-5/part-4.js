/* Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a
weekday or weekend, then decides the ticket price using conditional logic (e.g.,
discounts for children, seniors, or weekday showings). */

// step 1: If the customer is a child or a senior, they receive a discounted ticket price. Adults pay the regular price. If the movie is shown on a weekday, the customer gets an additional $2 discount. Weekend tickets have no weekday discount.

// Step 2: Identify Inputs: What information does the program need? 

/* Age — to determine whether the customer is a child, adult, or senior.
Day type — to determine whether the movie is being watched on a weekday or weekend.
 */

/* Step 3: Identify Processing: What conditions determine the final price?

Answer: 
The program first checks the customer's age to determine the base ticket price. Children under 13 and seniors 60 or older pay $8, while adults aged 13–59 pay $12. The program then checks whether the day is a weekday. If it is a weekday, $2 is deducted from the base price. If it is a weekend, there is no additional discount. The resulting amount is the final ticket price.

*/

/* Step 4: Identify Outputs: What information does the program need to display?

Answer: The program will display the final ticket price based on the customer's age and the day type (weekday or weekend). It will also provide a message indicating whether the customer received any discounts based on their age and the day of the week.

*/

/* Step 5: Plan the Solution: Write out your decision logic as plain-English rules before coding.
 
First, the program will ask for the user's age and whether the movie is on a weekday or weekend. It will use the user's age to determine the base ticket price. Children under 13 and seniors 60 or older will pay $8, while adults aged 13–59 will pay $12. The program will then check the day type. If it is a weekday, $2 will be deducted from the ticket price. If it is a weekend, no discount will be applied. Finally, the program will display the final ticket price.

*/

/* Step 6 — Write the Code: Implement your rules using if/else if/else.
*/

let age = 13; // Example age input
let dayType = "weekday"; // Example day type input

 
if (age < 13) {
    ticketPrice = 8;
} else if (age < 60) {
    ticketPrice = 12;
} else {
    ticketPrice = 8;
}

// Apply the weekday discount
if (dayType === "weekday") {
    ticketPrice = ticketPrice - 2;
}

// Display the final price
console.log(`Your ticket price is $${ticketPrice}.`);

// Step 7 — Test the Program:

/* let age = 8; // Example age input
let dayType = "weekday"; // Example day type input
let ticketPrice;
output: $6 */

/* Age: 70, Day: weekend output: $8 */

/* Age: 30, Day: weekend output: $12 */

/* Age: 17, Day: weekday output: $10 */


/* Step 8 — Improve the Solution: Are there overlapping conditions that could cause confusion? Discuss how to order your conditions to avoid mistakes.  

Answer:
Overlapping conditions can cause mistakes because JavaScript checks if and else if conditions from top to bottom and runs the first condition that is true. To avoid errors, conditions should be ordered carefully from the most specific condition to the broader conditions. In our movie ticket program, we check for children under 13 first, then adults under 60, and finally use else for seniors 60 and older. This prevents one condition from accidentally capturing people who belong to another category.
*/