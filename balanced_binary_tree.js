//https://leetcode.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null || (root.right === null && root.left === null)) {
        return true;
    }

    var lDepthTop = findDepth(root.left);
    var rDepthTop = findDepth(root.right);
    //if the root left and right doens't differ by more than 1, than it's balanced. then also find out if the left and right node are also balanced. and do it recursively. 
    var diff = (Math.abs(lDepthTop - rDepthTop) <= 1);

    return (diff && isBalanced(root.left) && isBalanced(root.right));
};

function findDepth(node) {
    if (node === null) {
        return 0;
    }
    var lDepth = 1 + findDepth(node.left);
    var rDepth = 1 + findDepth(node.right);
    return (lDepth > rDepth) ? lDepth : rDepth;
}