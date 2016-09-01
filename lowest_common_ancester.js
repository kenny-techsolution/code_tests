//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//find the root where p and q diverge.
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null;
    }
    var value = root.val;
    if (p.val > value && q.val > value) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < value && q.val < value) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};