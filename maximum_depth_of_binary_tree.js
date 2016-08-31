//https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return max(root);

    function max(node) {
        if (node === null) {
            return 0;
        }
        var rightDepth = 1;
        var leftDepth = 1;
        if (node.left !== null) {
            leftDepth += max(node.left);
        }
        if (node.right !== null) {
            rightDepth += max(node.right);
        }
        return ((rightDepth > leftDepth) ? rightDepth : leftDepth);
    }
};