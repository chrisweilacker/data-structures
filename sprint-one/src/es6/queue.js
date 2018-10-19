class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  size() {
    return this.length;
  }

  enqueue(value) {
    this.storage[this.length] = value;  
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      var result = this.storage[0];
      for (var i = 1; i < this.length; i++) {
        this.storage[i-1] = this.storage[i];
      }
      this.length--;
      return result;
    } else {
      return undefined;
    }
  }

}
