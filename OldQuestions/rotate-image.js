/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }
  return matrix;
};

rotate([
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
  [7, 8, 9, 10],
]);
/**
   [     0 1 2
      0 [1,2,3],
      1 [4,5,6],
      2 [7,8,9]
   ]
   
   // transposes matrix 
   [     0 1 2
      0 [1,4,7],
      1 [2,5,8],
      2 [3,6,9]
   ]
   
   // rotate each row
   [      0 1 2
       0 [7,4,1],
       1 [8,5,2],
       2 [9,6,3]
    ]
**/
