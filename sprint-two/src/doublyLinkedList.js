var DoublyLinkedList = function() {
  var _list = {};
  _list.head = null;
  _list.tail = null;

  _list.addToTail = function(value) {
    var newNode = Node(value);
    if (_list.tail === null) {
      _list.head = newNode;
      _list.tail = newNode;
    } else {
      newNode.previous = _list.tail;
      _list.tail.next = newNode;
      _list.tail = newNode;
    }
  };

  _list.addToHead = function(value) {
    var newNode = Node(value);
    if (_list.head === null) {
      _list.head = newNode;
      _list.tail = newNode;
    } else {
      newNode.next = _list.head;
      _list.head.previous = newNode;
      _list.head = newNode;
    }
  };

  _list.removeHead = function() {
    if (_list.head) {
      var oldHead = _list.head;
      if (_list.head.next) {
        _list.head = _list.head.next;
        _list.head.previous = null;
      } else {
        _list.head = null;
        _list.tail = null;
      }
      return oldHead.value;
    } else {
      return null;
    }
  };

  _list.removeTail = function() {
    if (_list.tail) {
      // set the old list tail as oldTail
      var oldTail = _list.tail;
      // if the list tail had a previous value
      if (_list.tail.previous) {
        // set that previous value to be the new tail
        _list.tail = _list.tail.previous;
        
        _list.tail.next = null;
      } else {
        _list.tail = null;
        _list.head = null;
      }
      return oldTail.value;
    } else {
      return null;
    }
  };

  _list.contains = function(target) {
    if (_list.head && _list.head.value === target) {
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
  node.previous = null;

  return node;
};