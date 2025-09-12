// Create an array styles with items “Jazz” and “Blues”.
const styles = ["Jazz", "Blues"];

// Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");

// Replace the value in the middle with “Classics”.

// Your code for finding the middle value should work for any arrays with odd length.
const getMiddleIndex = (arr) => (arr.length / 2).toFixed() - 1;

styles[getMiddleIndex(styles)] = "Classics";

// Strip off the first value of the array and show it.
console.log(styles.shift());

// repend Rap and Reggae to the array.
styles.unshift("Rap", "Reggae");

console.log(styles);

// What is the result? Why?

const arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2]();

const bigestSum = (arr) => {
  const table = Array(arr.length + 1).fill(0);

  for (let x = 0; x < arr.length; x++) {
    table[x + 1] = Math.max(table[x] + arr[x], 0);
  }
  return Math.max(...table);
};

const bigestSumRecursive = (arr, cumul = 0) => {
  if (arr.length === 0) return cumul;
  const first = arr.shift();
  // const add = first + otherRes;
  return Math.max(
    first,
    bigestSumRecursive(arr, Math.max(cumul + first, 0)),
    cumul
  );
};

[
  [-1, 2, 3, -9],
  [2, -1, 2, 3, -9],
  [-1, 2, 3, -9, 11],
  [-2, -1, 1, 2],
  [100, -9, 2, -3, 5],
  [1, 2, 3],
  [-1, -2, -3],
].forEach((sumTrial) => console.log(bigestSum([...sumTrial]), sumTrial));
