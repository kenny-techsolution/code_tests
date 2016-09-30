# https://leetcode.com/problems/word-break/
class Solution(object):

    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: Set[str]
        :rtype: bool
        """
        # use DP to solve this problem

        length = len(s)
        dp = [True] + [False] * (length)

        for i in xrange(length):
            for j in xrange(i + 1):
                if dp[j] == True and (s[j:i + 1] in wordDict):
                    # print(s[j:i])
                    dp[i + 1] = True
                    # print(dp)
                    break

        return dp[-1]
