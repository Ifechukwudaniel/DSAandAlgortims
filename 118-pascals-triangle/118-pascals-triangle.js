/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows== 1) return [[1]]
  if(numRows== 2) return [[1],[1,1]]
    
  let cache= {}
  let res =  [[1],[1,1]]
 
  for(let i=2 ; i<numRows; i++){
      let row= []
      for( let j = 0 ; j<=i; j++){
          if(j==0 ||  i-j ==0){
              row.push(1)
              continue
          }
          row.push(res[i-1][j-1] +res[i-1][j])
      }
    res.push(row)
  }
  return  res
};