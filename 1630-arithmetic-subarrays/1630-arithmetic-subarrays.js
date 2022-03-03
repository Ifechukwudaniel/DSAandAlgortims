/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    return l.map((firstRange, index) => {
        let newArray = nums.slice(firstRange, r[index] + 1).sort((a, b) => a - b)
        let req = newArray[1] - newArray[0]
        let prevVal = newArray[1]
        for(let i = 2; i < newArray.length; i++){
            if(newArray[i] - prevVal !== req){
                return false
            }
            prevVal = newArray[i]
        }
        return true
    })
};