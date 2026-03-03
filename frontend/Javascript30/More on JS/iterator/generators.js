// defines the sequence 1, 2, 3, 4, 5
function* wholeNums() {
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}

// defines the sequence 1, 4, 9, 16, 25, 36, 49
function* squareNums() {
  for (var i = 1, s = 1; s <= 50; i++, s = i ** 2) {
    yield s;
  }
}

// defines the sequence 1, 8, 27, 64
function* cubeNums() {
  for (var i = 1, c = 1; c <= 100; i++, c = i ** 3) {
    yield c;
  }
}

// generators delegation
function* gen() {
  yield* wholeNums();
  yield* squareNums();
  yield* cubeNums();
}

console.log(...gen());
