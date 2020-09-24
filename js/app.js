import defaultImport, { TITLE, Description } from "./constants";

document.getElementById("root").innerText = TITLE;

// var
// let/const

// var function scoped
// var name = "ES6";

// function log() {
//   var name = "ES5";
//   console.log(name);
// }

// if (true) {
//   var name = "ES 2016";
//   console.log(name);
// }

// log();
// console.log(name);

// let/const block scoped

// const title = "REACTJS";

// function print() {
//   let title = "ParcelJS";
//   console.log(title);
// }

// print();

// if (true) {
//   const title = "IF BLOCK";
//   console.log(title);
// }

// console.log(title);

// var hello = "Hello World";
// let hello = "Hello World";

// sayName();

function sayName() {
  console.log("sayName function");
}

const print = function () {
  console.log("Print Function");
};
// print();

const logger = () => {
  console.log("Logger function");
};
// logger();

const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map(function (num) {
//   return num ** 2;
// });

const newNumbers = numbers.map((num) => num ** 2);

// console.log(newNumbers);
const topics = ["Learn Javascript", "learn ReactJs", "learn Angular"];
// const [jsTitle, reactTitle, angularTitle] = topics;
// console.log(jsTitle, reactTitle, angularTitle);
// console.log(topics[0], topics[1], topics[2]);

// console.log(...topics);
const doubledNumbers = [...numbers, ...newNumbers];
// console.log(doubledNumbers);

function sum(...params) {
  return params.reduce((prev, current) => {
    return (prev += current);
  }, 0);
}

function plus(a = 0, b = 0, ...params) {
  return params.reduce((prev, current) => {
    return (prev += current);
  }, a + b);
}

// console.log(sum(...doubledNumbers));
// console.log(plus());

const Person = {
  name: "Person Name",
  age: 56,
  lastName: "Person Lastname",
};

const { age: personAge, name, lastName: personLastName = "Default" } = Person;
// console.log(personAge, name, personLastName);

const configs = {
  baseUrl: "",
  API_KEY: "adad",
  TIME_LIMIT: 30,
  PRIV_KEY: "advcjse cjwe c",
};

// function configure({ baseUrl, API_KEY, TIME_LIMIT, PRIV_KEY }) {
//   console.log(baseUrl, API_KEY, TIME_LIMIT);
// }
// configure(configs);

class User {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  incrementAge() {
    this.age += 1;
  }

  printInfo() {
    // console.log(
    //   "My Name is:",
    //   this.name,
    //   ", My Age:",
    //   this.age,
    //   "GENDER",
    //   this.gender
    // );
    const message = `My name is: '${this.name}', age: '${this.age}'`;

    // const oldOne = "My name is:" + "'" + this.name + "'" + " age:" + this.age;
    console.log(message);
  }
}

const user_1 = new User("Username", 34, "MALE");
const user_2 = new User("user 2", 67, "FEMALE");
// user_1.printInfo();
// user_2.printInfo();
// console.log(user_1.age, user_1.gender);
// console.log(user_2.gender);

// console.log(BlaBla);
