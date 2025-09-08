// structure t[target]o[...options]
const sumSamples = [
  // structure [target,[...options], canSum]
  [7, [4, 5, 2], true],
  [7, [5, 3], false],
  [300, [7, 14], false],
  [7, [2, 3], true],
  [7, [5, 3, 4, 7], true],
  [7, [2, 4], false],
  [8, [2, 3, 5], true],
  [8, [1, 4, 5], true],
  [100, [1, 2, 5, 25], true],
];

export const [
  t7o452,
  t7o53,
  t300o714,
  t7o23,
  t7o5347,
  t7o24,
  t8o235,
  t8o145,
  t100o12525,
] = sumSamples;

function generateExports() {
  const varNames = sumSamples.map(
    ([target, options]) => `t${target}o${options.join("")}`
  );
  return `const [${varNames.join(", ")}]`;
}

// console.log(generateExports());
export default sumSamples;
