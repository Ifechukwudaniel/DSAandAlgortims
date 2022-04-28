/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue=[0]
    let hashSeen = new Map()
    let seen =[]
    
    while(queue.length){
        let node = queue.shift()
        hashSeen.set(node, true)
        if(!seen.includes(node))  seen.push(node)
        let connections =rooms[node]
        // console.log(connections, hashSeen)
        for(let vertex of connections){
            // console.log(hashSeen.has(vertex))
            if(!hashSeen.has(vertex))  queue.push(vertex)
            // console.log(queue)
        }
    }
    console.log(seen)
    return seen.length === rooms.length
    
};
