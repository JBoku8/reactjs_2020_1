function* generator() {
  //   console.log("first step");
  const message = yield 1;
  console.log(message);
  yield 2;

  yield 3;
  //   console.log("third step");
  yield 4;
}

const numebrs = generator();

console.log(numebrs.next());
console.log(numebrs.next("Hello my friend!"));
console.log(numebrs.next());
console.log(numebrs.next());
console.log(numebrs.next());
