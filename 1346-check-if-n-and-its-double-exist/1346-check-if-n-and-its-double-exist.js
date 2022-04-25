/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
     for(let i =0 ; i <arr.length; i++){
        for(let j =0 ; j <arr.length; j++){          
             // console.log(arr[i] , 2*arr[j])
             if(arr[i] == 2*arr[j] && i != j) return true 
         }
     }
    return false
};

// [10,2,5,3]
// [2,3,5,6,10]
// let l =0 , r = 3
// mid = 2*3 = 6

// let l =1 , r = 3
// mid =2 =2*5 = 10 == r