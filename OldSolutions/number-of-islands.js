let directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], //left
];

function dfs(row, col, grid) {
  if (row < 0 || col < 0) return;
  if (row >= grid.length || col >= grid[0].length) return;
  let

  if (grid[row][col] === "1") {
    grid[row][col] = "0";
    for (let i = 0; i < directions.length; i++) {
      let dir = directions[i];
      dfs(row + dir[0], col + dir[1], grid);
    }
  }
}

var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(row, col, grid);
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
