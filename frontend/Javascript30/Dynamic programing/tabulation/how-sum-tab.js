import {
  t300o714,
  t7o23,
  t7o24,
  t7o452,
  t7o53,
  t7o5347,
  t8o235,
} from "../can-sum/sum-samples.mjs";

const howSumTab = (target, options) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i] === null) continue;
    for (const option of options) {
      table[i + option] = [...table[i], option];
      //   const nextIndex = i + option;
      //   if (!table[nextIndex]) table[nextIndex] = [];
      //   table[nextIndex].push(option);
    }
  }
  return table[target];
};

[t7o23, t7o24, t7o452, t7o53, t7o5347, t300o714, t8o235].forEach(
  ([target, options]) => {
    console.log(howSumTab(target, options), target);
  }
);
