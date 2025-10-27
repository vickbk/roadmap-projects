import { BinaryNode } from "./test-modules.mjs";

export const arrayToBinaryTree = (arr) => {
  const { length } = arr;
  const table = Array(length)
    .fill(null)
    .map((_, index) =>
      ![null, undefined].includes(arr[index])
        ? new BinaryNode(arr[index])
        : null
    );
  let lastVisited = 0;
  for (let index = 0; index < length; index++) {
    const element = table[index];
    if (element !== null) {
      let toRight = false,
        i = 0;
      while (i < 2 && lastVisited < length) {
        const toAdd = table[++lastVisited];
        if (toAdd) element[toRight ? "setRight" : "addChild"](toAdd);
        toRight = true;
        i++;
      }
    }
  }
  const [tree] = table;
  return tree;
};
