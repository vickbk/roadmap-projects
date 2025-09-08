const howSum = (target, numbers, memo = {}) => {
  if (target < 0) return null;
  if (target === 0) return [];

  if (!(target in memo))
    for (const num of numbers) {
      const res = howSum(target - num, numbers, memo);
      if (res !== null) {
        res.push(num);
        return res;
      }
    }
  memo[target] = null;
  return memo[target];
};

console.log(howSum(7, [4, 5, 2]));
console.log(howSum(7, [5, 3]));
console.log(howSum(300, [7, 14]));
