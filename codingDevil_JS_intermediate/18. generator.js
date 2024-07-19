function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish"
}

const a = fn();

console.log(a.next()); // 1, { value: 1, done: false }
// console.log(a.next()); // 2, { value: 2, done: false }
// console.log(a.next()); // 3, 4, { value: 3, done: false }
// console.log(a.next()); // { value: 'finish', done: true }
// console.log(a.next()); // { value: undefined, done: true }

console.log(a.return('END')); // { value: 'END', done: true }