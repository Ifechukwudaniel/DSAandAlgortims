/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let answer = []
    let added = {}
    words = words.sort((a,b)=> b.length - a.length)
    for(let i = 0; i<words.length; i++ ){
       let word = words[i]
       let j = i - 1
       while(j >= 0){
        if(words[j].indexOf(word) !== -1 && added[word] ==undefined ){
             added[word] = true
             answer.push(word)
         } 
        j--
       }
    }
    
    return  answer
};