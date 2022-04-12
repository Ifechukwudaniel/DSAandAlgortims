/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(array) {
 return new Set(array).size !== array.length
};