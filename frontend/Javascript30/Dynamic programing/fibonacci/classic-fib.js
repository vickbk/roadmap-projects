const classicFib = (n) => {
  if (n <= 2) return 1;
  return classicFib(n - 1) + classicFib(n - 2);
};

console.log(classicFib(5));
console.log(classicFib(7));
console.log(classicFib(8));
console.log(classicFib(50));
