# https://leetcode.com/problems/decode-ways/
class Solution(object):

    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
        n = len(s)

        if s == None or n == 0 or s[0] == "0":
            return 0

        dp = [1, 1]

        for i in range(2, n + 1):
            if 10 < int(s[i - 2:i]) <= 26 and s[i - 1] != "0":
                dp.append(dp[i - 2] + dp[i - 1])
            elif s[i - 2:i] == "10" or s[i - 2:i] == "20":
                dp.append(dp[i - 2])
            elif s[i - 1] != "0":
                dp.append(dp[i - 1])
            else:
                return 0

        return dp[n]
