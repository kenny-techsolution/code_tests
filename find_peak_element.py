# https://leetcode.com/problems/find-peak-element/
class Solution(object):

    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left = 0
        right = len(nums) - 1

        while left < right - 1:
            mid = (left + right) / 2
            if nums[mid] < nums[mid + 1]:
                left = mid
            else:
                right = mid

        if nums[right] > nums[left]:
            return right
        else:
            return left
