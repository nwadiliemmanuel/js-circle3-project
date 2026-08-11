//SNIPPET A

//const getDiscount = (total) => total >= 100 ? total * 0.1 : 0;

//let orderTotal = 120;
//let discount = getDiscount(orderTotal);
//console.log(`Discount: $${discount}`); //output: Discount: $12
//console.log(`Final total: $${orderTotal - discount}`); //output: Final Total: $108
//The discount is $12 because 10% of 120 is 12, and the //final total is 120 - 12 = 108.


//SNIPPET B

//function classifyNumbers(limit) {
 //for (let i = 1; i <= limit; i++ )   {
   // console.log(i % 2 === 0 ? ` ${i} is even` : `${i} is odd`);
  //  }
    

//}

//classifyNumbers(4);

//The output will be:

//1 is odd
//2 is even
//3 is odd
//4 is even




//SNIPPET C
const formatName = (name) => name.trim().toUpperCase();

let rawInput = "  kelechi   ";
console.log(`Welcome, ${formatName(rawInput)} !`);
//The output is:
//Welcome, KELECHI !

//The `trim()` method removes the extra spaces around `"kelechi"`, and `toUpperCase()` changes it to `"KELECHI"`. The formatted name is then inserted into the /template literal.

