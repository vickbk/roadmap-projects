class BinaryNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  setLeft(child) {
    if (!(child instanceof BinaryNode)) child = new BinaryNode(child);
    this.left = child;
  }
  setRight(child) {
    if (!(child instanceof BinaryNode)) child = new BinaryNode(child);
    this.right = child;
  }
  addChild(child) {
    if (!(child instanceof BinaryNode)) child = new BinaryNode(child);
    if (this.left === null) this.left = child;
    else if (this.right === null) this.right = child;
  }
}

export { BinaryNode };

export const nodeCount1 = new BinaryNode(12);
nodeCount1.addChild(new BinaryNode(6));
nodeCount1.addChild(new BinaryNode(6));
nodeCount1.left.addChild(new BinaryNode(4));
nodeCount1.left.addChild(new BinaryNode(6));
nodeCount1.right.setRight(new BinaryNode(12));

/**
 *
 *      12
 *     /  \
 *    6    6
 *   / \    \
 *  4   6    12
 *
 */

export const aNode = new BinaryNode("A");
aNode.addChild(new BinaryNode("B"));
aNode.addChild(new BinaryNode("C"));
aNode.left.addChild(new BinaryNode("D"));
aNode.left.addChild(new BinaryNode("E"));
aNode.right.setRight(new BinaryNode("F"));

/**
 *
 *      A
 *     /  \
 *    B    C
 *   / \    \
 *  D   E    F
 *
 */

export const maxPathSumNegativeTree = new BinaryNode(-1);

maxPathSumNegativeTree.addChild(new BinaryNode(-6));
maxPathSumNegativeTree.addChild(new BinaryNode(-5));
maxPathSumNegativeTree.left.addChild(new BinaryNode(-3));
maxPathSumNegativeTree.left.addChild(new BinaryNode(0));
maxPathSumNegativeTree.left.right.addChild(new BinaryNode(-1));
maxPathSumNegativeTree.right.setRight(new BinaryNode(-13));
maxPathSumNegativeTree.right.right.setRight(new BinaryNode(-2));

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

export const halfNodeTree = new BinaryNode(-1);

halfNodeTree.addChild(-6);
halfNodeTree.addChild(-5);
halfNodeTree.left.addChild(-3);
halfNodeTree.left.addChild(0);
halfNodeTree.left.right.addChild(-1);
halfNodeTree.left.right.left.addChild(23);
halfNodeTree.right.setRight(-13);
halfNodeTree.right.right.setRight(-2);

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2
//    /
//   23

export const numberNode1 = new BinaryNode(3);
numberNode1.addChild(11);
numberNode1.addChild(4);
numberNode1.left.addChild(4);
numberNode1.left.addChild(25);
numberNode1.right.setRight(1);

export const node1 = new BinaryNode("Q");
node1.addChild("R");
node1.addChild("S");
node1.left.addChild("T");
node1.left.addChild("U");
node1.right.setLeft("V");
node1.left.left.setRight("W");
node1.left.right.addChild("X");
node1.left.right.addChild("Y");
node1.left.right.right.setRight("Z");
