/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let codes = [];
    for (let word of words) {
        codes.push(wordToNum(word));
    }
    let maxLen = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!(codes[i] & codes[j])) {
                maxLen = Math.max(words[i].length * words[j].length, maxLen);
            }
        }
    }
    return maxLen;
    
};

function wordToNum(word) {
    let num = 0;
    const start = 'a'.charCodeAt(0);
    for (let i = 0; i < word.length; i++) {
        const shift = word.charCodeAt(i) - start;
        num |= (1 << shift);
    }
    return num;
}