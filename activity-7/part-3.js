
//1
let total = 0;

for (let i = 0; i <= 5; i++) {
    total = total + i
    
}
console.log("Total:" + total);



//2

let count = 5;
while (count > 0) {
    console.log(count);
    
}


//For code snippet 1: The code is correct logic wise, just that the process is not displayed on the console. Reason being that console.log() function is outside the For loop block.

//For code snippet 2: This will result to an infinite loop, since there is nothing reducing count iteration number. Hence the code will keep running infinitely. To fix this, “count --” has to be added to the code block. Preferably after, console.log(count); 


