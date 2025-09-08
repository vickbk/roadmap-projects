import { aNode, maxPathSumNegativeTree, nodeCount1 } from "./test-modules.mjs";

const bottomRightBreathFirst = (tree) => {
  if (tree === null) return null;
  const queue = [tree];
  let lastVisited = null;
  while (queue.length > 0) {
    const { val, left, right } = queue.shift();
    lastVisited = val;
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
  }
  return lastVisited;
};

console.log(bottomRightBreathFirst(nodeCount1));
console.log(bottomRightBreathFirst(aNode));
console.log(bottomRightBreathFirst(maxPathSumNegativeTree));
