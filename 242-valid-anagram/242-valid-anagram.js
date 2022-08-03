/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var hash = function(string) {
    let array = new Array(26).fill(0)
    for(let char of string){
        array[char.charCodeAt()-97] +=1
    }
    return array.join("#")
};

var isAnagram = function(s, t) {
   return  hash(s) === hash(t)
};