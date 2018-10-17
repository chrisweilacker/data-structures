var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
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

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    for (var i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i] === this) {
        this.parent.children.splice(i, 1);
      }
    }
    this.parent = null;
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

// A .parent property, which refers to the parent node or null when there is no node
// A .removeFromParent() method, which disassociates the tree with its parent (in both directions)




/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1);
 * contains is O(n);
 */
