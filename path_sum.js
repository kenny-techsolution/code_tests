//https://leetcode.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var pathSum=0;
    var isFound = false;
    if(root===null) {
        return false;
}
    findMatch(root, pathSum);
    
    return isFound;
    
    function findMatch (node,pathSum) {
        var found = false;
        pathSum +=node.val;
        if(node.left===null&&node.right===null) {
            if(pathSum===sum){
                isFound = true;
            }
        } else {
            if(node.left!==null) {
                findMatch(node.left, pathSum);
            }
            if(node.right!==null) {
                findMatch(node.right, pathSum);
            }
        }
    }
};