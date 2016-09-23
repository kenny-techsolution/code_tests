# https://leetcode.com/problems/search-for-a-range/
class Solution(object):

    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # handle none element array
        if len(nums) == 0:
            return [-1, -1]
        # handle one element array
        if len(nums) == 1:
            if nums[0] == target:
                return [0, 0]
            else:
                return [-1, -1]

        start = 0
        end = len(nums) - 1
        # handle two element array
        if len(nums) == 2:
            if nums[start] == target and nums[end] == target:
                return [0, 1]
            elif nums[start] == target:
                return [0, 0]
            elif nums[end] == target:
                return [1, 1]
            else:
                return [-1, -1]
        # handle three and above element array
        while start < end:
            mid = start + (end - start) / 2
            print(mid)
            if target == nums[mid]:
                break
            elif target > nums[mid] and target <= nums[end]:
                start = mid + 1
            else:
                end = mid

        if nums[mid] != target and nums[end] != target:
            return [-1, -1]
        elif nums[mid] != target and nums[end] == target:
            mid = end

        left_index = mid
        right_index = mid

        while 0 <= left_index and nums[left_index] == target:
            left_index = left_index - 1
        while len(nums) > right_index and nums[right_index] == target:
            right_index += 1

        return [left_index + 1, right_index - 1]
