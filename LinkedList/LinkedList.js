class MyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
  get() {}
  addAtHead() {}
  addAtTail() {}
  addAtIndex() {}
  deleteAtIndex() {}
}

let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
myLinkedList.get(1); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
myLinkedList.get(1);

console.log(myLinkedList);
