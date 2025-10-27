import { customPrompt } from "./custom-prompt.mjs";

const module = {
  a: 32,
  getA() {
    return this.a;
  },
};

const newModule = {
  a: 50,
};

const unBoundGetA = module.getA;
const boundGetA = unBoundGetA.bind(newModule);
console.log(boundGetA());

function log(...args) {
  console.log(this, ...args);
}

const boundLog = log.bind("first log", 1, 2);
const sndBoundLog = boundLog.bind("second log", 3, 4, 5);

sndBoundLog(6, 7);

function f() {
  return this;
}

const u = {
  g: f.bind(null),
};

console.log(u.g());

function sayHi() {
  return this.name;
}
sayHi.test = "whatever";

const sayHiBound = sayHi.bind({ name: "John" });

console.log(sayHiBound.test);

/**
 *
 * Fix a function that loses "this"
 * importance: 5
 * The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.
 * But it leads to an error. Why?
 * Fix the highlighted line for everything to start working right (other lines are not to be changed).
 */
async function askPassword(ok, fail) {
  let password = await customPrompt("Password?");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

await askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
await askPassword(user.login.bind(user, true), user.login.bind(user, false));
