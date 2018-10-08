var Stack = function() {
  var stackInstance = Object.create(stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return stackInstance;
};

var stackMethods = {
  storage: {},
  length: 0,
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function () {
    if (this.length>0) {
      this.length--;
      return this.storage[this.length];
    } else {
      return undefined;
    }
  },
  size: function() {
    return this.length;
  }
};


