
var UndergroundSystem = function() {
    //this._cityKeys = new Set()
    this._onGoingTrip = new Map()
    this._finishedTrips = new Map()
};


UndergroundSystem.prototype._tripId = function(cityA,cityB) {
 cityA = cityA.toLowerCase()
 cityB = cityB.toLowerCase()
 return  `${cityA}->${cityB}`
 // let chars = new Array(27).fill(0);
 // let length = Math.max(cityA.length , cityB.length)
 // for(let i= 0; i<length; i++){   
 //     if(cityA[i] !== undefined){
 //        console.log(cityA.charCodeAt(i))  
 //     }
 //     if(cityB[i] !== undefined){
 //        console.log(cityB.charCodeAt(i))  
 //     }
 //  }
 // return chars.join("#")
 
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if(this._onGoingTrip.has(id)) return
    this._onGoingTrip.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let checkInDetail =  this._onGoingTrip.get(id)
    this._onGoingTrip.delete(id)
    let distanceId = this._tripId(checkInDetail[0], stationName) 
    let timeDiffrence = t - checkInDetail[1]
    if(!this._finishedTrips.has(distanceId)) this._finishedTrips.set(distanceId,[])
    this._finishedTrips.get(distanceId).push(timeDiffrence)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
     let id = this._tripId(startStation, endStation)
     let distances =  this._finishedTrips.get(id)
     let total = 0
     for (let item of distances ){
         total+= item
     }
    return total / distances.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */