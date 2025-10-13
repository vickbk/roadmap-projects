const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(...numbers));

console.log(Math.max.apply(null, numbers));
