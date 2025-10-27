import { halfNodeTree, nodeCount1, numberNode1 } from "./test-modules.mjs";
import { treeLevelsRecursive } from "./tree-levels.mjs";

const treeLevelAverage = (tree) => {
  const treeLevels = treeLevelsRecursive(tree);
  return treeLevels.map(getAverage);
};

const getAverage = (arr) => {
  return arr.reduce((num, total) => num + total, 0) / arr.length;
};

console.log(treeLevelAverage(nodeCount1));
console.log(treeLevelAverage(halfNodeTree));
console.log(treeLevelAverage(numberNode1));
