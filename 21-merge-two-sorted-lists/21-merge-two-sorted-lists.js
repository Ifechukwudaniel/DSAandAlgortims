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
var mergeTwoLists = function(list1, list2) {
    let  list = new ListNode(0)
    let temp = list
    let l1= list1 , l2=list2
    while(l1!== null && l2!==null){
        if(l1.val <= l2.val){
            temp.next = new ListNode(l1.val)
            l1 = l1.next
            temp= temp.next
        } 
        else{
            temp.next = new ListNode(l2.val)
            l2 = l2.next
            temp= temp.next
        }
    }
    
    if(l1 === null){
        temp.next= l2
    }
    
    if(l2 === null){
        temp.next= l1
    }
    return list.next
};