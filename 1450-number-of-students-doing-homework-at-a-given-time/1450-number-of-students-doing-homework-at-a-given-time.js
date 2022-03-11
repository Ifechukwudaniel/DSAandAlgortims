/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count =0
    let i =0
    while(i<startTime.length){
        if( queryTime>=startTime[i] && queryTime <= endTime[i] ){
            count++
        }
        i++
    }
    return count
};