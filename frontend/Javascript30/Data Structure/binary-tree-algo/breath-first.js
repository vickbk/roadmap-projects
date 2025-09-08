import { aNode } from "./test-modules.mjs";

function breathFirstArray(root) {
  if (!root) return [];
  const arr = [root];
  const list = [];
  while (arr.length > 0) {
    const current = arr.shift();
    list.push(current);
    if (current.left) arr.push(current.left);
    if (current.right) arr.push(current.right);
  }
  return list;
}

console.log(breathFirstArray(aNode));
