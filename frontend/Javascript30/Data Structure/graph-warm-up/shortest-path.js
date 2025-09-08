const shortestPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const visited = new Set();
  console.log(graph);
  return getShortestPath(graph, nodeA, nodeB, visited);
};

const shortestPathBreathFirst = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const queue = [{ node: nodeA, path: 0 }];
  const visited = new Set();
  while (queue.length > 0) {
    const { node, path } = queue.shift();
    if (node === nodeB) return path;
    visited.add(node);
    for (const x of graph[node]) {
      if (visited.has(x)) continue;
      queue.push({ node: x, path: path + 1 });
    }
  }
};

const shortestPathDepthFirst = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const queue = [{ node: nodeA, path: 0 }];
  const visited = new Set();
  while (queue.length > 0) {
    const { node, path } = queue.pop();
    if (node === nodeB) return path;
    visited.add(node);
    for (const x of graph[node]) {
      if (visited.has(x)) continue;
      queue.push({ node: x, path: path + 1 });
    }
  }
};

const edgesToGraph = (edges) => {
  const graph = {};
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
};

const getShortestPath = (graph, nodeA, nodeB, visited) => {
  if (visited.has(nodeA)) return -1;
  visited.add(nodeA);
  if (nodeA === nodeB) return 0;
  const paths = [];
  for (const x of graph[nodeA]) {
    path = getShortestPath(graph, x, nodeB, visited);
    if (path !== -1) paths.push(path + 1);
  }
  return Math.min(paths);
};

const edges = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  //   ["e", "f"],
  ["g", "f"],
];

console.log(shortestPath(edges, "a", "e")); // -> 2

/**
 *  a -- b
 *  | /  |
 *  c -- d -- e
 *
 *  g -- f
 */

/**
 *    w --  x
 *     \    |
 *      \   y
 *       \  |
 *        \ z
 *         \|
 *          v
 */
