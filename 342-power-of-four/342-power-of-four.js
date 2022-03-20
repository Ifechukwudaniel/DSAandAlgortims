/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<1) return false
    if(n==1) return true
    return isPowerOfFour(n/4)
};