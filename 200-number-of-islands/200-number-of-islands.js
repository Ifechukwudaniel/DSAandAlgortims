/**
 * @param {character[][]} grid
 * @return {number}
 */
let directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], //left
];

var bfs= (queue, grid)=>{
   while(queue.length){
       let currPostion = queue.shift()
       let row = currPostion[0]
       let col = currPostion[1]
       if(row<0 || row>= grid.length) continue
       if(col<0 || col >= grid[0].length) continue
       if(grid[row][col] === "1") {
            grid[row][col]= "0"
           for(let i =0; i< directions.length; i ++){
               let dir = directions[i]
               let newRow =  row+dir[0]
               let newCol =  col+dir[1]
               queue.push([row+dir[0],col+dir[1]])
           }  
       }
   }   
}
var numIslands = function (grid) {
    if(grid.length===0 ) return 0
    let count = 0
    let queue= []
    for(let row =0; row<grid.length ; row++){
        for(let col =0; col<grid[0].length ; col++){
           if(grid[row][col] === "1") {
               queue.push([row,col])
               bfs(queue, grid)
               count++
           }
        }
    }
  return count
}
