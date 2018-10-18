var Set = function() {
  var _set = Object.create(setPrototype);
  _set._storage = new HashTable();
  
  return _set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.insert(JSON.stringify(item), item);
};

setPrototype.contains = function(item) {
  return Boolean(this._storage.retrieve(JSON.stringify(item)));
};

setPrototype.remove = function(item) {
  this._storage.remove(JSON.stringify(item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is O(1)
 * contains is O(1)
 * remove is O(1)
 */

// Make your set capable of handling numbers as well as strings
// Make your set capable of handling input objects of any type
