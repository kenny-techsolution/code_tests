# https://leetcode.com/problems/merge-intervals/
# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e


class Solution(object):

    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        if len(intervals) == 0:
            return []
        intervalMin = min([i.start for i in intervals])
        intervalMax = max([i.end for i in intervals])
        # handle the negative minimum situation.
        if intervalMin < 0:
            for interval in intervals:
                interval.start = interval.start - intervalMin
                interval.end = interval.end - intervalMin
            intervalMax = intervalMax - intervalMin

        # use a boolean map to record the number to figure out the range
        map = [False] * (intervalMax + 1)
        res = []

        # print(intervals)
        for i in intervals:
            current = i.start
            while i.start <= current and current <= i.end:
                print(current)
                map[current] = True
                current = current + 1

        inRange = False
        interval = []
        for i in range(0, len(map)):
            current = map[i]
            if current == True and inRange == False:
                interval.append(i)
                inRange = True
            elif current == False and inRange == True:
                inRange = False
                interval.append(i - 1)
                res.append(interval)
                interval = []
            if i == len(map) - 1:
                if inRange == True:
                    res.append([interval[0], i])

        # handle the negative minimum situation.
        if intervalMin < 0:
            for interval in res:
                interval[0] = interval[0] + intervalMin
                interval[1] = interval[1] + intervalMin
        return res
