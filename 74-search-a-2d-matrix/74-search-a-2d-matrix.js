/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i =0
  let j = matrix[0].length - 1
  
  while(i <= matrix.length-1  && j>=0 ){
      if(matrix[i][j] > target){
          j--
          continue 
      }
      if(matrix[i][j] ===target) return true  
      if(matrix[i][j] < target){
          i++
          continue 
      }
   }
    return false 
};

//[
//    [1,3,5,7],
//    [10,11,16,20],
//    [23,30,34,60]
// ]

//target = 3
//i =0 j =3
//[0][3] 3<7 j--
//[0][2] 16<20
//[1][2] 16== 16
