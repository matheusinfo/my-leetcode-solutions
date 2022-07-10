function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


// RECURSIVE
// var isSymmetric = function(root) {  
//     return symmetryChecker(root.left, root.right);
// };

// function symmetryChecker(left, right) {
//     if (!left && !right){
//         return true; 
//     }

//     if (left?.val !== right?.val){
//         return false;
//     }

//     return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left);
// }

// ITERATIVE
var checkSymetric = function (left, right){
    while (left.length > 0 && right.length > 0) {
        const leftNode = left.shift();
        const rightNode = right.shift();

        if(!leftNode && !rightNode){
            continue
        }

        if (leftNode?.val !== rightNode?.val) {
            return false;
        }

        left.push(leftNode.left, leftNode.right);
        right.push(rightNode.right, rightNode.left);
    }

    return true;
}

var isSymmetric = function (root) {
   return checkSymetric([root.left], [root.right])
};

console.log(
    isSymmetric(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(null), new TreeNode(3)),
            new TreeNode(2, new TreeNode(3), new TreeNode(null))
        )
    )
);
