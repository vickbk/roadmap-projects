import { nodeCount1 } from "./test-modules.mjs";

const treeCountDepthFirst = (tree, target) => {
  if (tree === null) return 0;
  const stack = [tree];
  let count = 0;
  while (stack.length > 0) {
    let { val, left, right } = stack.pop();
    if (val === target) count++;
    if (left !== null) stack.push(left);
    if (right !== null) stack.push(right);
  }
  return count;
};

const treeCountBreathFirst = (tree, target) => {
  if (tree === null) return 0;
  const queue = [tree];
  let count = 0;
  while (queue.length > 0) {
    let { val, left, right } = queue.shift();
    if (val === target) count++;
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
  }
  return count;
};

const treeCountRecursive = (tree, target) => {
  if (tree === null) return 0;
  const { val, left, right } = tree;
  const count = val === target ? 1 : 0;
  return (
    count + treeCountRecursive(left, target) + treeCountRecursive(right, target)
  );
};
console.log(treeCountDepthFirst(nodeCount1, 6));
console.log(treeCountBreathFirst(nodeCount1, 4));

console.log(treeCountRecursive(nodeCount1, 6));
