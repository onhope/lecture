function* fn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const a = fn();
console.log(a.next()); // { value: 0, done: false }
console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 2, done: false }
console.log(a.next()); // { value: 3, done: false }
console.log(a.next()); // { value: 4, done: false }