const allSums = (target, numbers, memo = {}) => {
  if (target < 0) return null;
  if (target === 0) return [];
  if (!(target in memo)) {
    const all = [];
    for (const num of numbers) {
      const res = allSums(target - num, numbers, memo);
      if (res !== null) {
        if (res.length === 0) res.push([]);
        res.forEach((option) => {
          option.push(num);
          all.push(option);
        });

        console.log(all);
      }
    }
    memo[target] = all.length === 0 ? null : all;
  }
  return memo[target];
};

console.log(allSums(10, [4, 5, 2]));
