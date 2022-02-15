/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] > target) {
      j--;
      continue;
    }
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      i++;
      continue;
    }
  }
  return false;
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 60;
console.log(searchMatrix(matrix, target));

//[
//. [1,4,7,11,15],
//  [2,5,8,12,19],
//  [3,6,9,16,22],
//  [10,13,14,17,24],
//  [18,21,23,26,30]
// ]

// i =0 j =4
// 15 > 9 j--
// 11 > 9
// 7 < 9
// 8 < 9
