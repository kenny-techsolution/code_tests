//https://leetcode.com/problems/count-complete-tree-nodes/
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
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    var left = findLeftDepth(root);
    var right = findRightDepth(root);
    if (left === right) {
        return (Math.pow(2, left) - 1);
    } else {
        return (1 + countNodes(root.left) + countNodes(root.right));
    }
};

function findLeftDepth(tree) {
    var depth = 0;
    while (tree !== null) {
        tree = tree.left;
        depth++;
    }
    return depth;
}

function findRightDepth(tree) {
    var depth = 0;
    while (tree !== null) {
        tree = tree.right;
        depth++;
    }
    return depth;
}