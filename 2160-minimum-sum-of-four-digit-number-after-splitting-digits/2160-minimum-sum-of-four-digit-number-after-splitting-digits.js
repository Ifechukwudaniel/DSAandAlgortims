/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let nums = num.toString();
    let snum = nums.split('').sort((a,b)=>a-b);
    console.log(snum);
    
    let s1 = snum[0];
    let s2 = snum[1];
    let s3 = snum[2];
    let s4 = snum[3];
    
    return parseInt(s1+s4)+parseInt(s2+s3);
};