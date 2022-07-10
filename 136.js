// Input: nums = [2,2,1]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const result = {}

    nums.map(num => result[num] = (result[num] || 0) + 1)

    for (let key in result) {
        if(result[key] === 1) {
            return key
        }
    }
};

console.log(singleNumber([2,2,1,2]));