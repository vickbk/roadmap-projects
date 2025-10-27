const bestSum = (target, numbers, memo = {}) => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (!(target in memo)) {
    let best = null;
    for (const num of numbers) {
      const res = bestSum(target - num, numbers, memo);
      if (res !== null) {
        res.push(num);
        if (best === null || best.length > res.length) best = res;
      }
    }
    memo[target] = best;
  }
  return memo[target];
};

console.log(bestSum(7, [1, 4, 5, 2, 7]));
console.log(bestSum(7, [5, 3]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
