//https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
 //opposit of the max depth question.
var minDepth = function(root) {
    return min(root);
    function min(node) {
        var leftDepth = 0;
        var rightDepth = 0;
        if(node===null){
            return 0;
        }
        
        if(node.left===null&&node.right===null) {
            return 1;
        }
        
        if(node.left!==null) {
            leftDepth = 1+min(node.left);
        } 
        if(node.right!==null) {
            rightDepth = 1+min(node.right);
        }
        //if the child node doesn't exist, then return the one that exist. 
        if(leftDepth===0) {
            return rightDepth;
        }
        if(rightDepth===0) {
            return leftDepth;
        }
        
        return ((leftDepth<rightDepth)?leftDepth:rightDepth);
    }
};