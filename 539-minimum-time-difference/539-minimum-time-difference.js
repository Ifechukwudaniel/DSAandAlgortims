/**
 * @param {string[]} timePoints
 * @return {number}
 */


var findMinDifference = function(times) {
    var min = 720;
    let timeAsInt = []
    for(let i = 0 ; i<times.length ; i++ ){
        let [h,m] = times[i].split(":")
        timeAsInt.push((+h)*60 + (+m))
    }
    timeAsInt = timeAsInt.sort((a,b)=>a-b)

    for(let i =1 ; i<timeAsInt.length;i++){
        let dif = timeAsInt[i]-timeAsInt[i-1]
        if(dif >720)  dif = 1440 - dif 
        min = Math.min(dif, min)
    }
    let dif = timeAsInt[timeAsInt.length -1] - timeAsInt[0]
    if(dif >720)  dif = 1440 - dif 
    min = Math.min(dif,min)
    return min
};