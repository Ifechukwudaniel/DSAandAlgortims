/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  let result = ''
  for(let i = num1.length-1, j = num2.length-1; i>=0 || j>=0 || carry; i--, j--){
    let digit1 = (i>=0) ? parseInt(num1[i]) : 0;
    let digit2 = (j>=0) ? parseInt(num2[j]) : 0;
    let sum = digit1 + digit2 + carry;
    if(sum > 9){
      carry = 1;
      sum %= 10;
    } else carry = 0;
    result = `${sum}${result}`
   }
  return result;
  
};