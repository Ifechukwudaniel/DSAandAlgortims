/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 let reverseNumber = +String(Math.abs(x)).split('').reverse().join('');
  if (reverseNumber > Math.pow(2, 31) - 1) return 0;
  return x > 0 ? reverseNumber : -reverseNumber;
};