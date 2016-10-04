#https://leetcode.com/problems/longest-palindromic-substring/‰
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        start = 0
        end = 0
        n = len(s)
        for i in range(n):
            len1 = self.expand_around_center(s,i,i)
            len2 = self.expand_around_center(s,i,i+1)
            bigger_len = max(len1,len2)
            if bigger_len > end-start:
                start = i-(bigger_len-1)/2
                end = i+bigger_len/2
        return s[start:end+1]
    def expand_around_center(self, s, left, right):
        while left>=0 and right <len(s) and s[left]==s[right]:
            left -=1
            right +=1
        return right-left-1