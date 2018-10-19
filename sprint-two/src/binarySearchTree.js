var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
  this.depth = 0;
};

BinarySearchTree.prototype.insert = function (value) {
  //bst = bst ? bst : this;
  var node = new BinarySearchTree(value);

  if (this.value > value && this.left === undefined) {
    this.left = node;
    node.depth = this.depth + 1;
  } else if (this.value > value) {

    return this.left.insert(value);
  } 
  
  if (this.value<value && this.right === undefined) {
    this.right = node;
    node.depth = this.depth + 1;
  } else if (this.value < value ) {
    return this.right.insert(value);
  }
  
};
// var max = 0;
// var min = 0;
// use depthTest to iterate
// check each depth
// if depth > max
// max = depth

// var min;
// use depthfirstlog
// if less than min && 

BinarySearchTree.prototype._rebalance = function () {
  // create an array / linked list of all values
  var values = [];
  this.depthFirstLog(function(value) {
    values.push(value);
  });
  // sort the array
  values.sort(function(a, b) {
    return a - b;
  });


  // find the middle value, set it to root
  var recursiveRebalance = function (array, start, end) {
    if (start > end) {
      return undefined;
    }
    var middle = Math.floor((start+end)/2);
    var node = new BinarySearchTree(array[middle]);

    node.left = recursiveRebalance(array, start, middle-1);
    node.right = recursiveRebalance(array, middle + 1, end);

    return node;
  };

  var newRoot = recursiveRebalance(values, 0, values.length-1);
  this.value = newRoot.value;
  this.right = newRoot.right;
  this.left = newRoot.left;
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


BinarySearchTree.prototype.depthFirstLog = function (callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  } 
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function (callback) {
  var toVisit =  new Queue();
  // add the root node to our queue
  toVisit.enqueue(this);
  // while our queue size > 0
  while (toVisit.size() > 0) {
    // set node to the first value in our queue
    var node = toVisit.dequeue();
    // call our callback on this node
    callback(node.value);
    // if this node has a left
    if (node.left) {
      // enqueue the left
      toVisit.enqueue(node.left);
    }
    // if this node has a right
    if (node.right) {
      // enqueue the right
      toVisit.enqueue(node.right);
    }
  }
};

var Queue = function() {
  this.storage = {};
  this.enqueuedCount = 0;
  this.dequeuedCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enqueuedCount] = value;
  this.enqueuedCount ++;
};

Queue.prototype.dequeue = function() {
  var dequeuedValue = this.storage[this.dequeuedCount];
  delete this.storage[this.dequeuedCount];
  this.dequeuedCount ++;
  return dequeuedValue;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */


//       5
//    4     6
//  3  6  2   8