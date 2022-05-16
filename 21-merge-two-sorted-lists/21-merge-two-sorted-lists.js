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
var mergeTwoLists = function(l1, l2) {
    let dummy= new ListNode(-1)
    let temp = dummy
    while(l1!== null || l2!= null){
        if(l1 && l2){
            
            if(l2.val <= l1.val){
                temp.next = new ListNode(l2.val) 
                temp= temp.next
                l2 = l2.next
            }
            else{
                temp.next = new ListNode(l1.val) 
                temp=temp.next
                l1 = l1.next
            }
        }
        else break
    }
    if(l1&& !l2){
         temp.next = l1
    }
    if(!l1 && l2){
       temp.next = l2
    }
    return dummy.next
};