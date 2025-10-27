import wordExampleModule from "../word-construct/word-example-module.mjs";

function canConstruct(target, options) {
  const wLength = target.length;
  const table = Array(wLength + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= wLength; i++) {
    if (!table[i]) continue;
    for (const option of options) {
      const remaingPart = target.slice(i);
      if (remaingPart.indexOf(option) === 0) {
        table[i + option.length] = true;
      }
    }

    // console.log(table, i);
  }
  //   console.log(table);
  return table[wLength];
}

wordExampleModule.forEach(({ word, wordBank }) => {
  console.log(canConstruct(word, wordBank), word, wordBank);
});
