
/**
  * @param {string} s
 * @return {boolean}
 */
var isValid = function (string) {
  // our stack 
  let stack = []
  
  let pairs = {
      "[":"]","{":"}","(":")",
  }
  
  for (let char of string){
     if(pairs[char] != undefined)  stack.push(pairs[char]);
     else {
        let leftPair =  stack.pop()
        if(leftPair !== char) return false
     }
  }
  return stack.length === 0
};