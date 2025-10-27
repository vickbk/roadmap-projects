import { halfNodeTree } from "./test-modules.mjs";

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
g.left = new Node(23);

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2
//    /
//   23

const removeHalfIterative = (root) => {
  if (root === null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    const { val, left, right } = current;
    if (left !== null) stack.push(left);
    if (right !== null) stack.push(right);
    if ((left === null || right === null) && !(left === null && right === null))
      continue;
    result.push(val);
  }
  return result;
};

// console.log(removeHalfIterative(a));

const removeHalfRecursive = (node) => {
  if (node === null) return [];
  const { val, left, right } = node;
  const leftTree = removeHalfRecursive(left);
  const rightTree = removeHalfRecursive(right);
  const result = [...leftTree, ...rightTree];
  if ((left === null || right === null) && !(left === null && right === null))
    return result;
  return [val, ...result];
};
console.log(removeHalfRecursive(halfNodeTree));
