/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num==0) return ""+num
    let ans=""
    let isNagative = false
    if(num<0){
       num*=-1
       isNagative= true
    }
    while(num>0){
        ans+= num%7
        num = Math.floor(num/7)
    }
    ans = ans.split("").reverse().join("")
    if(isNagative) ans= "-"+ans
    return ans
};