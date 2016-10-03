# https://leetcode.com/problems/max-points-on-a-line/
# Definition for a point.
# class Point(object):
#     def __init__(self, a=0, b=0):
#         self.x = a
#         self.y = b


class Solution(object):

    def maxPoints(self, points):
        """
        :type points: List[Point]
        :rtype: int
        """

        n = len(points)

        if n < 3:
            return n
        max_answer = 1
        for i in range(n):
            current_point = points[i]
            same_point = 0
            current_max = 1

            current_max_sum = 0
            dic = {}
            for j in range(i + 1, n):
                print(str(i) + "and" + str(j))
                if points[i].x == points[j].x and points[i].y == points[j].y:
                    same_point += 1
                else:
                    # take care the case, where x's are the same, which make
                    # the denominator 0, which will not divid.
                    slope = 0
                    if points[i].x != points[j].x:
                        slope = 1.0 * \
                            (points[j].y - points[i].y) / \
                            (points[j].x - points[i].x)
                    else:
                        slope = float("inf")

                    if slope in dic:
                        dic[slope] += 1
                    else:
                        dic[slope] = 2

                    if dic[slope] > current_max:
                        current_max = dic[slope]
                # print(current_max)
            current_max_sum += same_point + current_max
            if current_max_sum > max_answer:
                max_answer = current_max_sum
        return max_answer
