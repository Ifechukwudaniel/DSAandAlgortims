/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   if(nums.length <=2) return Math.max(...nums)
   let table = new Array(nums.length).fill(null).map(()=>0) 
   table[0] = nums[0]
   table[1] = nums[1]
   for(let i =2 ; i<table.length; i++){
       let tablea =0, tableb=0
       if((i-2 ) >= 0){
           tablea =nums[i] + table[i-2] 
       }
       if((i-3 ) >= 0){
           tableb =nums[i] + table[i-3] 
       }
      table[i]= Math.max(tablea,tableb)   
   }
    console.log(table)
   return  Math.max(table[nums.length-2],table[nums.length-1])
};

/*
   [1,2,3,1] 
   [1 ,2 ,4 ,3 ,4]
   
   [2,7,9,3,1]
   [2,7,,11,10,12,11]
   
   [1,2,3,1,10,6,8,9,3]
   [1,2,4,3,14,9,22,18,25]

*/