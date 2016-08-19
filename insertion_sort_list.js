//https://leetcode.com/problems/insertion-sort-list/
//the idea is to have an unsortedLinkedList and a sortedLinkedList. 
//take one from unsorted, and put it in the new sorted list. handle the special case if the cell to be inserted is larger than all cells in the sortedList.
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
var insertionSortList = function(head) {

    if (head === null) {
        return head;
    }

    var unsortedCurrent = head.next;
    head.next = null;
    var newLinkedList = head;

    var sentinal = new ListNode("sentinal");
    sentinal.next = newLinkedList;

    var sortedCurrent = sentinal;
    var tempCell;

    //console.log(unsortedCurrent);
    while (unsortedCurrent !== null) {
        tempCell = unsortedCurrent;
        unsortedCurrent = unsortedCurrent.next;
        tempCell.next = null;
        sortedCurrent = sentinal;
        //console.log(unsortedCurrent);
        //console.log(tempCell.val);
        //console.log(sortedCurrent);
        while (sortedCurrent.next !== null) {
            if (tempCell.val < sortedCurrent.next.val) {
                tempCell.next = sortedCurrent.next;
                sortedCurrent.next = tempCell;
                break;
            } else {
                sortedCurrent = sortedCurrent.next;
                //handle the case where tempCell is larger than all the cells in the sortedLinkList.
                if (sortedCurrent.next === null) {
                    sortedCurrent.next = tempCell;
                    break;
                }
            }
        }
        //console.log(sentinal);
    }
    return sentinal.next;

};