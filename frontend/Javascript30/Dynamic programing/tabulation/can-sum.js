import {
  t300o714,
  t7o23,
  t7o24,
  t7o452,
  t7o53,
  t8o235,
} from "../can-sum/sum-samples.mjs";

function canSumTab(target, options) {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target; i++) {
    if (table[i] !== true) continue;
    for (const option of options) {
      const resultIndex = i + option;
      if (resultIndex <= target) table[resultIndex] = true;
    }
  }
  return table[target];
}

[t7o452, t7o53, t300o714, t7o23, t7o24, t8o235].forEach(
  ([target, options, expected]) => {
    const result = canSumTab(target, options);
    console.log(result === expected, result, expected);
  }
);
