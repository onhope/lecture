function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const a = fn();
const str = 'hello';
console.log(str[Symbol.iterator]); // [Function: [Symbol.iterator]]

const xx = str[Symbol.iterator]();
for (let s of xx) {
  console.log(s);
  // h
  // e
  // l
  // l
  // o
}