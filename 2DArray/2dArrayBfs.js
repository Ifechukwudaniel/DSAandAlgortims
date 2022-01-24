//All Possible  direction in a 2d matricx

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

function traversalBfs(matrix) {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  let values = [];
  let queue = [[0, 0]];
  while (queue.length) {
    const currentPosition = queue.shift();
    let row = currentPosition[0];
    let col = currentPosition[1];
    if (row < 0 || row >= matrix.length) continue;
    if (col < 0 || col >= matrix[0].length) continue;
    if (seen[row][col] == true) continue;
    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      let direction = directions[i];
      queue.push([row + direction[0], col + direction[1]]);
    }
  }
  return values;
}

console.log(traversalBfs(matrix));
