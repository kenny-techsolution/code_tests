//https://leetcode.com/problems/palindrome-linked-list/
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
var isPalindrome = function(head) {
	var current = head;
	var str = "";
	var reversedStr = "";
	while (current !== null) {
		str += current.val;
		reversedStr = current.val + reversedStr;
		current = current.next;
	}
	return (str === reversedStr);
};