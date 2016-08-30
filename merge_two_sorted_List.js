//https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    var newList = new ListNode(null);
    var head = newList;
    var l1current = l1;
    var l2current = l2;
    while (l1current !== null || l2current !== null) {
        if (l1current === null) {
            newList.next = l2current;
            break;
        }
        if (l2current === null) {
            newList.next = l1current;
            break;
        }
        if (l1current.val > l2current.val) {
            newList.next = l2current;
            l2current = l2current.next;
        } else {
            newList.next = l1current;
            l1current = l1current.next;
        }
        newList = newList.next;
    }
    return head.next;
};