import {
  t300o714,
  t7o23,
  t7o24,
  t7o452,
  t7o53,
  t7o5347,
  t8o235,
} from "../can-sum/sum-samples.mjs";

function bestSumTab(target, options, last = false) {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i] === null) continue;
    for (const option of options) {
      const dest = option + i;
      const alternative = [...table[i], option];
      if (
        !table[dest] ||
        (!last && table[dest].length > alternative.length) ||
        table[dest].length >= alternative.length
      )
        table[dest] = alternative;
    }
  }
  return table[target];
}

[t7o23, t7o24, t7o452, t7o53, t7o5347, t300o714, t8o235, t300o714].forEach(
  ([target, options]) => {
    console.log(bestSumTab(target, options, true));
  }
);
