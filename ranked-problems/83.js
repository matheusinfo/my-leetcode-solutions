function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    let copy = head

    while(copy){
       if(copy.next && copy.val === copy.next.val){
        copy.next = copy.next.next;
       } else {
        copy = copy.next
       }
    }

    return head
};

console.log(deleteDuplicates(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null)))),
))