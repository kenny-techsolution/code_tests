//https://leetcode.com/problems/binary-tree-paths/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var pathArray = [];

    if (root === null) {
        return pathArray;
    }

    findPath(root, "");

    return pathArray;

    function findPath(node, string) {
        if (node.left === null && node.right === null) {
            pathArray.push(string + node.val);
        } else {
            if (node.left !== null) {
                findPath(node.left, string + node.val + "->");
            }
            if (node.right !== null) {
                findPath(node.right, string + node.val + "->");
            }
        }
    }
};