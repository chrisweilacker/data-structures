

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyPair = [k, v];
  if (!this._storage.get(index)) {
    // if the index doesn't exist
    this._storage.set(index, [keyPair]);
  } else {
    // if the index does exist
    // for each key/value pair in our array
    var newKeyPair = this._storage.get(index);
    for (let i = 0; i < newKeyPair.length; i ++) {
      if (newKeyPair[i][0] === k) {
        newKeyPair[i][1] = v;
        this._storage.set(index, newKeyPair);
        return;
      }
    }
    //if value not found push into array and set
    newKeyPair.push(keyPair);
    this._storage.set(index, newKeyPair);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    for (let i = 0; i < this._storage.get(index).length; i ++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index).length > 1) {
    var newKeyPair = this._storage.get(index);
    for (let i = 0; i < newKeyPair.length; i ++) {
      if (newKeyPair[i][0] === k) {
        newKeyPair.splice(i, 1);
        this._storage.set(index, newKeyPair);
        return;
      }
    }
  }
  return this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert : O(1), unless you have collissions.
 * Retrieve : O(1), unless you have collissions.
 * Remove : O(1), unless you have collissions.
 */


