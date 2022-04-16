/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0 , r = nums.length - 1
    
    while(l<=r){
        let pivot = Math.floor((l+r)/2) 
        let found = nums[pivot]
        if(found === target) return pivot
        if(found > target) r = pivot - 1;
        if(found < target) l = pivot + 1;
        console.log(l, r, pivot)
    } 
    return l
};


// [1,3,5,6]   target = 5 
//    ^     
// [1,3,5,6]   target = 2
//.   ^
// [1,3,5,6]   target = 7
//        ^