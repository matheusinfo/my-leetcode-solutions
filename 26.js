var removeDuplicates = function(nums) {
    let i = 0

    for(let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]) {
            nums[++i] = nums[j]
        }
    }

    return ++i
};

console.log(removeDuplicates([1,1,2]))