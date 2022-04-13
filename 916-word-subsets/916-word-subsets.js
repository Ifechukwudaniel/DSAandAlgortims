/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

var countChar = function(word){
    let count = new Array(26).fill(0)
    for(let i =0; i <word.length; i++ ){
        let charCode = word[i].charCodeAt(0) - "a".charCodeAt(0)
        count[charCode] += 1; 
    }
    return count
}
var wordSubsets = function(words1, words2) {
   let compinedChar=  new Array(26).fill(0)
   
   for(let i =0; i< words2.length; i++){
       let currentChar = countChar(words2[i])
       for(let j = 0; j < 26 ; j++){
         compinedChar[j] = Math.max(currentChar[j],compinedChar[j] )
       }
    }
    
    let output =[]
    
    for(let i =0; i< words1.length; i++){

       let word = words1[i]
       let tempChar = countChar(word)
       
       let isUniversal = true
       for(let j =0; j<26; j++){
           if(tempChar[j] < compinedChar[j]){
               isUniversal = false
           }
       }
        
       if(isUniversal)  output.push(word) 
        
    }
    
    return output
};