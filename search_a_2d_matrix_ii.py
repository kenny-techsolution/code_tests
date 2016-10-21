# https://leetcode.com/problems/search-a-2d-matrix-ii/
class Solution(object):

    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return False

        h = len(matrix)
        w = len(matrix[0])
        left = top = 0
        right = w - 1
        bottom = h - 1

        if (matrix[bottom][right] < target) or (matrix[0][0] > target):
            return False

        while left < right:
            mid = (left + right) / 2
            val = matrix[0][mid]
            if target == val:
                return True
            elif target > val:
                left = mid + 1
            else:
                right = mid
        upper_bound = right
        if target == matrix[0][upper_bound]:
            return True
        left = 0
        right = w - 1

        if h > 1:
            while left < right:
                mid = (left + right) / 2
                val = matrix[h - 1][mid]
                if target == val:
                    return True
                elif target > val:
                    left = mid + 1
                else:
                    right = mid
            lower_bound = left
        else:
            lower_bound = 0
        if target == matrix[h - 1][lower_bound]:
            return True

        if upper_bound == 0:
            upper_bound += 1
        if upper_bound < w:
            upper_bound += 1
        for i in range(lower_bound, upper_bound):
            top = 0
            bottom = h - 1
            while top < bottom:
                mid = (top + bottom) / 2
                val = matrix[mid][i]
                if target == val:
                    return True
                elif target > val:
                    top = mid + 1
                else:
                    bottom = mid
            if target == matrix[bottom][i]:
                return True
        return False
