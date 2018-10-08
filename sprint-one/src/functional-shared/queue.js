var Queue = function() {
  var queueInstance = {};
  _.extend(queueInstance,queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return queueInstance;
};

var queueMethods = {
  storage: {},
  length: 0,
  enqueue: function (value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue : function () {
    if (this.length > 0){
      var result = this.storage[0];
      for (var i = 1; i < this.length; i++) {
        this.storage[i-1] = this.storage[i];
      }
      this.length--;
      return result;
    } else {
      return undefined;
    }
  },
  size : function() {
    return this.length;
  }
};


