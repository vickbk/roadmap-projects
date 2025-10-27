const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstIterative = (graph, source) => {
  const stack = [source];
  const results = [];
  while (stack.length > 0) {
    const current = stack.pop();
    results.push(current);
    stack.push(...graph[current]);
  }
  return results;
};

const depthFirstRecursive = (graph, source) => {
  const results = [source];
  for (const neighbor of graph[source])
    results.push(...depthFirstRecursive(graph, neighbor));
  return results;
};

const breathFirst = (graph, source) => {
  const queue = [source];
  const results = [];
  while (queue.length > 0) {
    const current = queue.shift();
    results.push(current);
    queue.push(...graph[current]);
  }
  return results;
};

console.log(breathFirst(graph, "a"));
