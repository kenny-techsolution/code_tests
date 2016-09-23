# https://leetcode.com/problems/validate-binary-search-tree/
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        self.array = []
        self.in_order_array(root)
        return all(self.array[i] < self.array[i + 1] for i in xrange(len(self.array) - 1))

    def in_order_array(self, node):
        if node:
            if node.left:
                self.in_order_array(node.left)
            self.array.append(node.val)
            if node.right:
                self.in_order_array(node.right)
