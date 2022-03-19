/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var isAligned = function (word, pattern){
    if(word.length!== pattern.length) return true;
     let wordMatches = new Array(256).fill(0)
     let patternMatches = new Array(256).fill(0)
     
    for(let i =0;i<word.length; i++){
        let patternChar= pattern[i].charCodeAt(0)
        let wordChar= word[i].charCodeAt(0)
        
        if(wordMatches[wordChar] === 0) {
            wordMatches[wordChar] = patternChar
        }
        
        if(patternMatches[patternChar] === 0) {
            patternMatches[patternChar] = wordChar
        }
        
        if(patternMatches[patternChar] !== wordChar
           || wordMatches[wordChar] !== patternChar ){
            return false
        }
    }
    return true
} 
var findAndReplacePattern = function(words, pattern) {
     let answer = [];
     for(let word of words){
         if(isAligned(word,pattern)){
             answer.push(word);
         }
     }
    return answer;
};