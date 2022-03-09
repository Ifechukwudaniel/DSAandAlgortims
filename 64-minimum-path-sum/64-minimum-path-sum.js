/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for(let row=0; row<grid.length; row++){
       for(let col= 0; col<grid[0].length; col++){
        let down =  Infinity , right = Infinity
        if(row-1 >=0 ) down = grid[row-1][col]
        if(col-1 >=0) right =  grid[row][col-1]
        let minPath =  Math.min(down, right)
        if(minPath<Infinity) grid[row][col] +=minPath 
      }
    }
    return grid[grid.length-1][grid[0].length -1]
};