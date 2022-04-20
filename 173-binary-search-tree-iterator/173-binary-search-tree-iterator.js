/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this._root= root
    this._current = 0
    this._nodeTotal = this._nodeCount(root)
    this._cacheArray =null
};

BSTIterator.prototype._nodeCount = function(node,count=0){
    if(!node) return 0
    return 1 + this._nodeCount(node.left) +  this._nodeCount(node.right)
}

/**
 * @return {number}
 */
BSTIterator.prototype._inOrder = function(node,array){
   if(!node) return null
   this._inOrder(node.left,array)
   array.push(node.val)
   this._inOrder(node.right,array)
}

BSTIterator.prototype.next = function() {
  if(this._cacheArray== null){
    let array =[]
    this._inOrder(this._root,array)  
     this._cacheArray = array
  }
  ++this._current
  return this._cacheArray[this._current -1]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
   return this._current < this._nodeTotal
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */