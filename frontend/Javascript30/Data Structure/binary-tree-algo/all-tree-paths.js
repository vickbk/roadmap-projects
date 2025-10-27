import { aNode, halfNodeTree } from "./test-modules.mjs";

const allTreePaths = (tree) => {
  if (tree === null) return [];
  const { val, left, right } = tree;
  if (left === null && right === null) return [[val]];
  const paths = [...allTreePaths(left), ...allTreePaths(right)];
  const newPaths = [];
  paths.forEach((path) => newPaths.push([val, ...path]));
  return newPaths;
};

console.log(allTreePaths(halfNodeTree));
console.log(allTreePaths(aNode));
