 var removeElement = function(nums, val) {
    let aux = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            [nums[i], nums[aux]] = [nums[aux], nums[i]];
            aux++;
        }
    }
    
    nums.splice(aux)
    
    return nums.length;
};

console.log(removeElement([3,2,2,3], 3))