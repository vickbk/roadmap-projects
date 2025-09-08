export const abcdef = {
  word: "abcdef",
  wordBank: ["ab", "abc", "cd", "def", "abcd"],
};
export const skateboard = {
  word: "skateboard",
  wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
};

export const enterapotentpot = {
  word: "enterapotentpot",
  wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
};

export const eeef = {
  word: "eeeeeeeeeeeeeeeeeeeeeeeeef",
  wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
};

export const purple = constructObject([
  "purple",
  ["purp", "p", "ur", "le", "purpl"],
]);

export const aaaz = constructObject([
  "aaaaaaaaaaaaaaaaaaaaaaaaz",
  ["a", "aa", "aaa", "aaaa", "aaaaa"],
]);

function constructObject([word, wordBank]) {
  return { word, wordBank };
}
