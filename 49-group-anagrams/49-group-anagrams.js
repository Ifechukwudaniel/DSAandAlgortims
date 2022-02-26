/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 const createHash = (string) => {
     let  array= new Array(26).fill(0)
     for(const letter of string){
        array[letter.charCodeAt(0) - 97]+= 1
     }
     return array.join('#')
}
var groupAnagrams = function(strs) {
    let hashMap = new Map() 
    for(const str of strs){
        let hash = createHash(str)
        if(!hashMap.has(hash)){
           hashMap.set(hash,[str])
        }
        else {
            let prev = hashMap.get(hash)
            prev.push(str)
        }
    }
    
    let solution = []
    
    for (const value  of hashMap.values()){
      solution.push(value)   
    }
    return solution
    
};