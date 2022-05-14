# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        if(l1 == None):
            return l2
        if(l2== None):
            return l1 
        result = ListNode(-1)
        temp = result
        sum, carry = 0,0
        while(l1 != None or l2!= None ):
            if(l1):
                print(l1.val)
                sum+= l1.val
                l1= l1.next
            if(l2):
                print(l2.val)
                sum += l2.val
                l2= l2.next
            if(sum >9):
                sum-=10
                carry = 1
            temp.next = ListNode(sum)
            temp = temp.next
            sum = carry
            carry = 0
        if(sum>0):
            temp.next = ListNode(sum)
            temp = temp.next
            sum=0
        return result.next