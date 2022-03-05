let directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const generate2dMatrix = (length, itemLength) => {
  let array = [];
  let n = 0;

  for (let i = 0; i < length; i++) {
    let arr = [];
    for (let j = 0; j < itemLength; j++) {
      arr[j] = j + 1 + n;
    }
    n = arr[itemLength - 1];
    array[i] = arr;
  }
  return array;
};

let matrix = generate2dMatrix(4, 5);

function traversalDfs(matrix) {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  let values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
}

function dfs(matrix, row, col, seen, values) {
  console.log(row, col);
  if (row < 0 || col < 0) return;
  if (row >= matrix.length || col >= matrix[0].length) return;
  if (seen[row][col] == true) return;

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
}

console.log(traversalDfs(matrix));
