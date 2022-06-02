/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i =0;
    let j = matrix[0].length -1; 
    
    while(i<=matrix.length-1 && j>=0){
        if(matrix[i][j] >target){
            j--
            continue
        }
        if(matrix[i][j] <target){
            i++
            continue
        }
        if(matrix[i][j]==target) return true
    }
    return false
};