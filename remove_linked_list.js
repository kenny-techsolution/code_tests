//https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var current;
    var sentinal = new ListNode("");
    sentinal.next = head;
    head = sentinal;
    current = head;
    while (current !== null && current.next !== null) {
        //console.log("current"+current.val);
        if (current.next.val === val) {
            //remove node.
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    head = sentinal.next;
    return head;
};