

//Step 1 = The program should ask for a student's name and exact score, round the score to the nearest whole number, convert the student's name to uppercase, and display both in a message.

//Step 2 = Student`s name and Student`s score

//Step 3
//Round the score  (Math.round())
//Make the name uppercase (.toUpperCase())


//Step 4 = //GRACE scored 90.


//Step 5
//1. Ask the user to enter the student's name.
//2. Ask the user to enter the student's exact score.
//3. Convert the score from text into a number.
//4. Round the score using `Math.round()`.
//5. Convert the student's name to uppercase using `.toUpperCase()`.
//6. Use a template literal to create the final message.
//7. Display the final message.



//Step 6
//let name = prompt("Enter your name:");
//let score = Number(prompt("Enter your score:"));

//let roundedScore = Math.round(score);
//let upperName = name.toUpperCase();

//alert(`${upperName} scored ${roundedScore}.`);



//Step 7 
//Test 1
//Name: grace
//Score: 89.5

//Result
//GRACE scored 90.


//Test 2
//Name: Chuka
//Score: 100

//Result
//CHUKA scored 100.

//Test 3
//Name:  Bisi (extra spaces)
//Score: 59.3

//Result
 // BISI  scored 59.



 //Step 8

 //let name = prompt("Enter your name:");
//let score = Number(prompt("Enter your score:"));

//let roundedScore = Math.round(score);
//let upperName = name.trim().toUpperCase();

//alert(`${upperName} scored ${roundedScore}.`);












//Part 5
//I would use `Math.random()` to generate a random bonus point between 0 and 5 and add it to the student's score before rounding. To make sure the bonus is always a whole number, I would use `Math.floor(Math.random() * 6)`. This can produce whole numbers from 0 to 5. Then I would add the bonus to the score and use `Math.round()` on the new score.



//let name = prompt("Enter your name:");
//let score = Number(prompt("Enter your score:"));

//let bonus = Math.floor(Math.random() * 6);

//let finalScore = score + bonus;
//let roundedScore = Math.round(finalScore);

//let upperName = name.trim().toUpperCase();

//alert(`${upperName} scored ${roundedScore}.`);