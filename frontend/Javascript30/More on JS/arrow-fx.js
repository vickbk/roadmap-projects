function foo(n) {
  // arrow fx dont have their own arguments object => using parent arguments object
  const f = () => arguments[0] + n;
  return f();
}

console.log(foo(3));

const bar = () => 0;
console.log("prototype" in bar, foo.length, bar.length);
