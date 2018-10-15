var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.removeChildrenbyValue = function(value) {
  for (let i = 0; i < this.children.length; i ++) {
    if (this.children[i].value === value) {
      this.children.splice(i, 1);
    } else {
      this.children[i].removeChildrenbyValue(value);
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (let i = 0; i < this.children.length; i ++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1);
 * contains is O(n);
 */
