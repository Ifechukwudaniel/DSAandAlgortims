var MyCircularQueue = function(k) {
  this.storage = [];
  this.currentSize = 0;
  this.maxSize = k;
  this.front = 0;
  this.rear = -1;
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.currentSize >= this.maxSize) {
    return false;
  };

  this.rear = (++this.rear) % this.maxSize;
  this.storage[this.rear] = value;
  this.currentSize++;
  
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.currentSize === 0) {
    return false;
  };

  this.front = (++this.front) % this.maxSize;
  this.currentSize--;
  
  return true;
};

MyCircularQueue.prototype.Front = function() {
  return this.currentSize === 0 ? -1 : this.storage[this.front];
};

MyCircularQueue.prototype.Rear = function() {
  return this.currentSize === 0 ? -1 : this.storage[this.rear];
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.currentSize === 0;
};

MyCircularQueue.prototype.isFull = function() {
  return this.currentSize === this.maxSize;
};