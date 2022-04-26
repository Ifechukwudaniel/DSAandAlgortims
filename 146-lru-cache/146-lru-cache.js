/**
 * @param {number} capacity
 */
 function Node(key,val,prev=null,next=null) {
     this.key = key;
     this.val = val;
     this.prev = prev 
     this.next = next
 };

var LRUCache = function(capacity) {
    this._totalItem = 0
    this._maxSize = capacity
    this._hashtable = new Map()
    this._head  = new Node(-10,-1)
    this._tail = new Node(-10,-1)
    
    this._head.next = this._tail
    this._tail.prev = this._head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //get it fom the hash table for o(1) access
    let node =  this._hashtable.get(key)
    
    //if it does exist return  -1
    if(!node) return -1
    
    // move it to head
    this._moveToHead(node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, val) {
   let node = this._hashtable.get(key)
   if(!node){
       let newNode = new Node(key, val)
       this._hashtable.set(key, newNode)  
       this._totalItem++
       this._addToFront(newNode)
       
       if(this._totalItem > this._maxSize){
           this._removeLruEntry()
       }
    }
    
    if(node){
        node.val = val
        this._moveToHead(node)  
    }
    // console.log(this._hashtable)
};

LRUCache.prototype._addToFront = function(node){
    // add to the next node after the head
    node.prev = this._head 
    node.next = this._head.next  
    
    //re wire the node
    this._head.next.prev = node
    this._head.next = node
    
}

LRUCache.prototype._removeFromList = function (node){
    let nodePrev = node.prev
    let nodeNext = node.next
    
    nodePrev.next = nodeNext
    nodeNext.prev = nodePrev
}

LRUCache.prototype._removeLruEntry = function(){
  let lastNode = this._tail.prev 
  this._hashtable.delete(lastNode.key)
  this._removeFromList(lastNode)
  this._totalItem--
}

LRUCache.prototype._moveToHead = function (node){
    this._removeFromList(node)
    this._addToFront(node)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */