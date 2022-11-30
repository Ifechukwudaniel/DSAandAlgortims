/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {"[":"]", "{":"}","(":")"}
    let stack =[]
    for (let c of s){
        if(pairs[c]){
           stack.push(pairs[c])  
        }
        else {
            let item = stack.pop()
            if(item !== c) return false
        }
    }
     return stack.length == 0
};