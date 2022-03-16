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
var oddEvenList = function(head) {
    if(!head) return head
    if(head.next === null) return head
    
    let dummy = new ListNode(-1,head)
    let slow = head
    let fast = head
    let prev = dummy
    let even = []
    
    while(fast!== null && fast.next !== null){
        fast = fast.next.next
        even.push(slow.next.val)
        slow.next = fast
        slow = slow.next
        prev = prev.next
    }
    
    while(prev.next !== null){
        prev = prev.next
    }
    
    let i = 0
    while(i<even.length){
        prev.next = new ListNode(even[i])
        prev= prev.next
        i++
    }
    return  dummy.next
};