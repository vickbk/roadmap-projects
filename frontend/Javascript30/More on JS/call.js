function Product(name, value) {
  this.name = name;
  this.value = value;
}

function Food(name, content) {
  Product.call(this, name, content);
  this.category = "food";
}

console.log(new Food("Cheese", "Burger"));

function greet() {
  console.log(this.animal, "sleeps between", this.sleepDuration);
}

const cat = {
  animal: "cat",
  sleepDuration: "12 and 16hours",
};

const dog = {
  animal: "dog",
  sleepDuration: "7 and 5hours",
};
[cat, dog].forEach((obj) => greet.call(obj));
