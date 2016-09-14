//https://leetcode.com/problems/odd-even-linked-list/
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
var oddEvenList = function(head) {
    if (head === null) {
        return head;
    }
    var current1 = head;
    var current2 = head.next;
    var evenHead = current2;
    var i = 0;
    while (current1.next !== null && current2.next !== null) {
        //console.log("step"+i);
        //console.log(current1.val + ", " + current2.val);
        i++;
        current1.next = current1.next.next;
        current2.next = current2.next.next;
        current1 = current1.next;
        current2 = current2.next;
    }
    current1.next = evenHead;

    return head;
};