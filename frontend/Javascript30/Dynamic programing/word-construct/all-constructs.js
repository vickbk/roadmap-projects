import {
  aaaz,
  abcdef,
  eeef,
  enterapotentpot,
  purple,
  skateboard,
} from "./word-example-module.mjs";

const allConstructs = (target, wordBank, memo = {}) => {
  if (target === "") return [[]];
  if (!(target in memo)) {
    let possibilities = [];
    for (const word of wordBank) {
      if (target.indexOf(word) === 0) {
        const subPossibilities = allConstructs(
          target.slice(word.length),
          wordBank,
          memo
        );

        const subPoswithWord = subPossibilities.map((subPossibility) => [
          word,
          ...subPossibility,
        ]);
        possibilities.push(...subPoswithWord);
      }
    }
    memo[target] = possibilities;
  }
  return memo[target];
};

console.log(allConstructs(abcdef.word, abcdef.wordBank));
console.log(allConstructs(skateboard.word, skateboard.wordBank));
console.log(allConstructs(enterapotentpot.word, enterapotentpot.wordBank));
console.log(allConstructs(eeef.word, eeef.wordBank));
console.log(allConstructs(purple.word, purple.wordBank));
console.log(allConstructs(aaaz.word, aaaz.wordBank));
