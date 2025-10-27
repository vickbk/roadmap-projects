const gridTraveller = (cols, rows, memo = {}) => {
  if (cols === 0 || rows === 0) return 0;
  if (cols === 1 && rows === 1) return 1;
  const key = `${cols}-${rows}`;
  if (!(key in memo)) {
    const res =
      gridTraveller(cols - 1, rows, memo) + gridTraveller(cols, rows - 1, memo);
    memo[key] = res;
    const revKey = `${rows}-${cols}`;
    if (key !== revKey) memo[revKey] = res;
  }
  return memo[`${cols}-${rows}`];
};

console.log(gridTraveller(50, 12));
