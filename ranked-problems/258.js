// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let result = num;

    while (true) {
        const currentSum = result
            .toString()
            .split("")
            .reduce((a, b) => {
                return a + Number(b);
            }, 0);

        if (currentSum < 10) return currentSum;

        result = currentSum;
    }
};

console.log(addDigits(38));
