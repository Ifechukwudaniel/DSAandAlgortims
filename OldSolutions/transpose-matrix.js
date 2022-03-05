var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let answer = [];

  for (let i = 0; i < n; i++) {
    let oneRow = [];
    for (let j = 0; j < m; j++) {
      oneRow.push(matrix[j][i]);
    }
    answer.push(oneRow);
  }
  return answer;
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(matrix));

matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix));
