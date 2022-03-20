/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return Math.log10(n)/Math.log10(4) % 1 == 0
};