//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
var deleteDuplicates = function(head) {
    var current = head;
    var secondReference;
    while (current !== null && current.next !== null) {
        if (current.val !== current.next.val) {
            current = current.next;
        } else {
            //skip to the next cell that holds different value.
            secondReference = current.next;
            while (current.val === secondReference.val) {
                if (secondReference.next === null) {
                    current.next = null;
                    return head;
                }
                secondReference = secondReference.next;
            }
            current.next = secondReference;
        }
    }

    return head;
};