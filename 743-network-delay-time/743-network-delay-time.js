/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class Node {
    constructor(value, priorty) {
        this.value = value;
        this.priority = priorty;
    }
}

class PriorityQueue {
    
    constructor() {
        this.queue = [];
    }
    
    add([value, priority]){
        this.queue.push(new Node(value, priority));
        this.bubbleUp();
    }
    remove() {
        const toRemove = this.queue[0];
        const toMove = this.queue.pop();
        if (this.queue.length) {
            this.queue[0] = toMove;
            this.bubbleDown();
        }
        return [toRemove.value, toRemove.priority];
    }
    bubbleUp(idx = this.queue.length - 1) {
        if (idx <= 0) return;
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.queue[idx].priority <= this.queue[parentIdx].priority) {
            [this.queue[parentIdx], this.queue[idx]] = [this.queue[idx], this.queue[parentIdx]];
            this.bubbleUp(parentIdx);
        }
    }
    bubbleDown(idx = 0){
        const leftIdx = idx * 2 + 1;
        const rightIdx = idx * 2 + 2;
        let swapIdx = null;
        if (leftIdx < this.queue.length) {
            if (this.queue[leftIdx].priority <= this.queue[idx].priority) {
                swapIdx = leftIdx;
            }
        }
        if (rightIdx < this.queue.length) {
            if ((swapIdx === null && this.queue[rightIdx].priority <= this.queue[idx].priority) || (swapIdx !== null && this.queue[rightIdx].priority <= this.queue[leftIdx].priority)) {
                swapIdx = rightIdx;
            }
        }
        if (swapIdx !== null) {
                [this.queue[swapIdx], this.queue[idx]] = [this.queue[idx], this.queue[swapIdx]];
            this.bubbleDown(swapIdx);
        }
    }
}

var networkDelayTime = function(times, n, k) {
    const map = new Map();
    for (const time of times) {
        const [source, dest, weight] = time;
        if (!map.has(source)) {
            map.set(source, [[dest, weight]])
        } else {
            map.get(source).push([dest, weight])
        }
    }
    const pq = new PriorityQueue;
    pq.add([k , 0])
    const visited = new Array(n + 1).fill(false);
    let res = 0;
    while (pq.queue.length) {
        const curr = pq.remove();
        const currNode = curr[0];
        const currWeight = curr[1];
        if (visited[currNode]) continue;
        visited[currNode] = true;
        res = currWeight;
        n--;
        if (map.has(currNode)) {
            for (const node of map.get(currNode)) {
                pq.add([node[0], node[1] + currWeight]);
            }
        }
    }
    return !n ? res : -1;
};