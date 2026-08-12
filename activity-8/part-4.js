// Part 4: Collaborative Technical Challenge 

// step1: We want to build a Tip Calculator Toolkit with two functions:
// calculateTip() — calculates the tip amount from a bill and tip percentage.
// formatMessage() — creates a clear, readable message showing the bill, tip, and total.

// step2: The program needs: Bill amount — e.g. 5000 percentage — e.g. 10 for 10%

// step3: The tip can be calculated with: Tip = Bill × (Tip Percentage ÷ 100)
// Total = Bill + Tip

// step4: The first function should receive the bill and percentage and return the tip amount.

// step5: the program will use two functions for readability

// step6:
console.log("...........................................");

function calculateTip(bill, tipPercantage){
     let tip = bill * (tipPercantage/100)
     return tip
}

let tip = calculateTip(5000, 10)
console.log(tip);

// second function
function formatMessage(bill, tip) {
    let total = bill + tip;
    return `Bill: ₦${bill}
    Tip: ₦${tip}
    Total: ₦${total}`;
}

console.log(formatMessage(4000, 20));
