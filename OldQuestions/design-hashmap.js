class MyHashMap {
  constructor() {
    this._data = new Array(1000001);
  }
  put(key, value) {
    this._data[key] = value;
  }
  get(key) {
    if (this._data[key] !== undefined || -1) return this._data[key];
    return -1;
  }
  remove(key) {
    this._data[key] = -1;
  }
}
