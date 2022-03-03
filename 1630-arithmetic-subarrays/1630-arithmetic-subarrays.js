/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var isSequence= (array)=>{
     if(array.length <2) return  false
     if(array.length == 2) return  true
     let diffrence = null
     array = array.sort((a,b)=>a-b)
     for(let i =0; i<array.length ; i++){
       if(diffrence=== null){
           diffrence = array[i+1] -array[i]
       } 
       if(array[i+1] !== undefined && array[i+1] -array[i] !== diffrence) return false
     }
     return true
    
}
var checkArithmeticSubarrays = function(nums, l, r) {
    let i = 0
    let res =[]
    while(i < l.length){
         res.push(isSequence(nums.slice(l[i],r[i]+1)))
        i++
    }
    return res
};