# https://leetcode.com/problems/first-missing-positive/Ï
class Solution(object):

    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # use count sort

        if len(nums) == 0:
            return 1

        smallest = nums[0]
        largest = nums[0]

        for num in nums:
            if num > largest:
                largest = num
            if num < smallest:
                smallest = num

        # initialize the array
        span = largest - smallest + 1
        array = [None] * span

        for i in range(len(nums)):
            array[nums[i] - smallest] = nums[i]

        # remove all None element
        while None in array:
            array.remove(None)

        # add 0 if not in the array.
        for i in range(len(array) - 1, -1, -1):
            if array[i] == 0:
                break
            elif array[i] < 0:
                array.insert(i + 1, 0)

        if 0 not in array:
            array.insert(0, 0)

        # locate the first missing positive integer
        for i in range(len(array)):
            if array[i] > 0 and array[i - 1] != array[i] - 1:
                return array[i - 1] + 1

        return array[-1] + 1
