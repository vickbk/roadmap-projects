class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const treeIncludesIterative = (node, target) => {
  if (node === null) return false;
  const queue = [node];
  while (queue.length > 0) {
    const current = queue.shift();
    const { val, left, right } = current;
    if (val === target) return true;
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  return false;
};

// console.log(treeIncludesIterative(a, "e"));

const treeIncludesRecursive = (node, target) => {
  if (node === null) return false;
  const { val, left, right } = node;
  return (
    val === target ||
    treeIncludesRecursive(left, target) ||
    treeIncludesRecursive(right, target)
  );
};

console.log(treeIncludesRecursive(a, "e"));
