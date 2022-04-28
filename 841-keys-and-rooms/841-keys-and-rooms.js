/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue=[0]
    let hashSeen = new Set()
    hashSeen.add(0)
    
    while(queue.length){
        let node = queue.shift()
        let connections =rooms[node]
        for(let vertex of connections){
            if(!hashSeen.has(vertex)) {
              hashSeen.add(vertex)
              queue.push(vertex) 
            }  
        }
    }
    // console.log(hashSeen)
    return hashSeen.size === rooms.length
    
};
