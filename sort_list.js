//https://leetcode.com/problems/sort-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    //edge cases 
    if (head === null || head.next === null) {
        return head;
    }
    //mergesort logic:break the list into half. then sort each side, then merge two sorted list back to one list.
    var sentinal = new ListNode("");
    sentinal.next = head;
    var fastIndex = sentinal;
    var slowIndex = sentinal;
    while (fastIndex !== null && fastIndex.next !== null) {
        fastIndex = fastIndex.next.next;
        slowIndex = slowIndex.next;
    }
    var rightList = slowIndex.next;
    slowIndex.next = null;
    var l1 = sortList(sentinal.next);
    var l2 = sortList(rightList);
    return mergeTwoLists(l1, l2);
};

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