class MonotonicStack {
  constructor() {
    this._stack = [];
  }

  push(value) {
    if (this._stack.length == 0) {
      this._stack.push(value);
      return;
    }

    while (value < this._stack[this._stack.length - 1]) {
      this._stack.pop();
    }
    this._stack.push(value);
  }

  pop() {
    this._stack.pop();
  }
  printStack() {
    console.log(this._stack);
  }
}

let monotonicStack = new MonotonicStack();
monotonicStack.push(1);
monotonicStack.push(2);
monotonicStack.push(3);
monotonicStack.push(4);
monotonicStack.push(5);
monotonicStack.push(6);
monotonicStack.printStack();

let monotonicStack2 = new MonotonicStack();
monotonicStack2.push(1);
monotonicStack2.push(3);
monotonicStack2.push(4);
monotonicStack2.push(5);
monotonicStack2.push(8);
monotonicStack2.push(9);
monotonicStack2.push(3);
monotonicStack2.printStack();
