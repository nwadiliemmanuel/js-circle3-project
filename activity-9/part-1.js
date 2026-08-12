
// Why would a programmer use a loop instead of just writing the same line of
// code multiple times?
// A programmer uses a loop to repeat a task automatically instead of writing the same code many times.
// A loop helps make programs easier to maintain, since changes only need to be made in one place instead of many repeated lines.
// A loop saves time and reduces mistakes when doing the same task many times.

// What's the difference between a for loop and a while loop? When might you
// prefer one over the other?
// A for loop is used when you know how many times you want the loop to run, whereas a while loop is used when you do not know exactly how many times it should run.
// Eg. A For loop is used when repeating something a fixed number of times (for example, counting from 1 to 10), and a While loop when repeating something until a condition becomes false (for example, counting from 1 to 10 until the variable is less than or equal to 10)

// What is an "infinite loop," and what usually causes one by accident? Discuss
// what you'd look for when debugging one.
// An infinite loop is a loop that keeps running forever because its stopping condition is never met.
// An infinite loop usually happens by accident when:
// The loop condition is always true.
// The variable that controls the loop is not updated correctly.
// A mistake is made in the loop condition.
// When debugging an infinite loop, I would check for the following:
// Check the loop condition to make sure it can become false.
// Check if the loop variable is being updated correctly.
// Look for logic errors that prevent the loop from reaching the stopping condition.



// If a loop is supposed to run 5 times but only runs 4, what part of the loop would you check first?
// I will first check the loop condition because there may be an error that causes the loop to stop one iteration earlier than expected. For example, instead of “<5” I may have written “<4”.



// Think of something you do repeatedly in real life (like brushing your teeth in circular motions). How would you describe that action using loop logic (a starting point, a condition, and a step)?

let brush = 0;
while (teeth === "dirty") {
    brush++;
        if (brush >= 20) {
        teeth = "clean";
    }
}
console.log("Teeth is clean");

