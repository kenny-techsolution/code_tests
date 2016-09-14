// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// https://leetcode.com/problems/add-two-numbers/
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
var addTwoNumbers = function(l1, l2) {
    var tempLN1 = l1;
    var tempLN2 = l2;
    var currentLN = new ListNode();
    var answer = currentLN;
    var carryDigit = 0;
    //var i = 0;//to inspect number of loop run
    while (tempLN1 !== null || tempLN2 !== null) {
        //console.log(i);
        firstDigit = (tempLN1 === null) ? 0 : tempLN1.val;
        secondDigit = (tempLN2 === null) ? 0 : tempLN2.val;
        result = firstDigit + secondDigit + carryDigit;
        currentLN.val = result % 10;
        carryDigit = Math.floor(result / 10);
        //console.log(answer);
        tempLN1 = (tempLN1 === null) ? null : tempLN1.next;
        tempLN2 = (tempLN2 === null) ? null : tempLN2.next;
        if (tempLN1 !== null || tempLN2 !== null) {
            currentLN.next = new ListNode();
            currentLN = currentLN.next;
        }
        //i++;
    }
    if (carryDigit !== 0) {
        currentLN.next = new ListNode(carryDigit);
        currentLN = currentLN.next;
    }
    return answer;
};