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