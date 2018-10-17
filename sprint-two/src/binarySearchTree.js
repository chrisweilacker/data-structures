var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function (value) {
  //bst = bst ? bst : this;
  var node = new BinarySearchTree(value);
  if (this.value > value && this.left === undefined) {
    this.left = node;
  } else if (this.value > value) {
    return this.left.insert(value);
  } 
  
  if (this.value<value && this.right === undefined) {
    this.right = node;
  } else if (this.value < value ) {
    return this.right.insert(value);
  }
  
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  } 
  if (this.value > value && this.left !== undefined) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== undefined) {
    return this.right.contains(value);
  }

  return false;
};

BinarySearchTree.prototype.size = function () {
  var count = 0;
  this.depthFirstLog(function(val) {
    count++;
  });
  return count;
};

BinarySearchTree.prototype.depthFirstLog = function (callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  } 
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
