// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2, prev = 0) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + prev;
    const carry = sum >= 10
    const result = new ListNode(carry ? sum - 10 : sum)

    if(l1?.next || l2?.next || carry) {
        result.next = addTwoNumbers(l1?.next, l2?.next, Number(carry))
    }
    
    return result
}

addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3, null))), new ListNode(5, new ListNode(6, new ListNode(4, null))))