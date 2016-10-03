# https://leetcode.com/problems/unique-binary-search-trees/
class Solution(object):

    def numTrees(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = [1, 1, 2] + [0] * (n - 2)

        for i in range(3, n + 1):
            for j in range(1, i + 1):
                dp[i] += dp[j - 1] * dp[i - j]
        return dp[n]
