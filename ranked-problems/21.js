/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let goodRec = (prev, l1, l2) => {
    if(!l1 || !l2) {
        if(l1){
            prev.next = l1
        }

        if(l2){
            prev.next = l2
        }

        return;
    }
    
    if(l1.val < l2.val) {
        prev.next = l1;
        goodRec(prev.next, l1.next, l2);
    }else {
        prev.next = l2;
        goodRec(prev.next, l1, l2.next);
    }
}

var mergeTwoLists = function(list1, list2) {
    let point = new ListNode();
    let prev = point;
    
    goodRec(prev, list1, list2);
    
    return point.next;
}

let a = mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(3, null))),
    new ListNode(2, new ListNode(4, new ListNode(3, null))),
)

console.log(a)