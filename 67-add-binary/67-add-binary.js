/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let sum =0
  let carry = 0
  let result =""
   
  while(a||b||carry){
      sum = +a.slice(-1) + +b.slice(-1) + carry
      
      if(sum >1){
          result =  (sum%2) + result
          carry = 1
      }
      else {
          result = sum+ result
          carry = 0
      }
      
      a=a.slice(0,-1)
      b= b.slice(0,-1)
      // console.log(result)
  }
    
  return result 
};