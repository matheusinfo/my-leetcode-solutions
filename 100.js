/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
    const three = [p, q]

    
    while(three.length){
        const firstElement = three.shift()
        const secondElement = three.shift()

        if(!firstElement && !secondElement){
            continue
        }

        if(firstElement?.val !== secondElement?.val){
            return false
        }

        three.push(firstElement.left, secondElement.left, firstElement.right, secondElement.right)
    }

    return true
};

console.log(
    isSameTree(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5)
        ),
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5)
        ),
    )
);
