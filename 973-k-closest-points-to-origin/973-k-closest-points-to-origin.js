/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let heep = new MinPriorityQueue()
     let origin = [0,0]
     let a, b , sqrt
     let  res = []
    for(let point of points){
       a = Math.abs(Math.pow((origin[0] -point[0]),2)) 
       b =  Math.abs(Math.pow((origin[1] -point[1]),2))
       sqrt = Math.abs(Math.sqrt(a+b))
       heep.enqueue(point,sqrt)
    }
    while(k){
        res.push(heep.dequeue().element)
        k--
    }
    return res
};