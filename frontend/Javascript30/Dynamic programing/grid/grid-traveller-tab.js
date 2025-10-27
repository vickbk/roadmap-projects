const gridTravellerTab = (m, n) => {
  const grid = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  grid[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    const nextI = i + 1;
    for (let j = 0; j <= n; j++) {
      const nextJ = j + 1;
      if (nextI <= m) {
        grid[nextI][j] += grid[i][j];
      }
      if (nextJ <= n) grid[i][nextJ] += grid[i][j];
    }
  }
  return grid[m][n];
};

console.log(gridTravellerTab(4, 2));
console.log(gridTravellerTab(19, 18));
