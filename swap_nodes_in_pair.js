//https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var sentinal = new ListNode(null);
    sentinal.next = head;
    head = sentinal;
    current = head;
    while (current.next !== null && current.next.next !== null) {
        //console.log("enter");
        var tempNNN = current.next.next.next;
        var tempNN = current.next.next;
        var tempN = current.next;
        tempN.next = tempNNN;
        tempNN.next = tempN;
        current.next = tempNN;
        //console.log(sentinal);
        current = current.next.next;

    }
    return sentinal.next;
};