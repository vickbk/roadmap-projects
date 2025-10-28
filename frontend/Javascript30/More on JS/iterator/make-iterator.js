const makeIterator = (iterable) => {
  if (iterable == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  if (typeof iterable[Symbol.iterator] === "function") {
    let value;
    let index = 0;
    let done = false;
    return {
      next: () => {
        return done
          ? { value, done }
          : { value: iterable[index++], done: index > iterable.length };
      },
    };
  }
};

const iter = makeIterator([10, 20, 30]);

[iter, iter, iter, iter, iter].forEach((iteration) =>
  console.log(iteration.next())
);
