class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const treeMinIterative = (node) => {
  if (node === null) return Infinity;
  const queue = [node];
  let min = Infinity;
  while (queue.length > 0) {
    const { val, left, right } = queue.shift();
    min = Math.min(min, val);
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
  }
  return min;
};

// console.log(treeMinIterative(a));

const treeMinRecursive = (node) => {
  if (node === null) return Infinity;
  const right = treeMinRecursive(node.right);
  const left = treeMinRecursive(node.left);
  return Math.min(node.val, left, right);
};

console.log(treeMinRecursive(a));
