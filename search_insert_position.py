# https://leetcode.com/problems/search-insert-position/
class Solution(object):

    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        n = len(nums)
        start = 0
        end = n - 1
        if n == 0:
            return 0
        if target > nums[end]:
            return end + 1
        if target < nums[start]:
            return start

        while start <= end:
            # print("start",start,"end",end)
            if start + 1 == end:
                if nums[start] == target:
                    return start
                else:
                    return end
            mid = (start + end) / 2
            current = nums[mid]
            # print(current)
            if current == target:
                return mid
            elif target > current:
                start = mid
            else:
                end = mid

        return end
