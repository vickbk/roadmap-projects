const optimizedFib = (n, memory = new Map()) => {
  if (n <= 2) return 1;
  if (!memory.has(n))
    memory.set(n, optimizedFib(n - 1, memory) + optimizedFib(n - 2, memory));
  return memory.get(n);
};

console.log(optimizedFib(5));
console.log(optimizedFib(7));
console.log(optimizedFib(1000));
