var spiralOrder = function (matrix) {
  let r = matrix.length,
    c = matrix[0].length;
  let [left, right, top, bottom] = [0, c - 1, 0, r - 1];

  let arr = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
    right--;

    if (top <= bottom) {
      // condition 1
      for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      // condition 2
      for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
      left++;
    }
  }

  return arr;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(spiralOrder(matrix));

// matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log(spiralOrder(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralOrder(matrix));
