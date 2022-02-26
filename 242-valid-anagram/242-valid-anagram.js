/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let hash=(string)=>{
    let array = new Array(26).fill(0)
    for(letter of string){
       array[letter.charCodeAt(0) -97] += 1
    }
    return array.join("#")
}
var isAnagram = function(s, t) {
    return hash(s) === hash(t)
};