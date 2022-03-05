/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    let cache = {}
    var _fib = function(target){
       if(target==0) return 0
       if(target <= 2) return 1
       if(cache[target]) return cache[target]
       cache[target] = _fib(target-1) + _fib(target-2)
       return  cache[target]
    }
    return _fib(n)
};