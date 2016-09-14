//https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null || q === null) {
        if (p === q) {
            return true;
        } else {
            return false;
        }
    }
    if ((p.left === null && p.right === null) && (q.left === null && q.right === null)) {
        if (p.val === q.val) {
            return true;
        } else {
            return false;
        }
    }

    return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};