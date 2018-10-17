var Set = function() {
  var _set = Object.create(setPrototype);
  _set._storage = new HashTable();
  
  return _set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.insert(item, item);
};

setPrototype.contains = function(item) {
  return Boolean(this._storage.retrieve(item));
};

setPrototype.remove = function(item) {
  this._storage.remove(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is O(1)
 * contains is O(1)
 * remove is O(1)
 */
