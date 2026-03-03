import { default as inputs } from "../assets/inputs.json" with { type: "json" };

type Coins = [number[], number[], number];

function countCoins(
  [coins, counts, target]: Coins,
  memo: Map<string, number> = new Map(),
): number {
  const key = `${coins.join(",")}-${counts.join(",")}-${target}`;
  if (memo.has(key)) return memo.get(key)!;

  if (target === 0) {
    memo.set(key, 0);
    return 0;
  }
  if (target < 0 || counts.every((count) => count === 0)) {
    memo.set(key, -1);
    return -1;
  }

  const allCounts = coins
    .map((coin, i) => {
      if (counts[i] === 0) return -1;
      const newCount = counts.map((count, j) => (j === i ? count - 1 : count));
      const result = countCoins([coins, newCount, target - coin], memo);
      return result === -1 ? -1 : result + 1;
    })
    .filter((c) => c !== -1)
    .sort((a, b) => a - b);

  const [minCount = -1] = allCounts;
  memo.set(key, minCount);
  return minCount;
}

(inputs as Coins[]).forEach((input) => {
  console.log({ input, result: countCoins(input) });
});
