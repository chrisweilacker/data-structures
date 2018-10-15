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

BinarySearchTree.prototype.contains = function (value, bst) {
  bst = bst ? bst : this;
  if (bst.value === value) {
    return true;
  } 
  if (bst.value > value && bst.left !== undefined) {
    return this.contains(value, bst.left);
  } else if (bst.value < value && bst.right !== undefined) {
    return this.contains(value, bst.right);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callBack, bst) {
  bst = bst ? bst : this;
  callBack(bst.value);
  if (bst.left) {
    this.depthFirstLog(callBack, bst.left);
  } 
  if (bst.right) {
    this.depthFirstLog(callBack, bst.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
