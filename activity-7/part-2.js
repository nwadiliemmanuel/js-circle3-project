
//SNIPPET A
for (let i = 0; i <= 5; i++) {
console.log(i);


//Output:
//1
//2
//3
//4
//5


    
}

//SNIPPET B
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
    
}
console.log("Liftoff!");


//Output: 
//Countdown: 3
//Countdown: 2
//Countdown: 1
//Liftoff!




//SNIPPET C
for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
    
}


//output:
0
2
4
6
8
//The loop starts at 0, prints it, then adds 2 each time until i is no longer less than 10. This means it prints all the even numbers less than 10.

