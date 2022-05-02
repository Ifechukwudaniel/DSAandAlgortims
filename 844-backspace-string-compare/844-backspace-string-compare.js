/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var build =(string)=>{
    let  stack  = [];
    for(let char of string){
        if(char != '#'){
            stack.push(char)
        }
        else {
            stack.pop()
        } 
    }
    return stack.join("")
}
var backspaceCompare = function(s, t) {
   return build(s) === build(t)
};