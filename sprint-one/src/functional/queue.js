var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add value to top of queue and increase the length
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
  //determine if queue has values otherwise return undefined
    if (length > 0) {
      //prepare the result with the first value;
      var result = storage[0];
      //move all values down one in the queue
      for (var i = 1; i < length; i++) {
        storage[i-1] = storage[i];
      }
      //reduce length and set the last value to undefined
      length--;
      storage[length] = undefined;
      return result;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
