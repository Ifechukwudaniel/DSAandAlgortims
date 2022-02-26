/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let hash = (string) =>{
    let array = new Array(26).fill(0)
    for(let letter  of string) {
       array[letter.charCodeAt(0) - 97]+=1
    }
    return array.join("#")
}

var checkInclusion = function(s1, s2) {
    let p1= 0
    let p2= s1.length 
    let s1Hash = hash(s1)
    
    while(p2<=s2.length){
       let currentHash =  hash(s2.substring(p1,p2))
       console.log(s1Hash, currentHash)
       if(s1Hash===currentHash) return true
       p1++ 
       p2++
    }
    return false
};