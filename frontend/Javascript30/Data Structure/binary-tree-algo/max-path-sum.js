import { maxPathSumNegativeTree } from "./test-modules.mjs";

const a = maxPathSumNegativeTree;

const maxPathSumRecursive = (node) => {
  if (node === null) return -Infinity;
  const val = node.val;
  if (node.left === null && node.right === null) return val;
  const left = maxPathSumRecursive(node.left);
  const right = maxPathSumRecursive(node.right);
  return val + Math.max(left, right);
};

console.log(maxPathSumRecursive(a));
