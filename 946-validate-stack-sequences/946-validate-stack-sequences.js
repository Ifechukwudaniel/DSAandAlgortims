/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let j = 0
  let stack =[]
  for(let item  of pushed){
      stack.push(item)
      while(stack.length && stack[stack.length-1] === popped[j]){
          stack.pop()
          j++
      }
  }
   return j === pushed.length
};