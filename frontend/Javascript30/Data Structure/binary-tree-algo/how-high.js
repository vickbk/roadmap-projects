import { nodeCount1 } from "./test-modules.mjs";

const howHigh = (tree) => {
  if (tree === null) return -1;
  const { left, right } = tree;
  return 1 + Math.max(howHigh(left), howHigh(right));
};

console.log(howHigh(nodeCount1.right.right));
