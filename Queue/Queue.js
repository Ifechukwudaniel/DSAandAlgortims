class MyQueue {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  enqueue(data) {
    this.data.push(data);
  }

  dequeue() {
    this.data.splice(this.top, 1);
  }
}

let queue = new MyQueue();
queue.enqueue(1);
console.log(queue.data);
queue.enqueue(2);
console.log(queue.data);
queue.enqueue(3);
console.log(queue.data);
queue.enqueue(4);
console.log(queue.data);
queue.dequeue(1);
console.log(queue.data);
queue.dequeue(2);
console.log(queue.data);
queue.dequeue(3);
console.log(queue.data);
queue.dequeue(4);
console.log(queue.data);
