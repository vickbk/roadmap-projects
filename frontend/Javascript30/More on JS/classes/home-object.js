let animal = {
  eat: function () {
    // intentionally writing like this instead of eat() {...
    console.log("Animal is eating");
  },
};

let rabbit = {
  __proto__: animal,
  //   home object works only with methods not with method functuons
  //   eat: function () {
  //     super.eat();
  //   },
  //   correct definition of home object method
  eat() {
    super.eat();
  },
};

rabbit.eat();
