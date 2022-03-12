
var copyRandomList = function(head) {
     if(!head) return null
     let deepCloneMap = new Map();
    
     let curr= head
     while(curr!== null){
         deepCloneMap.set(curr,new Node(curr.val))
         curr = curr.next
     }
    
    curr = head
    
    while(curr!==null){
        deepCloneMap.get(curr).next  = deepCloneMap.get(curr.next)  || null
        deepCloneMap.get(curr).random = deepCloneMap.get(curr.random) || null
        curr= curr.next
    }
    
    return deepCloneMap.get(head)
    
};