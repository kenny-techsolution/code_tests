# https://leetcode.com/problems/longest-consecutive-sequence/
class Solution(object):

    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        map = {}
        counted_map = {}
        for num in nums:
            map[num] = 1

        print(map)
        length = 0
        left = 0
        right = 0
        for num in nums:
            # print(num)
            left = num
            right = num
            # print(map[left])
            temp_len = 0
            if map.get(num, -1) != -1 and num not in counted_map:
                while map.get(left, -1) != -1:
                    counted_map[left] = 1
                    left = left - 1
                while map.get(right, -1) != -1:
                    counted_map[right] = 1
                    right = right + 1
            temp_len = right - left - 1

            # print("temp_len",temp_len)
            if temp_len > length:
                length = temp_len

        return length
