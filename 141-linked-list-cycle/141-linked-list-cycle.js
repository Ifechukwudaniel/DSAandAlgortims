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
var hasCycle = function(head) {
    if(!head) return false
    if(!head.next) return false
    
    let fast = head ,slow = head
    
    while(fast !== null && fast.next !== null ){
        slow = slow.next 
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};