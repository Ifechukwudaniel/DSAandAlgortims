/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let a = 0 ,b = 0
    let stack =[]
    for(let i =0; i<tokens.length;i++){
        if(tokens[i] == "+"){
            stack.push(stack.pop()+ stack.pop())
         }
        else if(tokens[i] == "-"){
            b=stack.pop() ,a=stack.pop()
            stack.push(a - b)
         }
        else if(tokens[i] == "/"){
            b=stack.pop() ,a=stack.pop()
            answer =  a/b
            answer = answer < 0 ? Math.ceil(answer) :   Math.floor(answer)
            stack.push(answer)
         }
       else if(tokens[i] == "*"){
            stack.push(stack.pop()*stack.pop())
         }
       else stack.push(parseInt(tokens[i]))
    }
    return parseInt(stack.pop())
};