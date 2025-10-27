const largestConnectedNodes = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (const key in graph)
    largest = Math.max(largest, countConnected(graph, key, visited));
  return largest;
};

const countConnected = (graph, curr, visited) => {
  curr = curr + "";
  if (visited.has(curr)) return 0;
  visited.add(curr);
  let count = 1;
  for (const nghb of graph[curr]) count += countConnected(graph, nghb, visited);
  return count;
};

console.log(
  largestConnectedNodes({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
);
