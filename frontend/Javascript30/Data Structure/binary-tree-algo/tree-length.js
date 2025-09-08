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

const treeLength = (root) => {
  if (root === null) return 0;
  const left = treeLength(root.left);
  const right = treeLength(root.right);
  return 1 + Math.max(left, right);
};

console.log(treeLength(a));
