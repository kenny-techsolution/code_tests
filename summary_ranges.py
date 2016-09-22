# https://leetcode.com/problems/summary-ranges/
class Solution(object):

    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        if len(nums) == 0:
            return []
        pre = nums[0]
        begin = nums[0]
        answer = []
        for i in range(1, len(nums)):
            current = nums[i]
            print(current)
            if current == (pre + 1):
                pre = current
            else:
                if begin == pre:
                    answer.append(str(pre))
                else:
                    answer.append(str(begin) + "->" + str(pre))
                begin = current
                pre = current

        if begin == pre:
            answer.append(str(pre))
        else:
            answer.append(str(begin) + "->" + str(pre))
        return answer
