import wordExamples from "../word-construct/word-example-module.mjs";

function allConstruncts(target, options) {
  const tLenght = target.length;
  const table = Array(tLenght + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i < tLenght; i++) {
    if (table[i].length === 0) continue;
    for (const option of options) {
      const optL = option.length;
      if (target.substr(i, optL) === option) {
        // table[i].forEach((alt) => table[i + optL].push([...alt, option]));
        const newCombination = table[i].map((opt) => [...opt, option]);
        table[i + optL].push(...newCombination);
      }
    }
  }
  //   console.log(table);
  return table[tLenght];
}

[wordExamples[3]].forEach(({ word, wordBank }) => {
  console.log(allConstruncts(word, wordBank));
});
