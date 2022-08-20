// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const numbers = nums.sort((a, b) => a - b);

    for (let counter = 1; counter < numbers.length; counter++) {
        if (numbers[counter] - 1 !== numbers[counter - 1]) {
            return numbers[counter] - 1;
        }
    }

    return numbers[0] === 0 ? numbers[numbers.length - 1] + 1 : numbers[0] - 1;
};

console.log(missingNumber([1]));
