// Write the code, one line for each action:

//     Create an empty object user.
const user = {};
//     Add the property name with the value John.
user.name = "John";
//     Add the property surname with the value Smith.
user.surname = "Smith";
//     Change the value of the name to Pete.
user.name = "Peter";
//     Remove the property name from the object.
delete user.name;

console.log(user);

const isEmptyObject = (object) => {
  return Object.keys(object).length === 0;
};

[{}, user].forEach((obj) => console.log(isEmptyObject(obj)));

const totalSalaries = (users) => {
  let total = 0;
  for (const name in users) total += users[name];
  return total;
};

[
  {
    John: 100,
    Ann: 160,
    Pete: 130,
  },
  {},
].forEach((obj) => {
  console.log(totalSalaries(obj), obj);
});
