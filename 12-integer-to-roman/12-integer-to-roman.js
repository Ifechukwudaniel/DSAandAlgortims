/**
 * @param {number} num
 * @return {string}
 */

let symbols  = {
       1:"I",
       5:"V",
       10:"X",
       50:"L",
       100:"C",
       500:"D",
       1000:"M"
   } 
var remainder = function(num){
    let range= [1,10,100]
    let nString = num.toString() 
    let nValue = nString.length -1
    let value = [nString[0]]
    for(let i =0; i< nValue ; i++){
        value.push('0')
    }
    
    let lower = parseInt(value.join(""))
    let upper = lower + range[nValue]
    return [ `${symbols[upper  - lower]+symbols[upper]}`, lower]
}
var intToRoman = function(num) {
   let result = []
   while(num > 0){
       if(num >3999) return ""
      
       if(num >= 1000){
           num -= 1000
           result.push(symbols['1000'])
           continue
       }
       
       if(num>= 500 && num < 900){
           num -= 500
           result.push(symbols['500'])
           continue
       }
       
      if(num>= 100 && num < 400){
           num -= 100
           result.push(symbols['100'])
           continue
       }
       
       if(num>= 50 && num < 90){
           num -= 50
           result.push(symbols['50'])
           continue
       }
       
       if(num>= 10 && num < 40){
           num -= 10
           result.push(symbols['10'])
           continue
       }
       
       if(num>= 5 && num < 9){
           num -= 5
           result.push(symbols['5'])
           continue
       }
       
       if(num>= 1 && num < 4){
           num -= 1
           result.push(symbols['1'])
           continue
       }
       else {
         let [symbol , value] = remainder(num) 
         num -= value
         result.push(symbol)
         continue
       }
   }
   return result.join("")
};