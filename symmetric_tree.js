//https://leetcode.com/problems/symmetric-tree/
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
var isSymmetric = function(root) {
    function isSameTree(p, q) {
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
    }

    function invertTree(root) {
        var tempNode = null;
        if (root === null || (root.right === null && root.left === null)) {
            return root;
        }
        tempNode = root.right;
        root.right = invertTree(root.left);
        root.left = invertTree(tempNode);
        return root;
    }

    if (root === null || (root.left === null && root.right === null)) {
        return true;
    }

    root.left = invertTree(root.left);
    return isSameTree(root.left, root.right);
};