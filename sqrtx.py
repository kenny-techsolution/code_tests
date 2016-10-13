#https://leetcode.com/problems/sqrtx/‰
class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        #use result = x/mid instead of sqr=mid*mid to avoid overflow.
        #if x < 0:
        #   return -1
        if x < 2:
            return x
        i = 0 
        j= x/2+1
        while i<=j:
            mid = (i+j)/2
            #print("i,j",i,j)
            #print(mid)
            result = x/mid
            #print(result)
            if mid == result:
                return mid
            elif mid < result:
                i = mid+1
            else:
                j = mid-1
            
        return j