// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
const sumToI = (n) => {
  let total = 0;
  for (let current = n; current > 0; current--) total += current;
  return total;
};
const sumToR = (n) => {
  if (n === 0) return 0;
  return n + sumToR(n - 1);
};

const sumToP = (n) => {
  return (n * (n + 1)) / 2;
};

// [1, 4, 100, 1000].forEach((num) =>
//   console.log("sumto ", sumToI(num), sumToR(num), sumToP(num), num)
// );

const factorialI = (n) => {
  let facto = 1;
  for (let i = 1; i <= n; i++) facto *= i;
  return facto;
};

const factorialR = (n) => (n === 1 ? n : n * factorialI(n - 1));

// [5, 4, 3].forEach((num) =>
//   console.log("factorial", factorialI(num), factorialR(num), num)
// );

const fibonacciT = (n) => {
  const tab = Array(n + 1);
  tab[0] = 1;
  tab[1] = 1;
  for (let index = 2; index <= n; index++) {
    tab[index] = tab[index - 1] + tab[index - 2];
  }
  return tab[n - 1];
};

const fibonacciR = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (!(n in memo)) memo[n] = fibonacciR(n - 1, memo) + fibonacciR(n - 2, memo);
  return memo[n];
};

// [3, 7, 77].forEach((num) =>
//   console.log("fibonacci", fibonacciT(num), fibonacciR(num), num)
// );

const printListI = (list) => {
  if (list === null) return;
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

const printListR = (list) => {
  if (list === null) return;
  console.log(list.value);
  printListR(list.next);
};

// [
//   {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// ].forEach((list) =>
//   console.log("Print list", list, printListI(list), printListR(list))
// );

const recursiceLimit = (a = 0) => {
  try {
    return recursiceLimit(a + 1);
  } catch {
    return a;
  }
};
console.log("recursiveLimit", recursiceLimit());
