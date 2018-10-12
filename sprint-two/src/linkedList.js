var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    var currentNode = list.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      if (currentNode && currentNode.value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail is O(1)
 * removeHead is O(1)
 * contains is O(n)
 */
