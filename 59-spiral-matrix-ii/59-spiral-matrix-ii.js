/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill([]).map(()=>new Array(n).fill(null).map(()=>1))
    let top = 0
    let bottom = matrix.length -1
    let left = 0
    let right= matrix[0].length -1
    
    while(top <= bottom && left <=right){  
        
        for(let i= left; i<=right; i++){
             if(i-1>=0) matrix[top][i] += matrix[top][i-1]
        }
        top++
        
        for(let i= top; i<=bottom; i++){
            matrix[i][right] += matrix[i-1][right]
        }
        right--
        if (top <= bottom) {
            for(let i= right; i>=left; i--){
                matrix[bottom][i] += matrix[bottom][i+1]
            }
            bottom--
        }
        
        if(left<=right){
            for(let i= bottom; i>=top; i--){
             matrix[i][left] += matrix[i+1][left]
            }
           left++
        }
    }
    return matrix
};


// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]


