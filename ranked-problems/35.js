// First case:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Second case:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
var searchInsert = function(nums, target) {
    const findTarget = nums.indexOf(target) 

    if(findTarget !== -1){
        return findTarget
    }

    const result = nums.findIndex(num => num > target)

    return result !== -1 ? result : nums.length
};

console.log(searchInsert([1,3,5,6], 7))