
/**
  * @param {string} s
 * @return {boolean}
 */
var isValid = function (string) {
  // our stack 
  let stack = []
  
  /// pairs 
  let pairs = {
      "[":"]","{":"}","(":")",
  }
  
  ///loop through
  for (let char of string){
      // if is pari add the complemt to the stack
     if(pairs[char] != undefined)  stack.push(pairs[char]);
     else {
          // pop te complement 
        let leftPair =  stack.pop()
          // return if it does not match  the complement 
        if(leftPair !== char) return false
     }
  }
  return stack.length === 0
};