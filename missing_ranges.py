# https://leetcode.com/problems/missing-ranges/
class Solution(object):

    def findMissingRanges(self, nums, lower, upper):
        """
        :type nums: List[int]
        :type lower: int
        :type upper: int
        :rtype: List[str]
        """
        answer = []
        if len(nums) == 0:
            # handle the situation for the beginning missing number.
            if lower == upper:
                answer.append(str(lower))
            else:
                answer.append(str(lower) + "->" + str(upper))
            return answer
        pre = nums[0]
        if lower != nums[0]:
            print("aste")
            if lower == nums[0] - 1:
                answer.append(str(lower))
            else:
                answer.append(str(lower) + "->" + str(nums[0] - 1))

        for i in range(1, len(nums)):
            current = nums[i]
            print(current)
            if current != pre + 1:
                print("here")
                begin = pre + 1
                end = current - 1
                if begin == end:
                    answer.append(str(begin))
                else:
                    answer.append(str(begin) + "->" + str(end))
            pre = current

        if pre != upper:
            if pre + 1 == upper:
                answer.append(str(upper))
            else:
                answer.append(str(pre + 1) + "->" + str(upper))
        return answer
