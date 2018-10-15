var LinkedList = function() {
  var _list = {};
  _list.head = null;
  _list.tail = null;

  _list.addToTail = function(value) {
    var newNode = Node(value);
    if (_list.tail === null) {
      _list.head = newNode;
      _list.tail = newNode;
    } else {
      _list.tail.next = newNode;
      _list.tail = newNode;
    }
  };

  _list.removeHead = function() {
    if (_list.head) {
      var oldHead = _list.head;
      _list.head = _list.head.next;
      return oldHead.value;
    } else {
      return null;
    }
  };

  _list.contains = function(target) {
    if (_list.head.value === target) {
      return true;
    }
    var currentNode = _list.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      if (currentNode && currentNode.value === target) {
        return true;
      }
    }
    return false;
  };
  return _list;
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
