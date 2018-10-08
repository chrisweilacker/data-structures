var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    length++;
    storage[length] = value;
  };

  someInstance.pop = function() {
    if (length > 0) {
      var result = storage[length];
      storage[length] = undefined;
      length--;
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
