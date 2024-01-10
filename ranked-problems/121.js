// You want to maximize your profit by choosing a single day 
// to buy one stock and choosing a different day in the future 
// to sell that stock.

// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.

// CASE 0:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) 
// and sell on day 5 (price = 6), profit = 6-1 = 5.

// CASE 1:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;

    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }

    // Math.min(min, prices[i]) - Math.max(max, prices[i] - min)
    // Math.min(9999, 3) => 3 - Math.max(0, 3 - 3) => 0 [1]
    // Math.min(3, 2) => 2 - Math.max(0, 2 - 2) => 0 [2]
    // Math.min(2, 6) => 2 - Math.max(0, 6 - 2) => 4 [3]
    // Math.min(2, 5) => 2 - Math.max(4, 5 - 2) => 4 [4]
    // Math.min(2, 0) => 0 - Math.max(4, 0 - 0) => 4 [5]
    // Math.min(0, 3) => 1 - Math.max(4, 3 - 0) => 0 [6]

    return max;
};

console.log(maxProfit([3,2,6,5,2,7,1]))