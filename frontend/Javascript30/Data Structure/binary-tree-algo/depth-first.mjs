import { aNode } from "./test-modules.mjs";

const a = aNode;

// console.log(a);

function depthFirstValues(root) {
  const tree = [];
  if (!root) return tree;
  const arr = [root];
  for (; arr.length > 0; ) {
    const current = arr.pop();
    if (current.right) arr.push(current.right);
    if (current.left) arr.push(current.left);
    tree.push(current);
  }
  return tree;
}

function depthFirstRecursive(root) {
  if (!root) return [];
  const left = depthFirstRecursive(root.left);
  const right = depthFirstRecursive(root.right);
  return [root.val, ...left, ...right];
}

// console.time("array");
// console.log(depthFirstValues(a));
// console.time("recursive");
console.log(depthFirstRecursive(a));
