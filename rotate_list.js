//https://leetcode.com/problems/rotate-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//tips: find the length first
var rotateRight = function(head, k) {
    if (head === null) {
        return head;
    }
    var totalLength = 0;
    var rightIndex = 0;

    var leftCurrent = head;
    var rightCurrent = head;
    while (rightCurrent !== null) {
        rightCurrent = rightCurrent.next;
        totalLength++;
    }
    var leftIndex = -(k % totalLength) + 1;
    rightCurrent = head;
    while (rightCurrent !== null && rightCurrent.next !== null) {
        rightCurrent = rightCurrent.next;
        if (leftIndex > 0) {
            leftCurrent = leftCurrent.next;
        }
        leftIndex++;
        rightIndex++;
    }

    //change next pointer
    rightCurrent.next = head;
    head = leftCurrent.next;
    leftCurrent.next = null;

    return head;
};