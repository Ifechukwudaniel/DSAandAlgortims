/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let u =0
    let y = matrix[0].length - 1
    
    while(y>=0 && u< matrix.length){
        if(matrix[u][y] === target)  return true 
        if(matrix[u][y] > target) {
            y--
            continue
        }
        
        if(matrix[u][y] < target) {
            u++
            continue
        }
    }
    return false
};