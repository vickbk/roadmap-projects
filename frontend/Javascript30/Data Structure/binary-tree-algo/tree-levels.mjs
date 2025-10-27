import { aNode, nodeCount1 } from "./test-modules.mjs";

const treeLevelsBreathFirst = (tree) => {
  if (tree === null) return [];
  const queue = [[tree, 0]];
  const levels = [];
  while (queue.length > 0) {
    const [{ val, left, right }, level] = queue.shift();
    if (!levels[level]) levels[level] = [];
    levels[level].push(val);
    const nextLevel = level + 1;
    if (left !== null) queue.push([left, nextLevel]);
    if (right !== null) queue.push([right, nextLevel]);
  }
  return levels;
};

export const treeLevelsRecursive = (tree) => {
  const levels = [];
  treeLevelsRecursiveFill(tree, levels, 0);
  return levels;
};

const treeLevelsRecursiveFill = (tree, levels, level) => {
  if (tree === null) return;
  const { val, left, right } = tree;
  if (levels.length === level) levels.push([val]);
  else levels[level].push(val);
  treeLevelsRecursiveFill(left, levels, level + 1);
  treeLevelsRecursiveFill(right, levels, level + 1);
};

console.log(treeLevelsBreathFirst(nodeCount1));
console.log(treeLevelsRecursive(aNode));
