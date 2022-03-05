let directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], //left
];

function bfs(queue, grid) {
  while (queue.length) {
    let currentPosition = queue.pop();
    let currentRow = currentPosition[0];
    let currentCol = currentPosition[1];
    for (let i = 0; i < directions.length; i++) {
      let dir = directions[i];
      let nextRow = currentRow + dir[0];
      let nextCol = currentCol + dir[1];
      if (nextRow >= grid.length || nextRow < 0) continue;
      if (nextCol >= grid[0].length || nextCol < 0) continue;
      if (grid[nextRow][nextCol] === "1") {
        queue.push([nextRow, nextCol]);
        grid[nextRow][nextCol] = "0";
      }
    }
  }
}

var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        let queue = [[row, col]];
        bfs(queue, grid);
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
