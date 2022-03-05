/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return 0
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
};