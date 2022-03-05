class MyHashSet {
  constructor() {
    this._data = new Array(1000001);
  }

  add(key) {
    this._data[key] = key;

    if (key == 0) {
      this._data[key] = -1;
    }
  }
  remove(key) {
    this._data[key] = -2;
  }
  contains(key) {
    if (key == 0) {
      if (this._data[key] == -1) return true;
    } else {
      if (this._data[key] === key) return true;
    }
    return false;
  }
}

let myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
myHashSet.add(2); // set = [1, 2]
myHashSet.add(3);
myHashSet.add(4);
myHashSet.add(5);
myHashSet.add(6);
myHashSet.add(7);
myHashSet.add(8);
myHashSet.add(9);
myHashSet.add(10);
console.log(myHashSet.contains(1)); // return True
console.log(myHashSet.contains(3)); // return False, (not found)
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.contains(2)); // return True
myHashSet.remove(2); // set = [1]
console.log(myHashSet.contains(2)); // return False, (already removed)
