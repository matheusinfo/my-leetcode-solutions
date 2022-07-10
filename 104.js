function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var maxDepth = function(root) {
    if(!root) return 0

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1
};

console.log(maxDepth(
    new TreeNode(
        1,
        new TreeNode(2, new TreeNode(null), new TreeNode(3)),
        new TreeNode(2, new TreeNode(3), new TreeNode(null))
    )
))