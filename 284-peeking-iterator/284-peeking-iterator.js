/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this._curr = null
    this._itr = iterator
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if(!this._curr){
        this._curr =  this._itr.next()  
    }
    return this._curr
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
   if(this._curr == null) return this._itr.next()
   let next = this._curr
   this._curr = null
   return next
   
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if(this._curr) return true
    return this._itr.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */