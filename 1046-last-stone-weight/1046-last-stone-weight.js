/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap =  new MinPriorityQueue();
    for(let stone of stones){
         heap.enqueue(-stone);
    }
    while(heap.size()>=2){
        let y =  heap.dequeue().element
        let x =  heap.dequeue().element
        // console.log(x,y)
        if(x!==y) {
          y = y-x
          heap.enqueue(y)
        }
     }
    
    if(heap.size() < 1) return 0
    return heap.dequeue().element * -1
};