/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let result =[]
    let bucket = new Array(nums.length +1).fill().map(()=>[])
    for(let i =0; i<nums.length; i++){
        let count = (map.get(nums[i]) ||0 ) +1
        map.set(nums[i],count)
    }
    
    for( let [key,value] of map.entries()){
        bucket[value].push(key)
    }
    
    bucket = bucket.reverse()
    
    for(let count of bucket){
       for(let num of count){
           if(result.length ==k) break;
           result.push(num)
       }
    }
    return result
};