class MyStack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    this.data.pop();
  }
}

let stack = new MyStack();
stack.push(1);
console.log(stack.data);
stack.push(2);
console.log(stack.data);
stack.push(3);
console.log(stack.data);
stack.push(4);
console.log(stack.data);
stack.pop(1);
console.log(stack.data);
stack.pop(2);
console.log(stack.data);
stack.pop(3);
console.log(stack.data);
stack.pop(4);
console.log(stack.data);
