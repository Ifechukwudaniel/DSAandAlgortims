var numIslands = function (grid) {
  let directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], //left
  ];

  let seen = Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(false));

  for (let i = 0; i < directions.length; i++) {
    const element = array[i];
  }

  console.log(seen);
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
