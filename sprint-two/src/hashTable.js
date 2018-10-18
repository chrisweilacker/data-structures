

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype._doubleSize = function () {
  this._limit = this._limit * 2;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  // change our limit to this._limit * 2
  var object = this;
  oldStorage.each(function(tuple) {
    if (tuple) {
      for (var i = 0; i < tuple.length; i ++) {
        object.insert(tuple[i][0], tuple[i][1]);
      }
    }
  });
  // ensure that all old kv pairs are remapped to the new storage
};

HashTable.prototype._halfSize = function () {
  this._limit = (this._limit / 2);
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  // change our limit to this._limit * 2
  var object = this;
  oldStorage.each(function(tuple) {
    if (tuple) {
      for (var i = 0; i < tuple.length; i ++) {
        object.insert(tuple[i][0], tuple[i][1]);
      }
    }
  });
  // ensure that all old kv pairs are remapped to the new storage
};

HashTable.prototype.insert = function(k, v) {
  // if the size of our hashtable >= this._limit * 0.75
  if (this._size >= (0.75 * this._limit)) {
    this._doubleSize();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyPair = [k, v];
  if (!this._storage.get(index)) {
    // if the index doesn't exist
    this._storage.set(index, [keyPair]);
    this._size ++;
  } else {
    // if the index does exist
    // for each key/value pair in our array
    var newKeyPair = this._storage.get(index);
    for (let i = 0; i < newKeyPair.length; i ++) {
      if (newKeyPair[i][0] === k) {
        newKeyPair[i][1] = v;
        this._storage.set(index, newKeyPair);
        this._size ++;
        return;
      }
    }
    //if value not found push into array and set
    newKeyPair.push(keyPair);
    this._storage.set(index, newKeyPair);
    this._size ++;
  }
  
};


// To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled

// To save space, make sure the hashTable halves in size when space usage falls below 25 percent


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
  if (this._size <= (0.25 * this._limit)) {
    this._halfSize();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index).length >= 1) {
    var newKeyPair = this._storage.get(index);
    for (let i = 0; i < newKeyPair.length; i ++) {
      if (newKeyPair[i][0] === k) {
        newKeyPair.splice(i, 1);
        this._storage.set(index, newKeyPair);
        this._size --;
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




