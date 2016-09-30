＃https:
    //leetcode.com / problems / linked - list - cycle - ii/
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):

    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        slow = head
        fast = head

        while fast and slow:
            fast = fast.next
            slow = slow.next
            if fast:
                fast = fast.next
            if fast == slow:
                break

        if fast == None:
            return None

        slow = head
        while fast != slow:
            fast = fast.next
            slow = slow.next

        return fast
