
class MinStack {
    constructor(){
       this.stack = []
       this.min = []
    }
    
    push(val){
      this.stack.push(val)   
      if(!this.min.length)  return  this.min.push(val)
      val = Math.min(this.min[this.min.length -1], val)
        
      this.min.push(val)   
    }
    
    
    pop(){
        this.stack.pop() 
        this.min.pop()
    }
    
    top(){
      return  this.stack[this.stack.length -1]
    }
    
    getMin(){
      return  this.min[this.min.length -1]
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */