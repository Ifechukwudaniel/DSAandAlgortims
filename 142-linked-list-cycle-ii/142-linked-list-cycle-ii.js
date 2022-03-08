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
var detectCycle = function(head) {
    let fast  = head , slow = head , isCycle = false
    while( fast!==null && fast.next !==null){
     fast= fast.next.next
     slow= slow.next
     if(fast===slow){
         isCycle= true
         break
     }
    }
    
    let temp = head
    
    if(isCycle){
       while(temp !== fast){
         fast= fast.next
         temp= temp.next
          
      }
      return temp
    }
    return null
};