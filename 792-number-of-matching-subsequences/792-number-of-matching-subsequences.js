var numMatchingSubseq = function(S, words) {
    let count = 0, arrPos = [];
    
    // create the position Array of chars in S
    for(let i = 0; i < S.length; i++){
        let charCode = S[i].charCodeAt(0);
        if(arrPos[charCode]) arrPos[charCode].push(i)
        else arrPos[charCode] = [i];
    }
    
    // special binarySearch that return index if found, otherwise negative position
    const binarySearch = (arr, val) => {
        let i = 0, j = arr.length - 1, mod;
        while(i <= j){
            mod = Math.floor((i + j) / 2);
            if(val < arr[mod])  j = mod - 1;
            else if(val > arr[mod]) i = mod + 1;
            else return mod;
        }
        return -(i + 1);
    }
    
    const isSubSequence = (word, prev) => {
         // loop through chars of words and check their position using Binary Search
        for(let j = 0; j < word.length; j++){
            let charCode = word[j].charCodeAt(0);
            if(!arrPos[charCode]) return false;
            let idx = binarySearch(arrPos[charCode], prev);
            if(idx < 0) idx = -idx - 1;
            if(idx === arrPos[charCode].length) return false;
            prev = arrPos[charCode][idx] + 1;
        }
        return true;
    }
    
    // loop through words
    for(let i = 0; i < words.length;i++){
        let word = words[i];
        if(isSubSequence(word, 0)) count++;
    }
    
    return count;
    
}; 