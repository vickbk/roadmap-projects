const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPathIterative = (graph, src, dest) => {
  const queue = [src];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr === dest) return true;
    queue.push(...graph[curr]);
  }
  return false;
};

// console.log(hasPathIterative(graph, "f", "j"));

const hasPathRecursive = (graph, src, dest) => {
  if (src === dest) return true;
  let res = false;
  for (const nghb of graph[src]) res = hasPathRecursive(graph, nghb, dest);
  return res;
};
console.log(hasPathRecursive(graph, "f", "k"));
