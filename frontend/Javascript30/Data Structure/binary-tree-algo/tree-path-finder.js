const treePathFinder = (tree, target) => {
  const path = treePathFinderRecursive(tree, target);
  return !path ? null : path.reverse();
};
const treePathFinderRecursive = (tree, target) => {
  if (tree === null) return null;
  if (tree.val === target) return [tree.val];
  const found =
    treePathFinderRecursive(tree.left, target) ??
    treePathFinderRecursive(tree.right, target);
  if (found !== null) found.push(tree.val);
  return found;
};

class BinaryNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  setLeft(child) {
    this.left = child;
  }
  setRight(child) {
    this.right = child;
  }
  addChild(child) {
    if (this.left === null) this.left = child;
    else if (this.right === null) this.right = child;
  }
}

const a = new BinaryNode("A");
a.addChild(new BinaryNode("B"));
a.addChild(new BinaryNode("C"));
a.left.addChild(new BinaryNode("D"));
a.left.addChild(new BinaryNode("E"));
a.right.setRight(new BinaryNode("F"));

const getBigNumNode = (target) => {
  const bigNums = new BinaryNode(0);
  let current = bigNums;
  for (let num = 1; num <= 6000; num++) {
    current.setRight(new BinaryNode(num));
    current = current.right;
  }
  return bigNums;
};

const right6000 = getBigNumNode(6000);

console.time("big number left");
console.log(treePathFinder(right6000, 4000));
console.timeEnd("big number left");
