import { default as input } from "../assets/inputs.json" with { type: "json" };

type Coins = [number[], number[], number];

function countCoins(
  [coins, count, target]: Coins,
  memo: Map<string, number> = new Map(),
): number {
  const key = `${coins.join(",")}-${count.join(",")}-${target}`;
  if (memo.has(key)) return memo.get(key)!;

  if (target === 0) {
    memo.set(key, 0);
    return 0;
  }
  if (target < 0 || count.every((c) => c === 0)) {
    memo.set(key, -1);
    return -1;
  }

  const allCounts = coins
    .map((coin, i) => {
      if (count[i] === 0) return -1;
      const newCount = count.map((c, j) => (j === i ? c - 1 : c));
      const result = countCoins([coins, newCount, target - coin], memo);
      return result === -1 ? -1 : result + 1;
    })
    .filter((c) => c !== -1);

  const minCount = allCounts.length > 0 ? Math.min(...allCounts) : -1;
  memo.set(key, minCount);
  return minCount;
}

(input as Coins[]).forEach((input) => {
  console.log({ input, result: countCoins(input) });
});
