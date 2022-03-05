/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }
    return left;
  };
};
// 0 + (5- 0) /2 == 2 =>isGood
// 3+ (5-3) / 2 == 4 ->isBad
// 3+ (4-3)/2==
