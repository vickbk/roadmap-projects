const undirectPathIterative = (graph, src, dst) => {
  const queue = [src];
  const visited = [];
  const adjancy = edgeToAdjancy(graph);
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr === dst) return true;
    visited.push(curr);
    for (const nghb of adjancy[curr])
      if (!visited.includes(nghb)) queue.push(nghb);
  }
  return false;
};

const edgeToAdjancy = (graph) => {
  const adj = {};
  for (const edge of graph) {
    const [a, b] = edge;
    if (!adj[a]) adj[a] = [];
    if (!adj[b]) adj[b] = [];
    adj[a].push(b);
    adj[b].push(a);
  }
  return adj;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// console.log(edgeToAdjancy(edges));

// console.log(undirectPathIterative(edges, "i", "o"));

const undirectPathRecursive = (edges, nodeA, nodeB) => {
  const graph = edgeToAdjancy(edges);
  return findPath(graph, nodeA, nodeB, new Set());
};

const findPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (const nghb of graph[src])
    if (findPath(graph, nghb, dst, visited)) return true;
  return false;
};

console.log(undirectPathRecursive(edges, "j", "m"));
