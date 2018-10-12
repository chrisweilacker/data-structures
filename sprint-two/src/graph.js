

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.splice(_.indexOf(this.nodes, node), 1);
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], node)) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var targetEdge = [];
  targetEdge.push(fromNode, toNode);
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var newEdge = [];
  newEdge.push(fromNode, toNode);
  this.edges.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var targetEdge = [];
  targetEdge.push(fromNode, toNode);
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode is O(1)
 * contains is O(n)
 * remove Node is O(n)
 * hasEdge is O(n) Linear but has to check two arrays with two values
 * remove Edge is O(n)
 * forEachNode is O(n)
 */


