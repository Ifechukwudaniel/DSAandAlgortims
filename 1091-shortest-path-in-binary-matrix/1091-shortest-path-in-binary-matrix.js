/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] == 1)
        return -1;
    
    let n = grid.length;
    
    let queue = [];
    queue.push({i: 0, j: 0});
    
    //undefined = unvisited, 1 = visited, 2 = explored
    let status = [];
    
    let prev = [];
    prev[0] = -1;

    //prev and status will be used as 1D arrays, so i*n+j will be used to find the index of grid[i][j]
    //inside of these arrays
    
    while (queue.length > 0){
        let node = queue.shift();
        status[node.i*n + node.j] = 2;
        
        //these 2 for loops are used to check the neighbours of each node
        for (let i = -1; i < 2; ++i){
            for (let j = -1; j < 2; ++j){
                //x is row of neighbour
                let x = node.i + i;
                //y is column of neighbour
                let y = node.j + j;
                
                //check if neighbour is inside the bounds of the grid
                if (x > -1 && y > -1 && x < n && y < n){
                    //check if the neighbour is a 0 and unvisited
                    if (grid[x][y] === 0 && status[x*n + y] === undefined){
                        queue.push({i: x, j: y});
                        prev[x*n + y] = node.i * n + node.j;
                        status[x*n + y] = 1;
                    }
                }
            }
        }
    }
    
    //return -1 if the goal was not reached
    if (prev[n*n -1] === undefined)
        return -1;

    //increment count for every node that preceeds the last one
    let count = 1;
    let pr = prev[n*n -1];
    while (pr != -1){
        ++count;
        pr = prev[pr];
    }
    
    return count;
};