/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   if(!head) return null
   if(!head.next) return head.next
   let dummy = new ListNode(-1,head)
   let left = dummy
   let right = dummy.next
   
   while(n>0 && right){
        right = right.next
        n-=1
   }
   // console.log(left, right)
   while(right){
       left = left.next
       right = right.next
   }
    left.next = left.next.next
   return dummy.next
};