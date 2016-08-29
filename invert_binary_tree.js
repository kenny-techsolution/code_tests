//https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 //use recursive solution
var invertTree = function(root) {
    var tempNode = null;
    if(root === null||(root.right===null&&root.left===null)) {
        return root;
    }
    tempNode = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(tempNode);
    return root;
};