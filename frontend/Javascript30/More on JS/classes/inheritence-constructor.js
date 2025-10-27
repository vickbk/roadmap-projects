class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // call the parent constructor

    this.earLength = earLength;
  }

  // ...
}
let rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit.name, rabbit.earLength); // White Rabbit 10
