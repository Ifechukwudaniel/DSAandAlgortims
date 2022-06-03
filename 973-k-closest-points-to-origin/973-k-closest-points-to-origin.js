/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxPQ = new MaxPriorityQueue()
    for (let point of points) {
        let dist = squaredDistance(point)
        if (maxPQ.size() < k) {
            // Fill the max PQ up to k points
            maxPQ.enqueue(point, dist)
        } else if (dist < maxPQ.front().priority) {
            // If the max PQ is full and a closer point is found,
            // discard the farthest point and add this one
            maxPQ.dequeue()
            maxPQ.enqueue(point, dist)
        }
    }
    
    // Return all points stored in the max PQ
    return maxPQ.toArray().map(el => el.element)
};

// Calculate and return the squared Euclidean distance
const squaredDistance = ([x,y]) => x ** 2 + y ** 2
