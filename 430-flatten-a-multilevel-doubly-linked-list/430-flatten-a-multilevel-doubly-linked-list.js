/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let dummy = new Node(-1)
    dummy.next = head
    let node = head
    let queue =[]
    
    while(node!==null){
       if(node.child!==null){
          queue.push(node.next)
          node.next = node.child
          let tempNode = node
          node.next.prev = tempNode
          node.child = null
          node = node.next
          continue
        } 
        
        if(node.next == null && queue.length > 0){
            let stackNode = queue.pop()
            if(stackNode !== null){
              node.next = stackNode
              node.next.prev = node
              node= node.next
            }
            continue
        }
        node = node.next
    }
    
    return dummy.next
}