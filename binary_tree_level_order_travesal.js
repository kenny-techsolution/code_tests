//https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var levelArray = [];

    if (root === null) {
        return levelArray;
    }
    traverseTreeByLevel(root, 0);
    return levelArray;

    function traverseTreeByLevel(node, level) {
        if (levelArray[level] === undefined) {
            levelArray[level] = [node.val];
        } else {
            levelArray[level].push(node.val);
        }
        level++;
        if (node.left !== null) {
            traverseTreeByLevel(node.left, level);
        }
        if (node.right !== null) {
            traverseTreeByLevel(node.right, level);
        }
    }
};