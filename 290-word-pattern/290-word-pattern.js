/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArray = s.split(" ")
    if(pattern.length !== sArray.length) return false
    let patternMatch = {}
    let wordMatch = {}
   
    for(let i=0;  i< pattern.length; i++){ 
      if(patternMatch[sArray[i]] === undefined)  patternMatch[sArray[i]] = pattern[i]
      if(wordMatch[pattern[i]] === undefined)  wordMatch[pattern[i]] = sArray[i]
      if(patternMatch[sArray[i]] !== pattern[i] || wordMatch[pattern[i]] !== sArray[i] ){
        console.log(patternMatch, wordMatch)
        return false  
      }
    }
    console.log(patternMatch, wordMatch)
    return true
};