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
var deleteDuplicates = function(head) {
   let dummy = new ListNode(0, head)
   let prev = dummy
   
   while(head!== null){
       if(head.next!== null && head.val ===head.next.val){
           while(head.next!== null && head.val ===head.next.val){
               head = head.next
           }
          prev.next = head.next
       }
       else {
           prev= prev.next
       }
       head = head.next
   }
   

   return dummy.next
};