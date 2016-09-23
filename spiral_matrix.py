# https://leetcode.com/problems/spiral-matrix/
class Solution(object):

    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        if len(matrix) == 0:
            return []
        width = len(matrix[0])
        height = len(matrix)
        totalLength = len(matrix) * len(matrix[0])
        res = []
        tl = [0, 0]
        tr = [width - 1, 0]
        br = [width - 1, height - 1]
        bl = [0, height - 1]
        m = 0
        n = 0
        for i in range(totalLength):
            res.append(matrix[n][m])
            # print(matrix[n][m])
            if n == tl[1] and m >= tl[0] and m < tr[0]:
                if n != 0 and m == tl[0]:
                    bl[0], bl[1] = bl[0] + 1, bl[1] - 1
                m = m + 1
                #print("top run"+str([m,n]))
            elif m == tr[0] and n < br[1] and n >= tr[1]:
                if n == tr[1]:
                    if tl[0] == 0 and tl[1] == 0 and height > 2 and (tl[1] + 1) < (height / 2):
                        tl[1] = tl[1] + 1
                    elif (tl[0] != 0 or tl[1] != 0) and height > 2 and (tl[1] + 1) < (height / 2):
                        tl[0], tl[1] = tl[0] + 1, tl[1] + 1
                    print("modify tl" + str(tl))
                n = n + 1
                #print("right run" + str([m,n]))
            elif n == br[1] and m <= br[0] and m > bl[0]:
                if m == br[0] and width > 2 and (tr[1] + 1) < (height / 2):
                    tr[0], tr[1] = tr[0] - 1, tr[1] + 1
                m = m - 1
                #print("bottom run"+str([m,n]))
            elif m == bl[0] and n <= bl[1] and n > tl[1]:
                if n == bl[1]:
                    br[0], br[1] = br[0] - 1, br[1] - 1
                n = n - 1
                #print("left run"+str([m,n]))
        return res
