/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var isSequence= (array)=>{
     if(array.length <2) return  false
     if(array.length == 2) return  true
     array = array.sort((a,b)=>a-b)
     let diffrence = array[1]-array[0]
     for(let i =1; i<array.length ; i++){ 
       if(array[i] -array[i-1] !== diffrence) return false
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