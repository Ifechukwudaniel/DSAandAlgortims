/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
     if(m*n > original.length ||  m*n < original.length ) return []
    
     let array = new Array(m).fill(null).map(()=>new Array(n).fill(0))
     let k =0
     for(let i =0; i<m; i++){
         for(let j =0; j<n; j++){
          array[i][j] = original[k]
          k++
        }
     }
     return array
};