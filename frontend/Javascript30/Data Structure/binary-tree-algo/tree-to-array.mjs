import { arrayToBinaryTree } from "./array-to-binary.mjs";

export const binaryTreeToArray = (node) => {
  const array = [];
  const current = [node];
  while (current.length > 0) {
    const { val, left, right } = current.shift();
    array.push(val);
    if (left !== null) current.push(left);
    else array.push(null);
    if (right !== null) current.push(right);
    else array.push(null);
  }
  return array;
};

[
  [1, 2, 3, 4, 5, 6, 7, null, 8, 9, 10],
  [-1, -6, -5, -3, 0, null, -13, , , -1, , , -2, 23],
].map((arr) => {
  const binaryTree = arrayToBinaryTree(arr);
  const toArr = binaryTreeToArray(binaryTree);
  console.log({ binaryTree, arr, toArr });
});
