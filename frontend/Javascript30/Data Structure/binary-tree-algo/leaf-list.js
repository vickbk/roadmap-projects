import { aNode, node1, nodeCount1 } from "./test-modules.mjs";

const leafListDepthFirst = (tree) => {
  if (tree === null) return [];
  const queue = [tree];
  const list = [];
  while (queue.length > 0) {
    const { val, left, right } = queue.pop();
    if (left === null && right === null) list.push(val);
    if (right !== null) queue.push(right);
    if (left !== null) queue.push(left);
  }
  return list;
};

const leafListRecursive = (tree) => {
  if (tree === null) return [];
  const { val, left, right } = tree;
  if (left === null && right === null) return [val];
  return [...leafListRecursive(left), ...leafListRecursive(right)];
};

console.log(leafListDepthFirst(aNode));
console.log(leafListDepthFirst(nodeCount1));
console.log(leafListRecursive(aNode));
console.log(leafListRecursive(nodeCount1));

console.log(leafListDepthFirst(node1));
console.log(leafListRecursive(node1));
