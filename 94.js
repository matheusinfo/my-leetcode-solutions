/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
  const stack = []
  const res = []

  while(root || stack.length){
    if(root){
        stack.push(root)
        root = root.left
    }else {
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
  }

  return res
};

console.log(
  inorderTraversal(
    new TreeNode(1,
      new TreeNode(2, 
        new TreeNode(3), 
        new TreeNode(4)
      ),
      new TreeNode(5)
    )
  )
);