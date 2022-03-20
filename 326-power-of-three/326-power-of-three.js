/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n,i=1) {
   return Math.log10(n) / Math.log10(3) %1 ==0
};