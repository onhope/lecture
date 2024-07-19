function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish"  
  } catch (e) {
    console.log(e);
  }
}

const a = fn();

console.log(a.next()); // 1, { value: 1, done: false }
console.log(a.throw(new Error('err'))); // Error: err at Object.