/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min= Math.min(...salary)
    let max= Math.max(...salary)
    let total = 0
    let count= 0
    for(let pay of salary){
      if(pay== min) continue  
      if(pay== max) continue
      total+=pay
      count++
    }
    console.log(total, count, min,max)
    return total/count
};