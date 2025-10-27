const fibTab = (target) => {
  const tab = new Array(target + 1).fill(0);
  if (1 in tab) tab[1] = 1;
  for (const index in tab) {
    const next = +index + 1;
    const lastIndex = next + 1;
    if (next <= target) tab[next] += tab[index];
    if (lastIndex <= target) tab[lastIndex] += tab[index];
  }
  return tab[target];
};
console.log(fibTab(7));
console.log(fibTab(50));
