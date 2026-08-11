//Step 1

//The program will ask the user for an item name, price, and quantity. It will calculate the subtotal, check if the order qualifies for free shipping, and then display a formatted receipt showing the order information and final total.


//Step 2

//Item name
//Price
//Quantity







//Step 4

//Item: Backpack
//Price: $30.00
//Quantity: 2
//Subtotal: $60.00
//Shipping: FREE
//Total: $60.00



//Step 5
//1. Ask the user for the item name.
//2. Ask the user for the price.
//3. Ask the user for the quantity.
//4. Convert the price and quantity into numbers.
//5. Use a function to calculate the subtotal.
//6. Check whether the subtotal qualifies for free shipping.
//7. Set the shipping status based on the result.
//8. Calculate the final total.
//9. Display the item, price, quantity, subtotal, shipping, and final total in a formatted receipt.


//Step 6
let itemName = prompt("What is the item name?");
let price = Number(prompt("What is the price?"));
let quantity = Number(prompt("How many are you buying?"));

//Then u need a function to calculate the subtotal

function calculateSubtotal(price, quantity) {
    return price * quantity;
}


let subtotal = calculateSubtotal(price, quantity);

let shipping = subtotal >= 50 ? "Free": "$5";


alert(`
Item: ${itemName}
Price: $${price.toFixed(2)}
Quantity: ${quantity}
Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping}
`);

//Step 7
//Test 1
//Item: Backpack
//Price: 30
//Quantity: 2
 
//Result
//item: Back
//Price: 30
//Quantity: 2
//subtotal: $60.00
//Shipping: Free


//Test 2

//Item: Pen
//Price: 1.5
//Quantity: 20
//Subtotal:$30.00
//Shipping: 5

//Result
//Item: Pen
//Price: 1.5
//Quantity: 20
//Subtotal:$30.00
//Shipping: 5