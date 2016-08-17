//https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function(head) {
    //head will reference to the start of the reversed list.
    //(saved reference for temp.next)
    //point temp.next to the original head. 
    //make temp the new head. 
    //make temp the cell after the temp originally(saved reference).temp will reference the start of the unreversed linked list.
    if (head === null) {
        return head;
    }

    var temp = head.next;
    var prevCell;
    var afterCell;
    var i = 0;

    while (temp !== null) {
        afterCell = temp.next;
        if (i === 0) {
            head.next = null;
        }
        temp.next = head;
        head = temp;
        temp = afterCell;
        i++;
    }

    return head;
};