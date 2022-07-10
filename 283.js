// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
    let size = nums.length;

    for (let i = size; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
};

moveZeroes([0, 0, 1]);
