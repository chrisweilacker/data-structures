var Set = function() {
  var _set = Object.create(setPrototype);
  _set._storage = []; // fix me
  return _set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is O(n)
 * contains is O(n)
 * remove is O(n)
 */
