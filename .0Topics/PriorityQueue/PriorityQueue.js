class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  pick() {
    return this._heap[0];
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _left(index) {
    return Math.floor(2 * index + 1);
  }

  _right(index) {
    return Math.floor(2 * index + 2);
  }

  _swap(i, j) {
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;
    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  push(val) {
    this._heap.push(val);
    this._siftUp();
    return this.size();
  }

  _nodeVal(index) {
    return this._heap[index];
  }

  _nodeExists(index) {
    return this._heap[index] !== undefined;
  }

  _siftDown(index = 0) {
    while (
      this._nodeExists(this._right(index)) ||
      this._nodeExists(this._left(index))
    ) {
      if (this._compare(this._left(index), this._right(index))) {
        this._swap(this._left(index), index);
        index = this._left(index);
      } else {
        this._swap(this._right(index), index);
        index = this._right(index);
      }
    }
  }

  pop() {
    let root = this.pick();
    this._swap(0, this.size() - 1);
    this._heap.pop();
    this._siftDown();
    return root;
  }
}

let x = new PriorityQueue();

for (let i = 0; i < 90000000; i++) {
  x.push(Math.random() * 1.6243);
}

for (let i = 0; i < 10; i++) {
  console.log(x.pop());
}
// console.log(x._heap);
