// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var aux = null;
    var reversedList = null;

    while (head) {
        aux = head;
        head = head.next;
        aux.next = reversedList;
        reversedList = aux;
    }

    console.log({
        head,
        reversedList,
    });

    return reversedList;
};

reverseList([1, 2, 3, 4, 5]);
