import wordExamples from "../word-construct/word-example-module.mjs";

function countConstruct(target, options) {
  const length = target.length + 1;
  const table = Array(length).fill(0);

  table[0] = 1;

  for (let i = 0; i <= length; i++) {
    if (table[i] === 0) continue;
    for (const option of options) {
      const optL = option.length;
      if (target.substr(i, optL) === option) {
        table[i + optL] += table[i];
      }
    }
  }
  return table[length - 1];
}

wordExamples.forEach(({ word, wordBank }) =>
  console.log(countConstruct(word, wordBank), word, wordBank)
);
