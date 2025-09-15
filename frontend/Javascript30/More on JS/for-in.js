const castle = { a: 2, v: 33, d: 21 };

function roundCastle() {
  this.radius = 7;
}
roundCastle.prototype = castle;

const obj = new roundCastle();

for (const key in obj) {
  if (Object.hasOwn(obj, key)) console.log(key, obj[key]);
}

const castleObj = { __proto__: castle, a: 5 };
for (const key in castleObj) {
  //   console.log(key, castleObj[key]);
}

Object.defineProperty(castleObj, "a", { enumerable: false });

for (const key in castleObj) {
  console.log(key, castleObj[key]);
}
