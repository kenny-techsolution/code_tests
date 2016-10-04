# https://leetcode.com/problems/merge-k-sorted-lists/
import heapq
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        # create a heapQ priority queue
        if len(lists) == 0:
            return lists

        heap = []
        sentinal = ListNode(None)
        res = sentinal
        current = sentinal
        # print("test")

        for list in lists:
            # print(list)
            if list != None:
                tuple = (list.val, list)
                # print(tuple)
                heapq.heappush(heap, tuple)

        while len(heap) > 0:
            # print(heap)
            temp_list = heapq.heappop(heap)[1]
            # print(temp_list.val)
            current.next = temp_list
            current = current.next
            # if there is no more node, no need to insert the list back to heapq
            # print(temp_list)
            if temp_list.next != None:
                tuple = (temp_list.next.val, temp_list.next)
                heapq.heappush(heap, tuple)

        return res.next
