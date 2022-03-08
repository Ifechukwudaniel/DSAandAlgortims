var gridTraveler = function (m, n) {
  let grid = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  grid[1][1] = 1;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let current = grid[row][col];
      if (row + 1 <= m) grid[row + 1][col] += current;
      if (col + 1 <= n) grid[row][col + 1] += current;
    }
  }
  return grid[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 2));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(3, 7));
console.log(gridTraveler(18, 18));
