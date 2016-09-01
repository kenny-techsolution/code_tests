//https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//find out the longer list. then remove the front and compare. 
var getIntersectionNode = function(headA, headB) {
    function findLength(node) {
        var length = 0;
        var current = node;
        while (current !== null) {
            current = current.next;
            length++;
        }
        return length;
    }
    var headALength = findLength(headA);
    var headBLength = findLength(headB);

    var longerList = (headALength > headBLength) ? headA : headB;
    var shorterList = (headALength > headBLength) ? headB : headA;
    //var longerLength = (headALength > headBLength)?headALength:headBLength;
    var lengthDiff = Math.abs(headALength - headBLength);

    for (var i = 0; i < lengthDiff; i++) {
        longerList = longerList.next;
    }

    while (shorterList !== null) {
        if (longerList === shorterList) {
            return longerList;
        }
        longerList = longerList.next;
        shorterList = shorterList.next;
    }

    return null;

};