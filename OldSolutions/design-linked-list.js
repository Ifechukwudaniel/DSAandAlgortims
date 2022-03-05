class MyLinkedList {
  constructor() {
    this._data = [];
    this._length = 0;
  }

  get(index) {
    return this._data[index] !== undefined ? this._data[index] : -1;
  }

  addAtHead(val) {
    this._data.unshift(val);
  }

  addAtTail(val) {
    this._data.push(val);
  }

  addAtIndex(index, val) {
    if (index < this._data.length) {
      this._data.splice(index, 0, val);
    }
    if (index == this._data.length) {
      this.addAtTail(val);
    } else return;
  }

  deleteAtIndex(index) {
    if (index < this._data.length) {
      this._data.splice(index, 1);
    } else return;
  }
}

let myLinkedList = new MyLinkedList();
myLinkedList.addAtTail(1);
myLinkedList.addAtHead(3);
myLinkedList.addAtIndex(6, 111);
console.log(myLinkedList.get(2));
