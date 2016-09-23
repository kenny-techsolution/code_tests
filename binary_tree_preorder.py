# https://leetcode.com/problems/binary-tree-preorder-traversal/
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        self.res = []
        self.traverse(root)
        return self.res

    def traverse(self, node):
        if node == None:
            return
        self.res.append(node.val)
        if node.left != None:
            self.traverse(node.left)
        if node.right != None:
            self.traverse(node.right)
