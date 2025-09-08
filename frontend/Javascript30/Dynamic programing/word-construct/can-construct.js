const canConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return true;
  if (!(target in memo))
    for (const word of wordBank) {
      if (target.indexOf(word) === 0) {
        const yesCan = canConstruct(
          target.replace(new RegExp(word), ""),
          wordBank,
          memo
        );
        if (yesCan === true) return true;
      }
    }
  memo[target] = false;
  return memo[target];
};
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
