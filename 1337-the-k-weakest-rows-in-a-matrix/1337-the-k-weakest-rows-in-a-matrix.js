/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var searchIndex= function(row){
 let l=0 ,r= row.length -1;
 let pivot =0
 if(row[r] === 1) return row.length
 if(row[l]===0) return 0
 while(l<r){
     pivot  = Math.floor((r+l)/2)
     if(row[pivot] !== 1) r=pivot
     if(row[pivot] == 1 ) l=pivot+1
 }
 while(row[pivot]!==1) {
     pivot--
 }
 return pivot+1
};


var kWeakestRows = function(mat, k) {
   let rowSoldiers= []
   for(let i=0 ; i<mat.length; i++){
       let stat = [i,0]
       stat[1] = searchIndex(mat[i])
       rowSoldiers.push(stat)
   }
   console.log(rowSoldiers)
   rowSoldiers.sort((a,b)=>a[1] -b[1])
   console.log(rowSoldiers)
   let ans= []
   for(let i=0 ; i<k; i++){
       ans.push(rowSoldiers[i][0])
   }
  return ans
};