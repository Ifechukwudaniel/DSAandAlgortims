/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let  i =0;
    let  j = matrix[0].length -1;
    
    while(j>=0 && i<matrix.length){
        if(matrix[i][j] === target) return true
        if(matrix[i][j] < target){
            i++
            continue
        }
        if(matrix[i][j]>target){
            j--
            continue 
        }
    }
    return false
    
};