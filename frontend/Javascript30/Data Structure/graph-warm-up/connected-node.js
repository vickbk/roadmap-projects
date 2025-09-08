/**
 *
 * @param {object} graph is a key value object where the values  are arrays of other keys
 * @returns the number of different interconnected node groups
 */

const countConnected = (graph) => {
  let count = 0;
  const visited = new Set();
  for (const key in graph) {
    if (checkDeep(graph, key, visited)) count++;
  }
  return count;
};

const checkDeep = (graph, curr, visited) => {
  curr = curr.toString();
  if (visited.has(curr)) return false;
  visited.add(curr);
  for (const nghb of graph[curr]) checkDeep(graph, nghb, visited);
  return true;
};
console.log(
  countConnected({
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: [],
  })
);
