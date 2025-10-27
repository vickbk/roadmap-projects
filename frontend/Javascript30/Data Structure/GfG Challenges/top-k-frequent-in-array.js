const topKFrequent = (arr, top) => {
  const table = Array(arr.length).fill(0);
  const occurences = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    occurences[element] = occurences[element] ? occurences[element] + 1 : 1;
    table[index] = occurences[element];
  }

  return getTopOccured(table, arr, top);
};

const getTopOccured = (table, arr, top) => {
  const topOccured = [];
  while (topOccured.length < top) {
    const max = Math.max(...table);
    const allOccurences = [];
    for (
      let index = table.indexOf(max);
      index !== -1;
      index = table.indexOf(max, index + 1)
    ) {
      if (!topOccured.includes(arr[index])) allOccurences.push(arr[index]);
      table[index] = -Infinity;
    }
    allOccurences.sort((a, b) => b - a);
    topOccured.push(...allOccurences);
  }
  topOccured.splice(top);
  return topOccured;
};

const optimizedTopKFrequent = (arr, top) => {
  const { length } = arr;
  const table = Array(length)
    .fill(null)
    .map((_) => [[]]);
  const occurences = {};
  for (let index = 0; index < length; index++) {
    const element = arr[index];
    occurences[element] = occurences[element] ? occurences[element] + 1 : 1;
    const occArray = [];
    for (let key in occurences) occArray.push([key, occurences[key]]);
    table[index] = occArray;
  }
  table[length - 1].sort(([val1, occ1], [val2, occ2]) =>
    occ2 === occ1 ? val2 - val1 : occ2 - occ1
  );
  const toKeep = [];
  for (let index = 0; index < top; index++) {
    toKeep.push(table[length - 1][index]);
  }
  return toKeep.map(([num]) => +num);
};

function optimizedTopKFrequentAI(nums, k) {
  const freq = {};

  // Count frequencies - O(n)
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Create array of unique numbers and sort by frequency - O(k log k)
  const result = Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a] || b - a)
    .slice(0, k)
    .map((num) => +num);

  return result;
}

[
  [[3, 1, 4, 4, 5, 2, 6, 1], 2],
  [[7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4],
].forEach(([arr, top]) => console.log(optimizedTopKFrequentAI(arr, top), arr));
