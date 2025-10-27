const canSum = (target, numbers, memo = {}) => {
  if (target === 0) return true;
  if (target < 0) return false;
  if (!(target in memo)) {
    for (const num of numbers) {
      if (canSum(target - num, numbers, memo) === true) return true;
    }
    memo[target] = false;
  }
  return memo[target];
};

console.log(canSum(7, [4, 5, 2]));
console.log(canSum(7, [5, 3]));
console.log(canSum(300, [7, 14]));
