//Step 1: 
//Step 2: we need the item name, price and quantity
//Step 3: Price × Quantity = Total
//Step 4: 
//Item: Notebook
//   Quantity: 4
//Total: $10.00


//Step 5: 
// Ask the user for the item name.
//Ask the user for the item's price.
//Ask the user how many items they want.
//Multiply the price by the quantity.
//Store the result as the total.
//Display the item, quantity, and total using a template literal.

//Step 6
//let itemName = prompt("What is the item name?");
//let price = Number(prompt("What is the price?"));
//let quantity = Number(prompt("How many are you buying?"));

//let total = price * quantity;

//alert(`${itemName} x ${quantity} = $${total.toFixed(2)}`);




//Step 7
//=====================
//Test 1
//Item: Notebook
//Price: 2.50
//Quantity: 4

//Calculation
//2.50 × 4 = 10

//Result
//Notebook x 4 = $10
//======================

//Test 2
//Item: Pen
//Price: 0.75
//Quantity: 10

//Calculation
//0.75 × 10 = 7.50

//Result
//Pen x 10 = $7.50
//=====================


//Test 3
//Item: Notebook
//Price: 2.50
//Quantity: 0

//Calculation
//2.50 × 0 = 0

//Result
//Notebook x 0 = $0
//======================

//Test 4
//Suppose thr user enters:
//Price: free

//Calculation
//NaN * 4

//Result
//book x 8 = $NaN
//=========================

//Test 5
//Item: Notebook
//Price: 2.50
//Quantity: 1

//Calculation
//2.50 × 1 = 2.50

//Result
//Notebook x 1 = $2.50
//========================


//Step 8

//Added this: total.toFixed(2)
//alert(`${itemName} x ${quantity} = $${total.toFixed(2)}`);




//Part 5
//let itemName = prompt("What is the item name?");
//let price = Number(prompt("What is the price?"));

//let quantity = Number(prompt("How many are you buying?"));
//let discount = 2;

//let total = price * quantity;
//let finalTotal = total - discount;

//alert(`${itemName} x ${quantity} = $${finalTotal.toFixed(2)}`);

//E.g if u enter:
//Item: Notebook
//Price: 2.50
//Quantity: 4

//Result
//Notebook x 4 = $8.00

