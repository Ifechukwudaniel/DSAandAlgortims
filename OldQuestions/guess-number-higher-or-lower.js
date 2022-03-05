/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) === -1) right = mid;
    if (guess(mid) === 1) left = mid + 1;
    if (guess(mid) === 0) return mid;
  }
  return left;
};

//10 9
//1+10/2 = 5
//6+10/2 = 8
//8+10/2 = 9
