#https://leetcode.com / problems / valid - perfect - square/
class Solution(object):

    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 0:
            return False

        if num == 1:
            return True
        i = 0
        j = num / 2 + 1
        while i <= j:
            mid = (i + j) / 2
            # print("i,j",i,j)
            # print(mid)
            result = num / float(mid)
            # print(result)
            if mid == result:
                return True
            elif mid < result:
                i = mid + 1
            else:
                j = mid - 1

        return False
