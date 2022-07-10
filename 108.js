function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


var sortedArrayToBST = function(nums) {
    if(!nums.length) {
        return null
    }

    const midPosition = Math.floor(nums.length / 2);
    const three = new TreeNode(nums[midPosition])

    three.left = sortedArrayToBST(nums.slice(0, midPosition))
    three.right = sortedArrayToBST(nums.slice(midPosition + 1, nums.length))

    console.log({ three })

    return three
};

sortedArrayToBST([-10,-3,0,5,9])