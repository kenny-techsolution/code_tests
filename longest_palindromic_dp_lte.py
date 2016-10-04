# https://leetcode.com/problems/longest-palindromic-substring/
class Solution(object):

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """

        n = len(s)
        p = [[False for i in range(n)] for i in range(n)]
        max_length = 0
        start = 0
        end = 0
        for i in range(n):
            for j in range(i):
                # key logic
                p[j][i] = (s[j] == s[i] and (i - j < 2 or p[j + 1][i - 1]))
                if p[j][i] and i - j + 1 > max_length:
                    max_length = i - j + 1
                    start = j
                    end = i
            p[i][i] = True
        return s[start:end + 1]
