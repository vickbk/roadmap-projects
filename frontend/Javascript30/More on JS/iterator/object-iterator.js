Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};

var o = { x: 10, y: 20, z: 30 };

for (var v of o) {
  console.log(v);
}

const yieldF = function* () {
  const a = yield 10;
  const b = yield a + 5;
  yield b;
};

const seq = yieldF();
[15, 60, 32, 4].forEach((v) => console.log(seq.next(v)));
