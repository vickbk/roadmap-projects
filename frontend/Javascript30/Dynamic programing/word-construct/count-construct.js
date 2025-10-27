import {
  abcdef,
  eeef,
  enterapotentpot,
  purple,
  skateboard,
} from "./word-example-module.mjs";

const countConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return 1;
  if (!(target in memo)) {
    let count = 0;
    for (const word of wordBank) {
      if (target.indexOf(word) === 0) {
        const subCount = countConstruct(
          target.slice(word.length),
          wordBank,
          memo
        );
        count += subCount;
      }
    }
    memo[target] = count;
  }
  return memo[target];
};

console.log(countConstruct(abcdef.word, abcdef.wordBank));
console.log(countConstruct(skateboard.word, skateboard.wordBank));
console.log(countConstruct(enterapotentpot.word, enterapotentpot.wordBank));
console.log(countConstruct(eeef.word, eeef.wordBank));
console.log(countConstruct(purple.word, purple.wordBank));
