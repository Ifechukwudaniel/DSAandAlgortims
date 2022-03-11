/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null
    let length = 1
    let temp = head
    let tail = head;
    while(tail.next){
       tail =  tail.next
       length++
    }
    temp = head
    let prev = temp
    
    k =  k%length
    
    if(k==0) return head
    
    for( let i=0; i<length-k-1; i++){
        console.log(i)
        temp= temp.next
    }
    
    let lastNode = temp.next
    temp.next= null
    tail.next = head;
    return  lastNode
};