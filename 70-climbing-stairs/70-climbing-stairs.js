/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,memo={}) {
    if(n<0) return 0
    if(n in memo) return memo[n]
    if(n === 0) {
         memo[n] = 1
         return 1
     }
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2,memo)
    return memo[n]
};