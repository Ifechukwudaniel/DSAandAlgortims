# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        temp = dummy
        while(l1 != None and l2!= None):       
            if(l2.val <= l1.val):
                temp.next =  ListNode(l2.val) 
                temp= temp.next
                l2 = l2.next
            else:
                temp.next = ListNode(l1.val) 
                temp=temp.next
                l1 = l1.next
        if(l1!= None and l2 == None):
             temp.next = l1
        if(l1 == None and l2 != None):
            temp.next = l2
        return dummy.next