//https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var current = head;
    while(current !== null) {
        if(current.val===true) {
            return true;
        } else {
            current.val = true;
            current = current.next;
        }
    }
    return false;
};