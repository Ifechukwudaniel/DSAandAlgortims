var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i <= matrix.length - 1 && j >= 0) {
    console.log(i, j);
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
    return false;
  }
};

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
