const getMinimumPerfectSquareSum = (num, memo = { 0: 0 }) => {
  // verify if value has been checked already and return previous results
  if (num in memo) return memo[num];
  // get the higest square root of the given number
  const squareRoot = Math.floor(Math.sqrt(num));
  const possibleMins = [];
  // go through all the numbers below the squareroot to register all sums
  for (let lower = squareRoot; lower > 0; lower--) {
    const reminder = num - Math.pow(lower, 2);
    const min = getMinimumPerfectSquareSum(reminder, memo);
    possibleMins.push(min);
    if (min === 0) break;
  }
  // memorize the lowest sum adding 1 and return the results
  memo[num] = 1 + Math.min(...possibleMins);
  return memo[num];
};

console.log(
  ...[43, 54, 23, 10000, 0, 1].map((num) => getMinimumPerfectSquareSum(num))
);
